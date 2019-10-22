import React from 'react';
import UserIdeaItem from './user_idea_index_item';
import { Route } from 'react-router-dom';


class UserIdeaIndex extends React.Component {

    constructor(props) {
        super(props);

        this.ideaItems = [];
    }
    componentDidMount() {
          
        // request photos from api here

        this.props.fetchUserIdeas(this.props.match.params.userId);
        // 
        debugger

    }

    componentDidUpdate() {

    }

    // shuffleIdeas (ideas) {
    //     for (let i=0; i < ideas.length; i++) {
    //         const randomIndex = Math.floor(Math.random() * ideas.length);
    //         [ideas[i], ideas[randomIndex]] = [ideas[randomIndex], ideas[i]]
    //     }


    //     return ideas;
    // }

    // mapIdeasToJsx () {
    //     const { ideas } = this.props;
    //     const ideaItems = ideas.map(idea => {

    //         return (

    //             <IdeaItem
    //                 key={idea.id}
    //                 idea={idea}
    //             />
    //         )
    //     });


    //     return this.shuffleIdeas(ideaItems);
    // }

    render() {
          
        // this.ideaItems = this.ideaItems.length > 0 ? this.ideaItems : this.mapIdeasToJsx();

        const { ideas } = this.props;
        const ideaItems = ideas.map(idea => {
            debugger

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

