import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  EditorChangeContent,
  EditorChangeSelection,
  QuillEditorComponent,
} from 'ngx-quill';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { HeadrComponent } from '../../../../shared/headr/headr.component';

@Component({
  selector: 'app-description-house',
  standalone: true,
  imports: [
    HeadrComponent,
    ButtonComponent,
    FormsModule,
    RouterOutlet,
    QuillEditorComponent,
    TranslateModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  templateUrl: './description-house.component.html',
  styleUrl: './description-house.component.scss',
})
export class DescriptionHouseComponent {
  constructor(private _router: Router) {}

  descriptionValue: any = '';
  msgeValue: string = '';

  title = 'cleanAppTest';
  blurred = false;
  focused = false;
  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],
      ['link', 'image', 'video'], // link and image, video
    ],
  };

  changedEditor(event: EditorChangeContent | EditorChangeSelection | any) {
    this.descriptionValue = event;
  }

  nextStep(validMove: boolean): void {
    if (validMove) {
      this._router.navigate(['send/message']);
    }
  }
}
