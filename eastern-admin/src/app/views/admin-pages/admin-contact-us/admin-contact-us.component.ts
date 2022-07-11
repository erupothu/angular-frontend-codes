import { Component, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent, CKEditorComponent } from '@ckeditor/ckeditor5-angular/ckeditor.component';


@Component({
  selector: 'app-admin-contact-us',
  templateUrl: './admin-contact-us.component.html',
  styleUrls: ['./admin-contact-us.component.css']
})
export class AdminContactUsComponent implements OnInit {

  @ViewChild('editor') editorComponent: CKEditorComponent;

  public Editor = ClassicEditor;
  config: any;
  public isDisabled = false;
  mycontent: any;

  constructor() {
    this.config = {
        fontFamily: {
            options: [
                'default',
                'Ubuntu, Arial, sans-serif',
                'Ubuntu Mono, Courier New, Courier, monospace'
            ]
        },
        alignment: {
            options: [ 'left', 'right' ]
        },
        toolbar: [
            'heading', 'bulletedList', 'numberedList', 'bold', 'fontFamily', 'image', 'alignment','undo', 'redo'
        ]
    };
    // this.config = {
    //   alignment: {
    //     options: ['left', 'right']
    //   },
    //   // toolbar: [
    //   //   'heading', '|', 'bulletedList', 'numberedList', 'alignment', 'undo', 'redo'
    //   // ],
    //   // fontColor: this.fontColorConfig,
    //   // fontFamily: {
    //   //   options: [
    //   //     'default',
    //   //     'Arial, Helvetica, sans-serif',
    //   //     'Courier New, Courier, monospace',
    //   //     'Georgia, serif',
    //   //     'Lucida Sans Unicode, Lucida Grande, sans-serif',
    //   //     'Tahoma, Geneva, sans-serif',
    //   //     'Times New Roman, Times, serif',
    //   //     'Trebuchet MS, Helvetica, sans-serif',
    //   //     'Verdana, Geneva, sans-serif'
    //   //   ]
    //   // },
    //   // // fontSize requires a plugin to be built into the editor
    //   // fontSize: {
    //   //   options: [
    //   //     9,
    //   //     11,
    //   //     12,
    //   //     13,
    //   //     'default',
    //   //     17,
    //   //     19,
    //   //     21
    //   //   ]
    //   // }

    // };

    // this.Editor.defaultConfig.alignment = {
    //   options: ['left', 'right']
    // }
  }

  ngOnInit(): void {
    this.mycontent = "type here";

  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled
  }


  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();

    console.log(data);
  }

  public getEditor() {
    // Warning: This may return "undefined" if the editor is hidden behind the `*ngIf` directive or
    // if the editor is not fully initialised yet.
    return this.editorComponent.editorInstance;
  }

}
