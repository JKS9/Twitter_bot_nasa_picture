import {INasaDataApi} from '../types/interface';

import {htag} from '../constant/htag';

const FormatContent = async (content: INasaDataApi) => {
  const random = Math.floor(Math.random() * 500);
  const text: string = content.explanation.substring(0, 90);
  const url: string = content.hdurl != undefined ? content.hdurl : content.url;

  let tweet: string =
    random +
    ' - ' +
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
    url;

  return tweet;
};

export default FormatContent;
