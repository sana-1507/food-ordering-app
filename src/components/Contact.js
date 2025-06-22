
import React from "react";
const Contact = () => {
    return (<div className="m-4">
<h1 className="font-extrabold mt-4 p-2 text-gray-600 text-lg">Contact US</h1>
<form className="flex flex-col border-2 border-gray-300 m-4 p-4 rounded-2xl w-[50%]">
    <input className="border-2 border-blue-300 rounded-md m-2 p-2" type="text" placeholder="Name" />
    <input className="border-2 border-blue-300 rounded-md  m-2 p-2" placeholder="Message"/>
    <button className="ml-2 mt-2 p-2 border-0 rounded-md bg-blue-300 w-[15%]">Submit</button>
</form>
    </div>)
}

export default Contact;