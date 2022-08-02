import { useState } from 'react';
import PropTypes from 'prop-types';  // Da error en vite

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState("");

  
  // const onImputChange = (e) => {
  //   setInputValue(e.target.value)
  // }  
  const onImputChange = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault(); //Evita el refresh de la pag al enviar un submit

    if ( inputValue.trim().length <= 2 ) return;

    onNewCategory( inputValue.trim() );
    setInputValue("");  //Despues de enviar el submit borra en el form la cadena escrita y lo deja vacio para escribir nuevamente

  }

  return (
    <>
        <form onSubmit= {onSubmit} aria-label="form"> 

        <input 
            type= "text"
            placeholder= "Buscar Gifs"
            value= {inputValue}
            onChange= {onImputChange}
        />

        </form>

        {/* <button onClick= {handleAdd}>Add Valorant</button> */}

    </>
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}

export default AddCategory;
