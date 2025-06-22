import React from "react";
class User extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)

        this.state = {
            count: 0,
            name: "",
            location: ""
        }
    }
render() {
    let { count } = this.state;
    return(<div className="flex flex-col m-2">
         <h1 className="m-2 font-semibold">{this.props.name}</h1>
        
       
        <h3 className="m-2">Software Engineer</h3>
        <h3 className="m-2">Teck Stack - Angular, Node JS, React</h3>
    </div>)
}

async componentDidMount() {
   const apiRes = await fetch("https://api.github.com/user/sana-1507");
   const data = await apiRes.json();
   console.log(data)

   this.setState({

   })
}
}

export default User;