import React, { useState } from "react";

export const RootContext = React.createContext();

function RootProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <RootContext.Provider
      value={{
        isLoading,
        error
      }}
    >
      {props.children}
    </RootContext.Provider>
  );
}

export default RootProvider;
