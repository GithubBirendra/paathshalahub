import dotenv from 'dotenv';
dotenv.config();
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configure Cloudinary with your credentials from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  //  Cloudinary cloud name
  api_key: process.env.CLOUDINARY_API_KEY,        //  Cloudinary API key
  api_secret: process.env.CLOUDINARY_API_SECRET,  //  Cloudinary API secret
});

// Setup CloudinaryStorage for multer to upload videos
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'lectures',           // Folder in my Cloudinary account where videos will be stored
    resource_type: 'video',       // Important: tells Cloudinary this is a video upload
    allowed_formats: ['mp4', 'mov', 'webm', 'ts'], // Allowed video formats
  },
});

export { cloudinary, storage };
