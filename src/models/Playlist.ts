import { Video } from './Video';

export class Playlist {
  private videos: Video[] = [];

  add(video: Video): void {
    this.videos.push(video);
  }

  showAll(): void {
    this.videos.forEach((v, i) => {
      console.log(`${i + 1}. ${v.info()}`);
    });
  }

  get(index: number): Video | undefined {
    return this.videos[index];
  }
}
