import React from 'react';

import { SideBarProvider } from '../../core/contexts/SideBarContext';
import { ProfileProvider } from '../../core/contexts/ProfileContext';
import Layout from '../Layout/Layout';

const App = () => {
  return (
    <div>
      <SideBarProvider>
        <ProfileProvider>
          <Layout />
        </ProfileProvider>
      </SideBarProvider>
    </div>
  );
};

export default App;
