import  api  from "./config";

export function getUserData(username) {
  return api.get(`/profile/${username}`)
    .then(response => response.data)
    .catch(error => console.log(error));
}
