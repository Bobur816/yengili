import loader from "./loaderToggle"

const request = async (resource) => {
    loader(true)
    const req = await fetch(resource)

    if (!req.ok) {
        loader(false)
        throw new Error('Something went wrong!!!')
    }
    const data = await req.json()
    loader(false)
    return data
}

export default request 