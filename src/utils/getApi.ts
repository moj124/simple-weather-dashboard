const getApi = async <T>(url: string, signal: AbortSignal): Promise<T> => {
    const response = await fetch(url, { signal });
  
    if (response.ok === false) throw new Error('Network response was not ok');
  
    const data = await response.json();
  
    if(!data) throw new Error('Data is empty');
  
    return data;
  }
export default getApi;