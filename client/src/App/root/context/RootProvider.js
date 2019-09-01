import React, { useState } from "react";
import { searchMovieRequest } from "../../../Services/omdbApi";
import searchListMap from "../mapping/searchListMap";

export const RootContext = React.createContext();

function RootProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchList, setSearchList] = useState({});
  const [response, setResponse] = useState(null);

  const search = value => {
    setIsLoading(true);
    setSearchPhrase(value);
    searchMovieRequest(value, 1)
      .then(response => {
        setSearchList(response.data.Search.reduce(searchListMap, {}));
        setResponse(response.data.Response);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  };

  return (
    <RootContext.Provider
      value={{
        isLoading,
        error,
        search,
        searchPhrase,
        searchList,
        response
      }}
    >
      {props.children}
    </RootContext.Provider>
  );
}

export default RootProvider;
