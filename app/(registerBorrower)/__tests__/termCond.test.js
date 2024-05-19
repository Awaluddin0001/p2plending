import { render, fireEvent } from "@testing-library/react-native";
import React from "react";
import TermCond from "../termCond"; // Sesuaikan path sesuai dengan struktur proyek Anda

test("User harus scroll sampai akhir agar checkbox dapat diaktifkan", () => {
  const { getByTestId } = render(<TermCond />);

  const scrollView = getByTestId("scroll-view");
  const checkbox = getByTestId("checkbox");
  const button = getByTestId("button");

  // Pastikan checkbox dan tombol dalam keadaan nonaktif
  //   expect(checkbox).toHaveProp("disabled", true);
  expect(button).toHaveProp("disabled", true);

  // Scroll ke akhir
  fireEvent.scroll(scrollView, {
    nativeEvent: {
      contentOffset: { y: 1000 },
      contentSize: { height: 2000 },
      layoutMeasurement: { height: 1000 },
    },
  });

  // Pastikan checkbox sudah bisa diaktifkan setelah scroll ke akhir
  expect(checkbox).toHaveProp("disabled", false);

  // Centang checkbox
  fireEvent.press(checkbox);

  // Pastikan tombol sudah bisa ditekan setelah checkbox dicentang
  expect(button).toHaveProp("disabled", false);
});
