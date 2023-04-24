type TimeDiv = [number, Intl.RelativeTimeFormatUnitSingular];

const relativeTimeFormat = new Intl.RelativeTimeFormat('en', { numeric: "auto" });
const timeUnitsInSeconds: { [unit in Intl.RelativeTimeFormatUnitSingular]: number } = {
    second: 1,
    minute: 60,
    hour: 3600,
    day: 86400,
    week: 86400 * 7,
    month: 86400 * 30,
    quarter: 86400 * 122,
    year: 86400 * 365
};
const timeDivs: TimeDiv[] = [[60, "second"], [60, "minute"], [24, "hour"], [30, "day"], [12, "month"]];

export function GetRelativeTimeString(date: Date) {
    const dateDiff = (date.getTime() - new Date().getTime()) / 1000;
    const [diff, divName] = reduceSecondsToHumanTimeDiv(dateDiff);
    return relativeTimeFormat.format(Math.round(diff), divName);
}

export function GetSecondsForUnit(unit: Intl.RelativeTimeFormatUnitSingular): number {
    return timeUnitsInSeconds[unit];
}

function reduceSecondsToHumanTimeDiv(diffInSec: number): TimeDiv {
    let diff = Math.abs(diffInSec);
    const sign = diffInSec >= 0 ? 1 : -1;
    for (let i = 0; i < timeDivs.length; i++) {
        const [nextDiv, divName] = timeDivs[i];
        if (diff < nextDiv)
            return [sign * diff, divName];
        diff /= nextDiv;
    }
    return [sign * diff, "year"];
}
