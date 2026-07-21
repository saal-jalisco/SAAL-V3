// ============================================================
// SAAL - LÓGICA DE EVALUACIÓN
// Versión 3.0 - Mayo 2025
// ============================================================

let puntajesActuales = {
    fluidez: 0,
    precision: 0,
    atencionPalabras: 0,
    usoVoz: 0,
    seguridad: 0,
    comprension: 0
};

// ===== SELECCIÓN DE NIVEL =====
function seleccionarNivel(componente, nivel) {
    puntajesActuales[componente] = parseInt(nivel);
    document.querySelectorAll(`.btn-nivel[data-componente="${componente}"]`).forEach(btn => {
        btn.classList.remove('seleccionado');
        if (btn.getAttribute('data-nivel') == nivel) {
            btn.classList.add('seleccionado');
        }
    });
    calcularTotal();
}

// ===== CÁLCULO DEL PUNTAJE TOTAL =====
function calcularTotal() {
    let suma = 0;
    for (let comp in puntajesActuales) {
        suma += puntajesActuales[comp];
    }
    let nivel = "";
    let color = "";
    if (suma >= 15) {
        nivel = "Nivel esperado (Verde)";
        color = "🟢";
    } else if (suma >= 10) {
        nivel = "En desarrollo (Amarillo)";
        color = "🟡";
    } else {
        nivel = "Requiere apoyo (Rojo)";
        color = "🔴";
    }
    document.getElementById("puntaje-total").innerText = suma;
    document.getElementById("nivel-general").innerHTML = `${color} ${nivel}`;
    document.getElementById("resultado-box").style.display = "block";
}

// ===== VERIFICACIÓN DE COMPRENSIÓN =====
function verificarComprension(grado) {
    // Esta función se implementará según el grado
    // Por ahora, es un placeholder
    let aciertos = 0;
    let total = 1; // Temporal
    let nivelComprension = 2; // Temporal
    puntajesActuales.comprension = nivelComprension;
    calcularTotal();
    return nivelComprension;
}

// ===== GENERAR FICHA =====
function generarFicha(nombreAlumno, grado, nivelEducativo) {
    if (!nombreAlumno || nombreAlumno.trim() === "") {
        alert("Escribe el nombre del alumno primero.");
        return;
    }
    
    let fecha = new Date().toLocaleDateString('es-MX');
    let total = 0;
    for (let c in puntajesActuales) {
        total += puntajesActuales[c];
    }
    
    let nivelTexto = document.getElementById("nivel-general").innerText;
    
    let recomendaciones = "";
    if (puntajesActuales.fluidez <= 1) recomendaciones += "<li>🔴 Fluidez: " + recomendacionesPorComponente.fluidez + "</li>";
    if (puntajesActuales.precision <= 1) recomendaciones += "<li>🔴 Precisión: " + recomendacionesPorComponente.precision + "</li>";
    if (puntajesActuales.atencionPalabras <= 1) recomendaciones += "<li>🔴 Atención a palabras complejas: " + recomendacionesPorComponente.atencionPalabras + "</li>";
    if (puntajesActuales.usoVoz <= 1) recomendaciones += "<li>🔴 Uso de la voz: " + recomendacionesPorComponente.usoVoz + "</li>";
    if (puntajesActuales.seguridad <= 1) recomendaciones += "<li>🔴 Seguridad y disposición: " + recomendacionesPorComponente.seguridad + "</li>";
    if (puntajesActuales.comprension <= 1) recomendaciones += "<li>🔴 Comprensión lectora: " + recomendacionesPorComponente.comprension + "</li>";
    
    if (recomendaciones === "") recomendaciones = "<li>🟢 ¡Muy bien! Sigue practicando con lecturas diarias.</li>";
    
    let htmlFicha = `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; padding: 20px; border: 2px solid #e85f2f; border-radius: 20px;">
            <h2 style="color: #e85f2f;">📋 SAAL - Ficha diagnóstica de lectura</h2>
            <p><strong>Alumno(a):</strong> ${nombreAlumno}</p>
            <p><strong>Nivel:</strong> ${nivelEducativo} - ${grado}°</p>
            <p><strong>Fecha:</strong> ${fecha}</p>
            <hr>
            <h3>Resultado general:</h3>
            <p style="font-size: 1.5rem;">Puntaje total: ${total} / 18</p>
            <p>${nivelTexto}</p>
            <h3>Puntaje por componente:</h3>
            <ul>
                <li>Fluidez: ${puntajesActuales.fluidez}/3</li>
                <li>Precisión: ${puntajesActuales.precision}/3</li>
                <li>Atención a palabras complejas: ${puntajesActuales.atencionPalabras}/3</li>
                <li>Uso de la voz: ${puntajesActuales.usoVoz}/3</li>
                <li>Seguridad y disposición: ${puntajesActuales.seguridad}/3</li>
                <li>Comprensión: ${puntajesActuales.comprension}/3</li>
            </ul>
            <h3>Recomendaciones:</h3>
            <ul>${recomendaciones}</ul>
            <hr>
            <p style="font-size: 0.8rem;">SAAL: Sistema de Alerta y Acompañamiento LEO - Jalisco</p>
            <p style="font-size: 0.7rem;">Versión 3.0</p>
        </div>
    `;
    
    document.getElementById("ficha-contenido").innerHTML = htmlFicha;
    document.getElementById("ficha-area").style.display = "block";
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}