import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navigation from './components/Navbar';
import Wrapper from './components/Wrapper';
import NewPet from './components/newPet/newPet';
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Dashboard from './pages/Dashboard';
import PetFoodForm from './pages/PetFoodForm/PetFoodForm';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FinalCalculation } from './components/finalCalculation/FinalCalculation';
import { Link, useHistory } from "react-router-dom";


const App = (props) => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    username: "",
    id: "",
  })

  
  return (
    <Router>
      <div>
        <Navigation />
        <Wrapper>
          <Route exact path='/' render={(props) => (<Login setUserData={setUserData} userData={userData} />)} />
          <Route exact path='/signup' component={SignUp} />

          <Route exact path="/dashboard" render={(props) => (
            userData.username === "" ? <Redirect to='/' /> :
              <Dashboard setUserData={setUserData} />
          )}
          />
          <Route exact path="/newPet" render={(props) => (
            userData.username === "" ? <Redirect to='/' /> :
            <NewPet setUserData={setUserData} />
          )}
          />
          <Route exact path="/petfood" render={(props) => (
            userData.username === "" ? <Redirect to='/' /> :
            <PetFoodForm setUserData={setUserData} />
          )}
          />

        </Wrapper>
        <Footer />
      </div>
    </Router>
  )

}

export default App;
