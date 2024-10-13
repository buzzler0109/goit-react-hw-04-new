import axios from "axios";

const API_KEY = "1CxCun9CtMVy2CMyIbqzUlhqHU3csPKCQ39pqsp3hjU";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search/photos?`, {
    params: { page: page, query: query.split("/")[1] },
  });

  return data;
};
