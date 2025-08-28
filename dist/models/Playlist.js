import { Video } from './Video';
export class Playlist {
    constructor() {
        this.videos = [];
    }
    add(video) {
        this.videos.push(video);
    }
    showAll() {
        this.videos.forEach((v, i) => {
            console.log(`${i + 1}. ${v.info()}`);
        });
    }
    get(index) {
        return this.videos[index];
    }
}
//# sourceMappingURL=Playlist.js.map