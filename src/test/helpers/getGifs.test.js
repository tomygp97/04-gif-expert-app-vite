import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en getGifs()', () => {

    test('should return an array of gifs', async() => {

        const gifs = await getGifs("One Punch");
        expect(gifs.length).toBeGreaterThan(0);
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });

    });


});