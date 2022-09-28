export function formatDate(timeMillis) {
    const date = new Date(timeMillis)

    return `${date.toDateString()} ${date.toLocaleTimeString('en', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })}`
}

export function sortNewsByDate(news, ascending = false) {
    const sorted = news.sort((a, b) => b.dateMillies - a.dateMillies)
    if (ascending) {
        return sorted.reverse()
    }
    return sorted
}

export function getBrief(text, limit) {
    if (text.length > limit) {
        return text.substring(0, limit) + "..."
    }
    return text
}

export function getDateWithoutTime(date) {
    if (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate())
    }
    return null
}