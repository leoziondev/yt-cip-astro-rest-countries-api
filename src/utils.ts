export const formatList = (arr: string[]) => {
    return new Intl.ListFormat(undefined, {
        style: "long", 
        type: "conjunction",
    }).format(arr)
}