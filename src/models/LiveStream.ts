import { Video } from './Video';

export class LiveStream extends Video {
  constructor(title: string) {
    super(title, Infinity); // duração infinita
  }

  info(): string {
    return `🔴 Live: ${super.info()}`;
  }
}
