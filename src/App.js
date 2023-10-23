import logo from './logo.svg';
import './App.css';
import PageHeader from "./components/pageHeader/PageHeader";
import Search from "./components/Search/Search";
import Transactions from "./components/Transactions/Transactions";

function App() {
    return (
        <>
            <PageHeader/>
            <Search/>
            <Transactions/>
        </>
    );
}

export default App;
