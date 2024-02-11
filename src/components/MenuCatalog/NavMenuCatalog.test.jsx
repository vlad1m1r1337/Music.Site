import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen, fireEvent } from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../store";
import NavMenuCatalog from "./NavMenuCatalog";
import {customRender} from "../../utils/test-utils";


describe("<NavMenuCatalog />", () => {
    it('should have main, playlist and logout in the document', async () => {
        customRender(
            <Provider store={store}>
                    <NavMenuCatalog />
            </Provider>
        )

        const main = screen.getByText("Главное");
        const playlist = screen.getByText("Мой плейлист");
        const logout = screen.getByText("Выйти");
        expect(main).toBeInTheDocument();
        expect(playlist).toBeInTheDocument();
        expect(logout).toBeInTheDocument();

        // const fButton = screen.getByText('button');
        // expect(fButton).toHaveStyle('font-size: 1rem');

        // expect(main).toHaveStyle('font-size: 16px');
        // expect(playlist).toHaveStyle({color: '#ffffff'});
        // expect(logout).toHaveStyle({color: '#ffffff'});


        // fireEvent.click(main);
        // fireEvent.click(playlist);
        // fireEvent.click(logout);
        //
        // expect(main).toHaveStyle({color: '#000000'});
        // expect(playlist).toHaveStyle({color: '#000000'});
        // expect(logout).toHaveStyle({color: '#000000'});
    });
});

// it("should change theme by click", () => {
//     render(<ThemeSwitcher />);
//
//     const button = screen.getByText("Change Theme");
//
//     expect(button).toBeInTheDocument();
//     expect(button).toHaveStyle({
//         color: "#282c34",
//         background: "#fff",
//     });
//
//     fireEvent.click(button);
//
//     expect(button).toHaveStyle({
//         color: "#fff",
//         background: "#282c34",
//     });
// });
