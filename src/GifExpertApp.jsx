import React, { useState } from 'react';
import {AddCategory, GifGrid} from './components';



export const GifExpertApp = () => {

    // const categories = ["One Punch", "Naruto", "Shingeki no Kyojin"]
    const [categories, setCategories] = useState(["One Punch", "Shingeki no Kyojin", "Naruto"]);
    
    // const handleAddGintama = () => { //boton que agrega gintama a la lista
        
    //     setCategories( [...categories, "Gintama"] )
    //     //setCategories(cats => [...cats, "Hunter x Hunter"]);
        
    // }

    const onAddCategory = (newCategory) => {
         
        if ( categories.includes(newCategory) ) return; // Agregamos la condicion pra que no se pudean repetir

        // console.log(newCategory);
        // setCategories([newCategory, ...categories]);
        // setCategories( [...categories, newCategory] );
        setCategories( [newCategory,...categories] );
    }
    
    return (
        
        <>
            <h2> GifExpertApp </h2>
            <AddCategory

             //setCategories= { setCategories }

            onNewCategory= { onAddCategory }

             />
            <hr />

            {/* <button onClick={handleAddGintama}>Add Gintama</button> */}

                {
                    categories.map(category => 
                        // return <li key={category}> {category}</li>

                        (
                        <GifGrid key={category}
                         category={category}
                         />
                        )
                    )
                }                
        </>

);


}


export default GifExpertApp;