import React from 'react';
import { Link, Route, withRouter, Switch, HashRouter } from 'react-router-dom';
import NavContainer from "../nav_container";
import IdeaIndexContainer from "../idea_index_container";
import CollectionIdeaIndexContainer from "../collection_idea_index/collection_idea_index_container";
import CollectionIdeaIndex from "../collection_idea_index/collection_idea_index";

class CollectionShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchCollection(this.props.match.params.collectionId).then(() => {
            this.props.fetchCollectionIdeas(this.props.match.params.collectionId);
        });
    }

    // componentDidUpdate(prevProps) {

    // }

    render() {
        const { collection } = this.props;
        return (
            <>
                <NavContainer />

                <div className="collection-profile-container">

                    <div className="fixed-nav-container">
                        <ul className="fixed-nav">
                            <li className="fixed-nav-icon"><Link to="/create_idea"><i className="fas fa-plus"></i></Link></li>
                            <li className="fixed-nav-icon"><i className="fas fa-pencil-alt"></i></li>
                        </ul>
                    </div>

                    <div className="user-profile-header-container">
                        <ul className="user-profile-text">
                            <li className="header-username"><h4>{this.props.collection.title}</h4></li>
                            <li id="following-stats">
                                <Link to="#">0 followers</Link>
                                <span id="dot">&#183;</span>
                                <Link to="#">0 following</Link>
                            </li>
                            <li id="location">Location</li>
                        </ul>
                        <img src="https://curated-seeds.s3.amazonaws.com/default_280.png" className="user-profile-photo"></img>
                    </div>


                    {/* <div className="user-profile-tabs-container">
                        <ul className="user-profile-tabs">
                            <li id="collections-tab"><Link to={`/users/${user.id}/collections`}>Collections</Link></li>
                            <li id="ideas-tab"><Link to={`/users/${user.id}/ideas`}>Ideas</Link></li>
                        </ul>
                    </div> */}
                </div>
                <CollectionIdeaIndex
                    ideas= {this.props.ideas}
                    fetchCollectionIdeas= {this.props.fetchCollectionIdeas}
                    collection = {this.props.collection}
                />
                
            </>

        )
    }

}

export default CollectionShow;