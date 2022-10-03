import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';
import { Hotel } from '../model/hotel.model';
import { SnackBarService } from '../snackbar.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  searchContent:string = '';
  hotels!: Hotel[];

  constructor(private contractService: ContractService, private snackBar: SnackBarService) {
    
   }

  ngOnInit(): void {
  }

  searchHotel(){
    this.searchContent = this.searchContent.trim();
    if (this.searchContent.length>0)
    {
      this.contractService.getHotels(this.searchContent).subscribe(result => this.hotels = result);
    }
    else
    {
      this.snackBar.warning("Please input search city!");
    }

  }

}
