// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  teams.sort((t1: Team, t2: Team) => {
    if (t1.score < t2.score) {
      return 1;
    }
    return -1;
  })
  return teams[0].name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  return '?' + Object.entries(qsObj).map((el) => `${el[0]}=${el[1]}`).join('&');
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
  const resArr = qs.replace('?', '').split('&');
  let resObj = {} as QsObj;
  resArr.forEach((el) => {
    const [key, value] = el.split('=');
    resObj = {...resObj, [key]: value}
  });
  return resObj;
};
