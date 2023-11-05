import { 
    collection , 
    addDoc, 
    setDoc, 
    doc,
    deleteDoc, 
    query, 
    where,
    getDocs} from 'firebase/firestore';
import db from "./firebase.js"

export const handleNew = async () =>{       //agregar un color a la base de datos
    //input del usuario
    const name = prompt("enter color name");
    const value = prompt("enter color value");

    const collectionRef = collection(db,"colors");  //referencia la coleccion dentro de la db de firestore, cuyo nombre sea "colors"
    const payload = {name,value};   //son los valores que vamos a agregar
    await addDoc(collectionRef,payload);    //agrega el objeto payload a la coleccion colors, su id es determinada automaticamente
  }

export const handleEdit = async (id) =>{    //editar/agregar un conlor a la base de datos
    const docRef = doc(db, "colors", id);   //referenciamos al documento dentro de la bd de firestore, dentro de la coleccion "colors" , y que coincida la id
    //input del usuario
    const name = prompt("enter new name");  
    const value = prompt("enter new value");

    const payload = { name,value}; //son los valores que vamos a agregar
    await setDoc(docRef, payload); //agrega el objeto payload a la coleccion colors, su id es determinada por docRef, si la id no existe, crea uno nuevo con esa id
}

export const handleDelete = async (id) => { //eliminar un color de la base de datos
    const docRef = doc(db, "colors", id);   //referenciamos al documento dentro de la bd de firestore, dentro de la coleccion "colors" , y que coincida la id
    await deleteDoc(docRef) //elimina al documento referenciado de la coleccion
}
export const handleQueryDelete = async () => {  //eliminar todos los colores que tengan el mismo nombre
    const collectionRef = collection(db,"colors"); //referencia la coleccion dentro de la db de firestore, cuyo nombre sea "colors"

    const userInputName = prompt("enter color name to delete"); //input del usuario

    const q = query(collectionRef,where("name","==",userInputName)); //realiza una query, que devuelve todos los objetos que tengan el mismo nombre que el ingresado por el usuario

    const snapshot = await getDocs(q); //realiza un snapshot, que nos devuelve toda la informacion relacionada a los objetos filtrados por la query

    const results = snapshot.docs.map((doc) => ({...doc.data(),id: doc.id})) //"limpiamos" la informacion, asi nos queda para cada objeto el "name", el "value", y su "id"
    results.forEach(async result => { 
        handleDelete(result.id); //usamos handleDelete para cada objeto.
    })
}