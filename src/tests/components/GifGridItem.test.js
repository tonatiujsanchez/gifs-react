

import GifGridItem from '../../components/GifGridItem'
import { shallow } from 'enzyme'



describe('Pruebas en el componente GifGridItem.js', () => { 


    const title = 'Titulo del gif'
    const img = 'http://localhost:3000/assets/img/gif.jpg'
    let wrapper = shallow( <GifGridItem title={ title } img={ img } /> )



    test('Debe mostrar <GifGridItem /> correctamente ', () => { 

        expect( wrapper ).toMatchSnapshot()    

     })



     test('Debe de tener un parrafo con el title', () => { 

        const p = wrapper.find('p')

        expect( p.text().trim() ).toBe( title )

      })



      test('Debe de tener la imagen igual al url y alt de los props', () => { 

        const image = wrapper.find('img')

        const src = image.props().src
        const alt = image.props().alt

        expect( src ).toBe( img )
        expect( alt ).toBe( title )

       })



       test('El componente debe de tener la clase .card', () => { 

            const divCard = wrapper.find('div')
            const classes = divCard.prop('className')
            
            expect( classes.includes('card') ).toBe( true )            

        })


 })


