import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../pizzas'; // Importación obligatoria del set completo

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container my-5">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-4" key={pizza.id}>
              {/* Pasamos las propiedades dinámicas solicitadas */}
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
