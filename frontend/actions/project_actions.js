import * as APIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const CREATE_PROJECT = "CREATE_PROJECT";

export const receiveProject = project => {
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

export const receiveAllProjects = projects => {
  return{
    type: RECEIVE_ALL_PROJECTS,
    projects
  };
};

export const removeProject = project => {
  return{
    type: REMOVE_PROJECT,
    projectId: project.id
  };
};

export const receiveProjectErrors = errors => {
  return{
    type: RECEIVE_PROJECT_ERRORS,
    errors
  };
};

export const createProject = project => {
  return {
    type: CREATE_PROJECT,
    project
  };
};


export const fetchProjects = () => dispatch => {
  return APIUtil.fetchProjects().then( projects => dispatch(receiveAllProjects(projects)), err => (
    dispatch(receiveProjectErrors(err.responseJSON))
  ));
};

export const fetchProject = (id) => dispatch => {
  return APIUtil.fetchProject(id).then( project => dispatch(receiveProject(project)), err => {
      return dispatch(receiveProjectErrors(err.statusText));
    }
  );
};

export const deleteProject = (id) => dispatch => {
  return APIUtil.deleteProject(id).then( project => dispatch(removeProject(project)), err => (
    dispatch(receiveProjectErrors(err.responseJSON))
  ));
};

