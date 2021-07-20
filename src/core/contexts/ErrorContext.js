import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ErrorContext = React.createContext();
const ErrorUpdateContext = React.createContext();

export function useError() {
  return useContext(ErrorContext);
}

export function useErrorUpdate() {
  return useContext(ErrorUpdateContext);
}

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState({
    code: -1,
    title: '',
    text: '',
    show: false,
  });

  function updateError(value) {
    let newError = {
      code: -1,
      text: '',
      show: true,
    };

    newError.code = value.code;
    newError.text = value.text;
    newError.show = value.show;

    setError(newError);
  }

  return (
    <ErrorContext.Provider value={error}>
      <ErrorUpdateContext.Provider value={updateError}>
        {children}
      </ErrorUpdateContext.Provider>
    </ErrorContext.Provider>
  );
};

ErrorProvider.propTypes = {
  children: PropTypes.node,
};
