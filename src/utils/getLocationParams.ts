const getLocationParams = () => {
    const endpoint = 'v4/locations';
    const API_KEY = import.meta.env.VITE_API_KEY;
    const apiKey = `apikey=${API_KEY}`;
   
    return endpoint + '?' +apiKey;
  };
  export default getLocationParams