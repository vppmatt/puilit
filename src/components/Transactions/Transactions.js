import './Transactions.css';
import TransactionTableRow from "./TransactionTableRow";
import {getAllCountries, getAllPaymentsForCountry} from "../../data/dataFunctions";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

const Transactions = () => {

    console.log("transactions is rendering")
    const [transactions, setTransactions] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelecteCountry] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();

    const getTheData = () => {
        setLoading(true);
        const paymentsPromise = getAllPaymentsForCountry(selectedCountry);
        paymentsPromise.then(response => {
            if (response.status === 200) {
                setTransactions(response.data);
                setLoading(false);
            } else {
                setErrorMessage("something went wrong " + response.status)
            }
        })
            .catch(error => setErrorMessage("error : " + error));
    }

    useEffect( () => {
        getAllCountries()
            .then(response => {
                setCountries(response.data.sort());
                const country = searchParams.get("country");
                if (selectedCountry !== country) {
                    setSelecteCountry(country);
                }
            })
            .catch(error => setErrorMessage("error : " + error));
        }
    , []);

    useEffect( () => {
        if (selectedCountry !== "") getTheData();
    }, [selectedCountry])

    const handleCountryChange = (event) => {
        setSelecteCountry(event.target.value);
        setSearchParams({country: event.target.value})
    }

    return (
        <div>
            <div style={ {marginLeft: "auto", marginRight: "auto", width: "fit-content", marginTop: "50px"}   } >
                Select country: <select value={selectedCountry} onChange={handleCountryChange} >
                <option value="" disabled={true}>---select---</option>
                {countries.map( country => <option value={country} key={country} >{country}</option>)}
            </select></div>
            {loading && <p>Please wait...loading</p>}
            <p style={{textAlign: "center", color: "red"}}>{errorMessage}</p>
            { selectedCountry !== "" &&
            <table className="transactionsTable">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Date</th>
                            <th>Country</th>
                            <th>Currency</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {transactions.map(transaction => <TransactionTableRow key={transaction.id}
                                                                              id={transaction.id}
                                                                              country={transaction.country}
                                                                              currency={transaction.currency}
                                                                              date={transaction.date}
                                                                              amount={transaction.amount}/>) }
                        </tbody>
                    </table>
            }
            {selectedCountry === "" && <p style={ {marginLeft: "auto", marginRight: "auto", width: "fit-content"}   }>Please select a country</p>}
                </div>
          
    )
        ;
}

export default Transactions
