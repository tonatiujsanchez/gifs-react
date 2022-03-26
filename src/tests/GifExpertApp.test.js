import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"



describe('Pruebas al compoenente principal GifExpertApp', () => { 


    const wrapper = shallow( <GifExpertApp /> )

    test('El componente GifExpertApp debe de mostrarse correctamente', () => { 
        expect( wrapper ).toMatchSnapshot()
     })



     test('Debe mostrar una lista de categorias', () => { 

        const defaultCategories = ['Dragon Ball', 'One Punch']

        
        const wrapper = shallow( <GifExpertApp defaultCategories={ defaultCategories } /> )
        expect( wrapper ).toMatchSnapshot()


        const gifGrid = wrapper.find('GifGrid')
        expect( gifGrid.length ).toBe( defaultCategories.length )
        
      })


 })