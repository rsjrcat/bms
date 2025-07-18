/*
  # Seed Initial Data

  1. Course Categories
    - Insert predefined course categories with icons
  
  2. Sample Courses
    - Insert sample courses for each category
  
  3. Sample Testimonials
    - Insert sample testimonials for display
*/

-- Insert course categories
INSERT INTO course_categories (category, icon, description) VALUES
('IT & Digital Literacy', 'monitor', 'Foundational computer and digital skills courses'),
('Programming & Development', 'code', 'Software development and programming courses'),
('Accounting & Finance', 'calculator', 'Financial accounting and business courses'),
('Digital Marketing & Graphics', 'trending-up', 'Marketing and design courses')
ON CONFLICT (category) DO NOTHING;

-- Get category IDs for reference
DO $$
DECLARE
    it_category_id uuid;
    programming_category_id uuid;
    accounting_category_id uuid;
    marketing_category_id uuid;
BEGIN
    SELECT id INTO it_category_id FROM course_categories WHERE category = 'IT & Digital Literacy';
    SELECT id INTO programming_category_id FROM course_categories WHERE category = 'Programming & Development';
    SELECT id INTO accounting_category_id FROM course_categories WHERE category = 'Accounting & Finance';
    SELECT id INTO marketing_category_id FROM course_categories WHERE category = 'Digital Marketing & Graphics';

    -- Insert sample courses
    INSERT INTO courses (
        course_code, course_name, category_id, subtitle, image, banner, details, description,
        preview, skills, eligibility, duration, students, fees, rating, reviews, instructor,
        syllabus, benefits, certificate, features
    ) VALUES
    (
        'RS-CIT',
        'Rajasthan State Certificate in Information Technology',
        it_category_id,
        'A foundational course aimed at enhancing IT literacy among citizens',
        'https://res.cloudinary.com/dsol90tiu/image/upload/v1748717950/image_2_2_hufue2.jpg',
        'https://res.cloudinary.com/dsol90tiu/image/upload/v1748718370/image_3_1_jqtn8t.jpg',
        'A foundational course aimed at enhancing IT literacy among citizens.',
        'The Rajasthan State Certificate in Information Technology (RSCIT) is a foundational computer literacy course designed and certified by VMOU (Vardhman Mahaveer Open University), Kota, in collaboration with the Rajasthan Knowledge Corporation Limited (RKCL). This course is tailored to empower individuals with essential digital skills required for personal and professional development in today''s tech-driven world.',
        'https://www.youtube.com/watch?v=Acfk82EdDaA&list=PLg7u8hgnzsKEcd_33HqeuyfpshFogCfbA',
        '["Basic computer operations including hardware and software usage", "Proficiency in MS Office applications such as Word, Excel, and PowerPoint", "Internet browsing and safe email practices", "Effective use of smartphones and mobile applications", "Digital payment methods and cyber security awareness", "Accessing government e-services like eMitra and Bhamashah", "Managing files using cloud storage solutions"]'::jsonb,
        '["Anyone who is literate", "Basic understanding of computers is helpful but not required", "Access to a computer with internet", "Valid ID proof for registration"]'::jsonb,
        '3 Months or 132 Hours',
        15420,
        '{"original": 5000, "discounted": 4200, "currency": "Rs."}'::jsonb,
        4.5,
        1243,
        'Rajesh Sharma',
        '[{"module": "Module 1: Computer Fundamentals", "topics": ["Introduction to Computers", "Hardware Components", "Software Concepts", "Operating System Basics"], "duration": "2 weeks"}]'::jsonb,
        '["Government recognized certificate", "Basic computer literacy", "Office application skills", "Internet and email proficiency", "Digital payment knowledge"]'::jsonb,
        '{"image": "https://via.placeholder.com/300?text=Certificate", "criteria": ["Minimum 75% attendance", "Pass the final assessment", "Complete all practical assignments", "Submit all required documents"]}'::jsonb,
        '["Official study material", "Practical lab sessions", "Experienced instructors", "Government approved curriculum"]'::jsonb
    ),
    (
        'RCWDPHP',
        'RKCL Certificate in Web Development using PHP',
        programming_category_id,
        'Comprehensive course on web development using PHP',
        'https://via.placeholder.com/400x300?text=PHP+Development',
        'https://via.placeholder.com/800x400?text=PHP+Web+Development',
        'Comprehensive course on web development using PHP.',
        'Learn to build dynamic websites and web applications using PHP, MySQL, HTML, CSS, and JavaScript. This course covers both frontend and backend development.',
        'https://www.youtube.com/watch?v=example',
        '["HTML & CSS", "JavaScript Basics", "PHP Programming", "MySQL Database Integration", "Project Development"]'::jsonb,
        '["Class 10 pass with basic computer knowledge", "RS-CIT preferred"]'::jsonb,
        '120 Hours',
        2890,
        '{"original": 7000, "discounted": 5600, "currency": "Rs."}'::jsonb,
        4.3,
        456,
        'Priya Sharma',
        '[{"module": "Module 1: Web Fundamentals", "topics": ["HTML Structure", "CSS Styling", "JavaScript Basics"], "duration": "3 weeks"}, {"module": "Module 2: PHP Programming", "topics": ["PHP Syntax", "Variables and Functions", "Form Handling"], "duration": "4 weeks"}]'::jsonb,
        '["Full-stack web development skills", "Industry-relevant projects", "Job placement assistance", "Certificate of completion"]'::jsonb,
        '{"image": "https://via.placeholder.com/300?text=Certificate", "criteria": ["Complete all modules", "Submit final project", "Pass practical examination"]}'::jsonb,
        '["Live coding sessions", "Real-world projects", "Industry mentorship", "Job placement support"]'::jsonb
    ),
    (
        'RS-CFA',
        'Rajasthan State Certificate in Financial Accounting',
        accounting_category_id,
        'Course covering fundamental and advanced accounting principles using Tally',
        'https://via.placeholder.com/400x300?text=Accounting+Course',
        'https://via.placeholder.com/800x400?text=Financial+Accounting',
        'Course covering fundamental and advanced accounting principles using Tally.',
        'Master the fundamentals of accounting with hands-on training in Tally Prime. Learn GST, income tax basics, and financial reporting.',
        'https://www.youtube.com/watch?v=example',
        '["Basics of Accounting", "Computerized Accounting with Tally Prime", "GST Fundamentals", "Income Tax Basics", "Payroll and Inventory Management", "Financial Reporting"]'::jsonb,
        '["Class 12 pass", "Commerce background preferred"]'::jsonb,
        '2 Months or 100 Hours',
        4560,
        '{"original": 4200, "discounted": 3360, "currency": "Rs."}'::jsonb,
        4.6,
        789,
        'Amit Kumar',
        '[{"module": "Module 1: Accounting Basics", "topics": ["Double Entry System", "Journal Entries", "Ledger Posting"], "duration": "2 weeks"}, {"module": "Module 2: Tally Prime", "topics": ["Company Creation", "Voucher Entry", "Report Generation"], "duration": "3 weeks"}]'::jsonb,
        '["Government recognized certificate", "Tally certification", "Job-ready skills", "Industry exposure"]'::jsonb,
        '{"image": "https://via.placeholder.com/300?text=Certificate", "criteria": ["Complete practical assignments", "Pass Tally certification exam", "Maintain 80% attendance"]}'::jsonb,
        '["Tally Prime software access", "Real business scenarios", "Expert faculty", "Placement assistance"]'::jsonb
    ),
    (
        'RCDM',
        'RKCL Certificate in Basic Digital Marketing',
        marketing_category_id,
        'Introductory course on digital marketing strategies and tools',
        'https://via.placeholder.com/400x300?text=Digital+Marketing',
        'https://via.placeholder.com/800x400?text=Digital+Marketing+Course',
        'Introductory course on digital marketing strategies and tools.',
        'Learn the fundamentals of digital marketing including SEO, social media marketing, Google Ads, and content marketing strategies.',
        'https://www.youtube.com/watch?v=example',
        '["Introduction to Digital Marketing", "SEO Basics", "Social Media Marketing", "Email Marketing", "Content Creation and Marketing", "Google Ads Fundamentals"]'::jsonb,
        '["Class 10 pass with basic computer knowledge"]'::jsonb,
        '90 Hours (2 Months)',
        2780,
        '{"original": 9000, "discounted": 7200, "currency": "Rs."}'::jsonb,
        4.4,
        567,
        'Neha Gupta',
        '[{"module": "Module 1: Digital Marketing Fundamentals", "topics": ["Digital Marketing Overview", "Website Basics", "Analytics Introduction"], "duration": "2 weeks"}, {"module": "Module 2: SEO & Content", "topics": ["Keyword Research", "On-page SEO", "Content Strategy"], "duration": "3 weeks"}]'::jsonb,
        '["Industry-relevant skills", "Google certification preparation", "Portfolio development", "Freelancing opportunities"]'::jsonb,
        '{"image": "https://via.placeholder.com/300?text=Certificate", "criteria": ["Complete all practical exercises", "Create a digital marketing campaign", "Pass final assessment"]}'::jsonb,
        '["Google Ads credits", "SEO tools access", "Social media templates", "Industry case studies"]'::jsonb
    )
    ON CONFLICT (course_code) DO NOTHING;
END $$;

-- Insert sample testimonials
INSERT INTO testimonials (text, name, role, rating, is_featured) VALUES
('The RS-CIT course at BMS Academy completely transformed my understanding of computers. The instructors were patient and knowledgeable, making complex concepts easy to understand.', 'Priya Sharma', 'Homemaker', 5, true),
('Excellent training in Tally and accounting. The practical approach helped me get a job in an accounting firm within a month of completion.', 'Rahul Gupta', 'Accountant', 5, true),
('The digital marketing course opened up new career opportunities for me. The hands-on projects and real-world examples were incredibly valuable.', 'Anjali Singh', 'Marketing Executive', 4, false),
('Great faculty and well-structured curriculum. The PHP web development course gave me the skills I needed to start freelancing.', 'Vikash Kumar', 'Web Developer', 5, false),
('BMS Academy provides quality education at affordable prices. The certificate programs are recognized and helped boost my career.', 'Sunita Devi', 'Office Assistant', 4, false)
ON CONFLICT DO NOTHING;