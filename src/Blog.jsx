import Nav from './blog_components/Nav'
import Header from './blog_components/Header'
import Content from './blog_components/Content'
import Footer from './blog_components/Footer'
import Counter from './blog_components/Counter'
import ContactForm from './blog_components/ContactForm.jsx'
import Subscription from './blog_components/Subscription.jsx'

import ContentEffect from './blog_components/ContentEffect.jsx'

import {SiteContext} from './blog_components/SiteContext'

import './blog_components/assets/js/bootstrap.bundle.min.js'
import './blog_components/css/custom.css'
import './blog_components/css/styles.css'


export default function Blog(){

    let site_admin = "Mark Zukerberg"
    //supposing we want to share variable version and also function getTotalView() across all the components
    function getTotalView(){alert(100 +"views")}
    let data = {version:"1.2", fxn:getTotalView} 
    //step 1:we can create a context called SiteContext.jsx, then import the context into the Provider (the component that has somethig to share)
    //step 2:Provide the context by wrapping the components with <ContextName.Provider value="the data to share"></ContextName.Provider> 
    //step 3: Go to the place where u need the data to consume the context (Footer and Annoucement.jsx)
    return <>
        <SiteContext.Provider value={data}>
            <Nav/>
            <Header/>
            <Subscription category="Sports"/>
            <Counter total="1"/>
            {/* <Content site_admin={site_admin}/> */}
            <ContentEffect/>
            <ContactForm/>
            <Footer site_admin={site_admin}/>
        </SiteContext.Provider>
    </>
    

}