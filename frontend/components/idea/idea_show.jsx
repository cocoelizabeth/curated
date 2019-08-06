import React from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../nav_container';

class IdeaShow extends React.Component {
    constructor(props){
        
        super(props);
    }

    componentDidMount() {
        
        this.props.fetchIdea(this.props.match.params.ideaId);
    }



   render () {
   if (!this.props.idea) { return <p>Loading..</p> };
       return (
           <>
           <NavContainer />
           <div className="modal-background">
               <div className="modal-child">
           <div className="idea-show-container" >
                <span className="idea-show-nav">
                    <ul className="idea-show-nav-left">
                        <li className="board-dropdown-button">BOARD DROPDOWN</li>
                        <li className="idea-save-button">Save</li>
                   </ul>
               </span>
                <div className="idea-show-elements">
                    <div className="idea-show-image-container">
                        <img src={this.props.idea.photoUrl} className="idea-show-image"/>
                    </div>
                    <div className="idea-show-info-container">
                        <div className="idea-info">
                            <ul className ="idea-user-info">
                                <li id="profile-photo">
                                {/* //  add original user after username
                                <Link to={`/${this.props.idea.user.username}`}> */}
                                    <Link to="#">
                                        <img src="https://curated-seeds.s3.amazonaws.com/default_profile_pic.png" />
                                        </Link>
                                </li>
                            <li id="user-info">
                                {/* //  add original user after username
                                 <h3> {`/${this.props.idea.user.username}`}></h3> */}
                                <h3 className="idea-show-username">Username</h3>
                                <p className="follow-count"> [NUM] followers</p>
                                </li>
                                <li id="follow-button">
                                    <button>FOLLOW</button>
                                </li>
                            </ul>
                    </div>

                          {/* <p> {this.props.idea.description}
                        </li>
                          <li id="pin-count">
                           <Link to=`/${currentUser}`>
                                <img src="https://curated-seeds.s3.amazonaws.com/default_profile_pic.png" />
                                </Link>
                        </li>


                  
                        {this.props.idea.title} */}
                   </div>
                </div>
               
           </div>
         </div>
 </div>
                        </>
       )

   }
   
    

}

 

export default IdeaShow;