export function generateRandomString() {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let cadena = "";
  for (let i = 0; i < 10; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    cadena += caracteres.charAt(indice);
  }
  return cadena;
}

// Ejemplo de uso:
