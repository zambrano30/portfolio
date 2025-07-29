// Función para validar el formulario de contacto
export function initContactForm() {
    const form = document.querySelector('form');
    
    if (!form) return;
    
    // Agregar IDs a los campos del formulario para mejor manejo
    const nameInput = form.querySelector('input[placeholder="Luis Vargas"]');
    const companyInput = form.querySelector('input[placeholder="Microsoft"]');
    const emailInput = form.querySelector('input[placeholder="luisvargas@gmail.com"]');
    const submitButton = form.querySelector('button[type="submit"], button:last-child');
    
    if (nameInput) nameInput.id = 'fullName';
    if (companyInput) companyInput.id = 'company';
    if (emailInput) emailInput.id = 'email';
    if (submitButton) submitButton.type = 'submit';
    
    // Función para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Función para mostrar mensajes de error
    function showError(input, message) {
        // Remover mensaje de error anterior si existe
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Crear nuevo mensaje de error
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-500 text-sm mt-1 font-medium';
        errorDiv.textContent = message;
        
        // Agregar borde rojo al input
        input.classList.add('border-red-500', 'border-2');
        input.classList.remove('border-cyan-950');
        
        // Insertar el mensaje después del input
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }
    
    // Función para limpiar errores
    function clearError(input) {
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        input.classList.remove('border-red-500', 'border-2');
        input.classList.add('border-cyan-950');
    }
    
    // Función para mostrar mensaje de éxito
    function showSuccess(message) {
        // Crear mensaje de éxito
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mt-4 text-center font-medium';
        successDiv.innerHTML = `
            <div class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                ${message}
            </div>
        `;
        
        form.appendChild(successDiv);
        
        // Remover mensaje después de 5 segundos
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
    
    // Función para simular envío de email
    function sendEmail(formData) {
        return new Promise((resolve) => {
            // Simular delay de envío
            setTimeout(() => {
                console.log('📧 Email enviado con los siguientes datos:');
                console.log('Nombre:', formData.name);
                console.log('Empresa:', formData.company);
                console.log('Email:', formData.email);
                resolve(true);
            }, 1500);
        });
    }
    
    // Función principal de validación
    function validateForm(event) {
        event.preventDefault();
        
        let isValid = true;
        
        // Limpiar errores anteriores
        [nameInput, companyInput, emailInput].forEach(input => {
            if (input) clearError(input);
        });
        
        // Remover mensaje de éxito anterior
        const existingSuccess = form.querySelector('.success-message');
        if (existingSuccess) {
            existingSuccess.remove();
        }
        
        // Validar nombre
        if (!nameInput || nameInput.value.trim() === '') {
            if (nameInput) showError(nameInput, 'El nombre completo es requerido');
            isValid = false;
        } else if (nameInput.value.trim().length < 2) {
            showError(nameInput, 'El nombre debe tener al menos 2 caracteres');
            isValid = false;
        }
        
        // Validar empresa
        if (!companyInput || companyInput.value.trim() === '') {
            if (companyInput) showError(companyInput, 'El nombre de la empresa es requerido');
            isValid = false;
        }
        
        // Validar email
        if (!emailInput || emailInput.value.trim() === '') {
            if (emailInput) showError(emailInput, 'El email es requerido');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Por favor ingresa un email válido');
            isValid = false;
        }
        
        // Si la validación es exitosa, proceder con el envío
        if (isValid) {
            // Mostrar estado de carga
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            submitButton.classList.add('opacity-50', 'cursor-not-allowed');
            
            // Simular envío de email
            const formData = {
                name: nameInput.value.trim(),
                company: companyInput.value.trim(),
                email: emailInput.value.trim()
            };
            
            sendEmail(formData).then(() => {
                // Restaurar botón
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                submitButton.classList.remove('opacity-50', 'cursor-not-allowed');
                
                // Mostrar mensaje de éxito
                showSuccess('¡Mensaje enviado exitosamente! Te contactaré pronto.');
                
                // Limpiar formulario
                form.reset();
            });
        }
    }
    
    // Agregar validación en tiempo real
    [nameInput, companyInput, emailInput].forEach(input => {
        if (input) {
            input.addEventListener('blur', () => {
                if (input.value.trim() !== '') {
                    clearError(input);
                }
            });
            
            input.addEventListener('input', () => {
                if (input.classList.contains('border-red-500')) {
                    clearError(input);
                }
            });
        }
    });
    
    // Agregar event listener al formulario
    form.addEventListener('submit', validateForm);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initContactForm);
