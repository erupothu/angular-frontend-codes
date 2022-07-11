import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { WelcomeService } from 'src/app/welcome/welcome.service';
import { MatSnackBar } from '@angular/material';
import { CreateblogService } from './createblog.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {

  blogModel: FormGroup;
  url: any;
  jsonData: any;
  ckData: any;
  public Editor = ClassicEditor;

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private createblogService: CreateblogService,
    private snackbar: MatSnackBar) {
    this.blogModel = this.fb.group({
      userModel: JSON.parse(sessionStorage.getItem('userModel')),
      blogName: ['', Validators.required],
      blogTitle: ['', Validators.required],
      blogLayoutList: new FormArray([])
    });
  }

  ngOnInit() {
  }

  get f() { return this.blogModel.controls; }
  get t() { return this.f.blogLayoutList as FormArray; }

  addLayout() {
    this.t.push(this.fb.group({
      inputHeading: ['', Validators.required],
      texAreaDescription: ['', Validators.required],
      descriptionImage: ['']
    }));
  }

  getLayoutList(): AbstractControl[] {
    return this.t.controls;
  }

  removeLayout(index) {
    // this.creatSpaceForm.controls.paragraph.value.splice(index, 1);
    (this.blogModel.get('blogLayoutList') as FormArray).removeAt(index);
  }

  onSelectFile(event, index) {
    const reader = new FileReader(); // HTML5 FileReader API
    const file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {

      reader.readAsDataURL(file); // read file as data url
      reader.onload = () => {
        this.url = reader.result;
        // this.t.controls[index].value.descriptionImage = reader.result;
        this.t.controls[index].get('descriptionImage').setValue(reader.result);
      };
      this.cd.markForCheck();
    }
  }

  saveBlog() {
    this.createblogService.saveBlogData(this.blogModel.value).subscribe( data => {
      this.snackbar.open(data.name, 'saved successfully', {duration: 2000});
    }, error => {
      this.snackbar.open(error.name, 'invalid url', {duration: 2000});
    });
  }

  ckeditorData( { editor }: ChangeEvent, index: any) {
    this.t.controls[index].get('texAreaDescription').setValue(editor.getData());
  }

}
