import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test("GetSaludo debe de retornar Hola edgar", () => {
    const nombre = "edgar";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre + "!");
  });

  test("GetSaludo debe de retornar Hola Carlos si no hay argumentos", () => {
    const nombre = "Carlos";
    const saludo = getSaludo();
    expect(saludo).toBe("Hola " + nombre + "!");
  });
});
