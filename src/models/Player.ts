import { Playlist } from './Playlist';
import { Video } from './Video';

export class Player {
  private currentVideo: Video | null = null;

  constructor(private playlist: Playlist) {}

  play(index: number): void {
    const video = this.playlist.get(index);
    if (video) {
      this.currentVideo = video;
      video.play();
    } else {
      console.log('Vídeo não encontrado');
    }
  }

  pause(): void {
    this.currentVideo?.pause();
  }

  stop(): void {
    this.currentVideo?.stop();
    this.currentVideo = null;
  }
}
