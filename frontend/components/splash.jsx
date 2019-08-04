import React from 'react';


class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [

        <img src={window.staticImages.image1} alt="image1" className="idea" ></img>,
        <img src={window.staticImages.image3} alt="image3" className="idea"></img>,
        <img src={window.staticImages.image2} alt="image2" className="idea"></img>,
        <img src={window.staticImages.image4} alt="image4" className="idea" ></img>,
        <img src={window.staticImages.image5} alt="image5" className="idea"></img>,
        <img src={window.staticImages.image6} alt="image6" className="idea"></img>,
        <img src={window.staticImages.image7} alt="image7" className="idea" ></img>,
        <img src={window.staticImages.image8} alt="image8" className="idea"></img>,
        <img src={window.staticImages.image9} alt="image9" className="idea"></img>,
        <img src={window.staticImages.image10} alt="image10" className="idea" ></img>,
        <img src={window.staticImages.image11} alt="image11" className="idea"></img>,
  
      ]
    }
  }

  render () {
    const ideas = this.state.images.map((link, idx) => {
      return (
        <li className="splash-image-container" key={idx}>
          {link}
        </li>
      )
    });
    return (
      <div className="splash">
        <ul className ="splash-container">
          {ideas}
        </ul>
      </div>
    )
  }}

export default Splash;