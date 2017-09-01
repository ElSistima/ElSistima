import React, {Component} from 'react';


export default class MediaType extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    componentDidMount(){
        axios.get('/api/media').then(res => {
            console.log("Res data is:", res.data)
            this.setState({
                fetchedMedia: res.data
            })
        })
        .catch(err => console.log("There was an Error: ", err))
    }

    render(){
        

    }
        return(
    
    )
}