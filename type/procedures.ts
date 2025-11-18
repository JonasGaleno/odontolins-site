export interface ProcedureDetail {
    id: string,
    title: string,
    dentist?: string,
    dentistImage?: string,
    description: string,
    dentistBio?: string,
    duration: string,
    price: string,
    details: string[],
    images: ProcedureImages[],
}

export interface ProcedureImages {
    label: string,
    src: string,
}