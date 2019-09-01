import React, { useState } from "react";
import { searchMovieRequest } from "../../../Services/omdbApi";

export const RootContext = React.createContext();

function RootProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const search = () => {
    setIsLoading(true);
    searchMovieRequest("lala", 1)
      .then(response => {
        console.info(response.data);
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
        search
      }}
    >
      {props.children}
    </RootContext.Provider>
  );
}

export default RootProvider;
