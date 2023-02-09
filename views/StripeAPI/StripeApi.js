import axios from "axios";


const createPaymentIntent = (data) => {
 return new Promise((resolve, reject) => {
    axios.post('http://192.18.31:4002/payment-sheet', data).then(function(res){
        resolve(res)
    }).catch(function(error){
        reject(error)
    })
 })
}
export default createPaymentIntent