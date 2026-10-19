import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("feature/home/pages/dashboard.tsx"),
  route("/survey/all", "feature/survey/pages/all-survey.tsx"),
  route("/survey/create", "feature/survey/pages/create-survey.tsx"),
  route("/archive/finish", "feature/archive/pages/finished-survey.tsx"),
  route("/profile/survey", "feature/profile/pages/profile-survey.tsx"),
  route("/profile/response", "feature/profile/pages/profile-response.tsx"),
] satisfies RouteConfig;
