import ApiMarsWeather from '../services/apiMarsWeather';
import formatContentMarsWeather from '../helpers/formatContentMarsWeather';
import TweetApi from '../services/tweet';

const TweetControllerMarsWeather = async () => {
  const content = await ApiMarsWeather();

  const tweet: string = await formatContentMarsWeather(content);

  await TweetApi(tweet);
};

export default TweetControllerMarsWeather;
