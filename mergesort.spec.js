describe("Merge", function() {
  const arr = [1, 5, 8, 1, 3, 5, 49, 1, 4, 7];
  it("Ordena un array de menor a mayor", function() {
    expect(mergeSort(arr)).toEqual([1, 1, 1, 3, 4, 5, 5, 7, 8, 49]);
  });

  it("La funcion orderDisassembledArrays se ejecuta mas de una vez", function() {
    spyOn(window, "orderDisassembledArrays").and.callThrough();
    mergeSort([3, 4, 1]);
    expect(orderDisassembledArrays.calls.count()).toEqual(2);
  });
});
