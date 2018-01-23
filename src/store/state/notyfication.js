const UI_SHOW_NOTIFICATION = 'ui/SHOW_NOTIFICATION';
const UI_HIDE_NOTIFICATION = 'ui/HIDE_NOTIFICATION';

export const showNotification = (message, autohideDuration) => ({
  type: UI_SHOW_NOTIFICATION,
  message,
  autohideDuration
});

export const hideNotification = () => ({
  type: UI_HIDE_NOTIFICATION
});

const INITIAL_STATE = {
  notifications: {
    open: false,
    message: ''
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UI_SHOW_NOTIFICATION:
      return {
        ...state,
        notifications: {
          open: true,
          message: action.message
        }
      };
    case UI_HIDE_NOTIFICATION:
      return {
        notifications: {
          open: false,
          message: ''
        }
      };
    default:
      return state;
  }
}
