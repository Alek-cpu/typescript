interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rectangle: Rect = {
    id: "2342",
    // color: "erg",
    size: {
        width: 12,
        height: 1
    }
}