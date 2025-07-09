import mongoose from 'mongoose'
const {Schema}=mongoose;

const lectureSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [1, 'Title cannot be empty']
  },
  isFreePreview: {
    type: Boolean,
    default: false
  },
  hasVideo: {
    type: Boolean,
    default: false
  },
  videoUrl: {
    type: String,
    default: ''
  }
}, { timestamps: true });


const Lecture = mongoose.models.Lecture || mongoose.model("Lecture", lectureSchema);
export default Lecture;