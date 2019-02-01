import React from 'react';
import { Link } from 'react-router-dom';



class Footer extends React.Component {


  render() {

    return (
      <div className="Categories-footer">
        <nav className="footer">
          <ul className="cat-list-items-foot">
            <li className="cat-list-item-foot"><Link to="/Arts">Arts</Link></li>
            <li className="cat-list-item-foot"><Link to="/Comics&Illustration">Comics & Illustration</Link></li>
            <li className="cat-list-item-foot"><Link to="/Design&Tech">Design & Tech</Link></li>
            <li className="cat-list-item-foot"><Link to="/Film">Film</Link></li>
            <li className="cat-list-item-foot"><Link to="/Food&Craft">Food & Craft</Link></li>
            <li className="cat-list-item-foot"><Link to="/Games">Games</Link></li>
            <li className="cat-list-item-foot"><Link to="/Music">Music</Link></li>
            <li className="cat-list-item-foot"><Link to="/Publishing">Publishing</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Footer;