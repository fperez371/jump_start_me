import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }


  componentDidMount() {
    this.props.fetchProjects().then(() => this.setState({isLoading: false}));
  }

  // componentDidUpdate(prevProps){
  //   if (prevProps.projects !== props.projects){
  //     render();
  //   }
  // }


  render() {
    // if (!this.props.projects.length) {
    //   return <div>Loading</div>
    // }

    if (this.state.isLoading) {
      return <div>Loading</div>
    }

    let projects = this.props.projects
    const projLink = `/api/projects/${this.props.projects[0].id}`;

    // const projName = this.props.projects[0].name;
    // const projBody = this.props.projects[0].body;
    // const projName2 = this.props.projects[1].name 
    // const projBody2 = this.props.projects[1].body 
    // const projName3 = this.props.projects[2].name 
    // const projBody3 = this.props.projects[2].body 
    // const projName4 = this.props.projects[3].name 
    // const projBody4 = this.props.projects[3].body 
    
    return (
      <div className="grid-container">
          <div className="left-featured">
            <section>
              <h3 className="featured-project">Featured Project</h3>
              <div className="hover-target">
                <Link className="proj-link" to="/"></Link>
              </div>
              <img className="featured-img" src={projects[0].photo} alt=""/>
              <p className="proj-body">{projects[0].body}</p>
              <h3 className="proj-name">{projects[0].name}</h3>
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
                 <h2 className="rec-title">{projects[1].name}</h2>
                  {projects[1].body}</Link>
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
                 <h2 className="rec-title">{projects[2].name}</h2>
                  {projects[2].body}</Link>
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
                    <h2 className="rec-title">{projects[3].name}</h2>
                  {projects[3].body}</Link>
                </div>
              </li>
            </ul>
          </div>
      </div>
    )
  }
}

export default HomePage