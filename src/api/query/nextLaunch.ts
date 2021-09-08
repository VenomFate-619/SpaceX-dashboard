export const NextLaunch = {
  query: {
    upcoming: true,
  },
  options: {
    limit: 1,
    select: {
      name: 1,
      id: 1,
      date_local: 1,
      date_precision: 1,
    },
    sort: {
      flight_number: "asc",
    },
  }
};
