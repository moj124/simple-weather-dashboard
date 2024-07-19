import {  useCallback, useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
// import ResultsList from './components/ResultsList';
import './App.css';
import useFetchData from './hooks/useFetchData';
import getLocationParams from './utils/getLocationParams';
import { GetLocationApiResponse, Location } from './types/GetLocationApiResponse';
import SearchLocation from './types/SearchLocation';
import ResultsList from './components/ResultsList';

const initialLocation: SearchLocation = {
  name: 'london',
  location: [51.509865, -0.118092]
}

function App() {
  const [search, setSearch] = useState<SearchLocation>(initialLocation);
  const [filterLocations, setFilterLocations] = useState<SearchLocation[]>([]);

  const locationParams = getLocationParams();
  const query = useFetchData<GetLocationApiResponse>(search.name, locationParams);

  useEffect(() => {
    if (query.response?.data.locations) {
      const locations = query.response.data.locations.map(({ name, geometry }: Location) => ({
        name: name,
        location: geometry.coordinates
      }));
      setFilterLocations(locations);
    }
  }, [query.response]);

  const handleFindLocationSelected = useCallback((searchName: string): SearchLocation => {
    return filterLocations.find((elem) => (elem.name === searchName)) || initialLocation;
  }, [filterLocations]);
  return (
    <>
      <div className="app__wrapper">
        <FaSearch 
          color="black"
          fontSize="1.5em"
          className='app_icon'
        />
        <select 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSearch(handleFindLocationSelected(e.target.value))}
          defaultValue={initialLocation.name}
          className='app__input'
        >
          {filterLocations.length > 0 ? (
            filterLocations.map((elem, index) => (
              <option key={index} value={elem.name}>{elem.name}</option>
            ))
          ) : (
            <option key={0} value={initialLocation.name}>{initialLocation.name}</option>
          )}
        </select>
      </div>
      <ResultsList location={search.location}/>
      {query.isLoading && <p>Loading...</p>}
      {query.isError && (
        <p>Error loading data, please try again.</p>
      )}
      {query.response && <pre>{JSON.stringify(query.response, null, 2)}</pre>}
    </>
  )
}

export default App;

