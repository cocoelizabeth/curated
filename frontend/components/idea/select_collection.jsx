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

    turnOffVisibility(e)  {
      
        this.setState({ visible: false});
    }

    turnOnVisibility(e) {
  
        this.setState({ visible: true});
    }

    handleCollection(e) {
        this.props.onSelectCollection(this.props.collection);
    }

    displayLinks() {
        if (this.state.visible) {
            return (
                <button
                    className="collection-dropdown-select-button"
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
                <h4>{collection.title}</h4>
                {this.displayLinks()}
           </div>
        )
    }
  
}

export default SelectCollection;