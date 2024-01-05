import { Injectable } from '@angular/core';
import {
  collectionData,
  collection,
  Firestore,
  CollectionReference,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Song } from './models/song.interface';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getSongList(): Observable<Song[]> {
    const songsCollection = collection(
      this.firestore,
      'songs'
    ) as CollectionReference<Song>;
    return collectionData<Song>(songsCollection, { idField: 'id' });
  }
}
