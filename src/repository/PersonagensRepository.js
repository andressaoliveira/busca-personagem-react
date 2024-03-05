import axios from "axios";
import { API_URL } from "../Helpers/ApiHelper";

class PersonagensRepository {
  constructor({ routePrefix = API_URL} = {}) {
    this.baseUrl = `${routePrefix}/characters`;
  }

  listarPersonagens() { 
    const url = `${this.baseUrl}`;  
    return axios.get(url, {});
  }
}

export default PersonagensRepository;
