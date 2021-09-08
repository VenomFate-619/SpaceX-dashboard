import   axios  from 'axios'
import { QueryResult } from "../redux/types/Query";

const baseUrl = "https://api.spacexdata.com/v4/";
export const launchesUrl = "launches/query";
export const rocketsUrl = "rockets/query";

export const getData = async <T>(uri:string,query:any) =>{

    const { data } = await axios.post<QueryResult<T>>(baseUrl + uri, query);
    return data
}
