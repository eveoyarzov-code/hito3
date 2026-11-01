# 🍕 Pizzería Mamma Mía! - Hito 3

Este proyecto corresponde al desarrollo del **Hito 3** de la aplicación web Pizzería Mamma Mía, construida con **React**, **Vite** y **Bootstrap 5**. El objetivo de esta etapa fue implementar la renderización dinámica de listas y dominar el flujo de datos mediante el levantamiento del estado (*Lifting State Up*).

## 🛠️ Tecnologías y Prácticas Utilizadas

* **React (Hooks):** Uso de `useState` para el manejo del carrito de compras.
* **Lifting State Up:** El estado del carro se levantó a `App.jsx` para sincronizar globalmente los datos.
* **Vite & Public Folder:** Optimización del manejo de imágenes locales a través de la carpeta raíz `/public`.
* **Bootstrap 5:** Diseño interactivo, responsive y estilizado para el e-commerce.

## 🚀 Requerimientos e Interacciones Implementadas

1. **`Home` y `CardPizza`:** Renderizado dinámico del menú de pizzas mediante métodos iterativos de arrays (`.map()`), incluyendo la muestra obligatoria de ingredientes en etiquetas `<li>`.
2. **`Cart Component`:** Creación de la vista interactiva del carrito de compras.
3. **Control de cantidades:** Botones de incrementar (`+`) y disminuir (`-`) que actualizan el precio individual de cada fila.
4. **Eliminación del carro:** Siguiendo la rúbrica de evaluación, si la cantidad de un producto llega a 0, este se remueve automáticamente de la lista mediante filtrado dinámico.
5. **Sincronización en Navbar:** El botón del carrito en la barra de navegación se actualiza en tiempo real mostrando tanto el **dinero total acumulado** como una **burbuja numérica (badge)** con la cantidad total de pizzas, fijado en el extremo derecho.

---

## 💻 Ejecución del Proyecto


