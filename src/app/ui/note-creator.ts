import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-creator',
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
    templateUrl: 'app/templates/note-creator.html'
})
export class NoteCreator {
    @Output() createNote = new EventEmitter();
    newNote = {
        title: '',
        value: ''
    };
    fullForm: boolean = false;
    toggle(value: boolean) {
        this.fullForm = value;
    }
    reset() {
        this.newNote = {
            title: '',
            value: ''
        }
    }
    onCreateNote() {
        const { title, value } = this.newNote;
        if ( title && value ) {
            this.createNote.next({title, value});
            this.reset();
        }
    }
}
