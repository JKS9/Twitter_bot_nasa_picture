import TwitterApi, {TwitterApiReadWrite} from 'twitter-api-v2';

import 'dotenv/config';

const client: TwitterApi = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY as string,
  appSecret: process.env.TWITTER_APP_SECRET as string,
  accessToken: process.env.TWITTER_ACCESS_TOKEN as string,
  accessSecret: process.env.TWITTER_ACCESS_SECRET as string,
});

const rwClient: TwitterApiReadWrite = client.readWrite;

export default rwClient;
