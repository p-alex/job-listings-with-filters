export default (filters = [], action) => {
  switch (action.type) {
    case "ADD_FILTER":
      if (filters.includes(action.payload)) return filters;
      return (filters = [...filters, action.payload]);
    case "REMOVE_FILTER":
      return filters.filter((fil) => fil !== action.payload);
    case "RESET_FILTERS":
      return [];
    default:
      return filters;
  }
};
