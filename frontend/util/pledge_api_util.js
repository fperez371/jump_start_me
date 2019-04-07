export const createPledge = pledge => {
  return $.ajax({
    method: "post",
    url: "/api/pledges",
    data: { pledge },
  });
};
