import axios from 'axios';

// http://localhost:8080/api/property/propertyOwner

class PropertyAPI {
    
    postPropertyOwner = (data) =>{
        console.log('post2: ', data)
        // axios.request({
        //     method: "POST",
        //     url: "http://localhost:8080/api/property/propertyOwner",
        //     body: JSON.stringify(data)
        // })
        axios.post('http://localhost:8080/api/property/propertyOwner', data)
        .then(function(response){
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
    }

    postProperty = (data) =>{
        console.log('post2: ', data)
        // axios.request({
        //     method: "POST",
        //     url: "http://localhost:8080/api/property/propertyOwner",
        //     body: JSON.stringify(data)
        // })
        axios.post('http://localhost:8080/api/property/createProperty/2', data)
        .then(function(response){
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
    }

    postPropertyPayment = (data) =>{
        console.log('post2: ', data)
        // axios.request({
        //     method: "POST",
        //     url: "http://localhost:8080/api/property/propertyOwner",
        //     body: JSON.stringify(data)
        // })
        axios.post('http://localhost:8080/api/property/payment/4', data)
        .then(function(response){
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
    }

    postPropertyRules = (data) =>{
        console.log('post2: ', data)
        // axios.request({
        //     method: "POST",
        //     url: "http://localhost:8080/api/property/propertyOwner",
        //     body: JSON.stringify(data)
        // })
        axios.post('http://localhost:8080/api/property/addRulesProperty/6', data)
        .then(function(response){
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
    }
}

export default PropertyAPI;