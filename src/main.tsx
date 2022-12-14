import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import store from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { ToastContainer } from 'react-toastify';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <PersistGate persistor={persistor}>
      <App />
      <ToastContainer />
    </PersistGate>
    {/* </React.StrictMode> */}
  </Provider>
);
