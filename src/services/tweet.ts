import rwClient from '../config/twitterClient';

const TweetApi = async (tweet: string) => {
  try {
    await rwClient.v2.tweet(tweet);

    console.log('tweet send :' + new Date());
  } catch (e) {
    console.error(e);
  }
};

export default TweetApi;
