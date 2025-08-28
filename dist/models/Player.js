import { Playlist } from './Playlist';
import { Video } from './Video';
export class Player {
    constructor(playlist) {
        this.playlist = playlist;
        this.currentVideo = null;
    }
    play(index) {
        const video = this.playlist.get(index);
        if (video) {
            this.currentVideo = video;
            video.play();
        }
        else {
            console.log('Vídeo não encontrado');
        }
    }
    pause() {
        this.currentVideo?.pause();
    }
    stop() {
        this.currentVideo?.stop();
        this.currentVideo = null;
    }
}
//# sourceMappingURL=Player.js.map