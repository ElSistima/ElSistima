import React, {Component} from 'react';
import axios from 'axios';
import './../styles/videoCard.css';


export default class VideoCard extends Component{
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
                    <img className="imageSize" 
                    src={this.props.media.media_url} 
                    />
                <div className="photoCaption">
                    {this.props.media.caption}
                    <div className="shareIcon"></div>
                </div>
                {/* Post Time: {this.props.media.post_time} */}
                    </div>
                
            </main>

        )
        

    }
}