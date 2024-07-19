interface QueryType<T> {
  response: T | null;
  isLoading: boolean;
  isError: boolean;
}
export default QueryType;