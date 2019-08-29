import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        projects: state.entities.users[state.session.id].projects,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user)),
    };
};

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.currentUser.name,
            email: this.props.currentUser.email,
        };
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    saveChanges() {
        this.props.updateUser({
            name: this.state.name,
            email: this.state.email,
        });
    }

    render() {
        let editButton;
        if (this.state.name !== "demo-guy") {
            editButton = (
                <button onSubmit={this.saveChanges.bind(this)}>
                    Update your profile
                </button>
            );
        } else {
            editButton = null;
        }
        debugger;
        return (
            <div>
                <main className="profile-wrapper">
                    <header>
                        <h1>Profile</h1>
                        <h3>
                            Keep your info up to date. Note that the update
                            feature is disabled for the demo user
                        </h3>
                    </header>
                    <form className="profile-form">
                        <div className="form-li">
                            <div className="li-text">
                                <h6>Name*</h6>
                                <p>You can set your username here</p>
                            </div>
                            <div className="li-inputs">
                                <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.update("name")}
                                />
                            </div>
                        </div>

                        <div className="form-li">
                            <div className="li-text">
                                <h6>Email*</h6>
                                <p>
                                    This is how we know who you are so please
                                    keep us updated.
                                </p>
                            </div>
                            <div className="li-inputs">
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update("email")}
                                />
                            </div>
                        </div>
                        <div className="form-li">
                            <div className="li-text">
                                <h6>Biography</h6>
                                <p>
                                    This demo account is used solely to
                                    demonstrate features from JumpStartMe
                                </p>
                            </div>
                        </div>
                        {editButton}
                    </form>
                </main>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);
