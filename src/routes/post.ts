import { Application } from 'express';
import PostController from '../controllers/postController';
import AuthController from '../controllers/authController';
import ErrorController from '../controllers/errorController';

export default class PostRoutes {
  public routes(app: Application): void {
    app
      .get('/all-posts', AuthController.verifyToken, PostController.getAllPosts)
      .get('/posts', AuthController.verifyToken, PostController.getPosts)
      .delete('/posts', AuthController.verifyToken, PostController.deletePosts)
      .post('/posts', ErrorController.notAllowedMethod)

      .get('/post/:postId', AuthController.verifyToken, PostController.getPost)
      .post('/post', AuthController.verifyToken, PostController.setPost)
      .put('/post/:id', AuthController.verifyToken, PostController.updatePost)
      .delete('/post/:id', AuthController.verifyToken, PostController.deletePost);
  }
}
