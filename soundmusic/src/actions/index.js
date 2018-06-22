import { call, put } from "redux-saga/effects";
import axios from "axios";
import * as TYPES from "./types";

const api = url => axios.get(url).then(response => response.data);

export const fetchStarWarsRequest = () => ({
  type: TYPES.FETCH_STAR_WARS_REQUEST
});

export function* fetchPerson(action) {
  try {
    const person = yield call(api, "https://swapi.co/api/people/");

    yield put({ type: TYPES.FETCH_STAR_WARS_REQUEST, data: person.results });
  } catch (e) {
    console.log(e);
  }
}
