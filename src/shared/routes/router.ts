enum RoutesPublic {
  HOME = "/",
  ABOUT = "/about",
}

enum RoutesPrivate {
  ADMIN = "/admin",
}

export const AppRoutes = {
  public: RoutesPublic,
  private: RoutesPrivate,
};
