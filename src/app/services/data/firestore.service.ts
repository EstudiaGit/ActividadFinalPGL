import { Injectable } from '@angular/core';
import { Song } from '../../models/song.interface';
import { DocumentReference } from 'firebase/firestore';
import {
  collectionData,
  collection,
  addDoc,
  Firestore,
  doc,
  docData,
  getDoc,
} from '@angular/fire/firestore';
import { Observable, filter, from, map } from 'rxjs';
//import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  deleteSong(id: string | undefined) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private readonly firestore: Firestore //private afs: AngularFirestore
  ) {}

  getSongList(): Observable<Song[]> {
    return collectionData<Song>(
      collection(this.firestore, 'songList').withConverter<Song>({
        toFirestore: (song) => song,
        fromFirestore: (snapshot) => snapshot.data() as Song,
      }),
      {
        idField: 'id',
      }
    );
  }

  createSong(
    albumName: string,
    artistName: string,
    songDescription: string,
    songName: string
  ): Promise<DocumentReference> {
    return addDoc(collection(this.firestore, 'songList'), {
      albumName,
      artistName,
      songDescription,
      songName,
    });
  }

  // We create the function:
  /*getSongDetail(songId: string): Observable<Song> {
  const songRef = doc(this.firestore, `songList/${songId}`);
  return docData<Song>(songRef, {
    idField: 'id'
  });
}*/
}
