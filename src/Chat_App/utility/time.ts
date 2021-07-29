

// Converts a unix epoch time into a dateTime and excludes the Timezone
export const format_epochTime = (n: any) => {
    if (n === "The beginning of time"){
        return n
    }
    let dateTime = new Date(n * 1000)
    let modfied_dateTime = dateTime.toString().split(" ")
    let formatted = modfied_dateTime[0] + " " + modfied_dateTime[1] + " " + modfied_dateTime[2] + " " + modfied_dateTime[3] + " " + modfied_dateTime[4]
    return formatted
}