import {Login} from "./Login";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux";
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import store from "../../store";
import renderer from "react-test-renderer";
import {ButtonPurpl, ButtonWhite} from "./Login.styles";
import 'jest-styled-components'

const mail_id = "input_mail";
const password_id = "input_password";
describe("<Login/>", () => {
    it("should check that login is in the document", async () => {
       const {container} = render(
           <Provider store={store}>
               <MemoryRouter>
                   <Login />
               </MemoryRouter>
           </Provider>
       );
       const enterText = await screen.findByText(/Войти/i);
       expect(enterText).toBeInTheDocument();
    })
    it("should check that registry is in the document", async () => {
        const {container} = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>
        );
        const enterText = await screen.findByText(/Зарегистрироваться/i);
        expect(enterText).toBeInTheDocument();
    })
    it("should check mail and passwords id", async () => {
        const {container} = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByTestId(mail_id)).toBeInTheDocument();
        expect(screen.getByTestId(password_id)).toBeInTheDocument();
    })
    it("should have purple login and white registr buttons", () => {
        const tree = renderer.create(<ButtonPurpl />).toJSON();
        expect(tree).toHaveStyleRule('background-color', '#580EA2');

        const tree2 = renderer.create(<ButtonWhite />).toJSON();
        expect(tree2).toHaveStyleRule('background-color', 'white');
    })
});
