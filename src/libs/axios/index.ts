import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { USER_AGENT, BASE_URL } from '../../config/constants';

class MyAxios {
  private DEFAULT_HEADER: AxiosRequestHeaders = {
    'User-Agent': USER_AGENT,
  };

  async get(url: string, inputHeaders?: AxiosRequestConfig): Promise<AxiosResponse> {
    const config = {
      ...inputHeaders,
    };
    config.headers = { ...this.DEFAULT_HEADER, ...config.headers };
    return axios.get(`${BASE_URL}${url}`, config);
  }
}

// const myAxios = new MyAxios();
// myAxios.get('/menus')
//   // .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// axios.get('https://orng-api.nexon.com/api/services/maplestory/menus', {headers: });
export default new MyAxios();
