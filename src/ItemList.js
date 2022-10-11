import {React} from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
// import { InputText } from 'primereact/inputtext';
import EditItem from './EditItem'
    

const ItemList=({props,setData,setEdit,setTitle,setDescription})=>{

   console.log(props);

  const handleDelete=(id)=>{
    console.log("Delete method called..")
    console.log(id)
    const newList=[...props];
    newList.splice(id,1);
    setData(newList);
  }
  
  const handleEdit = (id) => {
    let newEditItem = props.find((elem, ind) => {
      return ind=== id;
    });
    setTitle(newEditItem.title)
    setDescription(newEditItem.description)
    const finalData = props.splice(id, 1,newEditItem);
    console.log("final data")
    // console.log(finalData)
    setEdit(id);
    // setEdit(null)
    // setData(finalData.toString())
    // // setData(data);
  };

    //********Remove All ***********
    const removeAll = () => {
      setEdit([]);
  };



 return (
   <div className="card mt-5">
     {props?.map((props, index) => (
      // console.log(item,index)
       <Card key={index} id={index} style={{ width: "18rem"}} >
         <Card.Body>
           <Card.Subtitle className="mb-2 text-muted">
             Title: {props.title}
             <br />
             Description: {props.description}
           </Card.Subtitle>
           <Button className="btn " variant='outline-danger' onClick={() => { handleDelete(index);
             }}
             > Delete
           </Button>&nbsp;
           <Button className="btn " variant='outline-success' onClick={()=>{ handleEdit(index);
           }} > Edit</Button>
         </Card.Body>
       </Card>
     ))}
   </div>
 );
}

export  default ItemList;