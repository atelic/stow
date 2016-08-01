import { Component, OnDestroy } from '@angular/core';
import { NoteCard, NoteCreator } from '../ui';
import { NoteService } from '../services';
import { Store } from '../store';
import 'rxjs/Rx';

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
    constructor(private noteService: NoteService,private store: Store) {

        this.store.changes.pluck('notes')
            .subscribe((notes: any) => this.notes = notes)

        this.noteService.getNotes()
            .subscribe()
    }
    onNoteChecked(note, i) {
        this.noteService.completeNote(note)
            .subscribe();

    }
    onCreateNote(note) {
        this.noteService.createNote(note)
            .subscribe()
    }
}
