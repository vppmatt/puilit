import './Transactions.css';
import TransactionTableRow from "./TransactionTableRow";
import {
    getAllCountries,
    getAllPayments,
} from "../../data/dataFunctions";
import {useEffect, useState} from "react";

const Transactions = () => {

    console.log("transactions is rendering")
    const [transactions, setTransactions] = useState([]);

    const getTheData = () => {
        const paymentsPromise = getAllPayments();
        paymentsPromise.then(response => {
            if (response.status === 200) {
                setTransactions(response.data);
            } else {
                console.log("something went wrong " + response.status)
            }
        })
            .catch(error => console.log("error", error));
    }

    useEffect( () => {
        getTheData();
    } , [])

    getAllCountries().then(response => console.log(response.data));

    return (
        <div>
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
                </div>
          
    )
        ;
}

export default Transactions
