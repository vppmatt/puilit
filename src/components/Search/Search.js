import './Search.css';
import {useState} from "react";

const Search = () => {

    const [orderId, setOrderId] = useState("");

    const handleChange = (event) => {
        console.log(event.target)
        console.log(event.target.value);
        console.log(event.target.id);
        setOrderId(event.target.value);
    }

    const doSearch = (event) => {
        event.preventDefault();
        console.log("searching for " + orderId);
    }

    return (
        <div className="searchBox">
            <form onSubmit={doSearch}>
                <label htmlFor="orderId">Order Id:</label>
                <input onChange={handleChange} value={orderId} id="orderId" type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search
