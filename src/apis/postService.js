import axios from "axios";

export const fetchPosts = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/posts`);
}