import axios from "axios";

const serverURL = "http://localhost:8080";

export const getAllPayments = () => {
    return axios({url : `${serverURL}/api/payment`, method : "GET",
    headers: {'Accept': 'application/json'}})
}

export const getAllPaymentsForCountry = (country) => {
    return axios({url : `${serverURL}/api/payment?country=${country}`, method : "GET",
        headers: {'Accept': 'application/json'}})
}

export const getAllCountries = () => {
    return axios({url : `${serverURL}/api/country`, method : "GET",
        headers: {'Accept': 'application/json'}})
}

export const addNewTransaction = (transaction) => {
    return axios({
        url : `${serverURL}/api/payment`,
        method: "POST",
        headers : {'Accept': 'application/json', 'Content-Type' : 'application/json'},
        data : transaction
    })
}