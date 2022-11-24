import React, { useEffect, useState } from 'react';
import axios from '../../config/AxiosClient';

const Dashboard = () => {
  const [data, setData] = useState<any>(null);
  const fetchUser = async () => {
    try {
      const { data } =  await axios.get('/api/v1/auth/me');
      setData(data.data);
    } catch(err: any) {
      if (err?.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.reload();
      }
      console.log(err?.response?.data.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.email}</p>
    </div>
  );
};

export default Dashboard;