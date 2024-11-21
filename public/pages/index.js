// pages/index.js
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TestChat from '../components/TestChat';

const Home = () => {
  const [content, setContent] = useState('Content 1');

  return (
    <div className="flex">
      <Sidebar setContent={setContent} />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          <h2 className="text-2xl">Agent Management</h2>
          <p>{content}</p>
        </div>
        <TestChat />
      </div>
    </div>
  );
};

export default Home;
