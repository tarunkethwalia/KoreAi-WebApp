import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { imageList } from 'src/app/models/imageList';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saved-templates',
  templateUrl: './saved-templates.component.html',
  styleUrls: ['./saved-templates.component.css']
})
export class SavedTemplatesComponent implements OnInit {

  savedTemplates = [];
  imageListValues = imageList;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('savedTemplates')) {
      this.savedTemplates = JSON.parse(localStorage.getItem('savedTemplates'));
    }
  }

  removeItem(index) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure you want to delete this row?',
      text: 'You won\'t be able to revert this!',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        let newUpdatedArr = this.savedTemplates.filter((item, i) => {
          return i !== index;
        });
    
        localStorage.setItem("savedTemplates", JSON.stringify(newUpdatedArr));
        this.savedTemplates = newUpdatedArr;
      }
    });
  }

  viewItem(item) {
    localStorage.setItem("currTemplate", JSON.stringify(item));
    this.router.navigate(['/show']);
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }

}
