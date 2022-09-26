import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppThunk } from "../store";
import { QueryResult } from "../types/Query";
import { Launches } from "../types/Launches";
import { getData, launchesUrl } from "../../api/api";
import { LaunchQuery } from "../../api/query/launchesQuery";
import { NextLaunch } from "../../api/query/nextLaunch";
import { UpcomingLaunchesQuery } from "../../api/query/upcomingLaunch";
import { RecentLaunchesQuery } from "../../api/query/recentLaunch";

const dataLayout = {
  docs: [],
  totalDocs: 0,
  offset: 0,
  limit: 0,
  totalPages: 0,
  page: 0,
  pagingCounter: 0,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: 0,
  nextPage: 0,
};

export interface LaunchState {
  nextlaunch: QueryResult<Launches>;
  recentlaunch: QueryResult<Launches>;
  upcomingLaunch: QueryResult<Launches>;
  loading: boolean;
}

const initialState: LaunchState = {
  nextlaunch: dataLayout,
  recentlaunch: dataLayout,
  upcomingLaunch: dataLayout,
  loading: true,
};

const launchSlice = createSlice({
  name: "launch",
  initialState,
  reducers: {
    getStarted(state) {
      state.loading = true;
    },
    getError(state) {
      state.loading = false;
    },
    getNextlaunchData(state, action: PayloadAction<QueryResult<Launches>>) {
      state.loading = false;
      state.nextlaunch = action.payload;
    },
    getRecentLaunchData(state, action: PayloadAction<QueryResult<Launches>>) {
      state.loading = false;
      state.recentlaunch = action.payload;
    },
    getUpcomingLaunchData(state , action:PayloadAction<QueryResult<Launches>>)
    {
      state.loading = false;
      state.upcomingLaunch = action.payload;
    }
  },
});

export const { getStarted, getError, getNextlaunchData, getRecentLaunchData ,getUpcomingLaunchData } =
  launchSlice.actions;

export default launchSlice.reducer;

export const fetchLaunchById =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getStarted());
      let query = LaunchQuery;
      query.query._id = id;
      const launch = await getData<Launches>(launchesUrl, query);
      // dispatch(getLaunchData(launch));
    } catch (error) {
      dispatch(getError());
    }
  };

export const fetchNextUpcomingLaunch = () : AppThunk => async (dispatch) =>{
  try {
    dispatch(getStarted())
     const NextUpcomingLaunchData = await getData<Launches>(
       launchesUrl,
       NextLaunch
     );
     dispatch(getNextlaunchData(NextUpcomingLaunchData));
  } catch (error) {
     dispatch(getError());
  }
}

export const fetchRecentLaunch = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getStarted());
    const recentLaunchData = await getData<Launches>(
      launchesUrl,
      RecentLaunchesQuery
    );    
   
    
    dispatch(getRecentLaunchData(recentLaunchData));
  } catch (error) {
    dispatch(getError());
  }
};

export const fetchUpcomingLaunch = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getStarted());
    const upcomingLaunchData = await getData<Launches>(
      launchesUrl,
      UpcomingLaunchesQuery
    );
    
    dispatch(getUpcomingLaunchData(upcomingLaunchData));
  } catch (error) {
    dispatch(getError());
  }
};

