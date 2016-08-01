import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { StoreHelper } from './store-helper';

@Injectable()
export class NoteService {
    path: string = '/notes';
    constructor(
        private apiService: ApiService,
        private storeHelper: StoreHelper
    ) {}

    createNote(note) {
        return this.apiService.post(this.path, note)
            .do(savedNote => this.storeHelper.add('notes', savedNote));
    }

    getNotes() {
        return this.apiService.get(this.path)
            .do(resp => this.storeHelper.update('notes', resp.data));
    }
    completeNote(note){
        return this.apiService.delete(`${this.path}/${note.id}`)
            .do(resp => this.storeHelper.findAndDelete('notes', resp.id));
    }
}
