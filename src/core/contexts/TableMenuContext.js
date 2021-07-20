import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

const TableMenuContext = React.createContext();
const TableMenuUpdateContext = React.createContext();

export function useTableMenu() {
  return useContext(TableMenuContext);
}

export function useTableMenuUpdate() {
  return useContext(TableMenuUpdateContext);
}

export const TableMenuProvider = ({ children }) => {
  const [tableMenuInfo, setTableMenuInfo] = useState({
    index: -1,
    title: '',
    data: [],
  });

  function updateTableMenuInfo(value) {
    let newTableMenuInfo = {
      index: -1,
      title: '',
      data: [],
    };

    if (value.index !== tableMenuInfo.index) {
      newTableMenuInfo.index = value.index;
      newTableMenuInfo.title = value.title;
      newTableMenuInfo.data = value.data;
    }

    setTableMenuInfo(newTableMenuInfo);
  }

  return (
    <TableMenuContext.Provider value={tableMenuInfo}>
      <TableMenuUpdateContext.Provider value={updateTableMenuInfo}>
        {children}
      </TableMenuUpdateContext.Provider>
    </TableMenuContext.Provider>
  );
};

TableMenuProvider.propTypes = {
  children: PropTypes.node,
};
