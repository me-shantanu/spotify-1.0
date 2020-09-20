export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after finsh development cz we need user info fo manage app
  // token:
  //   "BQBKiQgU-EVmP8T1E7b-UI-nLa7jQ03hJYALi2t2BXXWccU5i5nlZH8CBP-rYFlht6M2cY9lUO_8DAQF-rytXHY7Yc16ZK__WYMo9NzraaKFmoLjndAb68w9gGhrx-suXbH4NuAWgviuAdVjI_pJlt46ci99vh0OnJjOjY44x2W31RnISXmE",
};

const reducer = (state, action) => {
  console.log(action);

  // action -> type, playload

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
