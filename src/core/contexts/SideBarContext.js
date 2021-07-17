import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

const SideBarContext = React.createContext();
const SideBarUpdateContext = React.createContext();

export function useSideBar() {
  return useContext(SideBarContext);
}

export function useSideBarUpdate() {
  return useContext(SideBarUpdateContext);
}

export const SideBarProvider = ({ children }) => {
  const [sideBarInfo, setSideBarInfo] = useState(false);

  function updateSideBarInfo() {
    setSideBarInfo(!sideBarInfo);
  }

  return (
    <SideBarContext.Provider value={sideBarInfo}>
      <SideBarUpdateContext.Provider value={updateSideBarInfo}>
        {children}
      </SideBarUpdateContext.Provider>
    </SideBarContext.Provider>
  );
};

SideBarProvider.propTypes = {
  children: PropTypes.node,
};
