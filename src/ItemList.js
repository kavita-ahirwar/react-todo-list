import {React, useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Add } from './Add';
import Modal from 'react-bootstrap/Modal';
import EditItem from './EditItem'
    

const ItemList=({props,setData})=>{
  //  useEffect(()=>{
  //   console.log(props);
  //  },[props])
   console.log(props);

  const handleDelete=(id)=>{
    console.log("Item Deleted...");
    console.log(id);
    const newList=[...props];
    newList.splice(id,1);
    setData(newList);
  }


  // const handleEdit=()=>{
   

  // }
 
  const  handleEdit = (updatedTitle,upsatedDescription, id) => {
    this.setData({

      todos: props.map(todo => {
        if (todo.id === id) {
          todo.Title = updatedTitle;
          todo.Descritpion=upsatedDescription;
        }
        return todo
      }),
    })
  }

{/* <input
  type="text"
  style={editMode}
  className={styles.textInput}
  value={title}
  onChange={e => {
    this.props.setUpdate(e.target.value, id)
  }}
/> */}


// <TodosList
//   todos={this.state.todos}
//   handleChangeProps={this.handleChange}
//   deleteTodoProps={this.delTodo}
//   setUpdate={this.setUpdate}
// />

//  const  onDeleteHandle=(data)=> {
//   console.log('deleted')
//   const newData=data.slice(0)
//   newData.splice(0, 0, data);
//   return { newData };
//   // console.log(index)
//   console.log(data)
  //  let id = data.key;
  //   ItemList((prev) => {  
  //       return prev.filter((arrElement, index) =>  
  //         if (prev.id !== id) {
  //                 return data;
  //               }
  //           return index !== id;
  //       });
  //   });
    // this.setState({
    //   mockData: this.state.mockData.filter(item => {
    //     if (item.id !== id) {
    //       return item;
    //     }
    //   })
    // });
  






 
  
   return( 
<div className="card mt-5">
      {props.length &&
        props.map((item, index) => (
          <Card key={index} id="index" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                Title: {item.Title}
                <br />
                Description: {item.Description}
              </Card.Subtitle>
              <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>&nsbp;
              <Button className="btn btn-danger" onClick={handleEdit}>Edit</Button>
            </Card.Body>
          </Card>
          
        ))}
        {/* <EditItem id="index" props={props} setData={setData} /> */}
    </div>
    

   );
        }


export  default ItemList;