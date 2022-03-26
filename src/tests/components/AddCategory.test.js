import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"




describe('Priebas en el Componente AddCategory', () => { 
    
    const addNewCategory = jest.fn()
    let wrapper = shallow( <AddCategory addNewCategory={ addNewCategory } /> )

    beforeEach(()=>{
        jest.clearAllMocks()
        wrapper = shallow( <AddCategory addNewCategory={ addNewCategory } /> )
    })


    test('Debe de mostrarse correctamente', () => { 

        expect( wrapper ).toMatchSnapshot()

     })


     test('Debe de cambiar la caja de texto', () => { 


        const input = wrapper.find('input')

        const value = 'Hola mundo'
        input.simulate('change', { target: { value } })


        const parrafo = wrapper.find('p').text().trim()

        expect( parrafo ).toBe( value )
    
      })



      test('No debe se enviar la informacion onSubmit', () => { 

        const formulario = wrapper.find('form')

        formulario.simulate('submit', { preventDefault(){}  })


        expect( addNewCategory ).not.toHaveBeenCalled()

       })


       test('Debe de llamr addNewCategory y limpiar la caja de Texto', () => { 
           
           let value = 'Hello word'

            // 1. Simulación del inputChange
            const input = wrapper.find('input')
            input.simulate('change', { target:{ value } })

            // 2. Simulación del onSubmit
            const formulario = wrapper.find('form' )
            formulario.simulate('submit', {  preventDefault(){} })


            // 3. Verificar que addNewCategory() se llamó por lo menos una vez
            expect( addNewCategory ).toHaveBeenCalled()

            // 3.1. Verificar que addNewCategory() se llamó n cantidad de veces
            // expect( addNewCategory ).toHaveBeenCalledTimes(2) 
            
            // 3.2. Verificar que addNewCategory() se llamó y se envio un String
            expect( addNewCategory ).toHaveBeenCalledWith( expect.any(String) )

                    
            //4. Verificar que el input se limpió
            expect( input.prop('value') ).toBe('')

        })




 })