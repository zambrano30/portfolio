 // Función para alternar el modo oscuro
     export  function toggleDarkMode(isChecked) {
        document.documentElement.classList.toggle("dark", isChecked);
        // Guardar la preferencia en localStorage
        localStorage.setItem('darkMode', isChecked);
        
        // Sincronizar todos los botones
        const desktopToggle = document.getElementById("dark-toggle");
        const mobileToggle = document.getElementById("dark-toggle-mobile");
        const menuToggle = document.getElementById("dark-toggle-menu");

        if (desktopToggle) desktopToggle.checked = isChecked;
        if (mobileToggle) mobileToggle.checked = isChecked;
        if (menuToggle) menuToggle.checked = isChecked;
      }

      // Configurar todos los botones
      const desktopToggle = document.getElementById("dark-toggle");
      const mobileToggle = document.getElementById("dark-toggle-mobile");
      const menuToggle = document.getElementById("dark-toggle-menu");

      // Cargar la preferencia guardada o detectar preferencia del sistema
      const savedDarkMode = localStorage.getItem('darkMode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDarkMode = savedDarkMode !== null ? savedDarkMode === 'true' : prefersDark;
      
      // Aplicar el modo inicial
      document.documentElement.classList.toggle("dark", isDarkMode);
      
      // Sincronizar el estado inicial
      if (desktopToggle) desktopToggle.checked = isDarkMode;
      if (mobileToggle) mobileToggle.checked = isDarkMode;
      if (menuToggle) menuToggle.checked = isDarkMode;

      // Eventos para todos los botones
      if (desktopToggle) {
        desktopToggle.addEventListener("change", function () {
          toggleDarkMode(this.checked);
        });
      }

      if (mobileToggle) {
        mobileToggle.addEventListener("change", function () {
          toggleDarkMode(this.checked);
        });
      }

      if (menuToggle) {
        menuToggle.addEventListener("change", function () {
          toggleDarkMode(this.checked);
        });
      }