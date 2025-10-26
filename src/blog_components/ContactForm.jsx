import { useState } from "react"

const ContactForm =()=>{
    //picking form elements wil be stored inside state varaibles
    let [propname,setPropName] =useState("")
    const [propcost,setPropCost] = useState(0)
    //if we want to dispaly the error message inside am element rather than alertimg it, we create a state varoable eg feedback and give it a default value of ""
    const [feedback,setFeedback] = useState("")

    function handleForm(event){  
        event.preventDefault()     
        if(propname =="" || propcost ==""){
            //alert('The form must be completed');
            setFeedback("The form can not be empty")           
        }else{
            setFeedback("")
            //we will connect to api and send the form data as json
            const data2send = {title:propname, body:propcost}
            const options ={
                method: "POST",
                headers:{ 'Content-Type': "application/json"},
                body: JSON.stringify(data2send),
            }
            const url ="https://jsonplaceholder.typicode.com/posts"

            fetch(url,options)
            .then((response)=> response.json())
            .then((json)=>{ 
                alert("Your message was sent "+json.title)
                setPropCost("")
                setPropName("")
                console.log(json)
            })
            .catch((error)=>{console.log(error)})
        }
    }
    
    return <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h2 className='text-center'>Contact Us</h2>
                {
                feedback !="" &&  
                <p className="alert alert-danger">{feedback}</p>
                }
               
                <form>
                    <div className="mb-3">
                        <label>Property Name </label>
                        <input type="text" value={propname}
                        onChange={
                            (event)=>{ setPropName(event.target.value)}
                            } className="form-control border-dark"/>
                    </div>
                    <div className="mb-3">
                        <label>Property Price </label>
                        <input type="text" className="form-control border-dark" value={propcost} onChange={
                            function(event){setPropCost(event.target.value)}
                            }/>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-dark col-12" onClick={handleForm}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default ContactForm