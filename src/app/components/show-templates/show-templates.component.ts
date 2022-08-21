import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { imageList } from 'src/app/models/imageList';
import domtoimage from 'dom-to-image';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-templates',
  templateUrl: './show-templates.component.html',
  styleUrls: ['./show-templates.component.css']
})
export class ShowTemplatesComponent implements OnInit {

  imageListValues = imageList;
  savedData = {
    heading: '',
    offer: '',
    image: '',
  };
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('currTemplate')){
      this.savedData = JSON.parse(localStorage.getItem('currTemplate'));
    }
    else {
      this.router.navigate(['/'])
    }
  }

  download() {
    domtoimage.toPng(document.getElementById('my-node')).then(function (dataUrl) {
        let link = document.createElement('a');
        link.download = 'template-image.jpeg';
        link.href = dataUrl;
        link.click();
    });
  }

  saveForFuture() {
    let newArr = [];
    if(localStorage.getItem('savedTemplates')){
      newArr = JSON.parse(localStorage.getItem('savedTemplates'));
      let flag = false;
      newArr.forEach(x => {
        if(x.heading == this.savedData.heading && x.image == this.savedData.image){
          flag = true;
        }
      });
      if(flag){
        Swal.mixin({
          toast: true,
          icon: 'warning',
          title: 'Template already saved',
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        }).fire();
      }
      else {
        newArr.push(this.savedData);
        localStorage.setItem('savedTemplates', JSON.stringify(newArr));
        Swal.mixin({
          toast: true,
          icon: 'success',
          title: 'Template saved',
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        }).fire();
      }
    }
    else {
      newArr.push(this.savedData);
      localStorage.setItem('savedTemplates', JSON.stringify(newArr));
      Swal.mixin({
        toast: true,
        icon: 'success',
        title: 'Template saved',
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      }).fire();
    }
  }

  backtoHome() {
    localStorage.removeItem('currTemplate');
    this.router.navigate(['/']);
  }

}
