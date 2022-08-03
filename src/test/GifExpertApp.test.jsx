import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {

    test('should add newCategory on the array', () => {

        // const categories  = ["Naruto", "Gintama"];
        const newCategory = "Rodrigo";
        
        render(<GifExpertApp />)
        
        const input = screen.getByRole("textbox");
        const form  = screen.getByRole("form");
        // const h3 = screen.getAllByRole("h3");
        
        fireEvent.input( input, { target: {value: newCategory} } );
        fireEvent.submit( form );
     
        screen.debug();
        // expect( categories.includes("Rodrigo") );
        
        
    });

});