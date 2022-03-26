import { renderHook } from "@testing-library/react-hooks"
import useFetchGifs from "../../hooks/useFetchGifs"



describe('Pruebas a nuestro Custom Hook useFetchGifs', () => { 


    test('Debe de retornal el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) )
        const { data, loading } = result.current

        await waitForNextUpdate()

        expect( data ).toEqual([])
        expect( loading ).toBe( true )

    })

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => { 

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) )
        await waitForNextUpdate()
        
        const { data, loading } = result.current

        expect( data.length ).toBe(10)
        expect( loading ).toBe( false )
     })


 })


 
 /*
Pruebas en Hooks Personalizados 

https://react-hooks-testing-library.com/
*/ 