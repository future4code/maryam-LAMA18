// export enum WEEKDAY {
//     FRIDAY = "FRIDAY",
//     SATURDAY = "SATURDAY",
//     SUNDAY = "SUNDAY"
// }

export class Show {
    constructor(
        private id: string,
        private weekDay: string,
        private bandId: string,
        private startTime: number,
        private endTime: number,
    ) { }

    getId(): string {
        return this.id
    }
    getWeekDay(): string {
        return this.weekDay
    }
    getBandId(): string {
        return this.bandId
    }
    getStartTime(): number {
        return this.startTime
    }
    getEndTime(): number {
        return this.endTime
    }
    setId(id: string) {
        this.id = id
    }
    setWeekDay(weekDay: string) {
        this.weekDay = weekDay
    }
    setStartTime(startTime: number) {
        this.startTime = startTime
    }
    setEndTime(endTime: number) {
        this.endTime = endTime
    }
    setBandId(bandId: string) {
        this.bandId = bandId
    }
    // public static toWeekDay(data?: any): WEEKDAY {
    //     switch (data) {
    //         case "FRIDAY":
    //             return WEEKDAY.FRIDAY
    //         case "SATURDAY":
    //             return WEEKDAY.SATURDAY
    //         case "SUNDAY":
    //             return WEEKDAY.SUNDAY
    //         default:
    //             throw new Error("Dia inválido")
    //     }
    // }
}