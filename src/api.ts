import { useMemo, useState } from "react";
import useFetch from "use-http";
import { apiKey } from "./config";
import { ApiResponse } from "./models";

export function useHeroes() {
  const [page, setPage] = useState(0);

  function loadMore() {
    setPage(page + 1);
  }

  const offset = useMemo(() => page * 30, [page]);

  function onNewData(
    prevResponse: ApiResponse,
    newResponse: ApiResponse,
  ): ApiResponse {
    const nextResponse = { ...prevResponse, ...newResponse };
    nextResponse.data.results = [
      ...prevResponse.data.results,
      ...newResponse.data.results,
    ];
    return nextResponse;
  }

  const response = useFetch<ApiResponse>(
    `https://gateway.marvel.com:443/v1/public/characters?limit=30&offset=${offset}&apikey=${apiKey}`,
    {
      onNewData: onNewData,
      data: {
        data: {
          results: [],
        },
      },
    },
    [page, offset],
  );

  const hasNextPage = useMemo(
    () => {
      return !!(response.data && response.data.code === 200 &&
        (
          response.data.data.offset + response.data.data.count <
            response.data.data.total
        ));
    },
    [response],
  );

  return { ...response, loadMore, hasNextPage };
}
