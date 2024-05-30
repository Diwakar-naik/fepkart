import { useEffect,useState } from "react"
import "./Item.css"

function Item(){
    const[data, setdata]=useState([])
    useEffect(()=>{
       fetch("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1")
       .then((re)=>{
        return re.json()
       })
       .then((re)=>{
        setdata(re)
       })
    },[])
    console.log(data)
    return(
    <div>
        <div>
    <div className="main-2">
        <div className="kiol">
        <h1>{data.name}</h1>
        <p>Mugnai Mesela is a style of coutery developed intme lndian Subcontent to Imperial tens of the Vughal Empim</p></div> 
     

     <div className="circle"></div>
    </div>
       
       <img className="img-sizeing" src="https://th.bing.com/th/id/R.e3432c4aa05d9aac107f925c912e30cf?rik=e0Yp%2fVwqiHPY8g&riu=http%3a%2f%2fimages.wisegeek.com%2fgroup-of-fruits-and-vegetables.jpg&ehk=WfNFoX7LNbe4adzPxaAedoHzWD%2bjOKY7%2fwQqxBOGoeI%3d&risl=&pid=ImgRaw&r=0"/>
       </div>
       <div className="main-3">

     <ul className="kill" type="none">
        <h1>vegetables</h1>
        <li className="lok"><p>Cauliflower</p> <p>1c</p></li>
        <li className="lok"><p>Tomato</p><p>2c</p></li>
        <li className="lok"><p> Spinach</p><p>1/2kg</p></li>
     </ul>
       </div>
    </div>)
}

export default Item