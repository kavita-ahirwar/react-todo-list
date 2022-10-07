import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import {Add} from './Add'
import ItemList from './ItemList'



function App() {
    return (
        <div className='App'>
            <div className='App-header'>
                {/* <h2 >React Crud Operation</h2> */}
            <Add />
           {/* <ItemList/> */}
            </div>
        </div>
    )
};

export default App;