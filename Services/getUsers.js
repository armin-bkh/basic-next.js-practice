import http from "./httpServices"

const getUsers = () => {
    return http.get("/users");
}

export default getUsers;