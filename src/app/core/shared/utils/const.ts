import {environment} from 'src/environments/environment';

export const API_URL: string = environment.api_url;

export enum ApiMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH"
}


export const API_ENDPOINTS = {
logIn:'users/login',
signUp:'users/signup',


salles: '/api/salles/list_salles',
createSalle: '/api/salles/create',


reservations: '/api/reservation/list_reservations',
createReservation: '/api/reservation/create/',


}
