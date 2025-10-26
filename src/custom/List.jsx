export default function({bonus}){
    //props ={bonus:"Buy 1 Get 2"}
    //{bonus} = props
    //let person = {fullname:"Abubakar", age:45}
    //{fullname,age} = person;// it will extract key fullnane and age
    return (
        <ul>
            <li>Reading</li>
            <li>Sleeping</li>
            <li>Travelling</li>
            <li>{bonus}</li>
        </ul>
    )
}