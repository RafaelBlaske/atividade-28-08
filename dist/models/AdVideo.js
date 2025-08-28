import { Video } from './Video';
export class AdVideo extends Video {
    constructor(title, duration, advertiser) {
        super(title, duration);
        this.advertiser = advertiser;
    }
    info() {
        return `${super.info()} | Anunciante: ${this.advertiser}`;
    }
}
//# sourceMappingURL=AdVideo.js.map