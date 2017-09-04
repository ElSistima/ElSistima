import React, {Component} from 'react';
import axios from 'axios';
import './../styles/photoCard.css';


export default class PhotoCard extends Component{
    constructor(props){
        super(props);

        this.state = {
            isPhoto: true
        }
    }

    componentDidMount(){
        axios.get('/api/media').then(res => {
            // console.log("Res data is:", res.data)
            this.setState({
                fetchedMedia: res.data
            })
        })
        .catch(err => console.log("There was an Error: ", err))
    }

    // componentWillReceiveProps(nextProps){
    //     this.setState({
        
    //     })
    // }

    render(){
        // var media = this.state.fetchedMedia;
        // var photos = [];
        // for(var key in test) {
        //     photos.pust(test[key])
        // }
        
       
    
        return(
            <main className="photoCardContainer">
                <div className="mediaImage">
                    <img src={this.props.media.media_url} 
                    height={100}
                    width={100}/></div>
                <div className="tester">{this.props.media.caption}</div>
                {/* <div className="tester2">{this.props.media.id}</div> */}
                <div className="tester3">{this.props.media.is_picture}</div>
            </main>

        )
        

    }
}