import reducer, { addItem, removeItem } from "./favoriteSlice";

describe("favorite reducer", () => {
  const initialState: string[] = ["Apple"];

  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual([]);
  });

  it("should handle addItem", () => {
    const actual = reducer(initialState, addItem("Samsung"));
    expect(actual).toEqual(["Apple", "Samsung"]);
  });

  it("should handle removeItem", () => {
    const actual = reducer(initialState, removeItem("Apple"));
    expect(actual).toEqual([]);
  });
});
