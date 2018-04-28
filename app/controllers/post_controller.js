import Post from '../models/post_model';

// this cleans the posts because we use id instead of dangling _id
// and we purposefully don't return content here either
const cleanPosts = (posts) => {
  return posts.map((post) => {
    return { id: post._id, title: post.title, tags: post.tags, cover_url: post.cover_url };
  });
};

const cleanPost = (post) => {
  return { id: post._id, title: post.title, tags: post.tags, cover_url: post.cover_url };
};

export const createPost = (req, res) => {
  const post = new Post();
  post.title = req.body.title;
  post.tags = req.body.tags;
  post.content = req.body.content;
  post.cover_url = req.body.cover_url;
  post.save()
  .then((result) => {
    res.json({ message: 'Post created!' });
  })
  .catch((error) => {
    res.status(500).json({ error });
  });
};

export const getPosts = (req, res) => {
  Post.find({}).sort('created_at')
  .then((result) => {
    res.json({ posts: cleanPosts(result) });
  })
  .catch((error) => {
    res.status(500).json({ error });
  });
};
export const getPost = (req, res) => {
  // TODO: Sort the results
  const postID = req.params.postID;
  console.log(postID);
  Post.findById(postID)
  .then((result) => {
    res.json(cleanPost(result));
  })
  .catch((error) => {
    res.status(500).json({ error });
  });
};
export const deletePost = (req, res) => {
  const postID = req.params.postID;
  console.log(postID);
  Post.remove({ _id: postID })
  .then((result) => {
    res.json({ Message: 'Delete successfully' });
  })
  .catch((error) => {
    res.status(500).json({ error });
  });
};

export const updatePost = (req, res) => {
  console.log('in updateing post');
  console.log(req);
  const postID = req.params.postID;
  Post.findById(postID)
  .then((result) => {
    result.title = req.body.title;
    result.tags = req.body.tags;
    result.content = req.body.content;
    result.cover_url = req.body.cover_url;
    result.save();
  });
  res.send('update a post here');
};
