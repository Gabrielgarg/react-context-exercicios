import React, { useEffect, useState } from "react";
import axios from "axios";



function App() {

  const [users,setUsers] = useState([])
  console.log(users)

  const body ={
    name: "Gabriel Garuthi",
    email: "gabrielderu@hotmail.com"
  }

  const header = {
    headers :{
      Authorization : "Gabriel-Garuthi-Conway"
    }
  }

  const createUser = async () =>{
    await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', header
    ).then((correct) =>{
      console.log(correct)
    }).catch((error) =>{
      console.log(error.response)
    })
  }   

  // createUser();


  const getAllUsers =  () =>{
    const resposta =  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', header
    ).then((correct) =>{
      console.log(correct.data)
      console.log(resposta.data)
      setUsers(resposta.data)
      console.log(resposta)
    }).catch((error) =>{
      console.log(error.response)
    })
  }
  console.log(users)

  useEffect(()=>{
    getAllUsers()
    console.log(users)
  },[])


  return (
    <div>
      
    </div>
  );
}

export default App;
