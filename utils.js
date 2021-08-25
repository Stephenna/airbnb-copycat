export const isMultiple = (value) => {

       return (value > 1 || value === 0) && 's';
}

export const dollar = (value) => {
    return `$${value} / night`
}

export const isCap = (value) => {
    let splitz = value.split('')
    let all =  splitz[0].toUpperCase() + value.substring(1)

    return all
}


export const isPlural = (host) => {
    return `${host.name}'s`
}