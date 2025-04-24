enum RoutesPublic {
  HOME = "/",
  ABOUT = "/about",
}

enum RoutesPrivate {
  DASHBOARD = "/dashboard",
}

export const AppRoutes = {
  public: RoutesPublic,
  private: RoutesPrivate,
};
