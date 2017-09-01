import React, {Component} from 'react';
import axios from 'axios';


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

    render(){
        // var media = this.state.fetchedMedia;
        // var photos = [];
        // for(var key in test) {
        //     photos.pust(test[key])
        // }

    
        return(
            <main className="photoCardContainer">
                <div className="tester">Yo a picture</div>
            </main>

        )
        

    }
}