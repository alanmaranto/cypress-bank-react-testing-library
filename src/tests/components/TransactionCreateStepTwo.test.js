import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TransactionCreateStepTwo from "../../components/TransactionCreateStepTwo";

// https://testing-library.com/docs/queries/about/
// testing library recomends almost all the cases use getByRole but in forms they recommend getByLabelText
// Unfortunately formik doesn't have labels

test("on initial render, the pay button is disable", async () => {
  render(<TransactionCreateStepTwo sender={{ id: 5 }} receiver={{ id: 4 }} />);

  // screen.debug();
  // screen.getByRole('')
  // expect(await screen.getByRole("button", { name: /pay/i })).toBeEnabled();
  // expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if an amount and note is entered, the pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: 5 }} receiver={{ id: 4 }} />);

  // Check the tree to inspect elements
  // screen.getByRole("");
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner with my family");

  // debug or screen.getByRole("") to debug in a nicest way
  // screen.getByRole("");
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
