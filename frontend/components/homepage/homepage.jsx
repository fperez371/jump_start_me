import React from "react";
import { Link } from "react-router-dom";
import Loading from "../loading/loading";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      projects: [],
    };
  }

  componentDidMount() {
    this.props.fetchProjects().then(projects => {
      this.setState({
        isLoading: false,
        projects: Object.values(projects).sort(function() {
          return 0.5 - Math.random();
        }),
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    const { projects } = this.state;
    const projLink = `/projects/${projects[0].id}`;
    const projLink2 = `/projects/${projects[1].id}`;
    const projLink3 = `/projects/${projects[2].id}`;
    const projLink4 = `/projects/${projects[3].id}`;
    const projLink5 = `/projects/${projects[4].id}`;
    const projLink6 = `/projects/${projects[5].id}`;
    const projLink7 = `/projects/${projects[6].id}`;
    const projLink8 = `/projects/${projects[7].id}`;

    return (
      <>
        <div className="grid-container">
          <div className="left-featured">
            <section>
              <h3 className="featured-project">Featured Project</h3>
              <div className="hover-target">
                <Link className="proj-link" to={projLink}>
                  <img
                    className="featured-img"
                    src={projects[0].photo}
                    alt=""
                  />
                </Link>
              </div>
              <div
                className="funding-border-hp"
                style={{ width: `${projects[0].percentToGoal}` }}
              />
              <h3 className="proj-name">{projects[0].name}</h3>
              <p>{projects[0].body}</p>
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
        <div className="spaced">
          <h3 className="featured-project">Fresh Favorites</h3>
        </div>
        <div className="fresh-favorites">
          <div className="rec-li-div">
            <section>
              <div className="hover-target">
                <Link className="proj-link" to={projLink5}>
                  <img className="fresh-img" src={projects[4].photo} alt="" />
                </Link>
                <div
                  className="funding-border-hp smaller"
                  style={{ width: `${projects[4].percentToGoal}` }}
                />
              </div>
              <p className="proj-name fav">{projects[4].name}</p>
              <Link className="creator-name" to={projLink5}>
                By {projects[4].creator.name}
              </Link>
            </section>
          </div>
          <div className="rec-li-div">
            <section>
              <div className="hover-target">
                <Link className="proj-link" to={projLink6}>
                  <img className="fresh-img" src={projects[5].photo} alt="" />
                </Link>
              </div>
              <div
                className="funding-border-hp smaller"
                style={{ width: `${projects[5].percentToGoal}` }}
              />
              <p className="proj-name fav">{projects[5].name}</p>
              <Link className="creator-name" to={projLink6}>
                By {projects[5].creator.name}
              </Link>
            </section>
          </div>
          <div className="rec-li-div">
            <section>
              <div className="hover-target">
                <Link className="proj-link" to={projLink7}>
                  <img className="fresh-img" src={projects[6].photo} alt="" />
                </Link>
              </div>
              <div
                className="funding-border-hp smaller"
                style={{ width: `${projects[6].percentToGoal}` }}
              />
              <p className="proj-name fav">{projects[6].name}</p>
              <Link className="creator-name" to={projLink7}>
                By {projects[6].creator.name}
              </Link>
            </section>
          </div>
          <div className="rec-li-div">
            <section>
              <div className="hover-target">
                <Link className="proj-link" to={projLink8}>
                  <img className="fresh-img" src={projects[7].photo} alt="" />
                </Link>
              </div>
              <div
                className="funding-border-hp smaller"
                style={{ width: `${projects[7].percentToGoal}` }}
              />
              <p className="proj-name fav">{projects[7].name}</p>
              <Link className="creator-name" to={projLink8}>
                By {projects[7].creator.name}
              </Link>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
