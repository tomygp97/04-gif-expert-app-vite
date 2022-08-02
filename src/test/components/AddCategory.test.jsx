import { render, screen, fireEvent } from "@testing-library/react";
import AddCategory from "../../components/AddCategory";



describe('Pruebas en <AddCategory />', () => {

    test('should change value in the box of text', () => {

        render( <AddCategory onNewCategory={ () => {} }/> );
        const input = screen.getByRole("textbox");

        fireEvent.input( input, { target: {value: "Saitama"} } );
        expect( input.value ).toBe("Saitama");
        // screen.debug();

    });

    test('should call onNewCategory if input is not empty', () => {

        const inputValue    = "Saitama";
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={onNewCategory}/> );
        
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        
        fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit( form );
        // screen.debug();

        expect( input.value ).toBe("");
        
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
        
    });
    
    test('should not call onNewCategory if input is empty', () => {
        
        // const inputValue = "";
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={onNewCategory}/> );
        
        // const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        
        // fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit( form );
        
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        
    });



});