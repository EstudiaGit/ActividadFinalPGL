import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../../models/song.interface';
import { FirestoreService } from '../../services/data/firestore.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  song: Song | undefined;

  constructor(
    private firestoreService: FirestoreService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {}

  /*ngOnInit() {
    // Obtener el id de la canción de la ruta
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    // Si hay un id, suscribirse al observable de la canción
    if (id) {
      this.firestoreService.getSongDetail(id).subscribe((song) => {
        // Asignar la canción a la variable local
        this.song = song;
      });
    }
  }*/
}
