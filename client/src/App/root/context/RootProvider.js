import React, { useState, useEffect, useReducer } from "react";
import { searchMovieRequest, getMovieRequest } from "../../../Services/omdbApi";
import { searchListMap, movieMap } from "../mapping/searchListMap";
import searchListReducer from "./reducers/searchListReducer";

export const RootContext = React.createContext();

function RootProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchList, searchListDispatch] = useReducer(searchListReducer, {});
  const [response, setResponse] = useState(null);
  const [results, setResults] = useState(0);
  const [page, setPage] = useState(1);

  const search = value => {
    if (value === "") {
      searchListDispatch({
        type: "reset"
      });
      setResponse(null);
      setResults(0);
    } else {
      setIsLoading(true);
      setSearchPhrase(value);
      searchMovieRequest(value, 1)
        .then(response => {
          var result = response.data.Search.reduce(searchListMap, {});

          searchListDispatch({
            type: "add",
            payload: result
          });
          Object.keys(result).map(item => {
            getMovieRequest(item)
              .then(response => {
                searchListDispatch({
                  type: "update",
                  id: item,
                  payload: movieMap(response.data)
                });
              })
              .catch(error => {
                setError(error);
                setIsLoading(false);
              });
          });
          setResponse(response.data.Response);
          setResults(response.data.totalResults);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error);
          setIsLoading(false);
        });
    }
  };

  return (
    <RootContext.Provider
      value={{
        isLoading,
        error,
        search,
        searchPhrase,
        searchList,
        response,
        results,
        page,
        setPage
      }}
    >
      {props.children}
    </RootContext.Provider>
  );
}

export default RootProvider;
