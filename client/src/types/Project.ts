export type StackType = {
    name: string
    logo: string
}

export type ProjectType = {
    name : string
    thumbnail : string
    stack? : StackType[]
    description : string
    images : string[]
    url? : string
}
