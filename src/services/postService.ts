import { Request } from 'express';
import { Post, Prisma } from '@prisma/client';
import prisma from '../client/client';
import { IJwtPayload } from '../interfaces/jwtPayloadInterface';
import { getPayload } from '../utils/jwtPayload';
import AppError from '../errors';
import { check } from 'express-validator';

export default class PostService {
  static async getAllPosts(req: Request): Promise<Post[]> {
    const allPosts = await prisma.post.findMany({});
    return allPosts;
  }

  static async getPosts(req: Request): Promise<Post[]> {
    const payload: IJwtPayload = getPayload(req);

    const userId = payload.userId;
    const allPosts = await prisma.post.findMany({
      where: { authorId: userId },
    });
    return allPosts;
  }

  static async getPost(req: Request): Promise<Post[]> {
    // Get user input
    const { postId } = req.params;

    // Validate user input
    if (!postId) throw new AppError(400, 'postId is required');
    check(postId, 'postId must be number').isNumeric();

    const allPosts = await prisma.post.findMany({
      where: { id: parseInt(postId) },
    });
    return allPosts;
  }

  static async setPost(req: Request): Promise<Post> {
    const payload: IJwtPayload = getPayload(req);
    const userId = payload.userId;

    // Get user input
    const { title, content } = req.body;

    if (!(title && content)) throw new AppError(400, 'All input is required');

    const post = await prisma.post.create({
      data: {
        authorId: userId,
        title: title,
        content: content,
      },
    });
    return post;
  }

  static async updatePost(req: Request): Promise<Post> {
    // Get user input
    const { id } = req.params;
    if (!id) throw new AppError(400, 'postId is required');

    const { title, content } = req.body;
    if (!(title && content)) throw new AppError(400, 'All input is required');

    const post = await prisma.post.update({
      where: { id: parseInt(id) },
      data: {
        title: title,
        content: content,
      },
    });
    return post;
  }

//   static async updatePosts(req: Request): Promise<Post> {
//     // Get user input
//     const { id } = req.params;
//     if (!id) throw new AppError(400, 'postId is required');

//     const { title, content } = req.body;
//     if (!(title && content)) throw new AppError(400, 'All input is required');

//     const post = await prisma.post.updateMany({
//       where: { id: parseInt(id) },
//       data: {
//         title: title,
//         content: content,
//       },
//     });
//     return post;
//   }

  static async deletePost(req: Request): Promise<Post> {
    // Get user input
    const { id } = req.params;
    if (!id) throw new AppError(400, 'postId is required');

    const post = await prisma.post.delete({
      where: { id: parseInt(id) },
    });
    return post;
  }

  static async deletePosts(req: Request): Promise<Prisma.BatchPayload> {
   
    const post = await prisma.post.deleteMany({
      where: { id: {
        in: [
            12,
            14,
        ]
      } },
    });
    return post;
  }
}
