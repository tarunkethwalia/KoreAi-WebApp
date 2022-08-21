import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { imageList } from 'src/app/models/imageList';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-templates',
  templateUrl: './create-templates.component.html',
  styleUrls: ['./create-templates.component.css']
})
export class CreateTemplatesComponent implements OnInit {

  detailsFormGroup: FormGroup;
  imageListValues = imageList;
  selectedImageIndex = null;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.detailsFormGroup = this.fb.group({
      heading: ['', Validators.required],
      offer: ['', Validators.required],
    });
  }

  handleImageSelect(index) {
    this.selectedImageIndex = index;    
  }

  createFinalSubmit() {
    if(this.detailsFormGroup.valid && this.selectedImageIndex != null) {
      let newObj = {
        heading: this.detailsFormGroup.value.heading,
        offer: this.detailsFormGroup.value.offer,
        image: this.selectedImageIndex
      }
  
      localStorage.setItem("currTemplate", JSON.stringify(newObj));
      this.router.navigate(['/show']);
    }
    else {
      Swal.fire(
        'Oops..!!',
        'Seems like you forgot Heading, Offer or maybe Template..!!',
        'info'
      )
    }
  }

  redirectToSaved(){
    this.router.navigate(['/posts']);
  }

}
