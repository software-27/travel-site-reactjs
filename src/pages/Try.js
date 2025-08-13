import React,{ useState, useEffect } from 'react';
import axios from '../../node_modules/axios/index';

function Try(){
    const url="http://localhost:8080/api/property/create"
    const [data,setData] = useState({
        name:""
    })
    function handle(e){
       const newdata={...data}
       newdata[e.target.id] = e.target.value
       setData(newdata)
       console.log(newdata) 
    }
    function submit(e){
        e.preventDefault();
        axios.post(url,{
            name: data.name
        })
        .then(res => {
            console.log(res.data)
        })

    }

    return(
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text"></input>
                <button>
                    submit
                </button>    
            </form>
            
        </div>
    )
}
export default Try;