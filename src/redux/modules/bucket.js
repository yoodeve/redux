// Actions
const CREATE = "bucket/CREATE";

const initialState = {
    list:["영화관","책","고양이"]
}

// Action Creators
export function createBucket(bucket) {
    return {type:CREATE, bucket};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE : {
        const new_list = [...state.list, action.bucket];
        return {list:new_list};
    }
    default:
      return state;
  }
}