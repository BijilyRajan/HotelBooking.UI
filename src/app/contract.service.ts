
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './model/room.model';
import { catchError, retry } from 'rxjs/operators';
import { Hotel } from './model/hotel.model';

@Injectable({
  providedIn: 'root',
})
export class ContractService  {
  constructor(private http: HttpClient) {
  }

  getRooms(hotelId:number): Observable<Room[]> {
    var requestUrl: string = `https://localhost:7147/Booking` + '/GetRooms?hotelId=' + hotelId;
    console.log(requestUrl);
    return this.http.get<Room[]>(requestUrl);
  }

  getHotels(searchContent:string): Observable<Hotel[]> {
    var requestUrl: string = `https://localhost:7147/api/Hotel` + '/GetHotelsByCity?City=' + searchContent;
    console.log(requestUrl);
    return this.http.get<Hotel[]>(requestUrl);
  }

}