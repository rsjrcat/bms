import { Menu, X, User, LogOut, ChevronDown, ChevronRight, BookOpen, Users, Clock, Code, Calculator, Palette, Globe, Monitor, TrendingUp } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

const coursesData = [
    {
        category: "IT & Digital Literacy",
        icon: <Monitor className="w-4 h-4" />,
        courses: [
            {
                courseCode: "RS-CIT",
                courseName: "Rajasthan State Certificate in Information Technology",
                subtitle: "A foundational course aimed at enhancing IT literacy among citizens",
                image: "https://res.cloudinary.com/dsol90tiu/image/upload/v1748717950/image_2_2_hufue2.jpg",
                banner: "https://res.cloudinary.com/dsol90tiu/image/upload/v1748718370/image_3_1_jqtn8t.jpg",
                details: "A foundational course aimed at enhancing IT literacy among citizens.",
                description: "The Rajasthan State Certificate in Information Technology (RSCIT) is a foundational computer literacy course designed and certified by VMOU (Vardhman Mahaveer Open University), Kota, in collaboration with the Rajasthan Knowledge Corporation Limited (RKCL). This course is tailored to empower individuals with essential digital skills required for personal and professional development in today’s tech-driven world.",
                preview: "https://www.youtube.com/watch?v=Acfk82EdDaA&list=PLg7u8hgnzsKEcd_33HqeuyfpshFogCfbA",
                skills: [
                    "Basic computer operations including hardware and software usage",
                    "Proficiency in MS Office applications such as Word, Excel, and PowerPoint",
                    "Internet browsing and safe email practices",
                    "Effective use of smartphones and mobile applications",
                    "Digital payment methods and cyber security awareness",
                    "Accessing government e-services like eMitra and Bhamashah",
                    "Managing files using cloud storage solutions"
                ],

                eligibility: [
                    "Anyone who is literate",
                    "Basic understanding of computers is helpful but not required",
                    "Access to a computer with internet",
                    "Valid ID proof for registration"
                ],
                duration: "3 Months or 132 Hours",
                students: 15420,
                fees: {
                    original: 5000,
                    discounted: 4200,
                    currency: "Rs."
                },
                rating: 4.5,
                reviews: 1243,
                instructor: "Rajesh Sharma",
                syllabus: [
                    {
                        module: "Module 1: Computer Fundamentals",
                        topics: [
                            "Introduction to Computers",
                            "Hardware Components",
                            "Software Concepts",
                            "Operating System Basics"
                        ],
                        duration: "2 weeks"
                    },
                    // Add more modules as needed
                ],
                benefits: [
                    "Government recognized certificate",
                    "Basic computer literacy",
                    "Office application skills",
                    "Internet and email proficiency",
                    "Digital payment knowledge"
                ],
                certificate: {
                    image: "https://via.placeholder.com/300?text=Certificate",
                    criteria: [
                        "Minimum 75% attendance",
                        "Pass the final assessment",
                        "Complete all practical assignments",
                        "Submit all required documents"
                    ]
                },
                features: [
                    "Official study material",
                    "Practical lab sessions",
                    "Experienced instructors",
                    "Government approved curriculum"
                ]
            },




            {
                courseCode: "RCBPP",
                courseName: "Basic Professional Program",
                image: "https://via.placeholder.com/100?text=IT",
                details: "An introductory program focusing on essential professional skills.",
                eligibility: "Basic literacy; RS-CIT certification recommended.",
                duration: "3 Months or 132 Hours",
                students: 8950,
                fees: "Rs. 4200",
                syllabus: [
                    "Basic Computer Operations",
                    "Introduction to Office Tools",
                    "Communication Skills",
                    "Professional Etiquette"
                ]
            },
            {
                courseCode: "RCAPP",
                courseName: "Advanced Professional Program",
                image: "https://via.placeholder.com/100?text=IT",
                details: "An advanced program enhancing professional and technical skills.",
                eligibility: "Completion of RCBPP or equivalent knowledge.",
                duration: "3 Months or 132 Hours",
                students: 5670,
                fees: "Rs. 4200",
                syllabus: [
                    "Advanced Office Tools",
                    "Project Management Basics",
                    "Advanced Communication Skills",
                    "Team Collaboration Tools"
                ]
            }
        ]
    },
    {
        category: "Programming & Development",
        icon: <Code className="w-4 h-4" />,
        courses: [
            {
                courseCode: "RS-CSEP",
                courseName: "Rajasthan State Certificate in Software Engineering Principles",
                image: "https://via.placeholder.com/100?text=IT",
                details: "Course focusing on foundational software engineering concepts.",
                eligibility: "Class 10 pass with basic computer knowledge.",
                duration: "120 Hours",
                students: 3240,
                fees: "Rs. 4200",
                syllabus: [
                    "Software Development Life Cycle",
                    "Programming Fundamentals",
                    "Database Basics",
                    "Introduction to Web Technologies"
                ]
            },
            {
                courseCode: "RCWDPHP",
                courseName: "RKCL Certificate in Web Development using PHP",
                image: "https://via.placeholder.com/100?text=IT",
                details: "Comprehensive course on web development using PHP.",
                eligibility: "Class 10 pass with basic computer knowledge; RS-CIT preferred.",
                duration: "120 Hours",
                students: 2890,
                fees: "Rs. 7000",
                syllabus: [
                    "HTML & CSS",
                    "JavaScript Basics",
                    "PHP Programming",
                    "MySQL Database Integration",
                    "Project Development"
                ]
            },
            {
                courseCode: "RCWDDJ",
                courseName: "RKCL Certificate in Web Development using Django",
                image: "https://via.placeholder.com/100?text=IT",
                details: "Advanced course on web development using Django framework.",
                eligibility: "Class 10 pass with basic computer knowledge; RS-CIT preferred.",
                duration: "120 Hours",
                students: 1890,
                fees: "Rs. 10000",
                syllabus: [
                    "Python Programming",
                    "Django Framework",
                    "Database Models",
                    "Template Integration",
                    "Project Deployment"
                ]
            },
            {
                courseCode: "RCWDS",
                courseName: "RKCL Certificate in Web Designing using Photoshop",
                image: "https://via.placeholder.com/100?text=IT",
                details: "Course focusing on web design principles using Photoshop.",
                eligibility: "Class 10 pass with basic computer knowledge.",
                duration: "120 Hours",
                students: 2340,
                fees: "Rs. 4200",
                syllabus: [
                    "Design Principles",
                    "Photoshop Tools",
                    "Layout Designing",
                    "Web Graphics Creation",
                    "Responsive Design Basics"
                ]
            },
            {
                courseCode: "RCAEVB",
                courseName: "RKCL Certificate in Advanced Excel with Visual Basic",
                image: "https://via.placeholder.com/100?text=IT",
                details: "Advanced course on Excel functionalities and VBA programming.",
                eligibility: "Class 10 pass with basic computer knowledge.",
                duration: "120 Hours",
                students: 1560,
                fees: "Rs. 4200",
                syllabus: [
                    "Advanced Excel Functions",
                    "Data Analysis Tools",
                    "Macros and VBA Programming",
                    "Dashboard Creation",
                    "Automating Tasks in Excel"
                ]
            },
            {
                courseCode: "RCAGC",
                courseName: "RKCL Certificate in Android App Development using Google Cloud",
                image: "https://via.placeholder.com/100?text=IT",
                details: "Course on developing Android applications integrated with Google Cloud services.",
                eligibility: "Class 10 pass with basic computer knowledge.",
                duration: "120 Hours",
                students: 980,
                fees: "Rs. 4200",
                syllabus: [
                    "Java/Kotlin Basics",
                    "Android Studio Environment",
                    "UI/UX Design for Mobile",
                    "Firebase Integration",
                    "Deploying Apps to Play Store"
                ]
            }
        ]
    },
    {
        category: "Accounting & Finance",
        icon: <Calculator className="w-4 h-4" />,
        courses: [
            {
                courseCode: "RS-CFA",
                courseName: "Rajasthan State Certificate in Financial Accounting",
                image: "https://via.placeholder.com/100?text=IT",
                details: "Course covering fundamental and advanced accounting principles using Tally.",
                eligibility: "Class 12 pass; Commerce background preferred.",
                duration: "2 Months or 100 Hours",
                students: 4560,
                fees: "Rs. 4200",
                syllabus: [
                    "Basics of Accounting",
                    "Computerized Accounting with Tally Prime",
                    "GST Fundamentals",
                    "Income Tax Basics",
                    "Payroll and Inventory Management",
                    "Financial Reporting"
                ]
            },
            {
                courseCode: "RCAE",
                courseName: "Rajasthan Certificate in Advanced Excel",
                image: "https://via.placeholder.com/100?text=IT",
                details: "Course focusing on advanced Excel skills for financial analysis.",
                eligibility: "Class 10 pass with basic computer knowledge.",
                duration: "120 Hours",
                students: 3240,
                fees: "Rs. 4200",
                syllabus: [
                    "Advanced Formulas and Functions",
                    "Data Visualization Techniques",
                    "Pivot Tables and Charts",
                    "What-If Analysis",
                    "Macros and Automation"
                ]
            }
        ]
    },
    {
        category: "Digital Marketing & Graphics",
        icon: <TrendingUp className="w-4 h-4" />,
        courses: [
            {
                courseCode: "RCDM",
                courseName: "RKCL Certificate in Basic Digital Marketing",
                image: "https://via.placeholder.com/100?text=IT",
                details: "Introductory course on digital marketing strategies and tools.",
                eligibility: "Class 10 pass with basic computer knowledge.",
                duration: "90 Hours (2 Months)",
                students: 2780,
                fees: "Rs. 9000",
                syllabus: [
                    "Introduction to Digital Marketing",
                    "SEO Basics",
                    "Social Media Marketing",
                    "Email Marketing",
                    "Content Creation and Marketing",
                    "Google Ads Fundamentals"
                ]
            },
            {
                courseCode: "RCGD",
                courseName: "RKCL Certificate in Basic Graphic Design",
                image: "https://via.placeholder.com/100?text=IT",
                details: "Course on fundamental graphic design principles and tools.",
                eligibility: "Class 10 pass with basic computer knowledge.",
                duration: "90 Hours",
                students: 1890,
                fees: "Rs. 5000",
                syllabus: [
                    "Design Principles",
                    "CorelDRAW Basics",
                    "Creating Marketing Materials",
                    "Brand Identity Design",
                    "Social Media Graphics"
                ]
            }
        ]
    }
];

export default coursesData;