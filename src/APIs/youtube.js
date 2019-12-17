import APIsecrets from "./APIsecrets"
import axios from "axios"

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: APIsecrets.key,
  type: "video"
}

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
})