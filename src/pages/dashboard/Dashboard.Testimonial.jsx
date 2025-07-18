import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Star, Image as ImageIcon, X, Check } from 'lucide-react';
import { toast } from 'react-toastify';
import { db } from '../../lib/supabase';

const DashboardTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const [formData, setFormData] = useState({
    text: '',
    name: '',
    role: '',
    rating: 4.9,
    isFeatured: false,
    image: ''
  });

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await db.getTestimonials();
        if (error) throw new Error(error.message);
        
        setTestimonials(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        toast.error('Failed to fetch testimonials');
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

//   const handleImageChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setImageFile(file);
//     setImagePreview(URL.createObjectURL(file));

//     try {
//       const token = localStorage.getItem('token');
//       const formData = new FormData();
//       formData.append('image', file);

//       const response = await axios.post('/api/testimonials/upload', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,,
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       setFormData({ ...formData, image: response.data.imageUrl });
//       toast.success('Image uploaded successfully');
//     } catch (err) {
//       console.error('Error uploading image:', err);
//       toast.error('Failed to upload image');
//     }
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const { error } = await db.updateTestimonial(currentTestimonial.id, formData);
        if (error) throw new Error(error.message);
        toast.success('Testimonial updated successfully');
      } else {
        const { error } = await db.createTestimonial(formData);
        if (error) throw new Error(error.message);
        toast.success('Testimonial added successfully');
      }

      // Refresh testimonials list
      const { data, error } = await db.getTestimonials();
      if (!error) {
        setTestimonials(data);
      }

      resetForm();
    } catch (err) {
      console.error('Error saving testimonial:', err);
      toast.error('Failed to save testimonial');
    }
  };

  const handleEdit = (testimonial) => {
    setCurrentTestimonial(testimonial);
    setFormData({
      text: testimonial.text,
      name: testimonial.name,
      role: testimonial.role,
      rating: testimonial.rating,
      isFeatured: testimonial.isFeatured,
      image: testimonial.image || ''
    });
    if (testimonial.image) setImagePreview(testimonial.image);
    setIsEditing(true);
    setIsAdding(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        const { error } = await db.deleteTestimonial(id);
        if (error) throw new Error(error.message);
        
        setTestimonials(testimonials.filter(t => t.id !== id));
        toast.success('Testimonial deleted successfully');
      } catch (err) {
        console.error('Error deleting testimonial:', err);
        toast.error('Failed to delete testimonial');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      text: '',
      name: '',
      role: '',
      rating: 4.9,
      isFeatured: false,
      image: ''
    });
    setImageFile(null);
    setImagePreview('');
    setCurrentTestimonial(null);
    setIsAdding(false);
    setIsEditing(false);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Testimonials Management</h1>
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Testimonial
          </button>
        </div>

        {/* Add/Edit Testimonial Form */}
        {isAdding && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {isEditing ? 'Edit Testimonial' : 'Add New Testimonial'}
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Testimonial Text
                </label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  rows="4"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating (1-5)
                  </label>
                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isFeatured"
                    checked={formData.isFeatured}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    id="featured-checkbox"
                  />
                  <label htmlFor="featured-checkbox" className="ml-2 block text-sm text-gray-700">
                    Featured Testimonial
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image (Optional)
                </label>
                <div className="flex items-center space-x-4">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Testimonial preview"
                      className="h-16 w-16 object-cover rounded"
                    />
                  ) : (
                    <div className="h-16 w-16 bg-gray-200 rounded flex items-center justify-center">
                      <ImageIcon className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                  {/* <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-sm">
                    Upload Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label> */}
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {isEditing ? 'Update Testimonial' : 'Add Testimonial'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Testimonials List */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial._id} 
                key={testimonial.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden ${testimonial.isFeatured ? 'ring-2 ring-blue-500' : ''}`}
              >
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      {renderStars(testimonial.rating)}
                      <span className="ml-2 text-sm text-gray-500">
                        {testimonial.rating.toFixed(1)}
                      </span>
                    </div>
                    {testimonial.isFeatured && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="text-blue-600 hover:text-blue-800 p-1"
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      className="text-red-600 hover:text-red-800 p-1"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardTestimonials;