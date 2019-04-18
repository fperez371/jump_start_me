export const fetchResults = searchQuery => {
  return $.ajax({
    method: "GET",
    url: `api/searches/${searchQuery}`,
  });
};
