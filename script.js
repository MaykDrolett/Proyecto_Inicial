let saldo = 50000
function depositar(valor) {
  saldo += valor
    return true 
}

function retirar (valor) {
  if (valor > saldo) {
    return false
  }
  saldo -= valor
  return true
}

function realizarAccion (accion){
  if (accion === "1"){
    let valor = parseInt (prompt ("digite el valor a depositar"))
    return depositar (valor)
  }
  if (accion === "2"){
    let valor = parseInt (prompt("digite el valor a retirar"))
    return retirar (valor)
  }
  return false
}

function main () {
  while (true) {
    let accion = prompt("¿Qué opción desea? 1. Depositar, 2. Retirar, 3. Salir") 
    if (accion === "3") {
      alert ("Hasta luego.")
      break
    }
    let resultado = realizarAccion(accion)
    if (resultado === false) {
      alert ("Esta acción no se pudo realizar")
    } else {
      alert ("Acción realizada, nuevo saldo es:" + saldo)
    }
  }
}
main ()



