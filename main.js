const BASE = "https://dummyjson.com/users";
fetch(BASE + "?limit=20&skip=0")
  .then((res) => res.json())
  .then((data) => console.log("Users:", data));
fetch(BASE + "/1")
  .then((res) => res.json())
  .then((data) => console.log("Single user:", data));
fetch(BASE + "/search?q=john")
  .then((res) => res.json())
  .then((data) => console.log("Search:", data));
fetch(BASE + "/1", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ firstName: "Test" }),
})
  .then((res) => res.json())
  .then((data) => console.log("Updated:", data));
import { getUsers, getUser, searchUsers, updateUser } from "./api/usersApi.js";

getUsers();
getUser();
searchUsers();
updateUser();
