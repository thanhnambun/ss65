import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { UserProfile } from '../../store/reducers/profileReducer.ts';

const Profile: React.FC = () => {
  const users = useSelector((state: RootState) => state.users);

  return (
    <div>
      {users.map((user: UserProfile) => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>User Name: {user.userName}</p>
          <p>Gender: {user.gender}</p>
          <p>Date of Birth: {user.dateBirth}</p>
          <p>Address: {user.address}</p>
        </div>
      ))}
    </div>
  );
}

export default Profile;