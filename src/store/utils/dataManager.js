export const saveResult = (res, actionType) => {
  return {
    type: actionType,
    result: res
  };
};