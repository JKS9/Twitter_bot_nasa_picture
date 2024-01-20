import {CronJob} from 'cron';

import TweetControllerNasaPIcture from './controller/tweetNasaPIcture';
import TweetControllerMarsWeather from './controller/tweetMarsWeather';

const day = '0 2 * * *';
const hour = '0 */6 * * *';
const minute = '*/10 * * * * *';

const work_1: CronJob = new CronJob(hour, () => {
  TweetControllerNasaPIcture();
});

work_1.start();

const work_2: CronJob = new CronJob(day, () => {
  TweetControllerMarsWeather();
});

work_2.start();
