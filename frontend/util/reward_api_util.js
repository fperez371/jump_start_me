export const fetchRewards = () => {
  return $.ajax({
    method: "GET",
    url: "/api/rewards",
  });
};

export const createReward = reward => {
  debugger;
  return $.ajax({
    method: "POST",
    url: `/api/projects/${reward.project_id}/rewards`,
    data: { reward },
  });
};
