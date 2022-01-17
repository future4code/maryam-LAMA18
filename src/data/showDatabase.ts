import { ShowBuisiness } from "../buisiness/showBuisiness";
import { Show } from "../model/show";
import { BaseDatabase } from "./baseDatabase";

export class ShowDatabase extends BaseDatabase {

    createShow = async (show: Show): Promise<void> => {

        try {
            await this.connection("shows")
                .insert({
                    id: show.getId(),
                    band_id: show.getBandId(),
                    start_time: show.getStartTime(),
                    end_time: show.getEndTime(),
                    week_day: show.getWeekDay()
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getShowByTime = async (weekDay: string, startTime: number, endTime: number) => {

        const result = await this.connection.raw(
            `
            SELECT * FROM shows
            WHERE week_day = "${weekDay}
            AND WHERE start_time <= "${endTime}
            AND WHERE end_time >= "${startTime}`
        )
    }
}

// WHERE Country='Mexico'