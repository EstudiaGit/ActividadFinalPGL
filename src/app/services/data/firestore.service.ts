import { Injectable } from '@angular/core';
import { Song } from '../../models/song.interface';
import {
  DocumentData,
  DocumentReference,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';
import {
  collectionData,
  collection,
  addDoc,
  Firestore,
  doc,
  docData,
  getDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
//import { AngularFirestore } from '@angular/fire/compat/firestore';
const songConverter: FirestoreDataConverter<Song> = {
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Song {
    const data = snapshot.data(options);
    return { ...data } as Song;
  },
  toFirestore(modelObject: Song): DocumentData {
    return { ...modelObject };
  },
};

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

  getSongDetail(songId: string): Observable<Song> {
    const songDocument = doc(
      this.firestore,
      `songList/${songId}`
    ).withConverter(songConverter);
    return docData<Song>(songDocument, { idField: 'id' }).pipe(
      filter((song): song is Song => song !== undefined)
    );
  }
}
