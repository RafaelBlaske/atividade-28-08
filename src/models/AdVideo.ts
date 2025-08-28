import { Video } from './Video';

export class AdVideo extends Video {
  constructor(title: string, duration: number, private advertiser: string) {
    super(title, duration);
  }

  info(): string {
    return `${super.info()} | Anunciante: ${this.advertiser}`;
  }
}
