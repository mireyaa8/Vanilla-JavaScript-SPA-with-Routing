import { registerRoute, renderRoute, navigate } from "./routers/router.js";
import * as home from "./pages/homePage.js";
import * as users from "./pages/usersPage.js";

registerRoute("/", home.render);
registerRoute("/users", users.render);

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();

    navigate(e.target.getAttribute("href"));
  }
});

renderRoute();
