const routes = [];

export function registerRoute(path, handler) {
  routes.push({ path, handler });
}

export function navigate(path) {
  history.pushState({}, "", path);

  renderRoute();
}

export function renderRoute() {
  const currentPath = location.pathname;

  const route = routes.find((route) => route.path === currentPath);

  if (route) {
    route.handler();
  }
}

window.addEventListener("popstate", renderRoute);
