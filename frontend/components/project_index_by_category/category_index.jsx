import { connect } from "react-redux";
import { fetchProjects } from "../../actions/project_actions";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../loading/loading";

const msp = state => {
  return {
    projects: Object.values(state.entities.projects),
  };
};

const mdp = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
};

class CatIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, search: false };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch() {
    this.setState({ search: !this.state.search });
  }

  componentDidMount() {
    this.props.fetchProjects().then(() => this.setState({ isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    let projects = this.props.projects.filter(project => {
      return project.category === this.props.location.pathname.slice(1);
    });
    let formName = this.props.location.pathname.slice(1);
    let formDesc;
    switch (formName) {
      case "Arts":
        formDesc =
          "Discover the artists and organizations using JumpStartMe to realize ambitious projects in visual art and performance.";
        break;
      case "Comics&Illustration":
        formDesc =
          "Explore fantastical worlds and original characters from JumpStartMe’s community of comics creators and illustrators.";
        break;
      case "Design&Tech":
        formDesc =
          "From fine design to innovative tech, discover projects from creators working to build a more beautiful future.";
        break;
      case "Film":
        formDesc =
          "Join forces with the intrepid filmmakers and festival creators changing the way stories get told on screen.";
        break;
      case "Food&Craft":
        formDesc =
          "See how artisans and entrepreneurs are using JumpStartMe to break new ground in food, fashion, and crafts.";
        break;
      case "Games":
        formDesc =
          "From tabletop adventures to beloved revivals, discover the projects forging the future of gameplay.";
        break;
      case "Music":
        formDesc =
          "Discover new albums, performances, and independent venues from creators using JumpStartMe to shape the future of sound.";
        break;
      case "Publishing":
        formDesc =
          "Explore how writers and publishers are using JumpStartMe to bring new literature, periodicals, podcasts, and more to life.";
        break;

      default:
        break;
    }
    const projLink = `/projects/${projects[0].id}`;
    const projLink2 = `/projects/${projects[1].id}`;
    const projLink3 = `/projects/${projects[2].id}`;
    const projLink4 = `/projects/${projects[3].id}`;

    return (
      <>
        <div className="cat-header">
          <h3>{formName}</h3>
          <p className="desc-text">{formDesc}</p>
        </div>
        <div className="grid-container">
          <div className="left-featured">
            <section>
              <h3 className="featured-project">Featured Project</h3>
              <div className="hover-target">
                <Link className="proj-link" to={projLink} />
              </div>
              <img className="featured-img" src={projects[0].photo} alt="" />
              <p className="proj-body">{projects[0].body}</p>
              <h3 className="proj-name">{projects[0].name}</h3>
              <Link className="creator-name" to={projLink}>
                By demo-guy
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
                </div>
                <div className="rec-li-div-description">
                  <Link className="description-link" to={projLink2}>
                    <h2 className="rec-title">{projects[1].name}</h2>
                    {projects[1].body.slice(0, 40)}
                  </Link>
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
                    {projects[2].body.slice(0, 100)}
                  </Link>
                </div>
              </li>
              <li className="rec-li">
                <div className="rec-li-div">
                  <Link className="rec-li-div-img" to={projLink4}>
                    <img src={projects[3].photo} alt="" />
                  </Link>
                </div>
                <div className="rec-li-div-description">
                  <div />
                  <Link className="description-link" to={projLink4}>
                    <h2 className="rec-title">{projects[3].name}</h2>
                    {projects[3].body}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default connect(
  msp,
  mdp
)(CatIndex);
