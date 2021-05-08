import axios from "axios";

// export const articleAPI = axios.create({
//   baseURL: `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_ARTICLES_API_KEY}`,
//   headers: {
//     "Content-Type": "application/json",
//   },
//   params: {
//     countries: "us,au,gb,sg,in,ca",
//     sources: "cnn,bbc,yahoo,guardian",
//     languages: "en",
//     sort: "popularity",
//   },
// });

export const articleAPI = axios.create({
  baseURL: "https://gnews.io/api/v4",
});

export const videoAPI = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    key: process.env.REACT_APP_VIDEOS_API_KEY,
    part: "snippet",
    type: "video",
  },
});

export const audioAPI = axios.create({
  baseURL: "https://itunes.apple.com",
  params: {
    media: "podcast",
  },
});
