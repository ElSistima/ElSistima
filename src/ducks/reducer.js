import axios from 'axios';

const initialState ={
  clicked: null,
  itemsCheckedCount: 0,
  mapClicked: false,
  currentPage: false,
  darken: false
}

const HAM_CLICKED = 'HAM_CLICKED';
const MAP_CLICKED = 'MAP_CLICKED';
const DARKEN_BKG = 'DARKEN_BKG';
const PERSIST_REHYDRATE = 'persist/REHYDRATE';
const LEAVE_HOME = 'LEAVE_HOME';
const RETURN_HOME = 'RETURN_HOME';

export default function reducer(state = initialState, action){
  switch(action.type){
    case HAM_CLICKED:
      return Object.assign({}, state, {clicked: action.payload});

    case MAP_CLICKED:
      return Object.assign({}, state, {mapClicked: action.payload});

    case DARKEN_BKG:
      return Object.assign({}, state, {darken: action.payload});

    case LEAVE_HOME:
      return Object.assign({}, state, {currentPage: action.payload});

    case RETURN_HOME:
      return Object.assign({}, state, {currentPage: action.payload});

    case PERSIST_REHYDRATE:
      return { ...state, persistedState: action.payload };

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

export function darken(val){
  return {
    type: DARKEN_BKG,
    payload: val
  }
}

export function leaveHome(bool){
  return {
    type: LEAVE_HOME,
    payload: bool
  }
}

export function returnHome(bool){
  return {
    type: RETURN_HOME,
    payload: bool
  }
}
