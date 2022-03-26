import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid"


import useFetchGifs from "../../hooks/useFetchGifs"
jest.mock('../../hooks/useFetchGifs')




describe('Pruebas del componente GifGrid', () => { 

    const category = 'Trunks'
    
    
    test('El componente GifGrid debe de mostrarse correctamente', () => { 
        
    
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        let wrapper = shallow( <GifGrid category={ category } /> )
        
        expect( wrapper ).toMatchSnapshot()

     })



     test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => { 
        
        const gifs = [{
            id: 'ABC',
            img: 'https://giphy.com/',
            title: 'Title of gif'
        },
  ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        let wrapper = shallow( <GifGrid category={ category } /> ) 

        
        const loading = wrapper.find('Loading').exists()
        expect( loading ).toBe( false )


        const GifGridItem = wrapper.find('GifGridItem')
        expect( GifGridItem.length ).toBe( gifs.length ) 
     })


 })



