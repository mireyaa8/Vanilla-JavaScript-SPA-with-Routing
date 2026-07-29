const BASE_URL = "https://dummyjson.com/users";

export async function getUsers(limit = 20, skip = 0) {

    const response = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);

    const data = await response.json();

    return data;

}   