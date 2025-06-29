import * as yup from 'yup';
import mongoose from 'mongoose';
const { Schema } = mongoose;

export const categoryValues = [
  { value: "web-development", label: "Web Development" },
  { value: "data-science", label: "Data Science" },
  { value: "machine-learning", label: "Machine Learning" },
  { value: "mobile-development", label: "Mobile Development" },
  { value: "game-development", label: "Game Development" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
  { value: "business", label: "Business" },
  { value: "personal-development", label: "Personal Development" }
];

export const languages = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "chinese", label: "Chinese" },
  { value: "japanese", label: "Japanese" },
  { value: "portuguese", label: "Portuguese" },
  { value: "arabic", label: "Arabic" },
  { value: "hindi", label: "Hindi" },
  { value: "russian", label: "Russian" }
];

//  Yup Schema
export const courseValidationSchema = yup.object({
  title: yup.string()
    .required("Title is required")
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must be less than 100 characters"),

  description: yup.string()
    .required("Description is required")
    .min(50, "Description must be at least 50 characters")
    .max(500, "Description must be less than 500 characters"),

  price: yup.number()
    .required("Price is required")
    .min(0, "Price must be a positive number")
    .max(10000, "Price must be less than 10000"),

  category: yup.string()
    .oneOf(categoryValues.map(c => c.value), "Please select a valid category")
    .required("Category is required"),

  level: yup.string()
    .oneOf(["beginner", "intermediate", "advanced"], "Please select a valid level")
    .required("Level is required"),

  language: yup.string()
    .oneOf(languages.map(l => l.value), "Please select a valid language")
    .required("Language is required"),

  // currency: yup.string()
  //   .default("USD"),

  duration: yup.number()
    .required("Duration is required")
    .min(1, "Duration must be at least 1 hour")
    .max(100, "Duration must be less than 100 hours"),

  thumbnail: yup.string()
    .url("Thumbnail must be a valid URL")
    .matches(/\.(png|jpg|jpeg|gif)$/i, "Thumbnail must be an image URL")
    .nullable(),

  whatYouWillLearn: yup.array()
    .of(yup.string().required())
    .min(3, "Add at least 3 learning outcomes")
    .max(10, "Maximum 10 learning outcomes")
    .required("Learning outcomes are required"),

  requirements: yup.array()
    .of(yup.string().required())
    .min(1, "Add at least 1 requirement")
    .max(8, "Maximum 8 requirements allowed")
    .required("Requirements are required"),

  isPublished: yup.boolean().default(false),

  // instructorId: yup.string()
  //   .required("Instructor ID is required")
});


// Mongoose Schema
const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    minlength: 50,
    maxlength: 500
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 10000
  },
  category: {
    type: String,
    required: true,
    enum: categoryValues.map(cat => cat.value)
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    required: true
  },
  language: {
    type: String,
    required: true,
    enum: languages.map(lang => lang.value)
  },
  // currency: {
  //   type: String,
  //   default: "USD"
  // },
  duration: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  },
  thumbnail: {
    type: String,
    validate: {
      validator: (v) => /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i.test(v),
      message: props => `${props.value} is not a valid image URL!`
    },
    required: false
  },
  whatYouWillLearn: {
    type: [String],
    validate: {
      validator: (v) => v.length >= 3 && v.length <= 10,
      message: () => `You must provide between 3 and 10 learning outcomes!`
    }
  },
  requirements: {
    type: [String],
    validate: {
      validator: (v) => v.length >= 1 && v.length <= 8,
      message: () => `You must provide between 1 and 8 requirements!`
    }
  },
  isPublished: { type: Boolean, default: false },
  instructorId: { type: String, required: true },
  enrollmentCount: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 }
}, {
  timestamps: true,
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
export default Course;
