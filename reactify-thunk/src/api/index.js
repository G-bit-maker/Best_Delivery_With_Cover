import axios from 'axios';
import {Url} from "./config";
export default
   axios.create({
      baseURL: Url,
      timeout: 2000
   });