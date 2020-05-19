import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import Santa, {Simple as S} from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <section className="page-wrapper">
      <Santa />
      <main className="content">
        <S />
      </main>
      <Footer />
    </section>
  );
}

export default App;
