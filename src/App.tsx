import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal/Index";
import { Dashboard } from "./components/Dashboard/intex";


Modal.setAppElement('#root')


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
  // function handleOpenNewTransactionModal() {
  //     setIsNewTransactionModalOpen(true)
  // }
  // function handleCloseNewTransactionModal() {
  //     setIsNewTransactionModalOpen(false)
  // }
  function handleSetNewTransactionModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleSetNewTransactionModal}/>
      <Dashboard/>

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleSetNewTransactionModal}/>

      <GlobalStyle/>
    </>
  );
}


