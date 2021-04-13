export default (filters = [], action) => {
  switch (action.type) {
    case "ADD_FILTER":
      if (filters.includes(action.payload.filter) === false) {
        return (filters = [...filters, action.payload.filter]);
      }
      return filters;
    case "REMOVE_FILTER":
      return filters;
    case "RESET_FILTERS":
      return [];
    default:
      return filters;
  }
};
