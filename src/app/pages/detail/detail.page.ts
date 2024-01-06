import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../../models/song.interface';
import { FirestoreService } from '../../services/data/firestore.service';
import * as Math from 'mathjs'; // Importa el módulo Math

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  song: Song | undefined;
  public Math = Math; // Declara el módulo Math como una propiedad pública

  constructor(
    private firestoreService: FirestoreService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const songId = this.activatedRoute.snapshot.paramMap.get('id');
    if (songId) {
      this.firestoreService.getSongDetail(songId).subscribe((song) => {
        this.song = song;
      });
    }
  }

  // Aquí puedes usar la función Math.random dentro de cualquier método
  generateRandomNumber() {
    let min = 4;
    let max = 5;
    let random = Math.random() * (max - min) + min;
    console.log('Número aleatorio generado: ' + random);
  }
}
