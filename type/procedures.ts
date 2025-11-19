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
    title: string,
    imgs: ProcedureImgs[],
}

export interface ProcedureImgs {
    label: string,
    src: string,
}