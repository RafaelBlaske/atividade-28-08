import { Playlist } from './Playlist';
export declare class Player {
    private playlist;
    private currentVideo;
    constructor(playlist: Playlist);
    play(index: number): void;
    pause(): void;
    stop(): void;
}
//# sourceMappingURL=Player.d.ts.map