import React from 'react';
import Recipes from '../Recipes'
import Article from './Article'
import { Accordion, AccordionItem } from 'react-sanfona';
import { Link } from 'react-router-dom';


const OurMenuSection = ({data,title,description,word,button}) => {
    return ( 
        // <!-- MENU AREA -->
        <div class="menu_area sp">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        {/* <!-- MENU HEADER TEXT --> */}
                        <div class="menu_content text-center">
                            {/* <div class="menuu_header_content text-center"> */}
                                <Article title={title}
                                word={word}
                                description={description}
                                btnText={button}
                                to="/menu"
                                >
                                    {/* <!-- ACCORDION SECTION --> */}
                                    <Accordion className="accordian">
                                        {data.map(item=>(
                                            <AccordionItem title={item.name} titleTag="h2">
                                                <Recipes recipeses={item.recipeses}/>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </Article>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default OurMenuSection;