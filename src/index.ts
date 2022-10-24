import {CronJob} from 'cron';

import TweetController from './controller/tweet';

const job: CronJob = new CronJob('*/10 * * * * *', () => {
  TweetController();
});

job.start();
