export const getDateWithMinutes = (minutes: number) => {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(minutes);
    return date;
}