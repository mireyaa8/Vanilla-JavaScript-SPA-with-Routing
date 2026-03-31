const routes = [];
export function registerRoute(path, handler) {
  routes.push({ path, handler });
}
export function navigate(path) {
  history.pushState({}, "", path);
  renderRoute();
}
export function renderRoute() {
  const url = location.pathname;
  const route = routes.find((r) => {
    if (r.path.includes(":")) {
      const base = r.path.split("/:")[0];
      return url.startsWith(base);
    }
    return r.path === url;
  });
  if (!route) {
    import("../pages/notFoundPage.js").then((m) => m.render());
    return;
  }
  route.handler();
}
window.addEventListener("popstate", renderRoute);
