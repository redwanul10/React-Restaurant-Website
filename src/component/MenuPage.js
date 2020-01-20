import React from 'react';
import SectionHeader from './SectionHeader'
import Recipes from './Recipes'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

const query = gql`
{
    pages(where:{id:"ck5e5lzpmvnzw0869tns5m4uu"}){
        title
        descripton
        backgroundImage{
          url
        }
        formHeading
    }    
    categoryses{
        name
        recipeses{
          recipeTitle
          recipeDescription
          recipePrice
          recipeImage{
            url
          }
        }
    }    
}
`


const MenuPage = () => {
    const {loading,data,error} = useQuery(query)
    if(loading||error) return null
    console.log(data)
    const{pages,categoryses} = data
    return ( 
    <>
    {/* Header Content of Contact Page */}
    <SectionHeader
    sectionName="menu_area"
    backgroundImage={pages.backgroundImage.url}
    title={pages.title}
    description={pages.descripton}
    />   
    
    {/* Display Menu */}
    <div className="display_category_recipes pagePadding">
        <div className="container">
            {categoryses.map(category=>(
                <div className="category">
                    {/* Category Name */}
                    <div className="text-center">
                        <h2 className="s_heading small">{category.name}</h2>
                    </div>
                    {/* Recipes */}
                    <Recipes recipeses={category.recipeses}/>
                </div>
            ))}
        </div>
    </div>

    </> 
    );
}
 
export default MenuPage;