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
               <button className="back-button" onClick={this.props.history.goBack}>
                    <i className="fas fa-arrow-left"></i>
               </button>
               <button className="close-button" onClick={this.props.history.goBack}>
                   <i class="fas fa-times"></i>
               </button>
           <div className="modal-background">
            
               <div className="modal-child">
                 
                <div className="idea-show-container" >
                
                    <span className="idea-show-nav">

                        <ul className="idea-show-nav-left">
                            <li className="idea-show-nav-left"><i className="fas fa-pencil-alt"></i></li>
                        </ul> 

                        <ul className="idea-show-nav-right">
                            <li className="board-dropdown-button">
                                <h4 className="dropdown-board-name">COLLECTION NAME</h4>
                                <i className="fas fa-chevron-down"></i>
                            </li>
                            <li className="idea-save-button">Save</li>
                        </ul>
                    </span>

                    <div className="idea-show-elements">
                        <h5 className="idea-title">{this.props.idea.title}</h5>
                        <div className="idea-show-image-container">
                            <img src={this.props.idea.photoUrl} className="idea-show-image"/>
                        </div>
                        <div className="idea-show-info-container">
                            <div id="profile-photo">
                                <Link to="#"><img src="https://curated-seeds.s3.amazonaws.com/default_profile_pic.png" /></Link>
                            </div>
                            <div className="idea-show-text">
                                <ul className ="follow-user-info">
                                    <li id="follow-user-info">
                                        <Link to="#">idea.username</Link>
                                        <div className="description-box">1.3k Followers</div> 
                                    </li>
                            
                                    <li className="follow-button">
                                        <button>Follow</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="idea-show-info-container">
                            <div id="profile-photo">
                                <Link to="#"><img src="https://curated-seeds.s3.amazonaws.com/default_profile_pic.png" /></Link>
                            </div>
                            <div className="idea-show-text">
                                <ul className ="idea-user-info">
                                    <li id="user-info">
                                        <Link to="#">idea.username</Link> saved to <Link to="#">idea.collection</Link>
                                    </li>
                                    <li className="num-resaves">
                                        <i className="fas fa-asterisk"></i>
                                        <p className="num">{Math.floor(Math.random() * 100) + 1}</p>
                                    </li>
                                </ul>
                                <div className="description-box">{this.props.idea.description}</div>
                            </div>              
                        </div> */}

                    </div>
                </div>
             </div>
        </div>
    </>
    )
}
   
    

}

 

export default IdeaShow;