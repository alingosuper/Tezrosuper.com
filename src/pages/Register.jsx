import { useState } from "react"
import CategoryPopup from "../components/popup/CategoryPopup"
import VendorForm from "../components/forms/VendorForm"
import DriverForm from "../components/forms/DriverForm"

function Register(){

const [category,setCategory] = useState(null)

return(

<div>

<h1>Tezro Registration</h1>

{!category && <CategoryPopup setCategory={setCategory}/>}

{category==="Vendor" && <VendorForm/>}

{category==="Driver" && <DriverForm/>}

</div>

)

}

export default Register
