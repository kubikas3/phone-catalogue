import React from "react";
import { render } from "@testing-library/react";
import { Phone } from "../types";
import { PhoneItem } from "./PhoneItem";

describe("renders apple phone", () => {
  const phone: Phone = {
    brand: "Apple",
    colorOptions: [],
    contentKey: "apple-iphone-7",
    displayName: "Apple iPhone 7",
    dualSIM: false,
    imgUrl:
      "https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/phones/iPhone7_Black_Front_270x540.png",
    internalMemoryGB: [32, 128, 256],
    link: "https://www.telia.se/privat/telefoni/telefoner/produkt/apple-iphone-7",
    networkTechnology: ["2g", "3g", "4g"],
    price: "449.0",
    pricePrefix: "Pris",
    priceSuffix: "kr/mån",
    screenSize: "",
  };

  it("renders display name", () => {
    const { getByText } = render(<PhoneItem phone={phone} />);
    expect(getByText(/apple iphone 7/i)).toBeInTheDocument();
  });

  it("renders image", () => {
    const { getByAltText } = render(<PhoneItem phone={phone} />);
    const image = getByAltText(phone.displayName);
    expect(image).toHaveAttribute("src", phone.imgUrl);
  });
});
