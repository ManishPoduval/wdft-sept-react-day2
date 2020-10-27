import React from 'react'

 function StudentDetail(props) {

   //props.detail = {id: 1, name: 'Rafa', city:'Madrid'}
   // props.deleteHandler = someFunc()
    return (
        <div >
            {props.detail.name} 
            <button onClick={ () => {  props.deleteHandler(props.detail.id)  } } >Delete</button>
        </div>
    )
}


export default StudentDetail