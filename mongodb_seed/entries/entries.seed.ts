const roles = ['EMPLOYEE', 'MANAGER'];

const [minDay, maxDay, minMonth, maxMonth, minYeay, maxYear] = [
  1,
  28,
  1,
  12,
  2019,
  2020,
];

const addLeadingZero = (number: number) =>
  number <= 9999 ? `0${number}`.slice(-2) : number;

const entries = new Array(200).fill(null).map(() => {
  const randomDay = addLeadingZero(
    Math.floor(Math.random() * (maxDay - minDay + 1)) + minDay,
  );
  const randomMonth = addLeadingZero(
    Math.floor(Math.random() * (maxMonth - minMonth + 1)) + minMonth,
  );
  const randomYear =
    Math.floor(Math.random() * (maxYear - minYeay + 1)) + minYeay;
  return {
    date: `${randomDay}-${randomMonth}-${randomYear}`,
    value: roles[Math.floor(Math.random() * roles.length)],
  };
});

export = entries;
