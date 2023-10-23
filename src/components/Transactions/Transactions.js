import './Transactions.css';
import TransactionTableRow from "./TransactionTableRow";
import {getAllPayments} from "../../data/dataFunctions";

const Transactions = () => {

    const transactions = getAllPayments();
    
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
