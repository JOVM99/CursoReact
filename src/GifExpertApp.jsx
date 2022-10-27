import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
 
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory])
  }
  
  return (
    <>
        <h1>GifExpertApp</h1>

        {/* Input agregar */}
        <AddCategory onNewCategory={onAddCategory}>

        </AddCategory>

        {/*Listado de Gif */}
       
          {
            categories.map( category => 
              (
              <GifGrid key={category} category={category}>
              </GifGrid>
              )
            )
          }
    </>
    
  )
}
