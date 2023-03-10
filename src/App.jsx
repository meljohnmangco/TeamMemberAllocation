
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Employees from "./Employees";
import GroupedTeamMembers from "./GroupedTeamMembers";
import NotFound from "./NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { DataProvider } from './context/DataContext';


function App() {
  return (
    <div className="app">
	    <DataProvider>
    		<HashRouter basename="/">
	    		<Nav />
	    		<Header/>
	    			<Routes>
	    				<Route path="/" element = {<Employees/>}>    			
	    				</Route>
	    				<Route path="/GroupedTeamMembers" element = {<GroupedTeamMembers/>}>
	    				</Route>
	    				<Route path="*" element={<NotFound/>}>
	    				</Route>
	    			</Routes>
	    		<Footer/>
				</HashRouter>
	    </DataProvider>
    </div>
  );
}

export default App;
