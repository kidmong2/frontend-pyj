import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';

// 폴더명까지만 명시하는 경우 해당 폴더의 index라는 이름의 파일을 가져옴
import Index0624 from './views/0624';
import Index0621 from './views/0621';
import Index0625 from './views/0625';
import Index0626 from './views/0626';
import Index0627 from './views/0627';
import Index0628 from './views/0628';
import Index0701 from './views/0701';
import Index0702 from './views/0702';
import Index0703 from './views/0703';
import Index0704 from './views/0704';


import NavigationBar from './components/NavigationBar';
import Headers from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Headers/>
      <NavigationBar/>

      {/* Routes 태그 */}

      <Routes>
        <Route path='/0621' element={<Index0621 />}/>
        <Route path='/0624' element={<Index0624 />}/>
        <Route path='/0625' element={<Index0625 />}/>
        <Route path='/0626' element={<Index0626 />}/>
        <Route path='/0627' element={<Index0627 />}/>
        <Route path='/0628' element={<Index0628 />}/>
        <Route path='/0701' element={<Index0701 />}/>
        <Route path='/0702' element={<Index0702 />}/>
        <Route path='/0703' element={<Index0703 />}/>
        <Route path='/0704' element={<Index0704 />}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App;
