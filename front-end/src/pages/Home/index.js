import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';

const Home = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle('Comics');
  }, []);
  return (
    <div>
      <Menu title={ title } />
    </div>
  );
};

export default Home;
