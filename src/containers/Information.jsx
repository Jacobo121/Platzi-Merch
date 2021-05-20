import React, { useContext, useRef } from 'react';
import {Link} from 'react-router-dom'; 
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

function Information() {
  const {state, addToBuyer} = useContext(AppContext);
  const form = useRef(null);

  const {cart} = state;


  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <Link to="/checkout/payment">
          <div className="Information-next">
            Pagar
          </div>
          </Link>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
          <div className="Information-element">
            <h4>{item.titel}</h4>
            <span>
              $
              {item.price}
            </span>
          </div>
        </div>
        ))}

      </div>
    </div>
  )
}

export default Information;
