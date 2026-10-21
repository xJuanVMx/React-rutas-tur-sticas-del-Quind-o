import type { Ruta } from "../datos/rutas";
import { TarjetaRuta } from "./TarjetaRuta";

interface RutasPorMunicipioProps {
  rutas: Ruta[];
}

function filtrarRutaPorMunicipio(rutas: Ruta[], municipio: string) {
  return rutas.filter((ruta) => ruta.municipio === municipio);
}

export function RutasPorMunicipio({ rutas }: RutasPorMunicipioProps) {
  const municipios = rutas.map((ruta) => ruta.municipio);
  const municipiosSinRepetir = [...new Set(municipios)];

  return (
    <>
      {municipiosSinRepetir.map((municipio) => (
        <section key={municipio}>
          <h2>{municipio}</h2>
          {filtrarRutaPorMunicipio(rutas, municipio).map((ruta) => (
            <TarjetaRuta key={ruta.id} ruta={ruta} />
          ))}
        </section>
      ))}
    </>
  );
}