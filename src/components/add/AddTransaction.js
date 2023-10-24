import {useReducer} from "react";

const AddTransaction = () => {

    const initialState = {
        orderId: "",
        date : "",
        amount : 0,
        county : "usa",
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

    return <form className="addTransactionsForm">
        <h2>New transaction</h2>
        <label htmlFor="orderId">Order Id</label>
        <input type="text" id="orderId" value={formData.orderId} onChange={handleChange}  />
        <br/>
        <label htmlFor="date">Date</label>
        <input type="date" id="date"/>
        <br/>
        <label htmlFor="country">Country</label>
        <input type="text"  id="country" />
        <br/>
        <label htmlFor="currency">Currency</label>
        <input type="text"  id="currency" />
        <br/>
        <label htmlFor="amount">Amount</label>
        <input type="text"  id="amount" />
        <br/>
        <label htmlFor="taxCode">Tax Code</label>
        <input type="text"  id="taxCode" />
        <br/>
        <label htmlFor="taxRate">Tax Rate</label>
        <input type="text"  id="taxRate" />
        <br/>
        <label htmlFor="type">Type</label>
        <input type="text"  id="type" />
        <br/>
        <button type="submit">Save</button>
    </form>

}

export default AddTransaction;