import axios from "axios";
import { Movie_url } from "../utils/CenterData";

export const Axios = axios.create({
    baseURL: Movie_url
})
