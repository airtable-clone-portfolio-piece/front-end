import React, { useEffect } from "react";
import { Router } from "react-router-dom";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import axios from "axios"

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading, token } = useAuth0();
  useEffect(()  =>  {

      if(token) {
        axios.get("http://localhost:5000/api/external", {headers: {Authorization: `Bearer ${token}`}})
      }
  }, [token])
  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
      </div>
    </Router>
  );
};

export default App;
