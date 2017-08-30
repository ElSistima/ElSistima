const initialState ={
  clicked: null
}

const HAM_CLICKED = 'HAM_CLICKED';

export default function reducer(state = initialState, action){
  switch(action.type){
    case HAM_CLICKED:
      return Object.assign({}, state, {clicked: action.payload});
      
    default:
    return state;
  }
}

export function hamClicked(sidebarOn){
  console.log("SidebarOn", sidebarOn)
  return {
    type: HAM_CLICKED,
    payload: sidebarOn
  }
}
