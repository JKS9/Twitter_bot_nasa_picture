import {CronJob} from 'cron';

import TweetController from './controller/tweet';

const job: CronJob = new CronJob('0 */6 * * *', () => {
  TweetController();
});

job.start();
