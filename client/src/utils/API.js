import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function (UserData) {
    return axios.post("/api/user", UserData);
  },

  getPets: function () {
    return axios.get("/api/user/pets");
  },
  savePet: function (PetData){
    return axios.post("/api/user/pets", PetData);
  },
  login: function (UserData) {
    return axios.post("/api/user/login", UserData);
  },
  getUser: function () {
    return axios.get("api/user/currentuser");
  },
};
