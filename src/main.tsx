import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { store } from "./index.tsx";
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/router/router.tsx';
import Header from './components/master/Header.tsx';
import Footer from './components/master/Footer.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Header/>
          <main>
              <RouterProvider router={router} />
          </main>
      <Footer/>
    </Provider>
  </React.StrictMode>,
)
