import React from 'react';
import { Link } from 'react-router-dom';

class IdeaShow extends React.Component {
    constructor(props){
        super(props);
    }

    // componentDidMount() {
    //     this.props.fetchIdea(this.props.idea);
    // }

   render () {

       return (
           <div className="idea-show-container" >
               {this.props.idea.title}
           </div>
       )

   }
   
    

}

 

export default IdeaShow;