import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './Components/utils/global.context';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home';
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} >
          <Route path='/' element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='detail' element={<Detail/>}/>
          <Route path='detail/:id' element={<Detail/>}/>
          <Route path='favs' element={<Favs/>}/>
          <Route path='favs/:id' element={<Favs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);


