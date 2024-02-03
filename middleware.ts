import { authMiddleware } from "@clerk/nextjs";
// Protect all routes including api/trpc routes

export default authMiddleware({});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};