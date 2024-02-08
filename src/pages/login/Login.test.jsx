import {Login} from "./Login";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux";
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import store from "../../store";

describe("<Login/>", () => {
    it("should check that login is in the document", async () => {
       const {container} = render(
           <Provider store={store}>
               <MemoryRouter>
                   <Login />
               </MemoryRouter>
           </Provider>
       );
    // expect(screen.findByText(/Войти/i)).toBeInTheDocument();
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
        // expect(screen.findByText(/Войти/i)).toBeInTheDocument();
        const enterText = await screen.findByText(/Зарегистрироваться/i);
        expect(enterText).toBeInTheDocument();
    })
});
