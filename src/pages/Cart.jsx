import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, count: pizza.count + 1 }
        : pizza
    );

    setCart(updatedCart);
  };

  const decrease = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      )
      .filter((pizza) => pizza.count > 0);

    setCart(updatedCart);
  };

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  return (
    <div className="cart">
      <h2>Detalles del pedido:</h2>

      {cart.map((pizza) => (
        <div className="cart-item" key={pizza.id}>
          <img src={pizza.img} alt={pizza.name} />

          <span className="cart-name">{pizza.name}</span>

          <strong>
            ${pizza.price.toLocaleString("es-CL")}
          </strong>

          <button onClick={() => decrease(pizza.id)}>-</button>

          <span>{pizza.count}</span>

          <button onClick={() => increase(pizza.id)}>+</button>
        </div>
      ))}

      <h2>
        Total: ${total.toLocaleString("es-CL")}
      </h2>

      <button className="pay-button">Pagar</button>
    </div>
  );
};

export default Cart;