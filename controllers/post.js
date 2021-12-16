import Post from "../models/post";


export const getPost =async (req, res) =>{
    try {
        const posts = await Post.find({})
      .populate("postedBy", "_id name pic location")

      res.json(posts);
    } catch (error) {
        console.log(error);
    }
}


export const createPost =async (req, res) =>{
    const { name, pic ,location } = req.body;
  
    try {
        const post = new Post({ name, location, pic, postedBy: req.user._id });
    post.save();
    res.json(post);
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = async (req, res) => {
    // console.log("Update post", req.body);
    try {
      const post = await Post.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });
      res.json(post);
    } catch (error) {
      console.log(error);
    }
  };
  export const deletePost = async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params._id);
     res.json({
        ok: true,
      });
    } catch (error) {
      console.log(error);
    }
  };