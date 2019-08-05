import React from 'react';
import { Link } from 'react-router-dom';

class IdeaShow extends React.Component {
    constructor(props){
        super(props);
    }

    // componentDidMount() {
    //     this.props.fetchIdea(this.props.idea);
    // }

   render () {

       return (
           <div className="idea-show-container" >
                <nav className="idea-show-nav">
                    <button className="board-dropdown-button">BOARD DROPDOWN</button>
                    <button className="idea-save-button">SAVE</button>
               </nav>
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
       )

   }
   
    

}

 

export default IdeaShow;