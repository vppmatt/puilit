import logo from './logo.svg';
import './App.css';
import PageHeader from "./components/pageHeader/PageHeader";
import Search from "./components/Search/Search";
import Transactions from "./components/Transactions/Transactions";
import {useState} from "react";
import AddTransaction from "./components/add/AddTransaction";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FindPage from "./components/FindPage";

function App() {

    return (
        <BrowserRouter>
            <PageHeader/>

            <Routes>
                <Route path="/find" element ={ <FindPage /> } />
                <Route path="/search" element ={ <FindPage /> } />
                <Route path="/add" element = { <AddTransaction /> } />
                <Route path="/" element = { <h1>Welcome to the payments app</h1>} />
                <Route path="*" element={<h1>Page not found</h1>} />

             </Routes>

        </BrowserRouter>
    );
}

export default App;
