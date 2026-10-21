import type { Ruta } from "../datos/rutas";

interface TarjetaRutaProps {
  ruta: Ruta;
}

const textoDificultad = {
  baja: "Dificultad baja",
  media: "Dificultad media",
  alta: "Dificultad alta",
};

export function TarjetaRuta({ ruta }: TarjetaRutaProps) {
  const precio = ruta.precio.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

  return (
    <article className="tarjeta-ruta">
      <h3>{ruta.nombre}</h3>
      <p className="tarjeta-detalles">{ruta.municipio} · {ruta.duracionHoras} horas · {precio}</p>
      <p className="tarjeta-dificultad">{textoDificultad[ruta.dificultad]}</p>

      <p className="tarjeta-duracion">{ruta.duracionHoras < 5 ? "Ruta corta" : "Jornada completa"}</p>

      {ruta.incluyeTransporte && <strong className="tarjeta-transporte">Incluye transporte</strong>}

      <div className="campo-personas">
        <input type="number" aria-label="Personas" />
      </div>
    </article>
  );
}