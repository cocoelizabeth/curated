import React from 'react';
import { Link, Route, withRouter, Switch, HashRouter } from 'react-router-dom';
import NavContainer from "../nav_container";
import CollectionIdeaIndex from "../collection_idea_index/collection_idea_index";


class CollectionShow extends React.Component {
    constructor(props){
        super(props);
        this.editCollection = this.editCollection.bind(this);
    }

    componentDidMount() {
        const collectionId = this.props.match.params.collectionId;
        this.props.fetchCollection(collectionId).then(() => {
            this.props.fetchCollectionIdeas(collectionId);
        });
    }

    editCollection() {
        this.props.openModal('editCollection', null, this.props.collection.id, this.props.collection.title, null);
    }

    renderFixedNav() {
        if (this.props.currentUser.id === this.props.collection.user_id) {
            return (
                <div className="fixed-nav-container">
                    <div className="fixed-nav">
                        <ul className="fixed-nav-left">
                            <li
                                ref={dropdownButton => this.dropdownButton = dropdownButton}
                                tabIndex="1"
                                className="fixed-nav-icon"
                                onClick={this.dropdownToggle}>
                                <i className="fas fa-plus"></i>
                            </li>
                            <li className="fixed-nav-icon" onClick={this.editCollection}><i className="fas fa-pencil-alt"></i></li>
                        </ul>
                        {/* <div className="fixed-nav-transition">{this.props.user.username}</div> */}
                        <div className="fixed-nav-right"></div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="fixed-nav-container">

                    <div className="fixed-nav">
                        <ul className="fixed-nav-left">
                            <li
                                ref={dropdownButton => this.dropdownButton = dropdownButton}
                                tabIndex="1"
                                className="fixed-nav-icon">
                                {/* //    onClick={this.dropdownToggle}> */}
                                <i className="fas fa-share"></i>
                            </li>
                        </ul>

                        {/* <div className="fixed-nav-transition">{this.props.user.username}</div> */}
                        <div className="fixed-nav-right">
                            <div className="profile-photo"></div>
                            <button className="form-button red-button">Follow</button>
                        </div>
                    </div>
                </div>
            )
        }
    }



    render() {
        const { collection } = this.props;
        if (!collection) return null;
        return (
            <>
                <NavContainer />

                <div className="collection-profile-container">

                    {/* <div className="fixed-nav-container">
                        <div className="fixed-nav">
                            <ul className="fixed-nav-left">
                                <li className="fixed-nav-icon"><Link to="/create_idea"><i className="fas fa-plus"></i></Link></li>
                                <li className="fixed-nav-icon" onClick={this.editCollection}><i className="fas fa-pencil-alt"></i></li>
                            </ul> */}
                            {/* <div className="fixed-nav-transition">{this.props.user.username}</div> */}
                            {/* <div className="fixed-nav-right">
                                <div className="profile-photo"><img src="https://curated-seeds.s3.amazonaws.com/default_280.png" className="user-profile-photo"></img></div>
                                <button className="form-button red-button">Follow</button>
                            </div>
                        </div>
                    </div> */}

                    {this.renderFixedNav()}

                    <div className="user-profile-header-container">
                        <ul className="user-profile-text">
                            <li className="header-username"><h4>{this.props.collection.title}</h4></li>
                            <li className="collection-stats">
                                <span>{collection.idea_ids.length} ideas</span>
                                 <span id="dot"> &#183;</span>
                                <Link to="#"> 0 followers</Link>
                            </li>
                        </ul>
                        {/* <img src="https://curated-seeds.s3.amazonaws.com/default_280.png" className="user-profile-photo"></img> */}
                    </div>


                    {/* <div className="user-profile-tabs-container">
                        <ul className="user-profile-tabs">
                            <li id="collections-tab"><Link to={`/collections/${collection.id}`}>Collections</Link></li>
                            <li id="ideas-tab"><Link to={`#`}>More Ideas</Link></li>
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