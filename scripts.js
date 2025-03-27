let locationRetrieved = false;

// Asegurar que todo el contenido esté oculto al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("multipage-section").classList.add("hidden");
    hideAllPages();
});

// Función para manejar el botón de geolocalización
document.getElementById("location-block").addEventListener("click", () => {
    const locationBlock = document.getElementById("location-block");

    if (!locationRetrieved) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const googleMapsURL = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=200x150&markers=color:red|${latitude},${longitude}&key=AIzaSyDoGMql48pFyB9VFETw0c_dxFaC5yXRyVQ`;

                    locationBlock.innerHTML = `<img src="${googleMapsURL}" alt="Ubicación en Google Maps">`;
                    locationRetrieved = true;
                },
                () => {
                    alert("No se pudo obtener la ubicación. Permiso denegado o error.");
                }
            );
        } else {
            alert("La geolocalización no es soportada por este navegador.");
        }
    }
    
            // Manejar clics en las pestañas para mostrar imágenes
        const tabs = document.querySelectorAll(".image-tab");
        const activeImage = document.getElementById("active-image");
        
        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const imageName = tab.dataset.img;
                const imagePath = `Elementos/${imageName}`; // Ruta relativa a la carpeta Elementos
                activeImage.src = imagePath;
                activeImage.style.display = "block"; // Mostrar imagen
            });
        });
    
    // Mostrar la sección multipage y contenido relacionado con geolocalización
    document.getElementById("multipage-section").classList.remove("hidden");
    document.getElementById("geo-tabs").classList.remove("hidden");
    document.getElementById("form-tabs").classList.add("hidden");
    document.getElementById("message-tabs").classList.add("hidden");
    document.getElementById("cloud-tabs").classList.add("hidden"); // Ocultar el cuarto botón
    hideAllPages();
    document.getElementById("geo-info").classList.remove("hidden");
});

// Función para manejar el botón de formularios
document.getElementById("form-block").addEventListener("click", () => {
    document.getElementById("multipage-section").classList.remove("hidden");
    document.getElementById("form-tabs").classList.remove("hidden");
    document.getElementById("geo-tabs").classList.add("hidden");
    document.getElementById("message-tabs").classList.add("hidden");
    document.getElementById("cloud-tabs").classList.add("hidden"); // Ocultar el cuarto botón
    hideAllPages();
    document.getElementById("form-info").classList.remove("hidden");

    const modal = document.getElementById("form-modal");
    modal.style.display = "flex";
});

// Función para manejar el botón de mensajes
document.getElementById("message-block").addEventListener("click", () => {
    document.getElementById("multipage-section").classList.remove("hidden");
    document.getElementById("message-tabs").classList.remove("hidden");
    document.getElementById("geo-tabs").classList.add("hidden");
    document.getElementById("form-tabs").classList.add("hidden");
    document.getElementById("cloud-tabs").classList.add("hidden"); // Ocultar el cuarto botón
    hideAllPages();
    document.getElementById("message-info").classList.remove("hidden");
});

// Función para manejar el botón de almacenamiento en la nube
document.getElementById("cloud-storage-block").addEventListener("click", () => {
    document.getElementById("multipage-section").classList.remove("hidden");
    document.getElementById("cloud-tabs").classList.remove("hidden");
    document.getElementById("geo-tabs").classList.add("hidden");
    document.getElementById("form-tabs").classList.add("hidden");
    document.getElementById("message-tabs").classList.add("hidden");
    hideAllPages();
    document.getElementById("cloud-info").classList.remove("hidden");
});

// Función para enviar correo electrónico desde el textbox
document.getElementById("send-email-button").addEventListener("click", () => {
    const message = document.getElementById("message-box").value;
    if (message.trim() === "") {
        alert("Por favor, escribe un mensaje antes de enviar.");
        return;
    }
    const mailtoLink = `mailto:jazmin.amador2898@gmail.com?subject=Contacto desde la página&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
});

// Función para cerrar el modal
document.getElementById("close-modal").addEventListener("click", () => {
    const modal = document.getElementById("form-modal");
    modal.style.display = "none";
});

// Función para ocultar todas las páginas del multipage
function hideAllPages() {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => page.classList.add("hidden"));
}

// Navegación en el multipage para geolocalización
document.getElementById("geo-info-btn").addEventListener("click", () => {
    hideAllPages();
    document.getElementById("geo-info").classList.remove("hidden");
});

document.getElementById("geo-usage-btn").addEventListener("click", () => {
    hideAllPages();
    document.getElementById("geo-usage").classList.remove("hidden");
});

// Mostrar información de formularios
document.getElementById("form-info-btn").addEventListener("click", () => {
    hideAllPages();
    document.getElementById("form-info").classList.remove("hidden");
});

// Mostrar información de almacenamiento en la nube
document.getElementById("cloud-info-btn").addEventListener("click", () => {
    hideAllPages();
    document.getElementById("cloud-info").classList.remove("hidden");
});
