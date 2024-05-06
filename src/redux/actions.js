export const setJobs = (jobs) => ({
  type: "SET_JOBS",
  payload: jobs,
});
export const removeFromFavorites = (jobId) => {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: jobId,
  };
};
export const removeAllCompanyJobs = (companyName) => ({
  type: "REMOVE_ALL_COMPANY_JOBS",
  payload: companyName,
});

export const addToFavorites = (jobData) => ({
  type: "ADD_TO_FAVORITES",
  payload: jobData,
});

export const fetchCompanyJobs = (company) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?company=${company}`
    );
    if (response.ok) {
      const { data } = await response.json();
      dispatch({ type: "SET_COMPANY_JOBS", payload: data });
    } else {
      alert("Error fetching results");
    }
  } catch (error) {
    console.log(error);
  }
};
