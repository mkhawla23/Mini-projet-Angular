import {Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import Swal from "sweetalert2";
import {HttpClient} from "@angular/common/http";
import {ReservationService} from "../Service/Reservation.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ListReservation',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListReservationComponent {
  @ViewChild('closeModal') closeModal: ElementRef


  reservationForm: any;
  allReservations: any = [];
  errors: any = [];
  formError: any = {};
  selectedId:number;
  message: string;
  editPopup: boolean;
  formSubmissionFlag: boolean = false;

  constructor(
    private http: HttpClient,
    private reservationService: ReservationService,
    private viewContainer: ViewContainerRef
  ) {

  }

  ngOnInit(): void {
    this.getReservationList();
    this.setForm();
  }

  getReservationList() {
    this.reservationService.getReservations().subscribe({
      next: (data: any) => {
        this.allReservations = data;
      },
      error: (error: any) => console.log(error)
    })
  }



  setForm() {
    this.reservationForm = new FormGroup({
      title: new FormControl({ value: '', disabled: this.editPopup }, [Validators.required]),
      description: new FormControl({ value: '', disabled: this.editPopup }, [Validators.required]),
    });
  }




  create() {
    this.formSubmissionFlag = true;
    const formData: any = {};

    formData.title = this.reservationForm.value.title;
    formData.description = this.reservationForm.value.description;
    this.closeModal.nativeElement.click();
    this.formSubmissionFlag = false;

    this.reservationService.createReservation(formData)?.subscribe(async (res: any) => {
      if (res) {
        this.reservationForm.reset();
        this.closeModal.nativeElement.click();
        this.formSubmissionFlag = false;
        Swal.fire({
          title: '',
          text: 'Reservation created Successfully',
          icon: 'success',
          confirmButtonText: 'Close'
        }).then(() => this.getReservationList())
      }
    }, err => {
      console.log(err);
      Swal.fire({
        title: 'Error!',
        text: 'There is an error from backend side.\n' + err,
        icon: 'error',
        confirmButtonText: 'Close'
      }).then(r => this.getReservationList());
    })
  }

  read(i: any) {
    this.reservationForm.patchValue(i);
    this.editPopup = true;
    this.selectedId = i.id;
    // setTimeout(() => {
    //   this.popUpShowHideFlag = !this.popUpShowHideFlag;
    // }, 500);
  }




 

}
