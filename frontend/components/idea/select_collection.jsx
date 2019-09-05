import React from 'react';
import { withRouter, Link, Switch } from 'react-router-dom';

class SelectCollection extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {visible: false};
        this.turnOffVisibility =  this.turnOffVisibility.bind(this);
        this.turnOnVisibility  = this.turnOnVisibility.bind(this);
        this.displayLinks = this.displayLinks.bind(this);
        this.handleCollection = this.handleCollection.bind(this);
      
    }
// COME BACK TO THIS - ELI
    // componentDidMount() {
    //     const { collection } = this.props;
    //     const idea_id = collection.idea_ids[0];
    //     this.props.fetchIdea(idea_id).then((res) => {
    //         console.log(res)
    //         debugger
    //     })

    // }

    turnOffVisibility(e)  {
      
        this.setState({ visible: false});
    }

    turnOnVisibility(e) {
  
        this.setState({ visible: true});
    }

    handleCollection(e) {
        debugger
        this.props.onSelectCollection(this.props.collection);
    }

    displayLinks() {
        if (this.state.visible) {
            return (
                <button
                    className="collection-dropdown-save-button"
                    onClick={this.handleCollection}>
                    {this.props.text}
                </button>
            )
        }
    }

    render() {
        const { collection } = this.props;
        
        
        return (
            <div 
                className='collection-dropdown-list-item'
                onMouseEnter={this.turnOnVisibility}
                onMouseLeave={this.turnOffVisibility}
                value={collection.id}>
                {/* onClick={this.co} */}
                <div className="collection-thumbnail-text-container">
                    <img className ="collection-dropdown-thumbnail-container" src=""></img>
                    <div className="collection-dropdown-text-container">{collection.title}</div>
                </div>
                {this.displayLinks()}
           </div>
        )
    }
  
}

export default SelectCollection;