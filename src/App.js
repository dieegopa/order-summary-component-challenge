import React from "react";
import Credits from "./components/Credits";
import OrderSummary from "./components/OrderSummary";

function App() {
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <div className="contenedor">
          <OrderSummary />
          <Credits/>
        </div>
      </main>
    </>
  );
}

export default App;
