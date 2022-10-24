import {CronJob} from 'cron';

import TweetController from './controller/tweet';

const hour = '0 */6 * * *';
const minute = '*/10 * * * *';

const job: CronJob = new CronJob(minute, () => {
  TweetController();
});

job.start();
