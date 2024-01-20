import axios, {AxiosResponse} from 'axios';
import 'dotenv/config';

const ApiMarsWeather = async () => {
  const URL =
    'https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json';
  try {
    const result: AxiosResponse<any, any> = await axios.get(URL);

    const content = result.data.soles[0];

    return content;
  } catch (e: any) {
    return e;
  }
};

export default ApiMarsWeather;
