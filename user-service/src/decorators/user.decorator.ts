import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCurrentUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    // const req = ctx.switchToHttp().getRequest<AuthRequest>();
    const req = ctx.switchToHttp().getRequest();
    if (!data) {
      return req.user;
    }

    return req.user;
  },
);