import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  ItemList  from './ItemList';


export function Add(){
  const mystyle = {
    fontFamily: "poppins"
  };
  const [Title,setTitle]=useState('');
  const [Description,setDescription]=useState('');
  const [data,setData]=useState([]);

  console.log(data)
   const handlerSumbit=(e)=>{
    console.log(Title);
    console.log(Description)
    e.preventDefault();
    setData(prev=>([...prev,{Title,Description}]))
     setTitle('');
     setDescription('');
   }

  
    return(
    <div className='AddItem' >
      <h2>React crud operation</h2>
          <Form onSubmit={handlerSumbit}>
      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={Title} onChange={(e)=> setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Password" value={Description} onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="Checkbox">{data.checkbox ? 'Checked' : 'Unchecked'}
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button variant="primary" type="submit"  >
        Submit
      </Button>

    </Form>
    <ItemList id="index" props={data} setData={setData}/>
    </div>
    );
}

