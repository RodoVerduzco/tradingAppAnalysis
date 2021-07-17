import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ProfileContext = React.createContext();
const ProfileUpdateContext = React.createContext();

export function useProfile() {
  return useContext(ProfileContext);
}

export function useProfileUpdate() {
  return useContext(ProfileUpdateContext);
}

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: 'Dwayne Johnson',
    image:
      'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
    email: 'therock22@mxmarket.mx',
  });

  function updateProfile(newProfile) {
    setProfile(newProfile);
  }

  return (
    <ProfileContext.Provider value={profile}>
      <ProfileUpdateContext.Provider value={updateProfile}>
        {children}
      </ProfileUpdateContext.Provider>
    </ProfileContext.Provider>
  );
};

ProfileProvider.propTypes = {
  children: PropTypes.node,
};
