const initialState ={
  clicked: null,
  itemsCheckedCount: 0,
  mapClicked: false
}

const HAM_CLICKED = 'HAM_CLICKED';
const MAP_CLICKED = 'MAP_CLICKED';

export default function reducer(state = initialState, action){
  switch(action.type){
    case HAM_CLICKED:
      return Object.assign({}, state, {clicked: action.payload});

    case MAP_CLICKED:
      return Object.assign({}, state, {mapClicked: action.payload});

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

export function mapClicked(mapOn){
  return {
    type: MAP_CLICKED,
    payload: mapOn
  }
}
