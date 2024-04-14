import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://ZDTS:ZDTSMongoDB12345@public-chat-app.tq9xx9x.mongodb.net/Msger?retryWrites=true&w=majority";
const mdconc = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);

    if (connection.readyState == 1) {
      console.log("database connected successfully");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default mdconc;
