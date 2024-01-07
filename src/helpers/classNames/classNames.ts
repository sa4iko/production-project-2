type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods: Mods, additional: string[]) {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([cls, value] ) => Boolean(value))
            .map(([classNames]) => classNames)
    ]
        .join(' ')

}

//classNames('sdfsdfsd', {'dsfsdfsdf': true}, ['sfsdfsdf'])