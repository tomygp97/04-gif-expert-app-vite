export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=MVGf5Zhi4rPVISmg6GbDEPicR0rqS75A&q=${ category }&limit=5`; // Agregar siempre https://
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    console.log(gifs);
    return gifs;
}   