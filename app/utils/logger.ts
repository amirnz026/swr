export function logger(useSWRNext) {
  return (key, fetcher, config) => {
    const extendedFetcher = (...args) => {
      console.log("SWR Request:", key);
      return fetcher(...args);
    };

    return useSWRNext(key, extendedFetcher, config);
  };
}
