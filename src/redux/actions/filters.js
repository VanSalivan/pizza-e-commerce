export const setSortBy = (sortName) => {
  return {
    type: 'SET_SORT_BY',
    payload: sortName
  }
};

export const setSortCategory = (categoryName) => {
  return {
    type: 'SET_CATEGORY',
    payload: categoryName
  }
};
