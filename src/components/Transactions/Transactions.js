import './Transactions.css';
import TransactionTableRow from "./TransactionTableRow";
import {getAllCountries, getAllPaymentsForCountry, getAllPaymentsForOrderId} from "../../data/dataFunctions";
import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";

const Transactions = () => {

    const [transactions, setTransactions] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelecteCountry] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const params = useParams();



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
                if (selectedCountry !== country && country != null) {
                    setSelecteCountry(country);
                }
            })
            .catch(error => setErrorMessage("error : " + error));
        }
    , []);

    useEffect( () => {
        if (selectedCountry !== "") getTheData();
    }, [selectedCountry])


    useEffect( () => {
        console.log("search", params.orderId )
        if (params.orderId != null)
            getAllPaymentsForOrderId(params.orderId).then(response => {
                if (response.status === 200) {
                    setTransactions(response.data);
                    setLoading(false);
                } else {
                    setErrorMessage("something went wrong " + response.status)
                }
            })
                .catch(error => setErrorMessage("error : " + error));

    }, [params])

    const handleCountryChange = (event) => {
        setSelecteCountry(event.target.value);
        setSearchParams({country: event.target.value})
    }

    useEffect( () => {
        const country = searchParams.get("country");
        if (selectedCountry !== country) {
            if (country == null) {
                setSelecteCountry("");
            }
            else {
                setSelecteCountry(country);
            }
        }
    }, [searchParams])

    return (
        <div>
            <div style={ {marginLeft: "auto", marginRight: "auto", width: "fit-content", marginTop: "50px"}   } >
                Select country: <select value={selectedCountry} onChange={handleCountryChange} >
                <option value="" disabled={true}>---select---</option>
                {countries.map( country => <option value={country} key={country} >{country}</option>)}
            </select></div>
            {loading && <p>Please wait...loading</p>}
            <p style={{textAlign: "center", color: "red"}}>{errorMessage}</p>
            { loading === false &&
            <table className="transactionsTable">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>OrderId</th>
                            <th>Date</th>
                            <th>Country</th>
                            <th>Currency</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {transactions.map(transaction => <TransactionTableRow key={transaction.id}
                                                                              id={transaction.id}
                                                                              orderId = {transaction.orderId}
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
