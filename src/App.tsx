import {  useState } from 'react';
import { FaSearch } from "react-icons/fa";
// import ResultsList from './components/ResultsList';
import './App.css';
import useFetchData from './hooks/useFetchData';
import getLocationParams from './utils/getLocationParams';
import { GetLocationApiResponse } from './types/GetLocationApiResponse';

function App() {
  const [search, setSearch] = useState<string | null>(null);

  const locationParams = getLocationParams();
  const query= useFetchData<GetLocationApiResponse>(search, locationParams);
  console.log('query', query)
  //TODO filter
  const locations = query.response?.data.locations;

  return (
    <>
      <div className="app__wrapper">
        <FaSearch 
          color="black"
          fontSize="1.5em"
          className='app_icon'
        />
        <input 
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          placeholder='Type to search...'
          className='app__input'
        />
      </div>
      {/* <ResultsList location={query}/> */}
      {query.isLoading && <p>Loading...</p>}
      {query.isError && <p>Error loading data.</p>}
      {query.response && <pre>{JSON.stringify(query.response, null, 2)}</pre>}
    </>
  )
}

export default App;
