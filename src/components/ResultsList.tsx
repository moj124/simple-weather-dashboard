import { useEffect, useState } from "react";
import getApiResponse from "../utils/getApiResponse";
import getLocationParams from "../utils/getLocationParams";
import useFetchData from "../hooks/useFetchData";
import getForecastParams from "../utils/getForecastParams";
import QueryType from "../types/QueryType";

interface ResultsListProps {
    location: number[];
}

const columns = [];

function ResultsList({location}: ResultsListProps) {
    const [query, setQuery] = useState<QueryType | null>(null);

    const forecastParams = getForecastParams();
    // const responseData = useFetchData(location.join(','), forecastParams);
    //TODO filter
    // setQuery(responseData);
  return (
    <>
        {/* {list.map((elem, index) => {
            <div key={index} className="">
                <p>{elem}</p>
                <div className=""></div>
            </div>
        })} */}
    </>
  )
}
export default ResultsList;