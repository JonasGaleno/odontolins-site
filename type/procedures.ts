export interface ProcedureDetail {
    id: string,
    title: string,
    dentist?: string,
    dentistImage?: string,
    dentistCrf?: string,
    description: string,
    dentistBio?: string,
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