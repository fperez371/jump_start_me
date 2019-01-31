import React from 'react';
import { Link } from 'react-router-dom';



class Categories extends React.Component {


  render() {

    return (
      <div className="Categories-header">
        <nav className="flex-nav">
          <ul className="cat-list-items">
            <li className="cat-list-item"><Link to="/Arts">Arts</Link></li>
            <li className="cat-list-item"><Link to="/Comics&Illustration">Comics & Illustration</Link></li>
            <li className="cat-list-item"><Link to="/Design&Tech">Design & Tech</Link></li>
            <li className="cat-list-item"><Link to="/Film">Film</Link></li>
            <li className="cat-list-item"><Link to="/Food&Craft">Food & Craft</Link></li>
            <li className="cat-list-item"><Link to="/Games">Games</Link></li>
            <li className="cat-list-item"><Link to="/Music">Music</Link></li>
            <li className="cat-list-item"><Link to="/Publishing">Publishing</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Categories