import { type NextRequest } from "next/server";

import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     */

    /**
     * The page's config must be an object initialized directly when being exported and not modified dynamically.
     * The config object must only contain static constant literals without expressions.
     * https://nextjs.org/docs/messages/invalid-page-config
     */

    // eslint-disable-next-line unicorn/prefer-string-raw
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
