import axios, {AxiosResponse} from 'axios';
import 'dotenv/config';
import {INasaDataApi} from '../types/interface';

const API_NASA_KEY: string = process.env.API_NASA_KEY as string;

const ApiNasaRequest = async () => {
  const URL = 'https://api.nasa.gov/planetary/apod?api_key=' + API_NASA_KEY;
  try {
    const result: AxiosResponse<any, any> = await axios.get(URL);

    const content: INasaDataApi = result.data;

    return content;
  } catch (e: any) {
    return e;
  }
};

export default ApiNasaRequest;
