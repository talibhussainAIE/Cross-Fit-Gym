import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-jjgtlcmvb3dvo5kn.us.auth0.com"
  clientId="wuOlGDmOQoyflQEsAqwH3CFbDtCnYaTb"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}

  >
    {/* <AppProvider> */}
    <App />
    
    {/* </AppProvider> */}
  </Auth0Provider>,
)
