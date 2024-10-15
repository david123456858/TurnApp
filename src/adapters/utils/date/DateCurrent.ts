export const getDateColombia = (): Date => {
  const fechaServidor = new Date()
  const desfaseColombia = -5
  const fechaColombia = new Date(fechaServidor.getTime() + desfaseColombia * 60 * 60 * 1000)
  return fechaColombia
}
