import React, {Component} from 'react';
import axios from 'axios';
import './../styles/videoCard.css';
import Modal from 'react-modal';


export default class VideoCard extends Component{
    constructor(props){
        super(props);

        this.state = {
            isPhoto: true,
            modalIsOpen: false,
            modal2IsOpen: false,
            modal3IsOpen: false
        };

        this.openModal=this.openModal.bind(this);
        // this.openModal2=this.openModal2.bind(this);
        // this.openModal3=this.openModal3.bind(this);
        this.afterOpenModal=this.afterOpenModal.bind(this);
        this.closeModal=this.closeModal.bind(this);

    }

    openModal(){
        this.setState({
            modalIsOpen: true
        });
    }

    afterOpenModal(){
        this.subtitle.style.color = 'rgb(74,95,107)';
    }

    closeModal(){
        this.setState({
            modalIsOpen: false
        })
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
        
        let imageStyle = {backgroundImage: `url("${this.props.media.media_url}")`, backgroundSize: "cover", backgroundPosition: "center 20%"}

        return(
            <main className="photoCardContainer">
                <div className="mediaImage" style={imageStyle}></div>
                    
                <div className="photoCaption">
                    {this.props.media.caption}

                    <div onClick={this.openModal} 
                    className="shareIcon"></div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        >
                        <button onClick={this.closeModal}>close</button>
            <div className="modalTitle"ref={subtitle => this.subtitle = subtitle}>Share</div>
            <div className="modalBodyText"></div>
            </Modal>
                </div>
                {/* Post Time: {this.props.media.post_time} */}
                    
                
            </main>

        )
        

    }
}