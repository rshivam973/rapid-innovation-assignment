// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './slices/themeSlice';
import Footer from './components/Footer';

const App = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    }
  }, [dispatch]);

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/contact-us" element={<ContactUs theme={theme} />} />
        </Routes>
      </BrowserRouter>
      <Footer theme={theme} />
    </div>
  );
};

export default App;
