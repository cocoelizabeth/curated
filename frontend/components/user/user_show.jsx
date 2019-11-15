import React from 'react';
import { Link, Route, withRouter, Switch, HashRouter } from 'react-router-dom';
import CollectionItem from '../collections/collections_index_item';
import NavContainer from "../nav_container";
import CollectionsIndexContainer from "../collections/collections_index_container";
import IdeaIndexContainer from "../idea_index_container";
import UserIdeaIndexContainer from "../user_idea_index/user_idea_index_container";


class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collectionTab: true,
            ideaTab: false,
            createDropdown: false,
        };
        this.handleTabClick = this.handleTabClick.bind(this);
        this.displayTabs = this.displayTabs.bind(this);
        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.name = this.getName();
        // this.getName = this.getName.bind(this);
    }

    componentDidMount() {

        this.props.fetchUser(this.props.match.params.userId).then(() => {
            this.props.fetchAllCollections(this.props.match.params.userId);
        });

        if (this.props.location.pathname.includes("ideas") && !(this.state.ideaTab)) {
            this.setState({
                collectionTab: false,
                ideaTab: true
            });
        }
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId).then(() => {
                this.props.fetchAllCollections(this.props.match.params.userId);
            });
        }
    }




    // Renders grey background on selected tab; Black underlined on mouseover
    displayTabs() {
        if (this.state.collectionTab === true) {
            return (
                <div className="user-profile-tabs-container">
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
                </div>
            )
        } else {
            return (
                <div className="user-profile-tabs-container">
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
                </div>
            )
        }

    }
    // on click we set the state
    handleTabClick(e) {
        if (e.target.innerText === "Collections") {
            this.setState({
                collectionTab: true,
                ideaTab: false
            })
        } else if (e.target.innerText === "Ideas") {
            this.setState({
                collectionTab: false,
                ideaTab: true
            })
        }
    }

    renderDropdown() {
        
        if (this.state.createDropdown) {

            // return (

            //     <ul ref={dropdownRef => this.dropdownRef = dropdownRef} className="dropdown-visible">
            //         <li><Link to="/create_collection" className="dropdown-list-item">Create Collection</Link></li>
            //         <li><Link to="/create_idea" className="dropdown-list-item">Create Idea</Link></li>
            //     </ul>
            // )
            return (
                <div className="drop-down-modal-create">

                    <ul ref={dropdownRef => this.dropdownRef = dropdownRef} className="dropdown-visible-create">
                        <li><Link to="/create_collection" className="dropdown-list-item">Create Collection</Link></li>
                        <li><Link to="/create_idea" className="dropdown-list-item">Create Idea</Link></li>
                    </ul>
                </div>

            )
        }
    }

    handleClick(e) {
        if (this.dropdownRef && (this.dropdownRef.contains(e.target)) || (this.dropdownButton.contains(e.target))) {
            return;
        } else {
            this.dropdownRef(setState({ createDropdown: false}))
            e.preventDefault();
            e.stopPropagation();
        }
    }

    componentWillUnmount()  {
        document.removeEventListener('mousedown', this.handleClick, false)
    }

    dropdownToggle(e) {
        this.setState({ createDropdown: !this.state.createDropdown })
    }



    getName() {
   
        const username = this.props.user.username;
        let name = "";
        for (let i = 0; i < username.length; i++) { 

            let testChar = parseInt(username[i])
   
            if (testChar > 0) {
                return name;
            } else {
         
                name += username[i]
            }
        }
        return name;
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

        // const username = this.props.user.username;
        // let name = ""
        // for (let i = 0; i < username.length; i++) {
        //     debugger
        //     if (parseInt(username[i]) === NaN) {
        //         debugger
        //         name += username[i]
        //         debugger
        //     } else {
        //         break
        //         debugger
        //     }
        // }
        
        

        



        return (
            <>
                <NavContainer />
                <div className="profile-container">
                    <div className="fixed-nav-container">
                        <ul className="fixed-nav">
                            <li 
                                ref={dropdownButton => this.dropdownButton = dropdownButton} 
                                id="kebab-dropdown-button" 
                                tabIndex="1"
                                className="fixed-nav-icon" 
                                onClick={this.dropdownToggle}>
                                    <i className="fas fa-plus"></i>
                                </li>
                            <li className="fixed-nav-icon"><i className="fas fa-pencil-alt"></i></li>
                        </ul>
                    </div>
                    
                    <div className="user-profile-header-container">
                        {this.renderDropdown()}
                        <ul className="user-profile-text">
                            <li className="header-username"><h4>{this.name}</h4></li>
                            {/* <li className="header-username"><h4>{this.props.user.username}</h4></li> */}
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


                    {/* <ul className="user-profile-tabs"> */}
                    {/* {this.renderDropdown()} */}
                    {this.displayTabs()}
                    {/* <li id="collections-tab"><Link to={`/users/${user.id}/collections`}>Collections</Link></li> */}
                    {/* <li id="ideas-tab"><Link to={`/users/${user.id}/ideas`}>Ideas</Link></li> */}
                    {/* </ul> */}
                    {/* </div> */}

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




// OLD CODE FOR REFERENCE

// import React from 'react';
// import { Link, Route, withRouter, Switch, HashRouter } from 'react-router-dom';
// import CollectionItem from '../collections/collections_index_item';
// import NavContainer from "../nav_container";
// import CollectionsIndexContainer from "../collections/collections_index_container";
// import IdeaIndexContainer from "../idea_index_container";
// import UserIdeaIndexContainer from "../user_idea_index/user_idea_index_container";




// class UserShow extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state  = {
//             collectionTab: true,
//             ideaTab: false
//         };
//         this.handleTabClick = this.handleTabClick.bind(this);
//         this.displayTabs = this.displayTabs.bind(this);
        
//     }

//     componentDidMount() {
//          debugger
//         this.props.fetchUser(this.props.match.params.userId).then(() => {    
//             this.props.fetchAllCollections(this.props.match.params.userId);
//         });

//         if (this.props.location.pathname.includes("ideas") && !(this.state.ideaTab)) {
//             this.setState({
//                 collectionTab: false,
//                 ideaTab: true
//             });
//         }
//     }

//     componentDidUpdate(prevProps) {
//         // debugger
//         if (prevProps.match.params.userId !== this.props.match.params.userId) {
//             this.props.fetchUser(this.props.match.params.userId).then(() => {
//                 this.props.fetchAllCollections(this.props.match.params.userId);
//             });
//         }
//     }

    


// // Renders grey background on selected tab; Black underlined on mouseover
//     displayTabs() {
//         if (this.state.collectionTab === true) {
//             return (
//             <div className="user-profile-tabs-container">
//                 <ul className="user-profile-tabs">
//                     <li 
//                         className="selected" 
//                         onClick={this.handleTabClick}>
//                         <Link to={`/users/${this.props.user.id}/collections`}>Collections</Link>
//                     </li>
//                     <li 
//                         id="ideas-tab"
//                         onClick={this.handleTabClick}>
//                         <Link to={`/users/${this.props.user.id}/ideas`}>Ideas</Link>
//                     </li>
//                 </ul>
//             </div>
//             )
//         }else {
//             return (
//                 <div className="user-profile-tabs-container">
//                     <ul className="user-profile-tabs">
//                         <li
//                             onClick={this.handleTabClick}>
//                             <Link to={`/users/${this.props.user.id}/collections`}>Collections</Link>
//                         </li>
//                         <li
//                             className="selected"
//                             onClick={this.handleTabClick}>
//                             <Link to={`/users/${this.props.user.id}/ideas`}>Ideas</Link>
//                         </li>
//                     </ul>
//                 </div>
//             )
//         }

//     }
// // on click we set the state
//     handleTabClick(e) {
//         if (e.target.innerText === "Collections") {
//             this.setState({ 
//                 collectionTab: true,
//                 ideaTab: false})
//         } else if (e.target.innerText === "Ideas") {
//             this.setState({
//                 collectionTab: false,
//                 ideaTab: true
//             })
//         }
//     }





//     render() {

//         const { user } = this.props;
//         let collectionItem;
//         // render users collection items 
//         if (user) {
//             const collectionList = Object.keys(this.props.collections).map(
//                 id => this.props.collections[id]
//             );
//             collectionItem = collectionList.map(collection => {
//                 return (
//                     <li className="collection-item-container" key={`collection-${collection.id}`}><CollectionItem collection={collection} /></li>
//                 )
//             })
//         } else {
//             return <p>Loading...</p>
//         }



//         return (
//             <>
//                 <NavContainer />
//                 <div className="profile-container">
//                     <div className="fixed-nav-container">
//                         <ul className="fixed-nav">
//                             <li className="fixed-nav-icon"><Link to="/create_idea"><i className="fas fa-plus"></i></Link></li>
//                             <li className="fixed-nav-icon"><i className="fas fa-pencil-alt"></i></li>
//                         </ul>
//                     </div>
//                     <div className="user-profile-header-container">
//                         <ul className="user-profile-text">
//                             <li className="header-username"><h4>{this.props.user.username}</h4></li>
//                             <li id="following-stats">
//                                 <Link to="#">0 followers</Link>
//                                 <span id="dot">&#183;</span>
//                                 <Link to="#">0 following</Link>

//                             </li>
//                             <li id="location">Location</li>
//                         </ul>
//                         <img src="https://curated-seeds.s3.amazonaws.com/default_280.png" className="user-profile-photo"></img>
//                     </div>

//                     {/* old code comment back in if doesnt  */}
//                     {/* <div className="user-profile-tabs-container">
//                         <ul className="user-profile-tabs">
//                             <li id="collections-tab"><Link to={`/users/${user.id}/collections`}>Collections</Link></li>
//                             <li id="ideas-tab"><Link to={`/users/${user.id}/ideas`}>Ideas</Link></li>
//                         </ul>
//                     </div> */}

                    
//                         {/* <ul className="user-profile-tabs"> */}
//                             {this.displayTabs()}
//                             {/* <li id="collections-tab"><Link to={`/users/${user.id}/collections`}>Collections</Link></li> */}
//                             {/* <li id="ideas-tab"><Link to={`/users/${user.id}/ideas`}>Ideas</Link></li> */}
//                         {/* </ul> */}
//                     {/* </div> */}

//                     <Switch>
//                         <Route exact path="/users/:userId" component={CollectionsIndexContainer} />
//                         <Route exact path="/users/:userId/collections" component={CollectionsIndexContainer} />
                   
//                         <Route exact path="/users/:userId/ideas" component={UserIdeaIndexContainer} />
//                     </Switch>
  
//                     {/* <div className="collection-index">
//                         <ul className="collection-index-container">
//                             {collectionItem}

//                         </ul>
//                     </div> */}


//                 </div>


//             </>
//         )
//     }
// }

// export default UserShow;