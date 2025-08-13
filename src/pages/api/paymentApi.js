import axios from 'axios';

// http://localhost:8080/api/property/propertyOwner

class PaymentAPI {
    
    postPayment = (data) =>{
        console.log('post2: ',data)
        // axios.request({
        //     method: "POST",
        //     url: "http://localhost:8080/api/property/propertyOwner",
        //     body: JSON.stringify(data)
        // })
        axios.post('http://localhost:8080/api/property/payment',data)
        .then(function(response){
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
    }

}

export default PaymentAPI;