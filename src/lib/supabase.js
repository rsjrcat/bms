import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Auth helpers
export const auth = {
  signUp: async (email, password, userData) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    })
    return { data, error }
  },

  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  },

  onAuthStateChange: (callback) => {
    return supabase.auth.onAuthStateChange(callback)
  }
}

// Database helpers
export const db = {
  // Courses
  getCourses: async () => {
    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        course_categories (
          category,
          icon,
          description
        )
      `)
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  getCourseByCode: async (courseCode) => {
    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        course_categories (
          category,
          icon,
          description
        )
      `)
      .eq('course_code', courseCode)
      .single()
    
    return { data, error }
  },

  createCourse: async (courseData) => {
    const { data, error } = await supabase
      .from('courses')
      .insert([courseData])
      .select()
    
    return { data, error }
  },

  updateCourse: async (id, courseData) => {
    const { data, error } = await supabase
      .from('courses')
      .update(courseData)
      .eq('id', id)
      .select()
    
    return { data, error }
  },

  deleteCourse: async (id) => {
    const { data, error } = await supabase
      .from('courses')
      .delete()
      .eq('id', id)
    
    return { data, error }
  },

  // Course Categories
  getCategories: async () => {
    const { data, error } = await supabase
      .from('course_categories')
      .select('*')
      .order('category')
    
    return { data, error }
  },

  createCategory: async (categoryData) => {
    const { data, error } = await supabase
      .from('course_categories')
      .insert([categoryData])
      .select()
    
    return { data, error }
  },

  // Testimonials
  getTestimonials: async () => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  createTestimonial: async (testimonialData) => {
    const { data, error } = await supabase
      .from('testimonials')
      .insert([testimonialData])
      .select()
    
    return { data, error }
  },

  updateTestimonial: async (id, testimonialData) => {
    const { data, error } = await supabase
      .from('testimonials')
      .update(testimonialData)
      .eq('id', id)
      .select()
    
    return { data, error }
  },

  deleteTestimonial: async (id) => {
    const { data, error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id)
    
    return { data, error }
  },

  // Contact Messages
  createContactMessage: async (messageData) => {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([messageData])
      .select()
    
    return { data, error }
  },

  getContactMessages: async () => {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  updateContactMessage: async (id, messageData) => {
    const { data, error } = await supabase
      .from('contact_messages')
      .update(messageData)
      .eq('id', id)
      .select()
    
    return { data, error }
  },

  // Enrollments
  createEnrollment: async (enrollmentData) => {
    const { data, error } = await supabase
      .from('enrollments')
      .insert([enrollmentData])
      .select()
    
    return { data, error }
  },

  getEnrollments: async () => {
    const { data, error } = await supabase
      .from('enrollments')
      .select(`
        *,
        courses (
          course_name,
          course_code
        )
      `)
      .order('created_at', { ascending: false })
    
    return { data, error }
  },

  updateEnrollment: async (id, enrollmentData) => {
    const { data, error } = await supabase
      .from('enrollments')
      .update(enrollmentData)
      .eq('id', id)
      .select()
    
    return { data, error }
  }
}

// Storage helpers
export const storage = {
  uploadFile: async (bucket, path, file) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file)
    
    return { data, error }
  },

  getPublicUrl: (bucket, path) => {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(path)
    
    return data.publicUrl
  },

  deleteFile: async (bucket, path) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .remove([path])
    
    return { data, error }
  }
}