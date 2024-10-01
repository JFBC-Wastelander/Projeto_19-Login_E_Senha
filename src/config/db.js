import mongoose from "mongoose";

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Conectado com o banco");
  } catch (err) {
    console.log(err);
  }
};

main();

export default mongoose;