import React from 'react';
import UserIdeaItem from './user_idea_index_item';


class UserIdeaIndex extends React.Component {

    constructor(props) {
        super(props);
        this.ideaItems = [];
    }
    componentDidMount() {
        // request photos from api here
        this.props.fetchUserIdeas(this.props.match.params.userId);
    }

    componentDidUpdate() {
        
    }

    render() {
        const { ideas } = this.props;
        const ideaItems = ideas.map(idea => {
            return (
                <UserIdeaItem
                    key={idea.id}
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

export default UserIdeaIndex;

