import { Request, Response, NextFunction } from 'express';
import PostService from '../services/postService';

export default class PostController {
  static async getAllPosts(req: Request, res: Response, next: NextFunction) {
    PostService.getAllPosts(req)
      .then(posts =>
        res.status(200).json({
          posts,
        })
      )
      .catch(err => next(err));
  }

  static async getPosts(req: Request, res: Response, next: NextFunction) {
    PostService.getPosts(req)
      .then(posts =>
        res.status(200).json({
          posts,
        })
      )
      .catch(err => next(err));
  }

  static async getPost(req: Request, res: Response, next: NextFunction) {
    PostService.getPost(req)
      .then(post =>
        res.status(200).json({
          post,
        })
      )
      .catch(err => next(err));
  }

  static async setPost(req: Request, res: Response, next: NextFunction) {
    PostService.setPost(req)
      .then(post =>
        res.status(201).json({
          post,
        })
      )
      .catch(err => next(err));
  }

  static async updatePost(req: Request, res: Response, next: NextFunction) {
    PostService.updatePost(req)
      .then(post =>
        res.status(201).json({
          post,
        })
      )
      .catch(err => next(err));
  }

  static async deletePost(req: Request, res: Response, next: NextFunction) {
    PostService.deletePost(req)
      .then(post =>
        res.status(200).json({
          success: true,
          message: 'Post Deleted Successfully',
          data: post,
        })
      )
      .catch(err => next(err));
  }

  static async deletePosts(req: Request, res: Response, next: NextFunction) {
    PostService.deletePosts(req)
      .then(post =>
        res.status(200).json({
          success: true,
          message: 'Posts Deleted Successfully',
          data: post,
        })
      )
      .catch(err => next(err));
  }
}
