import React from "react";
const delay = ms =>{
    return new Promise(resolve=>{
        setTimeout(()=>resolve(),ms)
    })
}

class Fetch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            data:[],
            error:null
        }
    }
    async componentDidMount(){
        await delay(5000);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(
            (result)=>{
                this.setState({
                    data:result,
                    isLoaded:true,
                })
            },
            (error)=>{
                this.setState({
                    isLoaded:true,
                    error
                })
            }
        )
    }
    render(){
        const {isLoaded,data,error} = this.state;
        if(error){
            return <div>{error.message}</div>
        }else if(!isLoaded){
            return <h2>Все еще идет запрос</h2>
        }else{
            return(
                <ul>
                    {data.map(item=>(
                        <li key={item.id}>{item.id}
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        </li>
                    ))}
                </ul>
            )
          
        }
    }
    
}
export default Fetch;