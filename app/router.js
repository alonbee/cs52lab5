import { Router } from 'express';
import * as Posts from './controllers/post_controller';
import * as UserController from './controllers/user_controller';
import { requireAuth, requireSignin } from './services/passport';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

apiRouter.route('/posts/:postID')
  .put(requireAuth, Posts.updatePost)
  .get(Posts.getPost)
  .delete(requireAuth, Posts.deletePost);

apiRouter.route('/posts')
  .post(requireAuth, Posts.createPost)
  .get(Posts.getPosts)
  .delete(requireAuth, Posts.deletePost);

apiRouter.post('/signin', requireSignin, UserController.signin);

apiRouter.post('/signup', UserController.signup);

export default apiRouter;
