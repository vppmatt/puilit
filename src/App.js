import logo from './logo.svg';
import './App.css';
import PageHeader from "./components/pageHeader/PageHeader";
import Search from "./components/Search/Search";
import Transactions from "./components/Transactions/Transactions";
import {useState} from "react";
import AddTransaction from "./components/add/AddTransaction";

function App() {

    const [currentPage, setCurrentPage] = useState("find");

    return (
        <>
            <PageHeader setCurrentPage = {setCurrentPage} />

            {currentPage === "find" &&
            <>
                <Search/>
                <Transactions/>
            </>
            }
            {currentPage === "add" && <AddTransaction />}
        </>
    );
}

export default App;
