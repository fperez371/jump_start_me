
export const fetchProjects = projects => {
  return $.ajax({
    method: "GET",
    url: "/api/projects",
    data: {projects},
  });
};

export const fetchProject = id => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/${id}`
  });
};

export const deleteProject = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/projects/${id}`
  });
};

export const createProject = project => {
  return $.ajax({
    method: "POST",
    url: "/api/projects",
    data: {project}
  });
};

export const updateProject = project => {
  return $.ajax({
    method: "PATCH",
    url: `/api/projects/${project.id}`,
    data: {project},
  });
};

