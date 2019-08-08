import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import CollectionItem from '../collections/collections_index_item';
import NavContainer from "../nav_container";

class UserShow extends React.Component {
    constructor(props) {
        super(props);
        // debugger
    }

    componentDidMount () {
        
        this.props.fetchAllCollections(this.props.user.id);
    }

    render() {
        const { user } = this.props;
        let collectionItem;
        
        if (user) {

        const collectionList = Object.keys(this.props.collections).map (
            id => this.props.collections[id] 
        );
        
        collectionItem = collectionList.map(collection =>  {
            return (
                <li className="collection-container" key={`collection-${collection.id}`}><CollectionItem collection={collection}/></li>
            )
        })}
        
        return (
        <>
            <NavContainer />
            <div className="profile-container">
                <div className="fixed-nav-container">
                    <ul className="fixed-nav">
                        <li className="fixed-nav-icon"><i className="fas fa-plus"></i></li>    
                        <li className="fixed-nav-icon"><i className="fas fa-pencil-alt"></i></li>
                    </ul>
                </div>
                <div className="user-profile-header-container">
                    <ul className="user-profile-text">
                            <li className="header-username"><h4>{this.props.user.username}</h4></li>
                        <li id="following-stats">
                            <Link to="#">0 followers</Link>
                            <span id="dot">&#183;</span>
                            <Link to="#">0 following</Link>

                        </li>
                        <li id="location">Location</li>
                    </ul>
                        <img src="https://curated-seeds.s3.amazonaws.com/default_280.png" className="user-profile-photo"></img>
                </div>
                <div className="user-profile-tabs-container">
                    <ul className="user-profile-tabs">
                        <li id="collections-tab"><Link to="#">Collections</Link></li>
                        <li id="ideas-tab"><Link to="#">Ideas</Link></li>
                    </ul>
                </div>
        
        <h1>User Collections</h1>
                    <ul>
                        {collectionItem}
                    </ul>


    </div>
              

        </>
        )
    }
}

export default UserShow;