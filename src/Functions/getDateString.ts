export let getMonth = (date: Date = new Date()): string => {
    const monthNames: Array<string> = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[date.getMonth()];
}


export let getDateString = (): string => {
    let date: Date = new Date(),
        day: number = date.getUTCDate(),
        month: string = getMonth(date),
        year: number = date.getFullYear();
    return ` ${month} ${day}, ${year}`;
}

