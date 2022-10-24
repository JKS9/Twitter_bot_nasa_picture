import {INasaDataApi} from '../types/interface';

import {htag} from '../constant/htag';

const FormatContent = async (content: INasaDataApi) => {
  const text: string = content.explanation.substring(0, 90);

  let tweet: string =
    content.title +
    '\n \n' +
    text +
    '...\n \n' +
    content.date +
    '\n' +
    content.copyright +
    '\n' +
    htag +
    '\n \n' +
    content.hdurl;

  return tweet;
};

export default FormatContent;
