## :small_blue_diamond: CARRITO DE LA COMPRA :small_blue_diamond:

:white_circle: :yellow_circle: :white_circle: :yellow_circle: :white_circle: :yellow_circle:

Esta es una App hecha con React de una única página dividida en dos partes.

1. La parte izquierda dispone de una serie de productos con imagen, nombre de producto y precio (con decimales).

- Botón para añadir al carrito (se puede hacer el ítem entero clicable si se desea).

2. La parte derecha será el Carrito.

- En el carrito se tiene que ver reflejado la cantidad total de productos que hay en la cesta y una lista con esos productos que se han añadido.
- Añadir también una opción para añadir más productos al carrito (+) y una opción para quitar productos del carrito (-).

---

- Cantidad limitada de productos 2 por cada uno de ellos. Si hay 2, se deshabilita el boton (+)

- La gestión del carrito se hará con React context

---

- modificaciones:
  No indexar artículos y hacer contador con cantidad total de unidades.

  Aplicar un eliminar items en la parte de la lista del carrito.

  Mirar de aplicar responsive.

  Al añadir artículos hacerlo de forma que se añadan en el orden en que se clican.

COMANDOS DE USO:
1- El servidor está levantado en render por lo que no es necesario aplicar ningún comando.

- Npm run dev -> Ejecutar codigo en Browser
- Npm run build -> Deployear

- Npm run test -> Arrancar los test
- Npm run test:coverage -> Arrancar los test con análisis exausto

Npm run build --w / Npm run test --w (Modos watcher)
