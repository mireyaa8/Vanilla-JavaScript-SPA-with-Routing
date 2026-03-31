const BASE = "https://dummyjson.com/users";

export async function getUsers() {
  const res = await fetch(BASE + "?limit=20&skip=0");
  const data = await res.json();
  console.log("Users:", data);
}

export async function getUser() {
  const res = await fetch(BASE + "/1");
  const data = await res.json();
  console.log("Single user:", data);
}

export async function searchUsers() {
  const res = await fetch(BASE + "/search?q=john");
  const data = await res.json();
  console.log("Search:", data);
}

export async function updateUser() {
  const res = await fetch(BASE + "/1", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName: "Test" }),
  });

  const data = await res.json();
  console.log("Updated:", data);
}
