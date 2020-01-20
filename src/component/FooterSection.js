import React from 'react';
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'
import Widget from './Widget'

// Query Social Icon And
// Footer Content
const query = gql`
{
  footerWidgetses{
    name
    description
  }
  socialMedias{
    iconClass
    link
  }
  settingPage(where:{id:"ck5fe1kldzmqq0869wonvwob4"}){
    footerText
  }
}
`


const FooterSection = () => {

    // Graphql Hooks
    const {loading,data,error} = useQuery(query)
    if(loading||error) return null
    console.log(data)
    const {footerWidgetses,socialMedias,settingPage} = data;

    return ( 
        // <!-- FOOTER AREA -->
        <footer class="sp text-center">
            <div class="container">
                <div class="row">
                    {/* <!-- FOOTER Widgets --> */}
                    {footerWidgetses.map(widget=>
                        <Widget widget={widget}/>
                    )}
                </div>
    
                {/* <!-- SOCIAL LIKS --> */}
                <ul class="social_links">
                    {socialMedias.map(social=>(
                        <li>
                            <a href={social.link}><i class={social.iconClass} aria-hidden="true"></i></a>
                        </li>
                    ))}                    
                </ul>

                {/* <!-- FOOTER TEXT --> */}
                <div class="footer_text">{settingPage.footerText}</div>
            </div>
        </footer>
    
    );
}
 
export default FooterSection;