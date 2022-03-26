import axios from "axios"

export const getGifs = async (category) => {

    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&key=ycZwMRmGee8d8Fv6IyLgr4EqwWOFG42E`
        const { data } = await axios.get(url)

        const gifs = data.data.map(img => {
            return {
                id: img.id,
                title: img.title,
                img: img.images?.downsized_medium.url
            }
        })

        return gifs
    } catch (error) {
        console.log(error)
    }
}