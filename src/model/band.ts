export class Band {
    constructor(
        private id: string,
        private name: string,
        private mainGenre: string,
        private responsible: string
    ) { }

    getId(): string {
        return this.id
    }
    getName(): string {
        return this.name
    }
    getMainGenre(): string {
        return this.mainGenre
    }
    getResponsible(): string {
        return this.responsible
    }
    setMainGenre(mainGenre: string) {
        this.mainGenre = mainGenre
    }
    setResponsible(responsible: string) {
        this.responsible = responsible
    }

    public static toBand(data?: any): Band | undefined {
        return (data && new Band(
            data.id,
            data.name,
            data.mainGenre,
            data.responsible
        ))
    }
}