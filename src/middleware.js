// without a defined matcher, this file will be used as a catch-all for all middleware
export { default } from "next-auth/middleware";

// Define your protected pages here
export const config = {
  matcher: ["/extra", "/dashboard"],
};
