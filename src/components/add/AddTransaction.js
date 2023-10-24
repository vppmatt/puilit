import {useReducer, useState} from "react";
import {addNewTransaction} from "../../data/dataFunctions";

const AddTransaction = () => {

    const initialState = {
        orderId: "",
        date : "",
        amount : 0,
        country : "usa",
        currency : "USD",
        taxCode : "0",
        taxRate : "0",
        type : "visa"
    }

    const formReducer = (state, data) => {
        //format of data {field : "amount", value : 123}
        return {...state, [data.field] : data.value}
    }

    const [formData, dispatch] =useReducer(formReducer, initialState);

    const handleChange = (event) => {
        dispatch({field : event.target.id, value : event.target.value});
    }

    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewTransaction(formData)
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    setMessage("Transaction was added with id " + result.data.id);
                }
                else {
                    setMessage("something went wrong "+ result.status);
                }
            })
            .catch( error => {
                setMessage("error " + error)
            })
    }

    return <form className="addTransactionsForm" onSubmit={handleSubmit}>
        <h2>New transaction</h2>
        <label htmlFor="orderId">Order Id</label>
        <input type="text" id="orderId" value={formData.orderId} onChange={handleChange}  />
        <br/>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" value={formData.date} onChange={handleChange} />
        <br/>
        <label htmlFor="country">Country</label>
        <input type="text"  id="country" value={formData.country} onChange={handleChange}  />
        <br/>
        <label htmlFor="currency">Currency</label>
        <input type="text"  id="currency" value={formData.currency} onChange={handleChange}  />
        <br/>
        <label htmlFor="amount">Amount</label>
        <input type="text"  id="amount" value={formData.amount} onChange={handleChange} />
        <br/>
        <label htmlFor="taxCode">Tax Code</label>
        <input type="text"  id="taxCode" value={formData.taxCode} onChange={handleChange} />
        <br/>
        <label htmlFor="taxRate">Tax Rate</label>
        <input type="text"  id="taxRate" value={formData.taxRate} onChange={handleChange} />
        <br/>
        <label htmlFor="type">Type</label>
        <input type="text"  id="type" value={formData.type} onChange={handleChange} />
        <br/>
        <button type="submit">Save</button>
        <p>{message}</p>
    </form>

}

export default AddTransaction;