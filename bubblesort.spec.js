describe("Bubble Sort", function() {
  let arr = [6, 3, 2, 5, 7, 1, 8, 4];

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("Ordena un array de menor a mayor", function() {
    expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it("Cuenta cuantas veces swap fue llamado", function() {
    spyOn(window, "swap").and.callThrough();
    bubbleSort([3, 4, 1, 2, 7]);
    expect(swap.calls.count()).toEqual(4);
  });
});
