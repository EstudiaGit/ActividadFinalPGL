import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/data/firestore.service';
import { Song } from '../models/song.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  songList: Observable<Song[]> = this.firestoreService.getSongList();
  constructor(private firestoreService: FirestoreService) {}
}
