import { useContext } from "react";
import UserContext from "../utils/UserContext";
import User from "./User";
const AboutUs = () => {
    const { loggedinUser } = useContext(UserContext)
    return (<div className="flex">
      
        <User name={loggedinUser} />
       
        </div>)
}
export default AboutUs;