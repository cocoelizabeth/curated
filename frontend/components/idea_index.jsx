import React from 'react';
import IdeaItem from './idea_index_item';
import GreetingContainer from './greeting_container';
import Splash from './splash';


class IdeaIndex extends React.Component {

    constructor(props) {
        super(props);
    } 
    componentDidMount () {
    // request photos from api here
        
        this.props.fetchIdeas();

    }

    render() {
        
        const { ideas } = this.props;
        const ideaItems = ideas.map(idea => {
        return (
            <IdeaItem 
                key={idea.id}
                idea={idea}
            />
        )});
        
        return (
            <div className="idea-index">
                <GreetingContainer />
                <Splash />
                {/* <ul>
                    {ideaItems}
                   
                </ul>  */}
            </div>
        )
    }
}

export default IdeaIndex;

