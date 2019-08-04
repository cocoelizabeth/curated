import React from 'react';
import IdeaItem from './idea_index_item';
import NavContainer from './nav_container';
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
            <>
                <NavContainer />
                <div className="idea-index">
                    <Splash />
                     {/* <ul>
                    {ideaItems}
                     </ul>  */}
                 </div>
            </>
        )
    }
}

export default IdeaIndex;

