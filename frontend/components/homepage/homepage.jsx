import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.fetchProjects();
  }


  render() {
    const projName = this.props.projects[0] ? this.props.projects[0].name : null; 
    const projBody = this.props.projects[0] ? this.props.projects[0].body : null; 

    return (
      <div className="grid-container">
        <div className="flex-nowrap">
          <div className="left-featured">
            <section>
              <h3 className="featured-project">FEATURED PROJECT</h3>
              <div className="hover-target">
                <Link className="proj-link" to="/"></Link>
              </div>
              <h3 className="proj-name">{projName}</h3>
              <p className="proj-body">{projBody}</p>
              <Link className="creator-name" to="/">Demo-guy</Link>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage