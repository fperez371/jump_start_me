import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.props.fetchProjects().then(() => this.setState({ isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading</div>;
    }

    let projects = this.props.projects.sort(function() {
      return 0.5 - Math.random();
    });
    const projLink = `/projects/${projects[0].id}`;
    const projLink2 = `/projects/${projects[1].id}`;
    const projLink3 = `/projects/${projects[2].id}`;
    const projLink4 = `/projects/${projects[3].id}`;

    return (
      <div className="grid-container">
        <div className="left-featured">
          <section>
            <h3 className="featured-project">Featured Project</h3>
            <div className="hover-target">
              <Link className="proj-link" to={projLink} />
            </div>
            <img className="featured-img" src={projects[0].photo} alt="" />
            <div
              className="funding-border-hp"
              style={{ width: `${projects[0].percentToGoal}` }}
            />
            <h3 className="proj-name">{projects[0].name}</h3>
            <Link className="creator-name" to={projLink}>
              By {projects[0].creator.name}
            </Link>
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
                <div className="rec-li-div-description">
                  <Link className="description-link" to={projLink2}>
                    <h2 className="rec-title">{projects[1].name}</h2>
                    <span className="percent-funded">
                      {projects[1].percentToGoal}% funded
                    </span>
                    <p className="dark-grey">by {projects[1].creator.name}</p>
                  </Link>
                </div>
              </div>
            </li>
            <li className="rec-li">
              <div className="rec-li-div">
                <Link className="rec-li-div-img" to={projLink3}>
                  <img src={projects[2].photo} alt="" />
                </Link>
                <div className="rec-li-div-description">
                  <Link className="description-link" to={projLink3}>
                    <h2 className="rec-title">{projects[2].name}</h2>
                    <span className="percent-funded">
                      {projects[2].percentToGoal}% funded
                    </span>
                    <p className="dark-grey">by {projects[2].creator.name}</p>
                  </Link>
                </div>
              </div>
            </li>
            <li className="rec-li">
              <div className="rec-li-div">
                <Link className="rec-li-div-img" to={projLink4}>
                  <img src={projects[3].photo} alt="" />
                </Link>
                <div className="rec-li-div-description">
                  <div />
                  <Link className="description-link" to={projLink4}>
                    <h2 className="rec-title">{projects[3].name}</h2>
                    <span className="percent-funded">
                      {projects[3].percentToGoal}% funded
                    </span>
                    <p className="dark-grey">by {projects[3].creator.name}</p>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
