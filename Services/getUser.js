import http from "./httpServices";

const getUser = (id) => {
    return http.get(`/users/${id}`);
}

export default getUser;