import { render, screen, fireEvent } from "@testing-library/react";
import MonthChangeButton from "../Components/MonthChangeButton/monthChangeButton";
//import dummyMonthChange from "./constants";



describe("Test Button",)() => {
   // test("renders create note form", () => {
        //render(<MonthChange />);
    //}

    const dummyMonthChange = [
        {
             month = "November";
             year = 2024;
        }
     
     ]

    test("leftButton decreases month", () => {
        render(<monthChangeButton/>);
        const checkMonth = screen.getByPlaceholderText("November");
        const checkYear = screen.getByPlaceholderText(2024);

        const button = result.container.querySelectorAll(".arrow-button left-arrow");
        fireEvent.click(button);
        const month = screen.queryByText(dummyMonthChange.month);
        expect(month) = "October";
    });

    test("rightButton increases month", () => {
        render(<monthChangeButton/>);
        const checkMonth = screen.getByPlaceholderText("November");
        const checkYear = screen.getByPlaceholderText(2024);

        const button = result.container.querySelectorAll(".arrow-button right-arrow");
        fireEvent.click(button);
        const month = screen.queryByText(dummyMonthChange.month);
        expect(month) = "December";
    });

    test("leftButton decreases year", () => {
        render(<monthChangeButton/>);
        const checkMonth = screen.getByPlaceholderText("November");
        const checkYear = screen.getByPlaceholderText(2024);

        const button = result.container.querySelectorAll(".arrow-button right-arrow")[0];
        for(int i = 0; i < 11; i++)
        {
            fireEvent.click(button);
        }
        const month = screen.queryByText(dummyMonthChange.month);
        const year = screen.queryByText(dummyMonthChange.year);
        expect(month) = "December";
        expect(year) = 2023;
    });

    test("rightButton increases year", () => {
        render(<monthChangeButton/>);
        const checkMonth = screen.getByPlaceholderText("November");
        const checkYear = screen.getByPlaceholderText(2024);
        
        const button = result.container.querySelectorAll(".arrow-button right-arrow")[0];
        for(int i = 0; i < 2; i++)
        {
            fireEvent.click(button);
        }
        const month = screen.queryByText(dummyMonthChange.month);
        const year = screen.queryByText(dummyMonthChange.year);
        expect(month) = "January";
        expect(year) = 2025;
    });
}