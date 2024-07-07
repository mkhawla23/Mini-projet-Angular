import {Injectable} from '@angular/core';
import {ApiHandlerService} from "../../../core/shared/utils/api-handler.service";
import {API_ENDPOINTS, ApiMethod} from "../../../core/shared/utils/const";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: ApiHandlerService) { }


  getReservations(){
    return this.http.requestCall(API_ENDPOINTS.reservations, ApiMethod.GET);
  }

  createReservation(reservationData:any){
    return this.http.requestCall(API_ENDPOINTS.createReservation, ApiMethod.POST,null,reservationData)
  }
}
