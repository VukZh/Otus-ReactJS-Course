// Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  const res = {} as ExpectedTeam;
  Object.entries(originalTeam).map((el) => {
    const [key, value] = el;
    if (key === 'size') {
      res.roster = +value + 10;
    } else if (key === 'name') {
      res.name = 'New York Badgers';
    } else {
      res.league = value.toString();
    }
  });
  return res;
};

// Задание 2
export type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (originalArray: SomeArray): SomeArray => {
  return originalArray.map(el => {
    if (el === 1) {
      return "two";
    } else {
      return +el + 1;
    }
  })
};

// Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeamDeep = (originalTeam: Team): Team => {
  const res = {} as Team;

  Object.entries(originalTeam).map((el) => {
    const [key, value] = el;
    if (key === 'captain') {
      res.captain = { ...originalTeam.captain };
      res.captain.age += 1;
    } else {
      // @ts-ignore
      res[key] = value;
    }
  });

  return res;
}