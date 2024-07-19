interface GetApiResponseTomrrowIO<T> {
  data: T;
  meta?: Meta;
  links?: Links;
}
  
interface Meta {
  totalItems: number;
}
  
interface Links {
  self: string;
}
  
export default GetApiResponseTomrrowIO;
  