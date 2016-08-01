import { Component, OnDestroy } from '@angular/core';
import { NoteCard, NoteCreator } from '../ui';
import { NoteService } from '../services';

@Component({
  selector: 'notes-container',
  directives: [
      NoteCard,
      NoteCreator
  ],
  styles: [`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }
  `],
  templateUrl: 'app/templates/notes.html'
})
export class Notes implements OnDestroy {
    notes = [];

    ngOnDestroy() {
        console.log('destroyed');
    }
    constructor(private noteService: NoteService) {
        this.noteService.getNotes()
            .subscribe(resp => this.notes = resp.data)
    }
    onNoteChecked(note, i) {
        this.noteService.completeNote(note)
            .subscribe(note => {
                const idx = this.notes.findIndex(localNote => localNote.id === note.id);
                this.notes.splice(idx, 1);
            });

    }
    onCreateNote(note) {
        this.noteService.createNote(note)
            .subscribe(note => this.notes.push(note))
    }
}
