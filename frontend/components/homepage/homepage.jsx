
import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }


  componentDidMount() {
    this.props.fetchProjects().then(() => this.setState({ isLoading: false }));
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
    const projLink = `/projects/${projects[0].id}`;
    const projLink2 = `/projects/${projects[1].id}`;
    const projLink3 = `/projects/${projects[2].id}`;
    const projLink4 = `/projects/${projects[3].id}`;

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
              <Link className="proj-link" to={projLink}></Link>
            </div>
            <img className="featured-img" src={projects[0].photo} alt="" />
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
                <Link className="rec-li-div-img" to={projLink2}>
                  <img src={projects[1].photo} alt="" />
                </Link>
              </div>
              <div className="rec-li-div-description">
                <Link className="description-link" to={projLink2}>
                  <h2 className="rec-title">{projects[1].name}</h2>
                  {projects[1].body.slice(0, 40)}</Link>
              </div>
            </li>
            <li className="rec-li">
              <div className="rec-li-div">
                <Link className="rec-li-div-img" to={projLink3}>
                  <img src={projects[2].photo} alt="" />
                </Link>
              </div>
              <div className="rec-li-div-description">
                <Link className="description-link" to={projLink3}>
                  <h2 className="rec-title">{projects[2].name}</h2>
                  {projects[2].body.slice(0, 100)}...</Link>
              </div>
            </li>
            <li className="rec-li">
              <div className="rec-li-div">
                <Link className="rec-li-div-img" to={projLink4}>
                  <img src={projects[3].photo} alt="" />
                </Link>
              </div>
              <div className="rec-li-div-description">
                <div></div>
                <Link className="description-link" to={projLink4}>
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