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
    }
  };
  