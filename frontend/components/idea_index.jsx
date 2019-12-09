import React from 'react';
import CollectionIdeaIndexContainer from "./collection_idea_index/collection_idea_index_container";
import IdeaIndexContainer from "./idea_index_container";
import IdeaItem from './idea_index_item';
import NavContainer from './nav_container';
import { connect } from 'react-redux';
import UserIdeaIndexContainer from './user_idea_index/user_idea_index_container';

class IdeaIndex extends React.Component {

    constructor(props) {
        super(props);
        this.ideaItems = [];
    } 

    componentDidMount () {
        this.props.fetchIdeas();
    }

    render() {        
        const { ideas } = this.props;
        // maps all ideas to array of idea items
        const ideaItems = ideas.map(idea => {
            return (
                <IdeaItem 
                    key={idea.id}
                    idea={idea}
                />
            )
        });

        return (
            <>
                <NavContainer />
                <div className="idea-index">
                     <ul className="idea-index-container">
                        {ideaItems}
                     </ul> 
                 </div>
            </>
        )
    }
}

export default IdeaIndex;

// FUTURE IMPLEMENTATION: combine all idea indexes
// function IdeaIndex({ index }) {
//     let component;

//     switch( index.type ) {
//         case "ideaIndex":
//             component = <IdeaIndexContainer />
//             break;
//         case "collectionIdeaIndex":
//             component = <CollectionIdeaIndexContainer />
//             break;
//         case "userIdeaIndex": {
//             component = <UserIdeaIndexContainer />
//             break;
//         }
//     }

//     return(

//     )
// }

// export default connect(mapStateToProps, mapDispatchToProps)(IdeaIndex);
