describe("Pruebas en ele archivo demo.test.ts", () => {
  test("Debe de ser iguales los string", () => {
    const mensaje = "Hola mundo";

    const mensaje2 = `Hola mundo`;

    expect(mensaje).toBe(mensaje2);
  });
});
