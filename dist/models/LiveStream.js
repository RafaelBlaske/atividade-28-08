import { Video } from './Video';
export class LiveStream extends Video {
    constructor(title) {
        super(title, Infinity); // duração infinita
    }
    info() {
        return `🔴 Live: ${super.info()}`;
    }
}
//# sourceMappingURL=LiveStream.js.map