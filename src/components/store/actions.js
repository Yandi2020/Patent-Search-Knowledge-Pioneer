export const search = (values) => {
    return{
        type: values.select,
        content: values.content
    }
}



