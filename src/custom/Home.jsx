import List from './List.jsx'
import Category from './Category.jsx'
import './bootstrap.min.css' //global import

export default function Home(props){
//props ={deets:"Our REact App", author:"Mark Zukerberg"}
    let site = "Our First React App"
    let cssobj = {fontFamily:"arial",fontSize:"24px"}
    let offer ="Buy One get 2";
    let cats = ["Food","Politics","Fashion","Sports"]

    function checkstatus(){
        alert('Checked')
    }
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md'>
                    <Category cats={cats} fxn={checkstatus}/>
                </div>
            </div>
            <div className="row">
                <div className='col-md-3'>
                    <List bonus={offer}/>
                </div>
                <div className="col-md-9">
                         <h1 className="text-danger">Welcome Everyone - {site}</h1>
                         <h2 style={{textDecoration:"underline"}}>A sub-heading.</h2>
                         <p style={cssobj}>You are welcome to my space</p>
                         <p>{10 + 26}</p>
                         <p>{props['author']}</p>
                         <button className="btn btn-lg btn-danger col-3" onClick={function(){alert('hello')}}>Click Me</button>
                        <button className="btn btn-lg btn-outline-danger col-3" onClick={()=>{alert('hi hi hi')}}>Classwork</button>
                </div>
            </div>
            <div className='row'>

            </div>
           
        </div>
    )
}