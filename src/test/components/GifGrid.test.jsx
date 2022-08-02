import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => {

const category = "One Punch";

    test('should show loading initially', () => {

            useFetchGifs.mockReturnValue({
                images: [],
                isLoading: true

            });

        render( <GifGrid category={ category }/>)
        
        expect( screen.getByText("Cargando...") );
        expect( screen.getByText(category) );
        
        // screen.debug();
        
    });
    
    test('should show items when images are load from useFetchGifs.js', () => {
        
        const gifs = [
        {
            id: "ABC",
            title: "Saitama",
            url: "https://localhost/saitama.jpg"
        },
        {
            id: "123",
            title: "Goku",
            url: "https://localhost/reloco.jpg" 
        },
    ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category }/>)

        // screen.debug();

        expect( screen.getAllByRole("img").length ).toBe(2);

    });


});