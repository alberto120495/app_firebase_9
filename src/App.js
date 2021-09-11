import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from './firebase/firebaseConfig';



function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {

   const getUsers = async ()=>{
    const datos = await getDocs(collection(db, "usuarios"));
    setUsers(datos.docs.map(doc => ({id:doc.id, user:doc.data()})))
  } 
getUsers() 



  }, [])

  console.log(users)


  return (
    <div className="App">
      <h1>Firebase 9!</h1>
    
    {
      users.map(({user})=>(
        <>
        <h2>{user.name}</h2>
        <p>{user.age}</p>
        </>
      ))
    }

    </div>
  );
}

export default App;
