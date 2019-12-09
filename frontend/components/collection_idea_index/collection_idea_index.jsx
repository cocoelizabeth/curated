import React from 'react';
// maybe rename the UserIdeaItem component since i am using it here again
//  i  think i  could  reformat  this so  that UserIdeaIndex and CollectionIdeaIndex are  the  same component
import UserIdeaItem from '../user_idea_index/user_idea_index_item';

class CollectionIdeaIndex extends React.Component {

    constructor(props) {
        super(props);
        this.ideaItems = [];
    }

    // componentDidMount() {
    //     this.props.fetchCollectionIdeas(this.props.match.params.collectionId);
    // }

    render() {
        const { ideas } = this.props;
        
        const ideaItems = ideas.map(idea => {
            return (
                <UserIdeaItem
                    key={idea.id + Math.random()}
                    idea={idea}
                />
            )
        });

        return (
            <>
                <div className="idea-index">
                    <ul className="idea-index-container">
                        {ideaItems}
                    </ul>
                </div>
            </>
        )

    }
}

export default CollectionIdeaIndex;