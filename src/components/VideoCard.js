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

        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)',
              height                : '10em',
              width                 : '30em'
            }
          };
        
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
                        style={customStyles}
                        >
                        <button onClick={this.closeModal}>close</button>
            <div className="modalTitle"ref={subtitle => this.subtitle = subtitle}>Share</div>
            <div className="modalBodyText">
            <div className="socialIconsQuote">
            <a href="https://www.facebook.com/ElSistemaPittsburgh/" target="_blank">
              <div className="socialCircleQuote"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://twitter.com/elsistema" target="blank">
              <div className="socialCircleQuote"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://www.linkedin.com/company/3276954/" target="_blank">
              <div className="socialCircleQuote"><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></div>
            </a>
          </div>
            </div>
            
            </Modal>
                </div>
                {/* Post Time: {this.props.media.post_time} */}
                    
                
            </main>

        )
        

    }
}