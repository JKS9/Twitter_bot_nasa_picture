import {INasaDataApi} from '../types/interface';

import ApiNasaRequest from '../services/apiNasaRequest';
import TweetApi from '../services/tweet';
import FormatContent from '../helpers/formatContent';

const TweetControllerNasaPIcture = async () => {
  const content: INasaDataApi = await ApiNasaRequest();

  const tweet: string = await FormatContent(content);

  await TweetApi(tweet);
};

export default TweetControllerNasaPIcture;
