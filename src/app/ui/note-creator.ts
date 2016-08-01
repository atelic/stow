import { Component, Output, EventEmitter } from '@angular/core';
import { ColorPicker } from './color-picker';

@Component({
    selector: 'note-creator',
    directives: [ColorPicker],
    styles: [`
.note-creator {
  padding: 20px;
  background-color: white;
  border-radius: 3px;
}
.title {
  font-weight: bold;
  color: rgba(0,0,0,0.8);
}
.full {
  height: 100px;
}

`],
    template: require('./templates/note-creator.html')
})
export class NoteCreator {
    @Output() createNote = new EventEmitter();
    colors: Array<string> = ['#b19cd9', '#ff6961', '#77dd77', '#aec6cf', '#f49ac2', '#fff']
    newNote = {
        title: '',
        value: '',
        color: '#fff'
    };
    fullForm: boolean = false;
    toggle(value: boolean) {
        this.fullForm = value;
    }
    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: '#fff'
        }
    }
    onColorSelect(color: string) {
        this.newNote.color= color;
    }
    onCreateNote() {
        const { title, value, color } = this.newNote;
        if ( title && value ) {
            this.createNote.next({title, value, color});
            this.reset();
        }
    }
}
