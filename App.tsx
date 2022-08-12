import React from 'react';
import { Routes } from './src/Route';
import { Provider as PaperProvider } from 'react-native-paper';


const App = () => {

  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
};

export default App;