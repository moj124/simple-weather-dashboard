import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import getForecastParams from "../utils/getForecastParams";
import GetForecastApiResponse from "../types/Forecast";

interface ResultsListProps {
    location: number[];
}

interface SelectedForecast {
    time: string,
    averageTemp: number,
}

function ResultsList({location}: ResultsListProps) {
    const [filterForecast, setFilterForecast] = useState<SelectedForecast[]>([]);


    const forecastParams = getForecastParams(location);
    const query = useFetchData<GetForecastApiResponse>(location.join(','), forecastParams);
  
    useEffect(() => {
      if (query.response?.data.timelines.daily) {
        const forecast = query.response.data.timelines.daily.map((elem) => ({
          time: elem.time,
          averageTemp: elem.values.temperatureAvg,
        }));
        setFilterForecast(forecast);
      }
    }, [query.response]);
  return (
    <>
        {filterForecast.map(({time, averageTemp}, index) => {
            <div key={index} className="">
                <h2>{time}</h2>
                <p>{averageTemp}</p>
                <div className=""></div>
            </div>
        })}
    </>
  )
}
export default ResultsList;