export const fetchRewards = () => {
  return $.ajax({
    method: "GET",
    url: 'api/rewards'
  });
};