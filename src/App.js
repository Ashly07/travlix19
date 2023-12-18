import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

 import HomeScreen from "./screen/home";
 import AboutScreen from "./screen/about";
 import DestinationScreen from "./screen/destination";
 import HotelsScreen from "./screen/hotels";
 import ContactScreen from "./screen/contact";
 import AdminDestinationScreens from "./screen/admin-destination";
 import AdminHotelScreen from "./screen/admin-hotal";
 import DataSharingContext from "./contest/data-sharing-context";


import "./css/flaticon.css";
import "./css/style.css";
import "./css/App.css";

const App = () => {

  const [sharedData, updateSharedData] = useState([]);

  const globalFunction = (data) => {
    updateSharedData(data);
  }

  return(
    <DataSharingContext.Provider value={{globalFunction, sharedData}}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeScreen></HomeScreen>}></Route>
          <Route path="about" element={<AboutScreen></AboutScreen>}></Route>
          <Route path="destination" element={<DestinationScreen></DestinationScreen>}></Route>
          <Route path="hotels" element={<HotelsScreen></HotelsScreen>}></Route>
          <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
          
          <Route path="admin/destination" element={<AdminDestinationScreens></AdminDestinationScreens>}></Route>
          <Route path="admin/hotel" element={<AdminHotelScreen></AdminHotelScreen>}></Route>
        </Routes>
      </BrowserRouter>
    </DataSharingContext.Provider>
  )
}

export default App;
