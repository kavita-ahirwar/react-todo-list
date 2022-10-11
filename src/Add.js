import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ItemList from './ItemList';



 function Add(){
   const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    setIsRefresh(false);
  }, [isRefresh]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!data) {
      alert("Please add task");
    } else if (edit === null) {
      setData((prev) => [...prev, { title, description }]);
      setTitle("");
      setDescription("");
    } else {
      data.splice(edit, 1, { title, description });
      setTitle("");
      setDescription("");
      setIsRefresh(true);
      setEdit(null)
      console.log({ data });
    }

  }

    return (
      <div className='container-fuild mt-5' >
        <div className='row'>
      <div className="col-ml-12">
        <Form className="add-form " onSubmit={handlesubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label >Title</Form.Label>
            <Form.Control  type="text"  placeholder="Enter Title"  value={title} onChange={(e) => setTitle(e.target.value)}/> 
            </Form.Group>
            {/* <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="Username" />
                        </div> */}
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Desctiption</Form.Label>
            <Form.Control className='mb-3' type="text" placeholder="Enter Desctiption" value={description}  onChange={(e) => setDescription(e.target.value)}/>
          </Form.Group>
  
          <Button variant="outline-warning" type="submit" style={{width: "300px"}}>
            Add
          </Button>
        </Form>
  
        <ItemList
          props={data}
          setTitle={setTitle}
          setDescription={setDescription}
          setData={setData}
          setEdit={setEdit}
        />
      </div>
      </div>
      </div>
    );
  }

 
export default Add;
