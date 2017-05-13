export const INCREASE_COUNTER = "INCREASE_COUNTER";

export function increaseCounter() {
  return {
    type: INCREASE_COUNTER
  };
}

export const DECREASE_COUNTER = "DECREASE_COUNTER";

export function decreaseCounter() {
  return {
    type: DECREASE_COUNTER
  };
}

export const SET_SPECIAL_TEXT = "SET_SPECIAL_TEXT";

export function setSpecialText(txt) {
  return {
    type: SET_SPECIAL_TEXT,
    value: txt
  };
}

export function addUser(user) {
  return {
    type: "ADD_USER",
    value: user
  };
}
export function removeUser() {
  return {
    type: "REMOVE_USER"
  };
}
