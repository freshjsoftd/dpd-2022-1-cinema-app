import ACTIONS_TYPES from './actionsTypes';
// Get all actors
export const getAllActorsAction = () => {
  return {
    type: ACTIONS_TYPES.GET_ACTORS_ACTION,
  }
}
export const getAllActorsRequest = () => {
  return {
    type: ACTIONS_TYPES.GET_ACTORS_REQUEST,
  }
}
export const getAllActorsSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_ACTORS_SUCCESS,
    payload
  }
}
export const getAllActorsError = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_ACTORS_ERROR,
    payload
  }
}
// Get actor by id
export const getActorAction = (payload) => { 
  return {
    type: ACTIONS_TYPES.GET_ACTOR_ACTION,
    payload
  }
 }
 export const getActorRequest = () => {
  return {
    type: ACTIONS_TYPES.GET_ACTOR_REQUEST,
  }
 }
 export const getActorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_ACTOR_SUCCESS,
    payload
  }
 }
 export const getActorError = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_ACTOR_ERROR,
    payload
  }
 }
// Create
export const createActorAction = (payload) => { 
  return {
    type: ACTIONS_TYPES.POST_ACTOR_ACTION,
    payload
  }
 }
 export const createActorRequest = () => {
  return {
    type: ACTIONS_TYPES.POST_ACTOR_REQUEST,
  }
 }
 export const createActorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_ACTOR_SUCCESS,
    payload
  }
 }
 export const createActorError = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_ACTOR_ERROR,
    payload
  }
 }
// Update
export const updateActorAction = (payload) => { 
  return {
    type: ACTIONS_TYPES.PUT_ACTOR_ACTION,
    payload
  }
 }
 export const updateActorRequest = () => {
  return {
    type: ACTIONS_TYPES.PUT_ACTOR_REQUEST,
  }
 }
 export const updateActorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_ACTOR_SUCCESS,
    payload
  }
 }
 export const updateActorError = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_ACTOR_ERROR,
    payload
  }
 }
// Delete
export const deleteActorAction = (payload) => { 
  return {
    type: ACTIONS_TYPES.DELETE_ACTOR_ACTION,
    payload
  }
 }
 export const deleteActorRequest = () => {
  return {
    type: ACTIONS_TYPES.DELETE_ACTOR_REQUEST,
  }
 }
 export const deleteActorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_ACTOR_SUCCESS,
    payload
  }
 }
 export const deleteActorError = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_ACTOR_ERROR,
    payload
  }
 }
