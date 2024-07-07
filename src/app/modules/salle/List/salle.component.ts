import {Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {SallesService} from '../Service/salles.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  @ViewChild('closeModal') closeModal: ElementRef


  salleForm: any;
  allSalles: any = [];
  nameSalles: any = [];
  errors: any = [];
  formError: any = {};

  message: string;

  userImage: string;
  editPopup: boolean;
  formSubmissionFlag: boolean = false;

  constructor(
    private http: HttpClient,
    private usersService: SallesService,
    private viewContainer: ViewContainerRef
  ) {

  }

  ngOnInit(): void {
    this.getSalleList();
    this.setForm();
  }
// Extraire les  salles
  getSalleList() {
    this.usersService.getSalles().subscribe({
      next: (data: any) => {
        this.allSalles = data;
      },
      error: (error: any) => console.log(error)
    })
  }



  setForm() {
    this.salleForm = new FormGroup({
      role: new FormControl({ value: '', disabled: this.editPopup }, [Validators.required]),
      capacite: new FormControl({ value: '', disabled: this.editPopup }, [Validators.required]),
      equipement: new FormControl({ value: '', disabled: this.editPopup }, [Validators.required]),

    }, {});
  }






  create() {

    this.formSubmissionFlag = true;
    const formData: any = {};

    formData.nameSalle = this.salleForm.value.nameSalle;
    formData.capacite = this.salleForm.value.capacite;
    formData.equipement = this.salleForm.value.equipement;
    console.log('ssssss'+formData)
        this.salleForm.reset();
    this.closeModal.nativeElement.click();
    this.formSubmissionFlag = false;

    this.usersService.createSalle(formData)?.subscribe(async (res: any) => {
      if (res) {
        this.salleForm.reset();
        this.closeModal.nativeElement.click();
        this.formSubmissionFlag = false;
        Swal.fire({
          title: '',
          text: 'Salle created Successfully',
          icon: 'success',
          confirmButtonText: 'Close'
        }).then(() => this.getSalleList())
      }
    }, err => {
      console.log(err);
      Swal.fire({
        title: 'Error!',
        text: 'There is an error from backend side.\n' + err,
        icon: 'error',
        confirmButtonText: 'Close'
      })
    })
  }

  read(i: any) {
    this.salleForm.patchValue(i);
    this.editPopup = true;
    // setTimeout(() => {
    //   this.popUpShowHideFlag = !this.popUpShowHideFlag;
    // }, 500);
  }







}
