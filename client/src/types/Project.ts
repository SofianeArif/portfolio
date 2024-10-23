export enum EToolType {
    LANGUAGE = "Langage",
    FRAMEWORK = "Framework",
    LIBRARY = "Bibliothèque",
    DATABASE = "Base de données",
}

export type StackType = {
    name: string
    logo: string
    type: EToolType
}

export type ProjectType = {
    name : string
    thumbnail : string
    stack? : StackType[]
    description : string
    images : string[]
    url? : string
}
