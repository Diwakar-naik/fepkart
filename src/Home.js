import {useEffect,useState} from "react"
import { LuRefrigerator } from "react-icons/lu";
import "./Home.css"

function Home (){
    const[data,setdata]=useState([])
    const[s,sets]=useState(false)
    useEffect(()=>{
      fetch("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/")
      .then((re)=>{
        return re.json()
      })
      .then((re)=>{
        setdata(re)
        sets(true)
      })
    },[])
    console.log(data)
    return(<div className="main">
           <div className="time-card">
                 <div className="timer">

                 </div>
                 
           </div>
           <ul type="none" className="ul">
             <li className="li li2">Italian</li>
             <li className="li">Indian</li>
             <li className="li">Indian</li>
             <li className="li">Indian</li>
            </ul>
            <ul type="none" className="ul">
                <li className="li123"> <img className="img" src="https://th.bing.com/th/id/OIP.8amfvFGza3V2Ud-5JF1NSgHaE8?rs=1&pid=ImgDetMain"/></li>
                <li className="li123"> <img className="img" src="https://th.bing.com/th/id/OIP.8amfvFGza3V2Ud-5JF1NSgHaE8?rs=1&pid=ImgDetMain"/></li>
                <li className="li123"> <img className="img" src="https://th.bing.com/th/id/OIP.8amfvFGza3V2Ud-5JF1NSgHaE8?rs=1&pid=ImgDetMain"/></li>
                <li className="li123"> <img className="img" src="https://th.bing.com/th/id/OIP.8amfvFGza3V2Ud-5JF1NSgHaE8?rs=1&pid=ImgDetMain"/></li>
            </ul>
            <ul type="none" className="ul1">
                <li className="li34"><div><h3>Recommended</h3> </div> <button>Menu</button></li>
                {s && 
                  data.popularDishes.map((each)=>(<li key={each.id} className="api-item"><div><div className="item-align"><h4>{each.name}</h4> <p>4.2 *</p></div> 
                    <div className="lik"><LuRefrigerator/><hr/> <p>Ingredients</p></div>
                    </div> 
                    <div className="jail">
                    <img className="dk" src={each.image} alt={each.name}/>
                    <button className="move">Add</button>
                    </div>
                    </li>))
                               }
            </ul>
       
    </div>)
}

export default Home;