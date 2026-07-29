import { getUsers } from "../api/usersApi.js";

export async function render() {
  const app = document.getElementById("app");

  app.innerHTML = `
        <h2>Users</h2>
        <p>Loading users...</p>
    `;

  const data = await getUsers();

  app.innerHTML = `
        <h2>Users</h2>
    `;

  data.users.forEach((user) => {
    app.innerHTML += `
            <div class="user">
                <h3>${user.firstName} ${user.lastName}</h3>
                <p>@${user.username}</p>
            </div>
        `;
  });
}
