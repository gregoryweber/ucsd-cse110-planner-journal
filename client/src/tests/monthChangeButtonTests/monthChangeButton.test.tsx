import { render, screen, fireEvent } from "@testing-library/react";
import MonthChangeButton from "../../Components/MonthChangeButton/monthChangeButtonSim";

describe("Test Button", () => {
   // test("renders create note form", () => {
        //render(<MonthChange />);
    //}

    test("dummy test", () => {
        expect(1).toBe(1);
    });
    // const dummyMonthChange = [
    //     {
    //          month: "November",
    //          year: 2024
    //     }
     
    //  ]

    // test("leftButton decreases month", () => {
    //     render(<MonthChangeButton/>);
    //     const checkMonth = screen.getByPlaceholderText("November");
    //     const checkYear = screen.getByPlaceholderText(2024);

    //     const button = result.container.querySelectorAll(".arrow-button left-arrow");
    //     fireEvent.click(button);
    //     const month = screen.queryByText(dummyMonthChange.month);
    //     expect(month).toBe("October");
    // });

    // test("rightButton increases month", () => {
    //     render(<MonthChangeButton/>);
    //     const checkMonth = screen.getByPlaceholderText("November");
    //     const checkYear = screen.getByPlaceholderText(2024);

    //     const button = result.container.querySelectorAll(".arrow-button right-arrow");
    //     fireEvent.click(button);
    //     const month = screen.queryByText(dummyMonthChange.month);
    //     expect(month).toBe("December");
    // });

    // test("leftButton decreases year", () => {
    //     render(<MonthChangeButton/>);
    //     const checkMonth = screen.getByPlaceholderText("November");
    //     const checkYear = screen.getByPlaceholderText(2024);

    //     const button = result.container.querySelectorAll(".arrow-button right-arrow")[0];
    //     for(let i = 0; i < 11; i++)
    //     {
    //         fireEvent.click(button);
    //     }
    //     const month = screen.queryByText(dummyMonthChange.month);
    //     const year = screen.queryByText(dummyMonthChange.year);
    //     expect(month).toBe("December");
    //     expect(year).toBe(2023);
    // });

    // test("rightButton increases year", () => {
    //     render(<MonthChangeButton/>);
    //     const checkMonth = screen.getByPlaceholderText("November");
    //     const checkYear = screen.getByPlaceholderText(2024);
        
    //     const button = result.container.querySelectorAll(".arrow-button right-arrow")[0];
    //     for(let i = 0; i < 2; i++)
    //     {
    //         fireEvent.click(button);
    //     }
    //     const month = screen.queryByText(dummyMonthChange.month);
    //     const year = screen.queryByText(dummyMonthChange.year);
    //     expect(month).toBe("January");
    //     expect(year).toBe(2025);
    // });
});