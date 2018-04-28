import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const PostSchema = new Schema({
  title: String,
  tags: [String],
  content: String,
  cover_url: String,
});

// create PostModel class from schema.

const Post = mongoose.model('Post', PostSchema);

export default Post;
