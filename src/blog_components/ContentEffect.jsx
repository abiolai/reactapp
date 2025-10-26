import { useState } from "react"
import { useEffect } from "react"

export default function ContentEffect(){
//async function fetchPosts(){}
//async..await is a syntactic sugar for promise. fetch().then().then().catch()

  const [allposts, setAllPosts] = useState([])
  //state variable to contain error message when API is down, true,false
  const [errormsg,setErrorMsg] = useState(false)

  let  fetchPosts = async ()=>{
      const options = {
        method:"GET", 
        headers:{"Content-Type":"application/json"}
      }
      try{
        const rsp = await fetch("https://dummyjson.com/posts",options);
        if(!rsp.ok){
          throw new Error("HTTP Error")
        }
        const data = await rsp.json();
        // console.log(data.posts);
        setAllPosts(data.posts)
      }catch(error){
        setErrorMsg(error.message + "Error connecting to API")
      }
      finally{ }
  }

  useEffect(()=>{
    fetchPosts()
  },[errormsg])

    let data2display = allposts.map(function(value,key){
      return <div key={key}>
         <div className="post-preview" >
          <a href="post.html">
            <h2 className="post-title">{value.title}</h2>
            <h3 className="post-subtitle">
             {value.body}
            </h3>
          </a>
          <p className="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            Views : {value.views}
          </p>
        </div>
        {/* Divider*/}
        <hr className="my-4" />
        </div>
    })

    return <>
      <div className="container px-4 px-lg-5">
    <div className="row gx-4 gx-lg-5 justify-content-center">
      <div className="col-md-10">
        <h1>All Posts</h1>

        {errormsg && <div className="row">
          <div className="col-md-12">
            <p className="alert alert-danger"> 
              {errormsg}
              <br/>
              <a className="alert-link" href="#" onClick={()=>{setErrorMsg(false)}}>Try again</a>
            </p>
            
          </div>  
        </div>}
        
       
        {data2display}


        {/* Pager*/}
        <div className="d-flex justify-content-end mb-4">
          <button className="btn btn-danger text-uppercase">
           Like
          </button>
          {/* achieving pagelike uisng state instead of component varable */}
          <button className="btn btn-outline-danger text-uppercase ms-5">
             Like
          </button>


        </div>
        
      </div>
    </div>
  </div>
  </>
}