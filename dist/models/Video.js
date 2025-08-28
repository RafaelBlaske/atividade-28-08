export class Video {
    constructor(title, duration // em segundos
    ) {
        this.title = title;
        this.duration = duration;
    }
    play() {
        console.log(`Reproduzindo: ${this.title}`);
    }
    pause() {
        console.log(`Pausado: ${this.title}`);
    }
    stop() {
        console.log(`Parado: ${this.title}`);
    }
    info() {
        return `Título: ${this.title}, Duração: ${this.duration} segundos`;
    }
}
//# sourceMappingURL=Video.js.map