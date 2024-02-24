import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {screen, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../store";
import NavMenuCatalog from "./NavMenuCatalog";
import {customRender} from "../../utils/test-utils";
import 'jest-styled-components'



describe("<NavMenuCatalog />", () => {
    it('should have main, playlist and logout in the document',() => {
        customRender(
            <Provider store={store}>
                    <NavMenuCatalog />
            </Provider>
        )

        const main = screen.getByText("Главное");
        expect(main).toBeInTheDocument();

        const playlist = screen.getByText("Мой плейлист");
        expect(playlist).toBeInTheDocument();

        const logout = screen.getByText("Выйти");
        expect(logout).toBeInTheDocument();

    });

    it ("should change theme image", () => {
        customRender(
            <Provider store={store}>
                <NavMenuCatalog />
            </Provider>
        )
        const themeImage = screen.getByAltText("change_theme_black");
        expect(themeImage).toBeInTheDocument();

        fireEvent.click(themeImage);

        const newThemeImage = screen.getByAltText("change_theme_white");
        expect(newThemeImage).toBeInTheDocument();
    })

    test ("MenuLink css properties when change theme", () => {
        customRender(
            <Provider store={store}>
                <NavMenuCatalog />
            </Provider>
        )
        const themeSwitcher = screen.getByAltText("change_theme_black");
        const main = screen.getByText("Главное");

        expect(main).toHaveStyleRule("color", "#ffffff");

        fireEvent.click(themeSwitcher);

        expect(main).toHaveStyleRule("color", "#000000");
    })
});
