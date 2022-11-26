import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const userState = useSelector((state: any) => state.user.user);

  return (
    <div>
      <p>Home</p>
      <p>Name: { userState.data.name }</p>
      <p>Role: { userState.data.roles }</p>
    </div>
  );
};

export default Home;