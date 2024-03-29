export const RecentLaunchesQuery = {
  query: {
    date_utc: {
      $lte: new Date(),
    },
    upcoming: 0,
  },
  options: {
    limit: 5,
    select: {
      name: 1,
      id: 1,
      date_local: 1,
      date_utc: 1,
      success: 1,
      links: 1,
      flight_number: 1,
    },
    populate: [
      {
        path: "fairings",
        select: {
          recovered: 1,
        },
      },
      {
        path: "cores",
        select: {
          landing_success: 1,
        },
        populate: [
          {
            path: "landpad",
            select: {
              name: 1,
              full_name: 1,
              landing_success: 1,
            },
          },
        ],
      },
      "payloads",
      {
        path: "launchpad",
        select: {
          name: 1,
          full_name: 1,
        },
      },
      {
        path: "rocket",
        select: {
          name: 1,
          id: 1,
        },
      },
    ],
    sort: {
      flight_number: "desc",
    },
  },
};
