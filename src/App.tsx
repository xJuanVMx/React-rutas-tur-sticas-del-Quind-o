import "./App.css";
import { rutas } from "./datos/rutas";
import type { Ruta, Dificultad } from "./datos/rutas";
import { ListaRutas } from "./components/ListaRutas";

function filtrarPorDificultad(lista: Ruta[], dificultad: Dificultad): Ruta[] {
  return lista.filter((ruta) => ruta.dificultad === dificultad);
}

type Criterio = "precio" | "duracion";

function ordenarRutas(lista: Ruta[], criterio: Criterio): Ruta[] {
  const copia = [...lista];
  if (criterio === "precio") {
    return copia.sort((a, b) => a.precio - b.precio);
  }
  return copia.sort((a, b) => a.duracionHoras - b.duracionHoras);
}

export function App() {
  const filtradas = filtrarPorDificultad(rutas, "baja");
  const resultado = ordenarRutas(filtradas, "precio");

  return (
    <main>
      <h1>Rutas turísticas del Quindío</h1>

      <p>Se encontraron {resultado.length} rutas</p>

      <ListaRutas rutas={resultado} />

    </main>
  );
}

export default App;