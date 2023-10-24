import './Search.css';
import {useState} from "react";

const Search = () => {

    const [orderId, setOrderId] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [hasBeenEdited, setHasBeenEdited] = useState(false);

    const handleChange = (event) => {
        console.log(event.target)
        console.log(event.target.value);
        console.log(event.target.id);
        setOrderId(event.target.value);
        setIsValid(event.target.value.trim().length > 0);
        setHasBeenEdited(true);
    }

    const doSearch = (event) => {
        event.preventDefault();
        console.log("searching for " + orderId);
    }

    return (
        <div className="searchBox">
            <form onSubmit={doSearch}>
                <label htmlFor="orderId">Order Id:</label>
                <input onChange={handleChange} value={orderId} id="orderId" type="text"
                    style={ {border : isValid || !hasBeenEdited ? "1px solid black" : "1px solid red"}   }
                />
                <button disabled={!isValid}  type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search
