import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  EditorChangeContent,
  EditorChangeSelection,
  QuillEditorComponent,
} from 'ngx-quill';

@Component({
  selector: 'app-text-editors',
  standalone: true,
  imports: [RouterOutlet, QuillEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './text-editors.component.html',
  styleUrl: './text-editors.component.scss',
})
export class TextEditorsComponent {
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
    // tslint:disable-next-line:no-console
    console.log('editor-change', event);
  }

  focus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event);
    this.focused = true;
    this.blurred = false;
  }
  nativeFocus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('native-focus', $event);
  }

  blur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event);
    this.focused = false;
    this.blurred = true;
  }
  nativeBlur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('native-blur', $event);
  }
}
