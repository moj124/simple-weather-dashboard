const getForecastParams = (geoPosition: number[]) => {
    const endpoint = 'v4/weather/forecast';
    const location = `?location=${geoPosition.join(',')}`;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const apiKey = `apikey=${API_KEY}`;

    return endpoint + location + '&' + apiKey;
};
export default getForecastParams;