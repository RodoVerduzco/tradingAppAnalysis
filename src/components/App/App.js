import React from 'react';

import { SideBarProvider } from '../../core/contexts/SideBarContext';
import { ProfileProvider } from '../../core/contexts/ProfileContext';
import { TableMenuProvider } from '../../core/contexts/TableMenuContext';
import Layout from '../Layout/Layout';

const App = () => {
  return (
    <div>
      <SideBarProvider>
        <ProfileProvider>
          <TableMenuProvider>
            <Layout />
          </TableMenuProvider>
        </ProfileProvider>
      </SideBarProvider>
    </div>
  );
};

export default App;
