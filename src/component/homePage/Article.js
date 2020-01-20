import React from 'react';
import { Link } from 'react-router-dom';


const Article = ({word,title,subTitle,description,multiDescription,
    children,btnCenter,to,btnText,btnWhite,whiteTitle}) => {
    
    // Single Word Before Title
    const articleWord        = word     && (<p class="word">{word}</p>);

    // Title Cls
    const titleCls           = whiteTitle ? "s_heading white" : "s_heading"

    // Article Title
    const articleTitle       = title    && (<h2 className={titleCls}>{title}</h2>);

    // Article Subtitle
    const articleSubTitle    = subTitle && (<div class="sub_heading">{subTitle}</div>);

    // Button cls
    const btnClass           = btnWhite ? "Btn whiteBtn" : "Btn"

    // Button Component
    const button             = btnText  && (<Link to={to} className={btnClass}>{btnText}</Link>)

    // Article Description
    const articleDescription = description && (<p>{description}</p>);
    
    // Splitint Text Via Line Break For Multi Paragraph
    const articleMultiDes    = multiDescription && 
                               multiDescription.split('\n').map(item=><p>{item}</p>)
    
    const articleBtn = btnCenter ? (<div className="text-center">{button}</div>):button
    return ( 
    <>
        {articleWord}  
        {articleTitle}
        {articleSubTitle}
        {articleDescription}
        {articleMultiDes}
        {children}
        {articleBtn}
    </>
    );
}
 
export default Article;