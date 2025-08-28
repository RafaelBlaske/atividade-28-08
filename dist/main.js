import { Video } from './models/Video';
import { AdVideo } from './models/AdVideo';
import { LiveStream } from './models/LiveStream';
import { Playlist } from './models/Playlist';
import { Player } from './models/Player';
const playlist = new Playlist();
playlist.add(new Video('Documentário Natureza', 1200));
playlist.add(new AdVideo('Comercial Carros', 30, 'Toyota'));
playlist.add(new LiveStream('Live de Código'));
playlist.showAll();
const player = new Player(playlist);
player.play(0); // reproduz o primeiro vídeo
//# sourceMappingURL=main.js.map