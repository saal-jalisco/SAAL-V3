// ============================================================
// SAAL - DATOS DE EVALUACIÓN
// Versión 3.0 - Mayo 2025
// ============================================================

// ===== BANCO DE TEXTOS POR GRADO =====
// Cada texto tiene: titulo, palabras (conteo verificado), contenido y preguntas

const bancoTextos = {
    // ---- 1° PRIMARIA (rango: 90-101 palabras) ----
    primaria1: [
        {
            titulo: "La llegada de una hermanita",
            palabras: 90,
            contenido: `Los papás de Juan Pablo le dijeron que iba a tener una hermanita. Él no dijo nada.

Sus papás se preocuparon. Juan Pablo no quiso cenar, y se fue dormir.

Él estaba muy triste, lloró y lloró hasta que se quedó dormido.

A media noche, los papás escucharon que alguien lloraba. Fueron hasta la habitación de su hijo y observaron que lloraba dormido.

Sus papás lo despertaron y lo abrazaron fuerte. Él les contó porque no quería tener una hermanita les habló de sus temores.`,
            preguntas: [
                "¿De qué trata la lectura?",
                "Juan Pablo estaba triste porque:",
                "¿Qué hicieron los papás de Juan Pablo cuando lo observaron llorando?"
            ],
            opciones: [
                null,
                ["a) iba a tener una hermanita", "b) le robaron sus juguetes", "c) lo castigaron sus papás"],
                ["a) Lo dejaron solo y lo castigaron", "b) Le dieron de cenar y lo recostaron", "c) Lo despertaron y lo abrazaron fuerte"]
            ],
            correctas: [null, 0, 2]
        },
        {
            titulo: "Los delfines",
            palabras: 101,
            contenido: `En los mares y océanos viven muchísimas especies de animales y plantas. Entre ellos, unos de los más simpáticos y bonitos son los delfines.

Los delfines viven en el mar, pero no son peces, sino mamíferos.

Al nadar van sacando los lomos, con su aleta, siempre en grupos. Y cuando están contentos dan grandes saltos fuera del agua.

Cuando se sumergen bajo el agua aguantan la respiración, como hacemos los seres humanos.

Su hocico termina en punta y les sirve para defenderse de sus enemigos, incluso de los tiburones. Se impulsan con fuerza y golpean con su trompa a sus enemigos.`,
            preguntas: [
                "¿De qué trata la lectura?",
                "¿Qué hacen los delfines cuando están contentos?",
                "¿Para qué les sirve tener su hocico en punta?"
            ],
            opciones: [
                null,
                ["a) Nadan en el mar y los océanos", "b) Se sumergen bajo el agua", "c) Dan grandes saltos fuera del agua"],
                ["a) Para respirar abajo del agua", "b) Para defenderse de sus enemigos", "c) Para comer peces"]
            ],
            correctas: [null, 2, 1]
        },
        // AÑADIR MÁS TEXTOS DE 1° PRIMARIA AQUÍ...
        // (Los textos propuestos se agregarán después de la validación)
    ],

    // ---- 1° SECUNDARIA (rango: 555-585 palabras) ----
    secundaria1: [
        {
            titulo: "El origen del chocolate",
            palabras: 579,
            contenido: `El chocolate es uno de los alimentos más apreciados en todo el mundo. Su historia se remonta a las antiguas civilizaciones mesoamericanas, como los mayas y los aztecas, quienes lo consideraban un alimento divino. Ellos preparaban una bebida amarga y espumosa llamada "xocoatl", hecha a base de granos de cacao, agua y especias. Esta bebida era consumida por la nobleza y los guerreros, ya que se creía que otorgaba energía y sabiduría.

Con la llegada de los colonizadores españoles, el cacao cruzó el océano y llegó a Europa. Allí, los europeos le agregaron azúcar y leche, transformando la amarga bebida en el dulce chocolate que conocemos hoy. El chocolate se popularizó rápidamente en las cortes europeas y se convirtió en un símbolo de lujo y placer. Con el tiempo, su producción se industrializó y el chocolate se volvió accesible para todos.

El chocolate no solo conquistó paladares, sino que también se convirtió en un producto de gran valor comercial. Durante los siglos XVII y XVIII, el consumo de chocolate se extendió por toda Europa, y cada país desarrolló sus propias formas de prepararlo. En Francia, se volvió una bebida de la alta sociedad; en Inglaterra, se abrieron las primeras chocolaterías, donde la gente se reunía para disfrutarlo. Este auge llevó a la creación de las primeras fábricas de chocolate a gran escala, lo que permitió que el producto llegara a más personas y se convirtiera en un alimento cotidiano.

Actualmente, el chocolate es un producto global. Cada país tiene sus propias tradiciones chocolateras: desde el chocolate caliente en España, hasta los bombones en Suiza y Bélgica. Además, el chocolate no solo es un alimento, sino también una parte importante de la cultura y la historia de la humanidad. Se utiliza en celebraciones, como regalo y como ingrediente en innumerables recetas. Su sabor y textura lo convierten en un favorito de personas de todas las edades.

El proceso de elaboración del chocolate es complejo. Comienza con la recolección de los granos de cacao, que se fermentan, se secan y se tuestan. Luego se muelen para obtener una pasta de cacao, que se mezcla con otros ingredientes como azúcar, leche y manteca de cacao. Esta mezcla se refina y se concha durante horas para obtener la textura suave y brillante que caracteriza al chocolate de calidad. Finalmente, se moldea y se enfría antes de ser empaquetado.

El chocolate también tiene beneficios para la salud. El cacao es rico en antioxidantes, que ayudan a proteger las células del cuerpo. Además, contiene compuestos que pueden mejorar el estado de ánimo y la concentración. Sin embargo, es importante consumirlo con moderación, ya que muchos productos comerciales contienen altas cantidades de azúcar y grasas.

La producción de chocolate también tiene un impacto social y ambiental. El cultivo del cacao es una fuente de ingresos para millones de familias en países tropicales. Pero la industria ha enfrentado desafíos como el trabajo infantil y la deforestación. Por eso, cada vez más empresas y consumidores buscan opciones de comercio justo y sostenible. Existen certificaciones que garantizan que el chocolate ha sido producido de manera ética, respetando los derechos de los trabajadores y el medio ambiente.

El chocolate es mucho más que un dulce. Es el resultado de una historia milenaria, de la creatividad humana y del trabajo de muchas personas en diferentes partes del mundo. Al saborear un trozo de chocolate, estamos conectando con esa larga tradición que comenzó hace miles de años en las selvas de Mesoamérica.`,
            preguntas: [
                "¿De qué trata el texto?",
                "¿Qué civilización consumía el cacao como bebida sagrada?",
                "¿Cómo llegó el chocolate a Europa?",
                "¿Qué beneficios tiene el chocolate para la salud?",
                "¿Qué desafíos enfrenta la producción de chocolate?"
            ],
            opciones: [null, null, null, null, null],
            correctas: [null, null, null, null, null]
        },
        {
            titulo: "El ecoturismo",
            palabras: 585,
            contenido: `El ecoturismo es una modalidad de viaje que ha ganado popularidad en las últimas décadas. Su objetivo principal es promover la conservación del medio ambiente y el bienestar de las comunidades locales. Los viajeros que practican el ecoturismo visitan áreas naturales, como selvas, montañas o arrecifes, con el fin de aprender sobre la biodiversidad y apoyar su protección.

A diferencia del turismo convencional, el ecoturismo busca minimizar el impacto negativo en los ecosistemas. Por ejemplo, se fomenta el uso de transporte ecológico, el consumo de productos locales y el respeto por las culturas indígenas. Además, esta actividad contribuye a la economía de las comunidades rurales, generando empleos y oportunidades de desarrollo sostenible. Este enfoque permite que los visitantes se conviertan en agentes de cambio, promoviendo prácticas responsables que benefician tanto al entorno como a las personas que lo habitan.

En países como Costa Rica, el ecoturismo es una de las principales fuentes de ingresos. Sus bosques tropicales, playas y reservas naturales atraen a viajeros de todo el mundo. Los visitantes pueden observar aves, reptiles y mamíferos en su hábitat natural, mientras aprenden sobre la importancia de proteger estos ecosistemas. El ecoturismo también ha impulsado la creación de áreas protegidas y parques nacionales, que salvaguardan la biodiversidad para las futuras generaciones. México, por su parte, cuenta con destinos como la Selva Lacandona, las reservas de la mariposa monarca y los arrecifes del Caribe, que ofrecen experiencias únicas de ecoturismo.

El ecoturismo no solo beneficia al medio ambiente, sino también a los viajeros. Les ofrece una experiencia auténtica y educativa, alejada del turismo masivo. Los viajeros pueden participar en actividades como senderismo, avistamiento de aves, snorkel y visitas a comunidades locales. Además, el contacto con la naturaleza tiene efectos positivos en la salud mental y el bienestar emocional. Estudios han demostrado que pasar tiempo en entornos naturales reduce el estrés y mejora el estado de ánimo, lo que convierte al ecoturismo en una opción saludable para el cuerpo y la mente.

Sin embargo, el ecoturismo también enfrenta desafíos. El crecimiento descontrolado de esta actividad puede llevar a la degradación de los ecosistemas si no se maneja adecuadamente. Por eso, es fundamental que los gobiernos y las empresas turísticas trabajen juntos para establecer regulaciones claras y prácticas sostenibles. También es importante que los viajeros sean responsables y respeten las normas de los lugares que visitan, como no dejar basura, no molestar a la fauna y seguir los senderos marcados. La educación ambiental es clave para garantizar que el ecoturismo sea una herramienta de conservación y no de destrucción.

El ecoturismo es una herramienta poderosa para la educación ambiental. Al vivir experiencias directas en la naturaleza, los viajeros desarrollan una mayor conciencia sobre los problemas ambientales y la necesidad de actuar. Muchos regresan a sus hogares con un nuevo compromiso con el cuidado del planeta. Esta transformación personal es uno de los mayores logros del ecoturismo, ya que crea una red global de personas comprometidas con la protección del medio ambiente.

En conclusión, el ecoturismo representa una forma de viajar que combina el placer de conocer nuevos lugares con la responsabilidad de cuidar el mundo que compartimos. Es una oportunidad para que las comunidades locales se beneficien del turismo sin perder su identidad cultural ni dañar su entorno. Cada vez son más las personas que eligen esta forma de viajar, contribuyendo a un futuro más sostenible para todos. Con una planificación adecuada y un enfoque en la sostenibilidad, el ecoturismo puede ser una fuerza positiva para el cambio global.`,
            preguntas: [
                "¿Qué es el ecoturismo?",
                "¿Cuál es la diferencia entre el ecoturismo y el turismo convencional?",
                "¿Qué país es mencionado como ejemplo de ecoturismo?",
                "¿Cuáles son los beneficios del ecoturismo para las comunidades locales?",
                "¿Qué desafíos enfrenta el ecoturismo?"
            ],
            opciones: [null, null, null, null, null],
            correctas: [null, null, null, null, null]
        },
        // AÑADIR MÁS TEXTOS DE 1° SECUNDARIA AQUÍ...
        // ("La historia de los números" y "El viaje de los vikingos" se agregarán después)
    ]
};

// ===== DESCRIPCIONES DE LA RÚBRICA POR COMPONENTE =====
const descripcionesRubrica = {
    fluidez: {
        3: "Lee palabras y frases completas. Respeta los signos de puntuación.",
        2: "Lee agrupando dos o tres palabras. Respeta sólo algunos signos de puntuación.",
        1: "Reconoce sólo algunas letras o sílabas. Presenta errores y pausas que hacen poco entendible la lectura."
    },
    precision: {
        3: "Lee correctamente las palabras. Comete sólo 2 o 3% de errores.",
        2: "Presenta entre 4 y 6% de errores.",
        1: "Tiene más de 7% de errores. Invierte sílabas o palabras."
    },
    atencionPalabras: {
        3: "Lee pausadamente las palabras desconocidas o complejas a fin de no equivocarse.",
        2: "Se detiene en algunas palabras complejas. Corrige algunas de ellas.",
        1: "Se equivoca, no corrige y continúa leyendo."
    },
    usoVoz: {
        3: "Da la entonación y volumen apropiados al leer. Buena dicción.",
        2: "Apropiado solo en partes. Algunos errores de dicción.",
        1: "Monótono, inaudible o mala dicción."
    },
    seguridad: {
        3: "Disposición y seguridad. Disfruta la lectura.",
        2: "Tensión pero no interfiere. Maneja el texto.",
        1: "Inseguridad que interfiere. Apatía o desinterés."
    }
};

// ===== RECOMENDACIONES POR COMPONENTE =====
const recomendacionesPorComponente = {
    fluidez: "Practicar lectura en voz alta con frases cortas.",
    precision: "Realizar ejercicios de repetición de palabras.",
    atencionPalabras: "Enseñar estrategias de autocorrección.",
    usoVoz: "Modelar entonación y volumen.",
    seguridad: "Fomentar un ambiente relajado.",
    comprension: "Hacer preguntas simples después de leer."
};