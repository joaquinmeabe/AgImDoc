// Inicializamos el contador del carrito
        let cartCount = 0;
        
        // Referencias a los elementos del DOM
        const cartIcon = document.getElementById('cartIcon');
        const cartModal = document.getElementById('cartModal');
        const cartCountElement = document.getElementById('cartCount');
        const closeModal = document.getElementById('closeModal');
        
        // Galería
        const galleryImg = document.getElementById('galleryImg');
        const galleryText = document.getElementById('galleryText');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        
        // Arreglo con las imágenes y descripciones
        const galleryItems = [
          {
            src: 'fotos/marcha-manifestacion-desaparion-ni+¦o-Loan Pe+¦a-3 meses-reclamo_4.jpg',
            text: 'Ayer por la noche, un grupo de personas marchó en la ciudad...'
          },
          {
            src: 'fotos/marcha_loan_2.jpg',
            text: 'En las últimas horas, la jueza Cristina Pozzer Penzo...'
          },
          {
            src: 'fotos/marcha-manifestacion-desaparion-ni+¦o-Loan Pe+¦a-3 meses-reclamo_5.jpg',
            text: 'A pesar de diversas hipótesis y la detención de siete personas...'
          }
        ];
        
        let currentIndex = 0;
        
        // Función para actualizar la imagen y texto en la galería
        function updateGallery(index) {
          galleryImg.src = galleryItems[index].src;
          galleryText.textContent = galleryItems[index].text;
        }
        
        // Evento para el icono del carrito
        cartIcon.addEventListener('click', () => {
          // Incrementamos el contador del carrito
          cartCount++;
          
          // Actualizamos el contenido del modal con el nuevo total
          cartCountElement.textContent = cartCount;
          
          // Mostramos el modal
          cartModal.style.display = 'block';
        });
        
        // Evento para cerrar el modal cuando se haga clic en la "x"
        closeModal.addEventListener('click', () => {
          cartModal.style.display = 'none';
        });
        
        // Opción para cerrar el modal si el usuario hace clic fuera del modal
        window.addEventListener('click', (event) => {
          if (event.target === cartModal) {
            cartModal.style.display = 'none';
          }
        });
        
        // Eventos de navegación en la galería
        nextBtn.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % galleryItems.length;
          updateGallery(currentIndex);
        });
        
        prevBtn.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
          updateGallery(currentIndex);
        });
        
        