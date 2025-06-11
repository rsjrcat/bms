import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Image, X, Loader2 } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DashboardCourses = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentCourse, setCurrentCourse] = useState(null);
    const [imageUploadProgress, setImageUploadProgress] = useState(0);
    const [bannerUploadProgress, setBannerUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imagePreview, setImagePreview] = useState('');
    const [bannerPreview, setBannerPreview] = useState('');

    // Form state
    const [formData, setFormData] = useState({
        category: '',
        courseCode: '',
        courseName: '',
        subtitle: '',
        image: '',
        banner: '',
        details: '',
        description: '',
        preview: '',
        skills: [],
        eligibility: [],
        duration: '',
        students: 0,
        fees: {
            original: 0,
            discounted: 0,
            currency: 'Rs.'
        },
        rating: 0,
        reviews: 0,
        instructor: '',
        syllabus: [],
        benefits: [],
        features: []
    });

    const [newSkill, setNewSkill] = useState('');
    const [newEligibility, setNewEligibility] = useState('');
    const [newBenefit, setNewBenefit] = useState('');
    const [newFeature, setNewFeature] = useState('');
    const [newSyllabusModule, setNewSyllabusModule] = useState({
        module: '',
        topics: [],
        duration: ''
    });
    const [newTopic, setNewTopic] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token');
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/courses`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setCourses(response.data);
            } catch (err) {
                console.error('Error fetching courses:', err);
                toast.error('Failed to fetch courses. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('fees.')) {
            const feeField = name.split('.')[1];
            setFormData({
                ...formData,
                fees: {
                    ...formData.fees,
                    [feeField]: value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleImageChange = async (e, isBanner = false) => {
        const file = e.target.files[0];
        if (!file) return;

        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            toast.error('Image size should be less than 5MB');
            return;
        }

        // Check file type
        if (!file.type.match('image.*')) {
            toast.error('Please select an image file (JPEG, PNG)');
            return;
        }

        const localUrl = URL.createObjectURL(file);
        if (isBanner) {
            setBannerPreview(localUrl);
            setBannerUploadProgress(0);
        } else {
            setImagePreview(localUrl);
            setImageUploadProgress(0);
        }

        try {
            setIsUploading(true);
            const token = localStorage.getItem('token');
            const uploadFormData = new FormData();
            uploadFormData.append('image', file);

            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/courses/upload`, uploadFormData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    if (isBanner) {
                        setBannerUploadProgress(progress);
                    } else {
                        setImageUploadProgress(progress);
                    }
                }
            });

            const imageUrl = response.data.url || response.data.imageUrl;
            setFormData(prev => ({
                ...prev,
                [isBanner ? 'banner' : 'image']: imageUrl
            }));

            if (isBanner) {
                setBannerPreview(imageUrl);
            } else {
                setImagePreview(imageUrl);
            }
            
            toast.success('Image uploaded successfully!');
        } catch (err) {
            console.error('Upload error:', err);
            toast.error('Failed to upload image. Please try again.');
            if (isBanner) {
                setBannerPreview('');
            } else {
                setImagePreview('');
            }
        } finally {
            setIsUploading(false);
            if (isBanner) {
                setBannerUploadProgress(0);
            } else {
                setImageUploadProgress(0);
            }
        }
    };

    const handleAddItem = (type) => {
        if (type === 'skill' && newSkill) {
            setFormData({
                ...formData,
                skills: [...formData.skills, newSkill]
            });
            setNewSkill('');
        } else if (type === 'eligibility' && newEligibility) {
            setFormData({
                ...formData,
                eligibility: [...formData.eligibility, newEligibility]
            });
            setNewEligibility('');
        } else if (type === 'benefit' && newBenefit) {
            setFormData({
                ...formData,
                benefits: [...formData.benefits, newBenefit]
            });
            setNewBenefit('');
        } else if (type === 'feature' && newFeature) {
            setFormData({
                ...formData,
                features: [...formData.features, newFeature]
            });
            setNewFeature('');
        } else if (type === 'topic' && newTopic) {
            setNewSyllabusModule({
                ...newSyllabusModule,
                topics: [...newSyllabusModule.topics, newTopic]
            });
            setNewTopic('');
        }
    };

    const handleAddModule = () => {
        if (newSyllabusModule.module && newSyllabusModule.topics.length > 0) {
            setFormData({
                ...formData,
                syllabus: [...formData.syllabus, newSyllabusModule]
            });
            setNewSyllabusModule({
                module: '',
                topics: [],
                duration: ''
            });
        }
    };

    const handleRemoveItem = (type, index) => {
        if (type === 'skill') {
            const updatedSkills = [...formData.skills];
            updatedSkills.splice(index, 1);
            setFormData({ ...formData, skills: updatedSkills });
        } else if (type === 'eligibility') {
            const updatedEligibility = [...formData.eligibility];
            updatedEligibility.splice(index, 1);
            setFormData({ ...formData, eligibility: updatedEligibility });
        } else if (type === 'benefit') {
            const updatedBenefits = [...formData.benefits];
            updatedBenefits.splice(index, 1);
            setFormData({ ...formData, benefits: updatedBenefits });
        } else if (type === 'feature') {
            const updatedFeatures = [...formData.features];
            updatedFeatures.splice(index, 1);
            setFormData({ ...formData, features: updatedFeatures });
        } else if (type === 'topic') {
            const updatedTopics = [...newSyllabusModule.topics];
            updatedTopics.splice(index, 1);
            setNewSyllabusModule({ ...newSyllabusModule, topics: updatedTopics });
        } else if (type === 'module') {
            const updatedModules = [...formData.syllabus];
            updatedModules.splice(index, 1);
            setFormData({ ...formData, syllabus: updatedModules });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const token = localStorage.getItem('token');
            let response;

            if (isEditing) {
                const { _originalCourseCode, ...dataToSend } = formData;
                response = await axios.put(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/courses/${_originalCourseCode}`, dataToSend, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                toast.success('Course updated successfully!');
            } else {
                response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/courses`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                toast.success('Course added successfully!');
            }

            // Refresh list
            const coursesResponse = await axios.get(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/courses`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCourses(coursesResponse.data);
            resetForm();
        } catch (err) {
            console.error('Error saving course:', err);
            const errorMessage = err.response?.data?.message || 'Failed to save course. Please try again.';
            toast.error(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (course) => {
        const categoryObj = courses.find(cat =>
            cat.courses.some(c => c.courseCode === course.courseCode)
        );

        const fullCourse = categoryObj.courses.find(c => c.courseCode === course.courseCode);

        setCurrentCourse(fullCourse);
        setFormData({
            category: categoryObj.category,
            ...fullCourse,
            _originalCourseCode: fullCourse.courseCode,
        });
        setIsEditing(true);
        setIsAdding(true);
        if (fullCourse.image) setImagePreview(fullCourse.image);
        if (fullCourse.banner) setBannerPreview(fullCourse.banner);
    };

    const handleDelete = async (courseCode) => {
        if (window.confirm('Are you sure you want to delete this course?')) {
            try {
                const token = localStorage.getItem('token');
                await axios.delete(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/courses/${courseCode}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                // Refresh courses list
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/courses`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setCourses(response.data);

                toast.success('Course deleted successfully');
            } catch (err) {
                console.error('Error deleting course:', err);
                toast.error('Failed to delete course');
            }
        }
    };

    const resetForm = () => {
        setFormData({
            category: '',
            courseCode: '',
            courseName: '',
            subtitle: '',
            image: '',
            banner: '',
            details: '',
            description: '',
            preview: '',
            skills: [],
            eligibility: [],
            duration: '',
            students: 0,
            fees: {
                original: 0,
                discounted: 0,
                currency: 'Rs.'
            },
            rating: 0,
            reviews: 0,
            instructor: '',
            syllabus: [],
            benefits: [],
            features: []
        });
        setImagePreview('');
        setBannerPreview('');
        setCurrentCourse(null);
        setIsAdding(false);
        setIsEditing(false);
    };

    const groupedCourses = Array.isArray(courses)
        ? courses.reduce((acc, category) => {
            return {
                ...acc,
                [category.category]: category.courses
            };
        }, {})
        : {};

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Course Management</h1>
                    <button
                        onClick={() => setIsAdding(true)}
                        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                        disabled={isUploading || isSubmitting}
                    >
                        <Plus className="mr-2 h-4 w-4" /> Add Course
                    </button>
                </div>

                {/* Add/Edit Course Form */}
                {isAdding && (
                    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {isEditing ? 'Edit Course' : 'Add New Course'}
                            </h2>
                            <button
                                onClick={resetForm}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                                disabled={isUploading || isSubmitting}
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                        disabled={isUploading || isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Course Code
                                    </label>
                                    <input
                                        type="text"
                                        name="courseCode"
                                        value={formData.courseCode}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Course Name
                                    </label>
                                    <input
                                        type="text"
                                        name="courseName"
                                        value={formData.courseName}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                        disabled={isUploading || isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Subtitle
                                    </label>
                                    <input
                                        type="text"
                                        name="subtitle"
                                        value={formData.subtitle}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        disabled={isUploading || isSubmitting}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Course Image
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        {imagePreview ? (
                                            <div className="relative h-16 w-16">
                                                <img
                                                    src={imagePreview}
                                                    alt="Course preview"
                                                    className="h-full w-full object-cover rounded"
                                                />
                                                {isUploading && imageUploadProgress > 0 && (
                                                    <div className="absolute inset-0 bg-black bg-opacity-30 rounded flex items-center justify-center">
                                                        <div className="relative w-8 h-8">
                                                            <div className="absolute inset-0 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
                                                            <span className="absolute inset-0 flex items-center justify-center text-xs text-white">
                                                                {imageUploadProgress}%
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="h-16 w-16 bg-gray-200 rounded flex items-center justify-center">
                                                <Image className="h-8 w-8 text-gray-400" />
                                            </div>
                                        )}
                                        <label className={`cursor-pointer bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-sm transition-colors ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                            {isUploading ? 'Uploading...' : 'Upload Image'}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleImageChange(e)}
                                                className="hidden"
                                                disabled={isUploading}
                                            />
                                        </label>
                                    </div>
                                    {formData.image && !isUploading && (
                                        <p className="mt-1 text-xs text-green-600">Image uploaded successfully</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Banner Image
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        {bannerPreview ? (
                                            <div className="relative h-16 w-16">
                                                <img
                                                    src={bannerPreview}
                                                    alt="Banner preview"
                                                    className="h-full w-full object-cover rounded"
                                                />
                                                {isUploading && bannerUploadProgress > 0 && (
                                                    <div className="absolute inset-0 bg-black bg-opacity-30 rounded flex items-center justify-center">
                                                        <div className="relative w-8 h-8">
                                                            <div className="absolute inset-0 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
                                                            <span className="absolute inset-0 flex items-center justify-center text-xs text-white">
                                                                {bannerUploadProgress}%
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="h-16 w-16 bg-gray-200 rounded flex items-center justify-center">
                                                <Image className="h-8 w-8 text-gray-400" />
                                            </div>
                                        )}
                                        <label className={`cursor-pointer bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-sm transition-colors ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                            {isUploading ? 'Uploading...' : 'Upload Banner'}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleImageChange(e, true)}
                                                className="hidden"
                                                disabled={isUploading}
                                            />
                                        </label>
                                    </div>
                                    {formData.banner && !isUploading && (
                                        <p className="mt-1 text-xs text-green-600">Banner uploaded successfully</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Short Details
                                </label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    rows="2"
                                    disabled={isUploading || isSubmitting}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    rows="4"
                                    disabled={isUploading || isSubmitting}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Preview URL (YouTube)
                                </label>
                                <input
                                    type="text"
                                    name="preview"
                                    value={formData.preview}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    disabled={isUploading || isSubmitting}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Duration
                                    </label>
                                    <input
                                        type="text"
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        disabled={isUploading || isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Instructor
                                    </label>
                                    <input
                                        type="text"
                                        name="instructor"
                                        value={formData.instructor}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        disabled={isUploading || isSubmitting}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Original Fee (Rs.)
                                    </label>
                                    <input
                                        type="number"
                                        name="fees.original"
                                        value={formData.fees.original}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        disabled={isUploading || isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Discounted Fee (Rs.)
                                    </label>
                                    <input
                                        type="number"
                                        name="fees.discounted"
                                        value={formData.fees.discounted}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        disabled={isUploading || isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Students Enrolled
                                    </label>
                                    <input
                                        type="number"
                                        name="students"
                                        value={formData.students}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        disabled={isUploading || isSubmitting}
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Skills
                                    </label>
                                    <div className="flex space-x-2">
                                        <input
                                            type="text"
                                            value={newSkill}
                                            onChange={(e) => setNewSkill(e.target.value)}
                                            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Add a skill"
                                            disabled={isUploading || isSubmitting}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleAddItem('skill')}
                                            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors"
                                            disabled={isUploading || isSubmitting || !newSkill}
                                        >
                                            Add
                                        </button>
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {formData.skills.map((skill, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center"
                                            >
                                                {skill}
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveItem('skill', index)}
                                                    className="ml-1 text-red-500 hover:text-red-700 transition-colors"
                                                    disabled={isUploading || isSubmitting}
                                                >
                                                    <X className="h-3 w-3" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Eligibility
                                    </label>
                                    <div className="flex space-x-2">
                                        <input
                                            type="text"
                                            value={newEligibility}
                                            onChange={(e) => setNewEligibility(e.target.value)}
                                            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Add eligibility criteria"
                                            disabled={isUploading || isSubmitting}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleAddItem('eligibility')}
                                            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors"
                                            disabled={isUploading || isSubmitting || !newEligibility}
                                        >
                                            Add
                                        </button>
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {formData.eligibility.map((item, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center"
                                            >
                                                {item}
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveItem('eligibility', index)}
                                                    className="ml-1 text-red-500 hover:text-red-700 transition-colors"
                                                    disabled={isUploading || isSubmitting}
                                                >
                                                    <X className="h-3 w-3" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Benefits
                                    </label>
                                    <div className="flex space-x-2">
                                        <input
                                            type="text"
                                            value={newBenefit}
                                            onChange={(e) => setNewBenefit(e.target.value)}
                                            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Add a benefit"
                                            disabled={isUploading || isSubmitting}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleAddItem('benefit')}
                                            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors"
                                            disabled={isUploading || isSubmitting || !newBenefit}
                                        >
                                            Add
                                        </button>
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {formData.benefits.map((benefit, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center"
                                            >
                                                {benefit}
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveItem('benefit', index)}
                                                    className="ml-1 text-red-500 hover:text-red-700 transition-colors"
                                                    disabled={isUploading || isSubmitting}
                                                >
                                                    <X className="h-3 w-3" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Features
                                    </label>
                                    <div className="flex space-x-2">
                                        <input
                                            type="text"
                                            value={newFeature}
                                            onChange={(e) => setNewFeature(e.target.value)}
                                            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Add a feature"
                                            disabled={isUploading || isSubmitting}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleAddItem('feature')}
                                            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors"
                                            disabled={isUploading || isSubmitting || !newFeature}
                                        >
                                            Add
                                        </button>
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {formData.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center"
                                            >
                                                {feature}
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveItem('feature', index)}
                                                    className="ml-1 text-red-500 hover:text-red-700 transition-colors"
                                                    disabled={isUploading || isSubmitting}
                                                >
                                                    <X className="h-3 w-3" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Syllabus
                                    </label>
                                    <div className="space-y-2">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                            <div>
                                                <label className="block text-xs text-gray-500 mb-1">
                                                    Module Title
                                                </label>
                                                <input
                                                    type="text"
                                                    value={newSyllabusModule.module}
                                                    onChange={(e) =>
                                                        setNewSyllabusModule({
                                                            ...newSyllabusModule,
                                                            module: e.target.value
                                                        })
                                                    }
                                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="Module title"
                                                    disabled={isUploading || isSubmitting}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs text-gray-500 mb-1">
                                                    Duration
                                                </label>
                                                <input
                                                    type="text"
                                                    value={newSyllabusModule.duration}
                                                    onChange={(e) =>
                                                        setNewSyllabusModule({
                                                            ...newSyllabusModule,
                                                            duration: e.target.value
                                                        })
                                                    }
                                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="2 weeks"
                                                    disabled={isUploading || isSubmitting}
                                                />
                                            </div>
                                            <div className="flex items-end">
                                                <button
                                                    type="button"
                                                    onClick={handleAddModule}
                                                    className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 w-full transition-colors"
                                                    disabled={isUploading || isSubmitting || !newSyllabusModule.module || newSyllabusModule.topics.length === 0}
                                                >
                                                    Add Module
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex space-x-2">
                                            <input
                                                type="text"
                                                value={newTopic}
                                                onChange={(e) => setNewTopic(e.target.value)}
                                                className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Add topic to module"
                                                disabled={isUploading || isSubmitting}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleAddItem('topic')}
                                                className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors"
                                                disabled={isUploading || isSubmitting || !newTopic}
                                            >
                                                Add
                                            </button>
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {newSyllabusModule.topics.map((topic, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center"
                                                >
                                                    {topic}
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveItem('topic', index)}
                                                        className="ml-1 text-red-500 hover:text-red-700 transition-colors"
                                                        disabled={isUploading || isSubmitting}
                                                    >
                                                        <X className="h-3 w-3" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-3">
                                        {formData.syllabus.map((module, moduleIndex) => (
                                            <div
                                                key={moduleIndex}
                                                className="border rounded p-3 bg-gray-50"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <h4 className="font-medium">
                                                        {module.module} ({module.duration})
                                                    </h4>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveItem('module', moduleIndex)}
                                                        className="text-red-500 hover:text-red-700 transition-colors"
                                                        disabled={isUploading || isSubmitting}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                                <ul className="mt-2 pl-5 list-disc">
                                                    {module.topics.map((topic, topicIndex) => (
                                                        <li key={topicIndex} className="text-sm">
                                                            {topic}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-3 pt-4">
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-4 py-2 border rounded hover:bg-gray-100 transition-colors"
                                    disabled={isSubmitting || isUploading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center justify-center min-w-24"
                                    disabled={isSubmitting || isUploading}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                            {isEditing ? 'Updating...' : 'Adding...'}
                                        </>
                                    ) : isEditing ? 'Update Course' : 'Add Course'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Courses List */}
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="flex flex-col items-center">
                            <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
                            <p className="text-gray-600">Loading courses...</p>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {Object.entries(groupedCourses).map(([category, categoryCourses]) => (
                            <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-gray-800 text-white px-4 py-3">
                                    <h2 className="text-lg font-semibold">{category}</h2>
                                </div>
                                {categoryCourses.length === 0 ? (
                                    <div className="p-4 text-center text-gray-500">
                                        No courses found in this category
                                    </div>
                                ) : (
                                    <div className="divide-y">
                                        {categoryCourses.map((course) => (
                                            <div key={course.courseCode} className="p-4 hover:bg-gray-50">
                                            <div className="flex items-start space-x-4">
                                                {course.image && (
                                                    <img
                                                        src={course.image}
                                                        alt={course.courseName}
                                                        className="h-16 w-16 object-cover rounded"
                                                    />
                                                )}
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className="font-medium">{course.courseName}</h3>
                                                            <p className="text-sm text-gray-600">{course.subtitle}</p>
                                                        </div>
                                                        <div className="flex space-x-2">
                                                            <button
                                                                onClick={() => handleEdit(course)}
                                                                className="text-blue-600 hover:text-blue-800 p-1"
                                                                title="Edit"
                                                            >
                                                                <Edit className="h-4 w-4" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(course.courseCode)}
                                                                className="text-red-600 hover:text-red-800 p-1"
                                                                title="Delete"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 flex flex-wrap gap-2">
                                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                            {course.courseCode}
                                                        </span>
                                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                                            {course.duration}
                                                        </span>
                                                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                                                            {course.students} students
                                                        </span>
                                                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                                                            Rs. {course.fees.discounted} (Rs. {course.fees.original})
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardCourses;