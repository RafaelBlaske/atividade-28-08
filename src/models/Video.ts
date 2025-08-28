export class Video {
  constructor(
    private title: string,
    private duration: number // em segundos
  ) {}

  play(): void {
    console.log(`Reproduzindo: ${this.title}`);
  }

  pause(): void {
    console.log(`Pausado: ${this.title}`);
  }

  stop(): void {
    console.log(`Parado: ${this.title}`);
  }

  info(): string {
    return `Título: ${this.title}, Duração: ${this.duration} segundos`;
  }
}
