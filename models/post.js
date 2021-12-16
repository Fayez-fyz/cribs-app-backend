import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema(
  {
    name: {
      type: {},
      required: true,
    },
    pic: {
      type: {},
      required: true,
    },
    location: {
      type: {},
      required: true,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
