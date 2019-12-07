import React from 'react';
import IdeaItem from './idea_index_item';
import NavContainer from './nav_container';

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

