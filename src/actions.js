import { USER_FETCH } from "./constants";

export const getAll = (payload) => ({
  type: `${USER_FETCH}_PENDING`,
  payload,
});
export const getAllSuccess = (payload) => ({
  type: `${USER_FETCH}_SUCCESS`,
  payload,
});
export const getAllFailed = (payload) => ({
  type: `${USER_FETCH}_FAILED`,
  payload,
});
