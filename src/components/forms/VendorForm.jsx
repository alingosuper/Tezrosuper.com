import { useState } from "react"
import axios from "axios"

function VendorForm(){

const [data,setData] = useState({
name:"",
shop:"",
phone:""
})

const submit=async(e)=>{
 e.preventDefault()

 await axios.post("/api/register",{
 type:"vendor",
 ...data
 })

 alert("Registered")
}

return(

<form onSubmit={submit}>

<input
placeholder="Vendor Name"
onChange={e=>setData({...data,name:e.target.value})}
/>

<input
placeholder="Shop Name"
onChange={e=>setData({...data,shop:e.target.value})}
/>

<input
placeholder="Phone"
/>

<button type="submit">Register</button>

</form>

)

}

export default VendorForm
