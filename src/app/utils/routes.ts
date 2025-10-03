export const publicRoutes = [
  "/",
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
  "/contact",
  "/veriy-email",
  "/add-developer",
  "/email-sent",
  "/setup-successful",
];

export const protectedRoutes = [
  "/dashboard",
  "/developers",
  "/developers/{*any}",
  "/projects",
  "/projects/{*any}",
  "/profile",
];

export const adminRoutes = [
  "/users",
  "/uploads",
];