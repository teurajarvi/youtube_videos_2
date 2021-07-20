import axios from "axios";

const KEY = "AIzaSyAC5XjOyrOTVVjtNx1V18f8YX8hhaqUV7A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
