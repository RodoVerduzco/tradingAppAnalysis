import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { getSeriesError } from '../../core/adapters/AnalysisRequests';
import { useErrorUpdate } from '../../core/contexts/ErrorContext';

const ErrorPage = () => {
  const history = useHistory();
  const updateError = useErrorUpdate();

  useEffect(() => {
    if (history.location.pathname === '/workspace2') {
      getSeriesError().then((response) => {
        if (!response.ok) {
          let responseError = {
            show: true,
            code: response.status,
            text: 'No está autorizado para realizar esta operación',
          };
          updateError(responseError);
        }
      });
    }
  }, []);

  return <span></span>;
};

export default ErrorPage;
