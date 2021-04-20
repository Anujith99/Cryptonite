import axios from "axios";

export const articleAPI = axios.create({
  baseURL: `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_ARTICLES_API_KEY}`,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    countries: "us,au,gb,sg,in,ca",
    sources: "cnn,bbc,yahoo,guardian",
    languages: "en",
    sort: "popularity",
  },
});
