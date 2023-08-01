const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function formatDate(timestamp: string) {
    const date = new Date(Date.parse(timestamp))
    return `${date.getFullYear()}, ${date.getDay()} ${monthNames[date.getMonth()]}`
}