import React from "react";
import imagen from "../assets/illustration-hero.svg";
import music from "../assets/icon-music.svg";

const OrderSummary = () => {
  return (
    <section className="card my-0 mx-auto bg-white max-w-sm rounded-3xl text-center ">
      <img src={imagen} alt="hero" className="my-0 mx-auto rounded-t-3xl" />
      <article className="p-8">
        <h1 className="text-2xl mb-6">Order Summary</h1>
        <p className="mb-6">
          You can now listen to millions of songs, audiobooks, and podcast on
          any device anywhere you like!
        </p>
        <article className="inline-grid grid-cols-5 p-5 plan mb-6 rounded-xl items-center">
          <img src={music} alt="music" />
          <div className="col-span-2">
            <h2>Annual Plan</h2>
            <p>$59.99/year</p>
          </div>
          <a href="/" className="col-start-5 link">
            Change
          </a>
        </article>
        <button
          type="button"
          className="w-full block boton py-3 px-5 rounded-lg text-white text-sm mb-5 font-bold"
        >
          Procced to Payment
        </button>

        <a href="/" className="cancel text-sm">
          Cancel Order
        </a>
      </article>
    </section>
  );
};

export default OrderSummary;
