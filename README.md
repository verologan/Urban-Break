# 🏙️ Urban Break - Plataforma de Compras

Una aplicación web moderna que combina una landing page atractiva con un carrito de compras funcional para una experiencia de usuario completa.

## 🎯 Características

- **Landing Page Profesional**: Presentación visual impactante del proyecto
- **Carrito de Compras**: Funcionalidad completa para agregar/eliminar productos
- **Interfaz Responsiva**: Se adapta a cualquier dispositivo
- **Diseño Moderno**: UI/UX contemporáneo y atractivo
- **JavaScript Dinámico**: Interactividad fluida sin recargas
- **Gestión de Estado**: Control eficiente de productos y cantidades

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseños modernos y responsivos
- **JavaScript (ES6+)**: Lógica de la aplicación

## 📁 Estructura del Proyecto

```
Urban-Break/
├── index.html              # Landing page principal
├── styles.css              # Estilos globales
├── app.js                  # Lógica de la aplicación
├── README.md               # Este archivo
├── LICENSE                 # Licencia MIT
├── .gitignore             # Archivos a ignorar
├── landing-page/           # Sección de bienvenida
│   ├── landing.html
│   ├── landing.css
│   └── landing.js
├── shopping-cart/          # Sistema de carrito
│   ├── cart.html
│   ├── cart.css
│   └── cart.js
└── assets/                 # Imágenes y recursos
    ├── images/
    ├── icons/
    └── data/
```

## 🚀 Cómo Usar

1. **Clonar el repositorio**:
```bash
git clone https://github.com/verologan/Urban-Break.git
cd Urban-Break
```

2. **Abrir en el navegador**:
   - Opción 1: Abre `index.html` directamente
   - Opción 2: Usa un servidor local (recomendado):
     ```bash
     python -m http.server 8000
     # Luego abre http://localhost:8000
     ```

3. **Uso de la aplicación**:
   - Navega a través de la landing page
   - Explora los productos disponibles
   - Agrega items al carrito
   - Ve a la sección de compras para revisar tu carrito
   - Modifica cantidades o elimina productos

## 🛍️ Funcionalidades del Carrito

```javascript
// Ejemplo de uso
addToCart(productId)        // Agregar producto
removeFromCart(productId)   // Eliminar producto
updateQuantity(id, quantity) // Actualizar cantidad
calculateTotal()            // Calcular total
```

## 📊 Productos Soportados

La aplicación puede gestionar:
- Múltiples categorías de productos
- Precios y descuentos
- Inventario
- Imágenes de producto
- Descripciones detalladas

## 🎨 Personalización

Puedes personalizar:
- Colores de la marca
- Tipografía y estilo
- Productos y precios
- Imágenes y logos
- Mensajes y textos

## 📱 Responsividad

Optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktops (1024px+)
- 🖥️ Ultra-wide (1920px+)

## ⚙️ Funciones JavaScript Principales

- `initializeCart()` - Inicializa el carrito
- `addProduct(id, name, price)` - Agrega un producto
- `removeProduct(id)` - Elimina un producto
- `updateUI()` - Actualiza la interfaz
- `saveToLocalStorage()` - Persiste los datos
- `loadFromLocalStorage()` - Recupera datos guardados

## 💾 Almacenamiento Local

El carrito se guarda en `localStorage` para persistencia:
```javascript
// Datos guardados localmente
{
  cart: [
    { id, name, price, quantity }
  ],
  total: 0,
  itemCount: 0
}
```

## 🔄 Mejoras Futuras

- [ ] Sistema de usuarios/login
- [ ] Base de datos de productos
- [ ] Integración con pasarelas de pago
- [ ] Sistema de cupones descuento
- [ ] Historial de compras
- [ ] Notificaciones en tiempo real
- [ ] Búsqueda y filtros avanzados
- [ ] Recomendaciones personalizadas
- [ ] Wishlist/favoritos
- [ ] Chat de soporte

## 🔐 Seguridad

Consideraciones actuales:
- Los datos se almacenan localmente
- No hay envío de información sensible
- Para producción, agregar:
  - Backend seguro
  - Encriptación de datos
  - Validación en servidor
  - Cumplimiento GDPR

## 👤 Autor

**Verologan** - Desarrolladora Web

## 📄 Licencia

Este proyecto está bajo licencia MIT.

## 🤝 Contribuciones

Para contribuir:
1. Haz fork del proyecto
2. Crea una rama (`git checkout -b feature/NuevaFuncionalidad`)
3. Commit tus cambios (`git commit -m 'Add NuevaFuncionalidad'`)
4. Push (`git push origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request

## 📞 Contacto

- 🐙 GitHub: [@verologan](https://github.com/verologan)
- 📧 Email: info@urbanbreak.com
- 🔗 LinkedIn: [tu-perfil]

## 🙏 Créditos

- Inspiración en plataformas e-commerce modernas
- Iconos: [fuente]
- Imágenes: [fuente]

---

**Hecho con ❤️ por Verologan**

*Última actualización: 2024*