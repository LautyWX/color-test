import { onSnapshot ,collection } from 'firebase/firestore';
import { useEffect ,useState} from 'react';
import db from "./firebase.js"
import './App.css'
import Dot from './Dot'
import { handleEdit, handleNew ,handleDelete, handleQueryDelete} from './utils.js';


function App() {
  
  const[colors,setColors] = useState([]);
  console.log(colors);
  useEffect(()=>
    onSnapshot(collection(db,"colors"),
    (snapshot)=>{
      setColors(snapshot.docs.map((doc) => ({...doc.data(),id: doc.id})))
    })
  ,[])
  

  return(
    <div>
      <button onClick={handleNew}>Nuevo</button>
      <button onClick={handleQueryDelete}>Eliminar por nombre</button>
      <ul>
        {colors.map(color => (
          <li key={color.id}>
           <button className="editButton" onClick={() => handleEdit(color.id)}>
            edit
           </button>
           <button className="deleteButton" onClick={() => handleDelete(color.id)}>
            delete
           </button>  
           <Dot color={color.value}/> {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
