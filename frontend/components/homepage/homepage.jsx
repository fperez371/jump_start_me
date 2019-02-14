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
    const projLink = this.props.projects[0] ? `/api/projects/${this.props.projects[0].id}` : '/';
    const projBody = this.props.projects[0] ? this.props.projects[0].body : null;
    const projName2 = this.props.projects[1] ? this.props.projects[1].name : null;
    const projBody2 = this.props.projects[1] ? this.props.projects[1].body : null;
    const projName3 = this.props.projects[2] ? this.props.projects[2].name : null;
    const projBody3 = this.props.projects[2] ? this.props.projects[2].body : null;
    const projName4 = this.props.projects[3] ? this.props.projects[3].name : null;
    const projBody4 = this.props.projects[3] ? this.props.projects[3].body : null;
    
    return (
      <div className="grid-container">
          <div className="left-featured">
            <section>
              <h3 className="featured-project">Featured Project</h3>
              <div className="hover-target">
                <Link className="proj-link" to="/"></Link>
              </div>
              <img className="featured-img" src="https://ksr-ugc.imgix.net/assets/023/806/011/62a55f5e7af4e233a37d51ab2ea07a35_original.jpg?ixlib=rb-1.1.0&w=680&fit=max&v=1547668226&auto=format&gif-q=50&q=92&s=51a19982c44f5ab73fe4d6d259a2e36f" alt=""/>
              <p className="proj-body">{projBody}</p>
              <h3 className="proj-name">{projName}</h3>
              <Link className="creator-name" to={projLink}>By demo-guy</Link>
            </section>
          </div>
          <div className="right-recommended">
            <h3 className="recommended">RECOMMENDED</h3>
            <ul className="rec-lis">
              <li className="rec-li">
                <div className="rec-li-div">
                  <Link className="rec-li-div-img" to="/">
                    <img src="https://ksr-ugc.imgix.net/assets/023/681/691/42c0c38d5b440faafb7cd251c504d71c_original.jpg?ixlib=rb-1.1.0&crop=faces&w=1024&h=576&fit=crop&v=1546449325&auto=format&frame=1&q=92&s=8f2ee6acaa814f515cf2e1fe1bd617b1" alt="" />
                  </Link>
                </div>
                <div className="rec-li-div-description">
                  <Link className="description-link" to="/">
                 <h2 className="rec-title">{projName2}</h2>
                  {projBody2}</Link>
                </div>
              </li>
              <li className="rec-li">
                <div className="rec-li-div">
                  <Link className="rec-li-div-img" to="/">
                    <img src="https://ksr-ugc.imgix.net/assets/023/845/370/09f11cbeddb3a1396448366761737027_original.jpg?ixlib=rb-1.1.0&crop=faces&w=1024&h=576&fit=crop&v=1548070618&auto=format&frame=1&q=92&s=96d70af7156c2b5352f9be7f79f3dded" alt="" />
                  </Link>
                </div>
                <div className="rec-li-div-description">
                  <Link className="description-link" to="/">
                 <h2 className="rec-title">{projName3}</h2>
                  {projBody3}</Link>
                </div>
              </li>
              <li className="rec-li">
                <div className="rec-li-div">
                  <Link className="rec-li-div-img" to="/">
                    <img src="https://d3mlfyygrfdi2i.cloudfront.net/ella_mahler_here_homepage.jpg" alt="" />
                  </Link>
                </div>
                <div className="rec-li-div-description">
                  <div></div>
                  <Link className="description-link" to="/">
                    <h2 className="rec-title">{projName4}</h2>
                  {projBody4}</Link>
                </div>
              </li>
            </ul>
          </div>
      </div>
    )
  }
}

export default HomePage