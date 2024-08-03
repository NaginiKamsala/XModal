import React, { useState } from "react";
import XModal from "./XModal";
import "./App.css";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="app">
      <h1>User Details Modal</h1>
      <button onClick={openModal} class="openbtn">
        Open Form
      </button>
      <XModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
