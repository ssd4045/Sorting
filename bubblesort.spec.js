describe("Bubble Sort", function() {
  const arr = [6, 3, 2, 5, 7, 1, 8, 4];
  it("Maneja un array vacio", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("Ordena un array de menor a mayor", function() {
    const sorted = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(bubbleSort(arr)).toEqual(sorted);
  });
  it("La funcion swap se ejecuta mas de una vez", function() {
    spyOn(window, "swap").and.callThrough();
    bubbleSort([3, 4, 1, 2, 7]);
    expect(swap.calls.count()).toEqual(4);
  });
});
