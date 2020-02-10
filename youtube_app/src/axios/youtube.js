import axios from "axios";

const KEY = "AIzaSyAmXIxtv1F8rXZugNXuCw89xiOVaBB0AI8";
const URL = "https://www.googleapis.com/youtube/v3";

export const API_DEFAULT_PARAMS = {
  part: "snippet",
  maxResults: 5,
  key: KEY,
  type: "video"
  // add a type parameter to our axios config object to only search for videos
};

export default axios.create({
  baseURL: URL
});
