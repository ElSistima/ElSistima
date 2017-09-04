import React, {Component} from 'react';
import axios from 'axios';
import './../styles/mediaCard.css';


export default class MediaCard extends Component{
    constructor(props){
        super(props);

        this.state = {
            isPhoto: true
        }
    }

    componentDidMount(){
        axios.get('/api/media').then(res => {
            this.setState({
                fetchedMedia: res.data
            })
        })
        .catch(err => console.log("There was an Error: ", err))
    }

    render(){    
        return(
            <main className="photoCardContainer">
                <div className="mediaImage">
                    <img src={this.props.media.media_url} 
                    height={110}
                    width={110}/></div>
                <div className="photoCaption">
                    {this.props.media.caption}
                    <div className="shareIcon"></div>
                </div>
                
            </main>

        )
        

    }
}