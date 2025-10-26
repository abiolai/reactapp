export default function Counter({total}){
    //method 3 - conditional rendering
    return <div className="row text-center">
        <div className="col">
        {
        total > 50 ? 
        <button className="btn btn-danger">Heavy Traffic</button>
        :
        <button className="btn btn-info">Moderate Traffic</button>
        }
        </div>
    </div>
    //method 2 - conditional rendering
    //  return <div className="row text-center">
    //    <div className="col">
    // { total > 50 && <button className="btn btn-danger"> Heavy Traffic </button> }

    // { total <= 50 && <button className="btn btn-info"> Low Traffic </button> }

    //    </div>
    // </div>
    
    //method 1- conditional rendering
    // if(total > 50){
    //     return <div className="row text-center">
    //             <div className="col">
    //                 <button className="btn btn-danger"> Heavy Traffic </button>
    //             </div>
    //         </div>
    // }else{
    //      return <div className="row text-center">
    //         <div className="col">
    //             <button className="btn btn-info"> Low Traffic </button>
    //         </div>
    //     </div>
    // }
   
}