
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/userSlice';
import ButtonAuth from '../UI/Button/ButtonAuth';
import UserBar from '../UserBar/UserBar';
import '../../styles/Authnav.scss';

export const AuthNav = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='auth_nav'>
      {user ? (
        <UserBar avatar={user.avatar} name={user.name} onLogout={handleLogout} />
      ) : (
        <>
          <ButtonAuth text="Log In" to="/login" className="login" />
          <ButtonAuth text="Registration" to="/registration" className="registration" />
        </>
      )}
    </div>
  );
};
