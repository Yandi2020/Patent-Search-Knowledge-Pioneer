import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Search from "./components/Search";
import List from "./components/List";
import AuthContextProvider from "./components/AuthContext";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
          <Navbar />

          <div className='wrapper'>
            <BrowserRouter>
              <Switch>
                
                <Route exact path='/' 
                  render={proprs => (
                    <div>
                      <Search />
                      <List />
                    </div>
                  )}
                />

                <Route path='/login' component={ Login } />
              </Switch>
            </BrowserRouter>
          </div>
      </AuthContextProvider>
    </div>
  );
}

export default App;

