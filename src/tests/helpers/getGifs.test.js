import { getGifs } from "../../helpers/getGifs"



describe('Pruebas al Helper getGifs.js', () => { 



    test('Debe de traer 10 elementos', async() => { 

        const gifs = await getGifs('Dragon Ball Z')


        expect( gifs.length ).toBe(10)

     })


    test('Debe de trar un Array vacion en caso de que no se envien agumentos a la peticion', async() => { 

        const gifs = await getGifs('')
        expect( gifs.length ).toBe(0)

     })


 })