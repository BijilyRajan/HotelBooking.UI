import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContractService } from '../contract.service';
import { Room } from '../model/room.model';


@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrls: ['./hoteldetails.component.css']
})
export class HoteldetailsComponent implements OnInit {

  local_hotelId!: number;
  rooms!: Room[];
  

  constructor(private contractService: ContractService,
    public dialogRef: MatDialogRef<HoteldetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:number
  ) { 
    this.local_hotelId = data;
  }

  ngOnInit(): void {
    this.contractService.getRooms(this.local_hotelId).subscribe(result => this.rooms = result);
  }

}
