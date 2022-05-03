module.exports = {
    database: {
      url: process.env.MONGODB_URI,
      options: {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
      },
    },
    imgStorage:{
      driveKey:process.env.DETA_DRIVE_KEY,
      driveID:process.env.DETA_DRIVE_ID
    },
    cloudinaryConfig:{ 
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
      api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
      api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET
    }

  };
  