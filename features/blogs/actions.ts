"use server";

import { z } from "zod";

import { prisma } from "@/lib/db";

export const createPostApi = async (params: {
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  excerpt: string;
  tags: number[];
  categoryId?: number;
  image?: string;
}) => {
  const postSchame = z.object({
    title: z.string(),
    content: z.string(),
    published: z.boolean(),
    authorId: z.string(),
    excerpt: z.string(),
    tags: z.number().array(),
    categoryId: z.number().optional(),
    image: z.string().optional(),
  });
  const validatedPostParams = postSchame.parse(params);
  const data = {
    title: validatedPostParams.title,
    content: validatedPostParams.title,
    published: validatedPostParams.published,
    excerpt: validatedPostParams.excerpt,
    author: { connect: { id: validatedPostParams.authorId } },
    tags: { connect: validatedPostParams.tags.map((tagId) => ({ id: tagId })) },
    ...(validatedPostParams.image ? { image: validatedPostParams.image } : {}),
    ...(validatedPostParams.categoryId
      ? { category: { connect: { id: validatedPostParams.categoryId } } }
      : {}),
  };
  const result = await prisma.post.create({ data });
  return result;
};
