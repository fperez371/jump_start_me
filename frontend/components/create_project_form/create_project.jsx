import { connect } from "react-redux";
import { createProject } from "../../actions/project_actions";
import React from "react";
import { withRouter } from "react-router-dom";

const msp = state => {
    return {
        errors: state.errors.project,
    };
};

const mdp = dispatch => {
    return {
        createProject: project => dispatch(createProject(project)),
    };
};

class CreateProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectHome = this.redirectHome.bind(this);
        let currentDate = new Date();
        this.state = {
            body: "",
            name: "",
            category: "",
            proj_image_url: null,
            goal_amt: 0,
            deadline: currentDate,
            photo: null,
            location: "",
            due: 0,
        };
    }

    redirectHome() {
        this.props.history.push("/");
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        let day = 60 * 60 * 24 * 1000;
        this.state.deadline = new Date(
            this.state.deadline.getTime() + this.state.due * day
        );
        formData.append("project[body]", this.state.body);
        formData.append("project[name]", this.state.name);
        formData.append("project[category]", this.state.category);
        formData.append("project[goal_amt]", this.state.goal_amt);
        formData.append("project[deadline]", this.state.deadline);
        formData.append("project[photo]", this.state.photo);
        formData.append("project[location]", this.state.location);
        this.props.createProject(formData).then(project => {
            this.props.history.push(`/projects/${project.project.id}/rewards`);
        });
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photo: file, proj_image_url: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        let preview;
        if (this.state.proj_image_url) {
            preview = (
                <img
                    className="project-image-render"
                    src={this.state.proj_image_url}
                />
            );
        } else {
            preview = (
                <div id="no-image">
                    <div id="pic-icon-circle">
                        <i className="fas fa-camera" />
                    </div>
                    Select image file
                </div>
            );
        }

        return (
            <div className="create-project-page">
                <h2 className="create-project-greeting">
                    First, let's get you set up
                </h2>
                <form onSubmit={this.handleSubmit} className="create-proj-form">
                    <div className="proj-name-row">
                        <span className="proj-name-instruction">
                            Write a clear, brief title that helps people quickly
                            understand the gist of your project.
                        </span>
                        <textarea
                            className="create-proj-name"
                            type="text"
                            onChange={this.update("name")}
                            value={this.state.name}
                            placeholder="Give your Project a title"
                        />
                    </div>
                    <div className="proj-name-row">
                        <span className="proj-body-instruction">
                            Write an in depth description of your project. The
                            more info the better.
                        </span>
                        <textarea
                            className="create-proj-body"
                            type="text"
                            onChange={this.update("body")}
                            value={this.state.body}
                            placeholder="Describe your project"
                        />
                    </div>
                    <div className="proj-name-row">
                        <div className="description-row">
                            <p className="proj-categories-instruction">
                                Choose the category that most closely aligns
                                with your project.
                            </p>
                            <p className="proj-categories-instruction">
                                Think of where backers may look to find it.
                            </p>
                            <p className="proj-categories-instruction">
                                You’ll be able to change the category even after
                                your project is live.
                            </p>
                        </div>
                        <div className="dropdown">
                            <select
                                className="dropdown-list"
                                value={this.value}
                                onChange={this.update("category")}
                            >
                                <option selected disabled hidden>
                                    Choose a category
                                </option>
                                <option
                                    className="dropdown-option"
                                    onChange={this.update("category")}
                                    value="Arts"
                                >
                                    Arts
                                </option>
                                <option
                                    className="dropdown-option"
                                    onChange={this.update("category")}
                                    value="Comics&Illustration"
                                >
                                    Comics&Illustration
                                </option>
                                <option
                                    className="dropdown-option"
                                    onChange={this.update("category")}
                                    value="Design&Tech"
                                >
                                    Design&Tech
                                </option>
                                <option
                                    className="dropdown-option"
                                    onChange={this.update("category")}
                                    value="Film"
                                >
                                    Film
                                </option>
                                <option
                                    className="dropdown-option"
                                    onChange={this.update("category")}
                                    value="Food&Craft"
                                >
                                    Food&Craft
                                </option>
                                <option
                                    className="dropdown-option"
                                    onChange={this.update("category")}
                                    value="Games"
                                >
                                    Games
                                </option>
                                <option
                                    className="dropdown-option"
                                    onChange={this.update("category")}
                                    value="Music"
                                >
                                    Music
                                </option>
                                <option
                                    className="dropdown-option"
                                    onChange={this.update("category")}
                                    value="Publishing"
                                >
                                    Publishing
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="proj-name-row">
                        <p className="proj-categories-instruction">
                            Choose the location that best describes where your
                            project is located
                        </p>
                        <input
                            className="create-location-input"
                            type="textarea"
                            value={this.state.location}
                            placeholder="Enter your location"
                            onChange={this.update("location")}
                        />
                    </div>
                    <div className="proj-name-row">
                        <div className="description-row">
                            <p className="proj-categories-instruction">
                                Add an image that clearly represents your
                                project.
                            </p>
                            <p className="proj-categories-instruction">
                                Choose one that looks good at different sizes.
                                It will appear in different sizes in different
                                places: on your project page, across the
                                Jumpstartme website and mobile apps, and (when
                                shared) on social channels.
                            </p>
                            <p className="proj-categories-instruction">
                                You may want to avoid including banners, badges,
                                and text because they may not be legible at
                                smaller sizes.
                            </p>
                        </div>
                        <div className="li-inputs">
                            <label id="add-image-label">
                                {preview}
                                <input
                                    id="image-input"
                                    type="file"
                                    onChange={this.handleFile.bind(this)}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="proj-name-row">
                        <div className="description-row">
                            <h3 className="funding-goal-text">Funding goal</h3>
                            <p className="proj-categories-instruction">
                                Set an achievable goal that covers what you need
                                to complete your project.
                            </p>
                            <p className="proj-categories-instruction">
                                Funding is all-or-nothing. If you don’t meet
                                your goal, you won’t receive any money.
                            </p>
                        </div>
                        <input
                            className="create-goal-amt"
                            type="number"
                            min="1"
                            max="100000000"
                            placeholder="500"
                            step="1"
                            onChange={this.update("goal_amt")}
                            value={this.state.goal_amt}
                        />
                    </div>
                    <div className="proj-cat-row">
                        <div className="description-row">
                            <h3 className="funding-goal-text">
                                Campaign duration
                            </h3>
                            <p className="proj-categories-instruction">
                                Set a time limit for your campaign. You won’t be
                                able to change this after you launch.
                            </p>
                        </div>
                        <div className="fixed-days">
                            <span>Enter a fixed number of days(1-60)</span>
                            <input
                                type="number"
                                className="create-goal-amt"
                                onChange={this.update("due")}
                                value={this.state.due}
                                min="1"
                                placeholder="30"
                                max="60"
                                required
                            />
                        </div>
                    </div>
                </form>
                <footer className="create-proj-footer">
                    <button onClick={this.redirectHome}>Cancel</button>
                    <button onClick={this.handleSubmit}>
                        Move on to rewards
                    </button>
                </footer>
            </div>
        );
    }
}

export default withRouter(
    connect(
        msp,
        mdp
    )(CreateProjectForm)
);
