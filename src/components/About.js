import React, {Component} from 'react';
import './../styles/global-style.css';
import './../styles/about.css';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';




export default class About extends Component{
  constructor(){
    super();

    this.state = {
      modalIsOpen: false,
      modal2IsOpen: false,
      modal3IsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.openModal3 = this.openModal3.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({
      modalIsOpen: true,
      
    });
  }

  openModal2(){
    this.setState({
      modal2IsOpen: true,
    });
  }

  openModal3(){
    this.setState({
      modal3IsOpen: true,
    });
  }

  afterOpenModal(){
    this.subtitle.style.color = 'rgb(74,95,107)';
  }

  closeModal(){
    this.setState({
      modalIsOpen: false,
      modal2IsOpen: false,
      modal3IsOpen: false
    });
  }

  render(){
  return (

  
    <main className="aboutContainer">
      <div className="parallax">
      <section className="whoWeAreContainer">
        <div className="whoWeAreText">
          <h1 className="whoWeAreTitle">Who We Are</h1>
            <p className="whoWeAreBodyText">
              El Sistema is a philosophy of music educationcreated in Venezuela in 1975. It is the brainchild of Venezuelan musician, politician, economist and philanthropist Dr. Jose Natonio Abreu. At the rood of this philosophy is the idea that music education - specifically classical music education - can and should be used as a means of uplifting and unifying an underserved community, starting with the youth. All children over the age of 2 years are afforded the opportunity to own their own instrument, take private lessons, sing in a choir, and play in an orchestra for no cost. Most of the expenses are paid through government funding. El Sistema has touched the lives of over 2 million Venezuelan children, and over 180 nucleos have been established in virtually every town and city, no matter how rural or urban.
            </p>
            <div className="modalContainer1">
            <div onClick={this.openModal} className="whoWeAreButton">
              <p className="whoWeAreButtonText">Read More</p>
            </div>
            <Modal 
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            >
          <button onClick={this.closeModal}>close</button>
          <br></br>
          <br></br>
            <div className="whoWeAreTitle"ref={subtitle => this.subtitle = subtitle}>Who We Are</div>
          <div className="whoWeAreBodyText">El Sistema is a philosophy of music education created in Venezuela in 1975. It is the brainchild of Venezuelan musician, politician, economist and philanthropist Dr. Jose Natonio Abreu. At the root of this philosophy is the idea that music education - specifically classical music education - can and should be used as a means of uplifting and unifying an underserved community, starting with the youth. All children over the age of 2 years are afforded the opportunity to own their own instrument, take private lessons, sing in a choir, and play in an orchestra for no cost. Most of the expenses are paid through government funding. El Sistema has touched the lives of over 2 million Venezuelan children, and over 180 nucleos have been established in virtually every town and city, no matter how rural or urban.
          <br></br>
          <br></br>
          At the heart of El Sistema is the orchestra, or the family and community. All children play together and metaphorically (or perhaps literally) fight and struggle together to overcome life's obstacles and to reach a common goal of social change. El Sistema's approach to music education emphasizes intensive ensemble participation from the earliest stages, group learning, peer teaching, and a commitment to keeping the joy and fun of musical learning and music making ever-present.
          <br></br>
          <br></br>
          Classical music education offers a fresh, creative way to impart important life skills to children who may have dficient learning opportunities otherwise. In the case of El Sistema, however, these lessons rest on top of an equally, amnd perhaps more important, notion of using art to alleviate the strains of poverty. Private lessons and orchestra rehearsals not only offer a child critical thinking skills cultivated in reagular one-on-one interaction with adult music mentors, but also provide an incentive for the child to stay off the streets and away from negative influences while not in school. 
          <br></br>
          <br></br>
          El Sistema is a philosophy of learning that is beautifully flexible, allowing it to fit the needs of every community and demographic variable. No two El Sistema programs are the same, but the mission holds true throughout: use music to enable children to thrive and progress as a community. Since its inception in Venezuela over 30 years ago, the El Sistema philosophy has spread worldwide, and includes many vibrant programs established in the United States. On the worldwide scale, more than 25 countries now have music programs modeled on the El Sistema philosophy.
          <br></br>
          <br></br>
          Critics of El Sistema have asked: Why classical music? All genres of music could, in theory, fit in the El Sistema model, and in many regions of both Venezuela and the U.S., they are in fact a very important part of the musical programs. Classical music specifically has been hightly successful because it requires the combined skills of learning an instrument, playing in an ensemble, and honing creative interpretation-all at the highest level. The lessons learned and the discipline required in studying and creating music are a by-product of El Sistema's focus on producing performances of classical music (and in some cases, other genres) of the highest quality. When all students are making music at the most profound, intellectually stimulated level possible for each individual, then the endeavor as a whole will prove successful. Once the skills are learned, the possibilities and opportunities for transferring those life lessons are endless.  
          </div>
        </Modal>
        </div>
        </div>
      </section>


      <section className="imgContainerOne"></section>


      <section className="missionStatementContainer">
        <div className="missionStatementText">
        <h1 className="missionStatementTitle">Mission Statement</h1>
        <p className="missionStatementBodyText">
          El Sistema Pittsburgh provides Pittsburgh's youth with accessible and intensive classical music instruction. Utilizing music as a vehicle for positive change, ESPGH propmotes the development of music, cognitive and social skills, self-esteem, and community pride in youth.
        </p>
        <div className="modalContainer2">
        <div onClick={this.openModal2} className="missionStatementButton">
          <p className="missionStatementButtonText">Read More</p>
        </div>
        <Modal 
            isOpen={this.state.modal2IsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            >
          <button onClick={this.closeModal}>close</button>
            <div className="missionStatementTitle"ref={subtitle => this.subtitle = subtitle}>Mission Statement</div>
          <div className="missionStatementBodyText">El Sistema Pittsburgh has a musical goal coupled with a social mission. Youth participants build skills and connections that empower them as leaders in the community and beacons of light to diminish the darkness of violence and isolation. As the musician community develops the collective work will reflect the richness of life in Pittsburgh youth and serve as a symbol of resilience and community allegiance. 
          <br></br>
          <br></br>
          An orchestra is a phenomenal model of community. Musicians are inspired to present their best work, individually and in collaboration. The dissonant moments are embraced and sweeten the resolutions and harmonies. The chords resonate best when each nurtured player in the orchestra carries an understanding of the overall vision and an appreciation of the unique and valuable material of a neighbor. The creative and joyous energy of the music encourages diverse timbres and articulations enhancing the overall celebratory effect. The influential power of this model on a community is the driving force of the initiative. 
          </div>  
        </Modal>
        </div>
        </div>
      </section>


      <section className="imgContainerTwo"></section>


      <section className="curriculumContainer">
        <div className="curriculumText">
          <h1 className="curriculumTitle">Curriculum</h1>
          <p className="curriculumBodyText">
            Rehersals for ESPGH are three days per week after the standard school day. On occation, there are weekend rehearsal dates to help preparedness for upcoming events. Rehearsals address balances between instrument sections and emphasize playing exactly together, matching rhythms, styles tones, and executions, such as bow strokes and articulations.
          </p>
          <div onClick={this.openModal3} className="modalContainer3">
          <div className="curriculumButton" id="myBtn">
          <p className="curriculumButtonText">Read More</p>
          </div>
          <Modal 
            isOpen={this.state.modal3IsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            >
          <button onClick={this.closeModal}>close</button>
            <div className="curriculumTitle"ref={subtitle => this.subtitle = subtitle}>Curriculum</div>
            <br></br>
          <br></br>
          <div className="curriculumBodyText">ESPGH is an after-school program with a curriculum that focuses on many different subjects: 
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="curriculumHeader">Musicianship</div>
          <br></br>
          <br></br>
          Instruction focuses on foundational musicianship skills without the instrument. Often referred to as music theory, there are multiple aspects our curriculum addresses. Students are encouraged to perform rhythmic exercises (rhythmic theory), train their ears to recognize intervals and chord qualities (aural theory), learn how to perform melodies and rhythms accurately by sight (sight-reading), and practice writing down musical examples upon hearing them (dictation). Likewise, students will be educated on the premises of written theory and analysis, which is the in-depth understanding of music and the interdependent relationship between notes, melodic lines, and harmonies.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="curriculumHeader">Ensemble and Private Instruction</div>
          <br></br>
          <br></br>
          Ensemble instruction includes instruction on both large and small scales through both full ensemble rehearsals, as well as sectional rehearsals of same or related instruments. The purpose of all ensemble instruction is to encourage growth and understanding through a collaborative effort. This fosters a sense of community and cooperation throughout the ensemble, encouraging students to learn from one another and to work together towards a common goal.
          <br></br>
          <br></br>
          Private lessons are available, but usually less common than ensemble instruction due to El Sistema’s philosophy of group learning. While ensemble learning is the main tool of ESPGH, students who are interested in private lessons have the opportunity to work with a teacher one on one on both an as-needed and wanted basis, depending on the availability of the child and staff.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="curriculumHeader">Seminarios</div>
          <br></br>
          <br></br>
          A ‘seminario’ is a thorough examination of a specific orchestral or choir piece. This intensive learning experience is offered to individual sections (e.g. first violins). The teachers review repertoire with and without instruments, focusing on analysis, artistic interpretation, and performance technique. Often referred to as masterclasses or studio classes, seminarios encourage students to learn more about their instrument, its history, its capabilities, and their own personal ability to achieve and perform.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="curriculumHeader">Bucket Band</div>
          <br></br>
          <br></br>
          Bucket Band is a small ensemble-based class that emphasizes musical rhythm in addition to strengthening students, and enforces function skills and teamwork. The ensemble is comprised of a variety of low-to-no cost percussion instruments, including the namesake objects, buckets. Bucket Band allows for students to review and strengthen individual musical literacy skills while developing in a creative and fun way as a group.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="curriculumHeader">Choir</div>
          <br></br>
          <br></br>
          Choir is a large ensemble-based class that emphasizes teamwork, cooperation, and positive self-efficacy through choral repertoire. The choir curriculum stresses musical theory and musical literacy, encouraging students to develop skills in sight-reading music and lyrics. Sight-reading is a skill which has been shown to improve cognitive function through the process of turning abstract musical notation into physical action. This course, requiring collective participation of participants, fosters intrinsic motivation and teamwork among students.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="curriculumHeader">Rehearsals</div>
          <br></br>
          <br></br>
          Rehearsals for ESPGH are three days per week after the standard school day. On occasion, there are weekend rehearsal dates to help preparedness for upcoming events. Rehearsals address balances between instrument sections and emphasize playing exactly together, matching rhythms, styles, tones, and executions, such as bow strokes and articulations. Students are expected to be prepared in rehearsals and focus foremost on playing as an ensemble. Repertoire in El Sistema Pittsburgh varies – beginners are given simplified or reduced orchestra versions of symphonic music, with the intention that, as they advance, they will play full orchestral pieces as they were originally written. Students are also exposed to other genres of music, including: jazz, Latin-American music, pop music, folk music, and recently composed music of many 
          genres.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="curriculumHeader">Performances</div>
          <br></br>
          <br></br>
          Performances occur as often as possible to make the community more aware of El Sistema activities. This helps to accustom the students to being on stage and developing pride in their work. ESPGH holds performances for students of all ages and skill levels, encouraging student retention through fostering positive personal experiences.
          <br></br>
          <br></br>
          El Sistema Pittsburgh inculcates in the students a culture of performance and sharing their talents. The concerts are viewed as a means of demonstrating the learning process and a motivation tool for students. Performances by the students in El Sistema Pittsburgh provide opportunity to foster pride and strength in the community, and are always accessible to the public in a variety of ways.
          </div>  
        </Modal>
        </div>
        </div>
      </section>


      <section className="imgContainerThree"></section>

      
      <section className="volunteersContainer">
        <div className="volunteersText">
          <h1 className="volunteersTitle">Volunteers</h1>
          <p className="volunteersBodyText">
          Sistema Global is a group of passionate volunteers who contribute from their expertise and experience to help drive the mission of this virtual organization.  We are a volunteer digital communications network which connects all the interdependent but widely dispersed programs, and provides up-to-date information about El Sistema to the world at large. The organization serves to facilitate ongoing conversations, foster mutual support, and extend the reach of shared resources.
          <br/>
          <br/>
          We welcome, support and encourage volunteer members from diverse occupational and educational backgrounds who believe in music making as a means for transforming lives.  Volunteers work together as highly collaborative teams.
          </p>

          <div className="volunteersFormat">


            <div className="volunteersProfile">
              <div className="topBox">
                <div className="volunteersCirclePic">
                </div>
                <div className="volunteersProfileButton">
                <div className="arrowImage"></div>

                </div>
              </div>
              <p className="volunteersName">Charlie Brown</p>
              <p className="volunteersPosition">Volunteer Block Head</p>
              <div className="socialIconsAboutUs">
            <a href="https://www.facebook.com/ElSistemaPittsburgh/" target="_blank">
              <div className="socialCircleAboutUs"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://twitter.com/elsistema" target="blank">
              <div className="socialCircleAboutUs"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://www.linkedin.com/company/3276954/" target="_blank">
              <div className="socialCircleAboutUs"><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></div>
            </a>
          </div>
            </div>


            <div className="volunteersProfile2">
              <div className="topBox2">
                <div className="volunteersCirclePic2">
                </div>
                <div className="volunteersProfileButton">
                <div className="arrowImage"></div>

                </div>
              </div>
              <p className="volunteersName">Peppermint Patty</p>
              <p className="volunteersPosition">Volunteer Accountant</p>
              <div className="socialIconsAboutUs">
            <a href="https://www.facebook.com/ElSistemaPittsburgh/" target="_blank">
              <div className="socialCircleAboutUs"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://twitter.com/elsistema" target="blank">
              <div className="socialCircleAboutUs"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://www.linkedin.com/company/3276954/" target="_blank">
              <div className="socialCircleAboutUs"><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></div>
            </a>
          </div>
            </div>


            <div className="volunteersProfile3">
              <div className="topBox3">
                <div className="volunteersCirclePic3">
                </div>
                <div className="volunteersProfileButton">
                <div className="arrowImage"></div>

                </div>
              </div>
              <p className="volunteersName">Lucy van Pelt</p>
              <p className="volunteersPosition">Volunteer Student Aid</p>
              <div className="socialIconsAboutUs">
            <a href="https://www.facebook.com/ElSistemaPittsburgh/" target="_blank">
              <div className="socialCircleAboutUs"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://twitter.com/elsistema" target="blank">
              <div className="socialCircleAboutUs"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://www.linkedin.com/company/3276954/" target="_blank">
              <div className="socialCircleAboutUs"><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></div>
            </a>
          </div>
            </div>


            <div className="volunteersProfile4">
              <div className="topBox">
                <div className="volunteersCirclePic4">
                </div>
                <div className="volunteersProfileButton">
                <div className="arrowImage"></div>

                </div>
              </div>
              <p className="volunteersName">Franklin</p>
              <p className="volunteersPosition">Volunteer Music Teacher</p>
              <div className="socialIconsAboutUs">
            <a href="https://www.facebook.com/ElSistemaPittsburgh/" target="_blank">
              <div className="socialCircleAboutUs"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://twitter.com/elsistema" target="blank">
              <div className="socialCircleAboutUs"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://www.linkedin.com/company/3276954/" target="_blank">
              <div className="socialCircleAboutUs"><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></div>
            </a>
          </div>
            </div>


            <div className="volunteersProfile5">
              <div className="topBox">
                <div className="volunteersCirclePic5">
                </div>
                <div className="volunteersProfileButton">
                <div className="arrowImage"></div>

                </div>
              </div>
              <p className="volunteersName">Snoopy</p>
              <p className="volunteersPosition">Volunteer Fighter Pilot</p>
              <div className="socialIconsAboutUs">
            <a href="https://www.facebook.com/ElSistemaPittsburgh/" target="_blank">
              <div className="socialCircleAboutUs"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://twitter.com/elsistema" target="blank">
              <div className="socialCircleAboutUs"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://www.linkedin.com/company/3276954/" target="_blank">
              <div className="socialCircleAboutUs"><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></div>
            </a>
          </div>
            </div>


            <div className="volunteersProfile6">
              <div className="topBox2">
                <div className="volunteersCirclePic6">
                </div>
                <div className="volunteersProfileButton">
                <div className="arrowImage"></div>

                </div>
              </div>
              <p className="volunteersName">Linus van Pelt</p>
              <p className="volunteersPosition">Volunteer UX Designer</p>
              <div className="socialIconsAboutUs">
            <a href="https://www.facebook.com/ElSistemaPittsburgh/" target="_blank">
              <div className="socialCircleAboutUs"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://twitter.com/elsistema" target="blank">
              <div className="socialCircleAboutUs"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://www.linkedin.com/company/3276954/" target="_blank">
              <div className="socialCircleAboutUs"><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></div>
            </a>
          </div>
            </div>


          </div>


          <h1 className="volunteersFooter">Interested in becoming a volunteer?</h1>
          <div className="volunteersButton">
            <Link to="/support">
            <p className="volunteersButtonText">Connect</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="ourLocationContainer">
        <div className="ourLocationText">
        <h1 className="ourLocationTitle">Our Location</h1>
        <div className="ourLocationImage"></div>
        </div>
      </section>
     
      </div>
    </main>
  )
}
}
