import React from 'react';
import IdeaItem from './idea_index_item';
import NavContainer from './nav_container';
import Splash from './splash';
import { Route } from 'react-router-dom';
import IdeaShowContainer from './idea/idea_show_container';


class IdeaIndex extends React.Component {

    constructor(props) {
        super(props);

        this.ideaItems = [];
    } 
    componentDidMount () {
    // request photos from api here
        
        this.props.fetchIdeas();
        // 

    }

    componentDidUpdate () {
        
    }

    shuffleIdeas (ideas) {
        for (let i=0; i < ideas.length; i++) {
            const randomIndex = Math.floor(Math.random() * ideas.length);
            [ideas[i], ideas[randomIndex]] = [ideas[randomIndex], ideas[i]]
        }

        
        return ideas;
    }

    mapIdeasToJsx () {
        const { ideas } = this.props;
        const ideaItems = ideas.map(idea => {

            return (

                <IdeaItem
                    key={idea.id}
                    idea={idea}
                />
            )
        });

        
        return this.shuffleIdeas(ideaItems);
    }

    render() {

        this.ideaItems = this.ideaItems.length > 0 ? this.ideaItems : this.mapIdeasToJsx();
        
        // const { ideas } = this.props;
        // const ideaItems = ideas.map(idea => {
            
        // return (
    
        //     <IdeaItem 
        //         key={idea.id}
        //         idea={idea}
        //     />
        // )});
        


        return (
            <>
                <NavContainer />
                <div className="idea-index">
                    {/* <Splash /> */}
                     <ul className="idea-index-container">
                    {this.ideaItems}
                     </ul> 
                 </div>
            </>
        )
    }
}

export default IdeaIndex;

