export const addFilter = (filter) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_FILTER", payload: filter });
  } catch (error) {
    console.log(error);
  }
};

export const resetFilters = () => async (dispatch) => {
  try {
    dispatch({ type: "RESET_FILTERS" });
  } catch (error) {
    console.log(error);
  }
};

export const removeFilter = (filter) => async (dispatch) => {
  try {
    dispatch({ type: "REMOVE_FILTER", payload: filter });
  } catch (error) {
    console.log(error);
  }
};
