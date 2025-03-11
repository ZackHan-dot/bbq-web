import { ZodError } from "zod";
import { fromError } from "zod-validation-error";

import { createPostApi } from "@/features/blogs/actions";
import logger from "@/lib/logger";

export async function POST(req: Request) {
  const res = await req.json();
  try {
    await createPostApi(res);
    return Response.json({ code: 0, data: null, message: "success" });
  } catch (error: unknown) {
    logger.error(error);
    if (error instanceof ZodError) {
      return Response.json({
        code: 500,
        data: null,
        message: fromError(error).toString(),
      });
    }
    return Response.json({ code: 500, data: null, message: "未知错误" });
  }
}
