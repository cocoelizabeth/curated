import React from 'react';
import { Link, Route, withRouter, Switch, HashRouter } from 'react-router-dom';
import CollectionItem from '../collections/collections_index_item';
import NavContainer from "../nav_container";
import CollectionsIndexContainer from "../collections/collections_index_container";
import IdeaIndexContainer from "../idea_index_container";
import UserIdeaIndexContainer from "../user_idea_index/user_idea_index_container";

// class UserShow extends React.Component {
//     constructor(props) {
//         super(props);
//         //   
//     }

//     componentDidMount () {
        
//         this.props.fetchAllCollections(this.props.user.id);
//     }

//     render() {
//         const { user } = this.props;
//         let collectionItem;
        
//         if (user) {

//         const collectionList = Object.keys(this.props.collections).map (
//             id => this.props.collections[id] 
//         );
        
//         collectionItem = collectionList.map(collection =>  {
//             return (
//                 <li className="collection-item-container" key={`collection-${collection.id}`}><CollectionItem collection={collection}/></li>
//             )
//         })}
        
//         return (
//         <>
//             <NavContainer />
//             <div className="profile-container">
//                 <div className="fixed-nav-container">
//                     <ul className="fixed-nav">
//                         <li className="fixed-nav-icon"><i className="fas fa-plus"></i></li>    
//                         <li className="fixed-nav-icon"><i className="fas fa-pencil-alt"></i></li>
//                     </ul>
//                 </div>
//                 <div className="user-profile-header-container">
//                     <ul className="user-profile-text">
//                             <li className="header-username"><h4>{this.props.user.username}</h4></li>
//                         <li id="following-stats">
//                             <Link to="#">0 followers</Link>
//                             <span id="dot">&#183;</span>
//                             <Link to="#">0 following</Link>

//                         </li>
//                         <li id="location">Location</li>
//                     </ul>
//                         <img src="https://curated-seeds.s3.amazonaws.com/default_280.png" className="user-profile-photo"></img>
//                 </div>
//                 <div className="user-profile-tabs-container">
//                     <ul className="user-profile-tabs">
//                         <li id="collections-tab"><Link to="#">Collections</Link></li>
//                         <li id="ideas-tab"><Link to="#">Ideas</Link></li>
//                     </ul>
//                 </div>
// {/*         
// <CollectionIndex />
//         <h1>User Collections</h1> */}
//                 <div className="collection-index">
//                     <ul className="collection-index-container">
//                         {collectionItem}
                     
//                     </ul>
//                 </div>


//     </div>
              

//         </>
//         )
//     }
// }

// export default UserShow;




class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            collectionTab: true,
            ideaTab: false
        };
        this.handleTabClick = this.handleTabClick.bind(this);
        this.displayTabs = this.displayTabs.bind(this);
        
    }

    componentDidMount() {
        //  debugger
        this.props.fetchUser(this.props.match.params.userId).then(() => {    
            this.props.fetchAllCollections(this.props.match.params.userId);
        });
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId).then(() => {
                this.props.fetchAllCollections(this.props.match.params.userId);
            });
        }
    }

    



    displayTabs() {
        if (this.state.collectionTab === true) {
            return (
            <ul className="user-profile-tabs">
                <li 
                    className="selected" 
                    onClick={this.handleTabClick}>
                    <Link to={`/users/${this.props.user.id}/collections`}>Collections</Link>
                </li>
                <li 
                    id="ideas-tab"
                    onClick={this.handleTabClick}>
                    <Link to={`/users/${this.props.user.id}/ideas`}>Ideas</Link>
                </li>
            </ul>
            )
        }else {
            return (
                <ul className="user-profile-tabs">
                    <li
                        onClick={this.handleTabClick}>
                        <Link to={`/users/${this.props.user.id}/collections`}>Collections</Link>
                    </li>
                    <li
                        className="selected"
                        onClick={this.handleTabClick}>
                        <Link to={`/users/${this.props.user.id}/ideas`}>Ideas</Link>
                    </li>
                </ul>
            )
        }

    }
// on click we set the state
    handleTabClick(e) {
        if (e.target.innerText === "Collections") {
            this.setState({ 
                collectionTab: true,
                ideaTab: false})
        } else if (e.target.innerText === "Ideas") {
            this.setState({
                collectionTab: false,
                ideaTab: true
            })
        }
    }


    render() {

        const { user } = this.props;
        let collectionItem;
        // render users collection items 
        if (user) {
            const collectionList = Object.keys(this.props.collections).map(
                id => this.props.collections[id]
            );
            collectionItem = collectionList.map(collection => {
                return (
                    <li className="collection-item-container" key={`collection-${collection.id}`}><CollectionItem collection={collection} /></li>
                )
            })
        } else {
            return <p>Loading...</p>
        }



        return (
            <>
                <NavContainer />
                <div className="profile-container">
                    <div className="fixed-nav-container">
                        <ul className="fixed-nav">
                            <li className="fixed-nav-icon"><Link to="/create_idea"><i className="fas fa-plus"></i></Link></li>
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

                    {/* old code comment back in if doesnt  */}
                    {/* <div className="user-profile-tabs-container">
                        <ul className="user-profile-tabs">
                            <li id="collections-tab"><Link to={`/users/${user.id}/collections`}>Collections</Link></li>
                            <li id="ideas-tab"><Link to={`/users/${user.id}/ideas`}>Ideas</Link></li>
                        </ul>
                    </div> */}

                    <div className="user-profile-tabs-container">
                        {/* <ul className="user-profile-tabs"> */}
                            {this.displayTabs()}
                            {/* <li id="collections-tab"><Link to={`/users/${user.id}/collections`}>Collections</Link></li> */}
                            {/* <li id="ideas-tab"><Link to={`/users/${user.id}/ideas`}>Ideas</Link></li> */}
                        {/* </ul> */}
                    </div>

                    <Switch>
                        <Route exact path="/users/:userId" component={CollectionsIndexContainer} />
                        <Route exact path="/users/:userId/collections" component={CollectionsIndexContainer} />
                   
                        <Route exact path="/users/:userId/ideas" component={UserIdeaIndexContainer} />
                    </Switch>
  
                    {/* <div className="collection-index">
                        <ul className="collection-index-container">
                            {collectionItem}

                        </ul>
                    </div> */}


                </div>


            </>
        )
    }
}

export default UserShow;