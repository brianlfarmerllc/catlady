import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navbar";
import PetInfoForm from "./components/petInfoForm/petInfoForm";
import Wrapper from "./components/Wrapper";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard";
import PetFoodForm from "./pages/PetFoodForm/PetFoodForm";
import FoodTable from "./pages/FoodTable/FoodTable";
import PetProfile from "./pages/PetProfile/petProfile";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

toast.configure()
const App = () => {

  //For food form and pet form
  const initalForm = {};

  const [form, setForm] = useState(initalForm);

  // get info on signed in user
  const [userData, setUserData] = useState({
    username: "",
    id: "",
  });

  // state of selected pet from dashboard
  const [currentPet, setCurrentPet] = useState({})


  return (
    <Router>
      <div className='App'>
        <Navigation setUserData={setUserData} userData={userData}/>
        <Wrapper>
          <Route
            exact
            path="/login"
            render={(props) =>
              userData.username !== "" ? (
                <Redirect to="/" />
              ) : (
                  <Login setUserData={setUserData} />
                )
            }
          />

          <Route
            exact
            path="/signup"
            render={(props) =>
              userData.username !== "" ? (
                <Redirect to="/" />
              ) : (
                  <SignUp
                    setUserData={setUserData}
                  />
                )
            }
          />

          <Route
            exact
            path="/"
            render={(props) =>
              userData.username === "" ? (
                <Redirect to="/login" />
              ) : (
                  <Dashboard
                    userData={userData}
                    setCurrentPet={setCurrentPet}
                  />
                )
            }
          />

          <Route
            exact
            path="/newPet"
            render={(props) =>
              userData.username === "" ? (
                <Redirect to="/login" />
              ) : (
                  <PetInfoForm
                    form={form}
                    setForm={setForm}
                  />
                )
            }
          />

          <Route
            exact
            path="/petfood"
            render={(props) =>
              userData.username === "" ? (
                <Redirect to="/login" />
              ) : (
                  <PetFoodForm
                    form={form}
                    setForm={setForm}
                  />
                )
            }
          />

          <Route
            exact
            path="/petfoods"
            render={(props) =>
              userData.username === "" ? (
                <Redirect to="/login" />
              ) : (
                  <FoodTable />
                )
            }
          />

          <Route
            exact
            path="/petProfile"
            render={(props) =>
              userData.username === "" ? (
                <Redirect to="/login" />
              ) : (
                  <PetProfile
                    currentPet={currentPet}
                    setCurrentPet={setCurrentPet}
                    form={form}
                    setForm={setForm}
                    initalForm={initalForm}
                  />
                )
            }
          />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
