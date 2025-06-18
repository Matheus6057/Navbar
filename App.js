import React from 'react';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <h1>Bem-vindo ao meu site!</h1>
        </section>
        <section id="about">
          <h1>Sobre nós</h1>
        </section>
        <section id="services">
          <h1>Nossos Serviços</h1>
        </section>
        <section id="contact">
          <h1>Contato</h1>
        </section>
      </main>
    </div>
  );
}


export default App;


