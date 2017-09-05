const initialState ={
  clicked: null,
  blogItems: []
}

const HAM_CLICKED = 'HAM_CLICKED';
const BLOG_CLICKED = 'BLOG_CLICKED';

export default function reducer(state = initialState, action){
  switch(action.type){
    case HAM_CLICKED:
      return Object.assign({}, state, {clicked: action.payload});
    case BLOG_CLICKED:
    return Object.assign({}, state, {blogItems: [...state.blogItems, action.payload]})

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

export function blogItemClicked(blogID){
  return {
    type: BLOG_CLICKED,
    payload: blogID
  }
}
