const moods = ['BAD', 'NEUTRAL', 'GOOD'];

const startDate = new Date('2020-01-03');

const randomDate = (start, end) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const entries = new Array(200).fill(null).map(() => {
  return {
    date: randomDate(startDate, new Date()),
    value: moods[Math.floor(Math.random() * moods.length)],
  };
});

export = entries;
