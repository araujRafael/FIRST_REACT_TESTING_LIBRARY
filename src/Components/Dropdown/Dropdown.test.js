// Enzyme => lib do Airbnb : não testa componente
// JEST => React
import { Dropdown } from "./Dropdown";
import { screen, render, userEvent } from "../../tests/export_tests";
/*
 * 1 - start this component closed
 * 2 - show options menu when open
 * 3 - when selected item menu, close dropdown and show options selected
 */
// TDD => write tests before create app

describe("Dropdown", () => {
  const titleBtn = "Select your initial pokemon";
  const pokes = ["charmander", "bulbasauro", "squirtle"];

  //  * 1 - start this component closed
  it("Should it be start closed", () => {
    // 'render' call for the component
    render(<Dropdown title={titleBtn} pokemons={pokes} onSelected={() => {}} />);
    // 'screen' simulated a user viewer
    // 'query' not show error if no find component and 'get' show error
    pokes.forEach((poke) => {
      expect(screen.queryByText(poke)).not.toBeInTheDocument();
    });
  });

  //  * 2 - show options menu when open
  it("Should it be show pokemons when open", () => {
    // 'render' call for the component
    render(<Dropdown title={titleBtn} pokemons={pokes} onSelected={() => {}} />);
    // expected not appear before click
    pokes.forEach((poke) => {
      expect(screen.queryByText(poke)).not.toBeInTheDocument();
    });
    // after click
    const dropdownButton = screen.getByRole("button", { name: titleBtn });
    // to open menu 'userEvent'
    userEvent.click(dropdownButton);
    pokes.forEach((poke) => {
      expect(screen.getByRole("menuitem", { name: poke })).toBeInTheDocument();
    });
  });

  // * 3 - when selected item menu, close dropdown and show options selected
  it("Should signal pokemon when one selected and close dropdown", () => {
    const pokeSelect = 1;
    const optionByRole = (i) => screen.getByRole("menuitem", { name: pokes[i] });
    const onSelected = jest.fn();
    // 'render' call for the component
    render(<Dropdown title={titleBtn} pokemons={pokes} onSelected={onSelected} />);

    // To open menu 'userEvent'
    userEvent.click(screen.getByText(titleBtn));
    // Show in the document when open menu
    expect(optionByRole(0)).toBeInTheDocument();
    expect(optionByRole(2)).toBeInTheDocument();
    expect(optionByRole(1)).toBeInTheDocument();
    
    userEvent.click(optionByRole(1));
    // Refer a jest.fn()
    expect(onSelected).toHaveBeenCalledWith(pokes[1]);
    // Not appear after clicked
    expect(screen.queryByText(pokes[0])).not.toBeInTheDocument();
    expect(screen.queryByText(pokes[1])).not.toBeInTheDocument();
    expect(screen.queryByText(pokes[2])).not.toBeInTheDocument();
  });
});

