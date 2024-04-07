// 8 Variables en orden
// Introversión  (Introvert)
// Extraversión  (Extravert)
// Sensación     (Sensing)
// Intuición     (iNtuitive)
// Pensamiento   (Thinking)
// Sentimiento   (Feeling)
// Juicio        (Juding)
// Percepción    (Percieving)

var resultadosVariables = [0, 0, 0, 0, 0, 0, 0, 0];

// Inicialización
var preguntaActual = 0;
window.onload = function()
{
    var cuestionario = document.getElementById('cuestionario');
    var resultados = document.getElementById('resultados');

    cuestionario.style.display = "block";
    resultados.style.display = "none";

    actualizarContenido(preguntaActual);
};

function responderPregunta(variables)
{
    // Suma variables
    for (var i = 0; i < variables.length; i++)
    {
        resultadosVariables[i] += parseInt(variables[i]);
    }

    preguntaActual ++;
    if (preguntaActual < preguntas.length)
    {
        actualizarContenido(preguntaActual);
    }
    else
    {
        mostrarResultado();
    }
};

function actualizarContenido(indice)
{
    var txtNúmero = document.getElementById('txtNúmero');
    txtNúmero.innerHTML = '<p class="pregunta mt-1 ml-2">' + (indice + 1) + ' / 14</p>';

    var txtPregunta = document.getElementById('txtPregunta');
    txtPregunta.innerHTML = '<h2 class="pregunta mt-1 ml-2">' + preguntas[indice].pregunta + '</h2>';

    var imgPregunta = document.getElementById('imgPregunta');
    imgPregunta.src = preguntas[indice].imagen;

    var alternativasDivs = document.querySelectorAll('.alternativa');
    for (var i = 0; i < alternativasDivs.length; i++)
    {
        alternativasDivs[i].innerHTML = '<button type="button" class="btn-sm btn-outline-primary text-center" onclick="responderPregunta(' + JSON.stringify(preguntas[indice].variables[i]) + ')"><h4>' + preguntas[indice].alternativas[i] + '</h4></button>';
    }
};

function mostrarResultado()
{
    var cuestionario = document.getElementById('cuestionario');
    var resultados = document.getElementById('resultados');

    cuestionario.style.display = "none";
    resultados.style.display = "block";

    // Cálculo variables
    var textoPersonalidad = "";

    // Introversión  (Introvert)
    // Extraversión  (Extravert)
    if(resultadosVariables[0] > resultadosVariables[1])
    {        
        textoPersonalidad += "I";
    }
    else
    {        
        textoPersonalidad += "E";
    }

    // Sensación     (Sensing)
    // Intuición     (iNtuitive)
    if(resultadosVariables[2] > resultadosVariables[3])
    {        
        textoPersonalidad += "S";
    }
    else
    {        
        textoPersonalidad += "N";
    }
    
    // Pensamiento   (Thinking)
    // Sentimiento   (Feeling)
    if(resultadosVariables[4] > resultadosVariables[5])
    {        
        textoPersonalidad += "T";
    }
    else
    {        
        textoPersonalidad += "F";
    }

    // Juicio        (Juding)
    // Percepción    (Percieving)
    if(resultadosVariables[6] > resultadosVariables[7])
    {        
        textoPersonalidad += "J";
    }
    else
    {        
        textoPersonalidad += "P";
    }

    // Encuentra por nombre
    var personalidad = 0;
    for (var i = 0; i < personalidades.length; i++)
    {
        if(textoPersonalidad == personalidades[i].nombre)
        {
            personalidad = i;
        }
    }
    


    var txtResultado = document.getElementById('txtResultado');
    txtResultado.innerHTML = '<h2 class="pregunta mt-1 ml-2">' + personalidades[personalidad].nombreGato + '</h2>';

    var txtDescripciónResultado = document.getElementById('txtDescripciónResultado');
    txtDescripciónResultado.innerHTML = '<h2 class="descripcion mt-1 ml-2">' + personalidades[personalidad].descripción + '</h2>';

    var imgResultado = document.getElementById('imgResultado');
    imgResultado.src = personalidades[personalidad].imagen;
};

// 14 preguntas con sus variables
var preguntas =
[
    {
        pregunta: "Acabas de despertar, todos duermen en casa. Tu primer pensamiento es:",
        imagen: "images/p1.gif",
        alternativas:
        [
            "Hoy viviré una nueva aventura.",
            "Un día igual que ayer, igual que mañana"
        ],
        variables:
        [
            [0, 0, 1, 0, 0, 0, 0, 0],   // SENSACIÓN
            [0, 0, 0, 1, 0, 0, 0, 1]    // INTUICION - PERCEPCIÓN
        ]
    },
    {
        pregunta: "Tu Karen(cio) aún duerme",
        imagen: "images/p2.gif",
        alternativas:       
        [
            "Le despertaré a lengüetazos ya hay que desayunar",
            "Mejor le dejaré dormir, puedo ir a tomar solcito por mientras"
        ],
        variables:
        [
            [0, 0, 0, 0, 0, 1, 0, 0],   // SENTIMIENTO
            [0, 0, 0, 0, 1, 0, 1, 0]    // PENSAMIENTO - JUICIO
        ]
    },
    {
        pregunta: "Estás en la cima de tu rascador y miras hacia el horizonte",
        imagen: "images/p3.gif",
        alternativas:
        [
            "Solo piensas en tomar solcito y descansar un poco",
            "Te imaginas yendo a las casas hasta donde llega tu mirada"
        ],
        variables:
        [
            [0, 0, 0, 0, 0, 1, 0, 1],   // SENTIMIENTO - PERCEPCIÓN
            [0, 0, 0, 0, 1, 0, 0, 0]    // PENSAMIENTO
        ]
    },
    {
        pregunta: "Te encontraste con tu michi amigo apenas bajas del rascador",
        imagen: "images/p4.gif",
        alternativas:
        [
            "Sueles comenzar la conversación",
            "Esperas que el michi hable primero"
        ],
        variables:
        [
            [0, 1, 0, 0, 0, 0, 0, 0],   // EXTRAVERSION
            [1, 0, 0, 0, 0, 0, 0, 0]    // INTROVERSIÓN
        ]
    },
    {
        pregunta: "Karen(cio) se levantó y tiene una caja entre las manos, es un nuevo rascador de piso",
        imagen: "images/p5.gif",
        alternativas:
        [
            "Lo observas detenidamente, ¿qué huele?,se ve algo extraño, ¿es amigo o enemigo?",
            "Te rascas las garritas como si no hubiera un mañana"
        ],
        variables:
        [
            [0, 0, 0, 0, 1, 0, 0, 1],   // PENSAMIENTO - PERCEPCIÓN
            [0, 0, 0, 0, 0, 1, 0, 0]    // SENTIMIENTO
        ]
    },
    {
        pregunta: "Las sorpresas no acaban, Karen(cio) te muestra dos juguetes nuevos, uno en cada mano",
        imagen: "images/p6.gif",
        alternativas:
        [
            "Miras ambos y eliges el que más te gusta",
            "No lo piensas, solo eliges el primero que viste"
        ],
        variables:
        [
            [0, 0, 1, 0, 0, 0, 1, 0],   // SENSACIÓN - JUICIO
            [0, 0, 0, 0, 0, 0, 0, 0]    // INTUICION
        ]
    },
    {
        pregunta: "Es tu momento de hacerte aseo",
        imagen: "images/p7.gif",
        alternativas:
        [
            "Lo haces a la hora y en el lugar de siempre",
            "Cualquier lugar y cualquier momento es bueno para ello"
        ],
        variables:
        [
            [0, 0, 0, 1, 0, 0, 0, 0],   // INTUICION
            [0, 0, 1, 0, 0, 0, 0, 0]    // SENSACIÓN
        ]
    },
    {
        pregunta: "Tu michi amigo está sobre un árbol y te invita a subir",
        imagen: "images/p8.gif",
        alternativas:
        [
            "Te motivas y vas con él sin dudarlo",
            "Demasiado agotador, prefieres ir a tu cama a descansar"
        ],
        variables:
        [
            [0, 0, 0, 0, 0, 0, 0, 0],   // EXTRAVERSIÓN
            [1, 0, 0, 0, 0, 0, 0, 1]    // INTROVERSIÓN - PERCEPCIÓN
        ]
    },
    {
        pregunta: "En el camino de vuelta a casa te encuentras con una pelota de color amarillo",
        imagen: "images/p9.gif",
        alternativas:
        [
            "Confías en tu experiencia, es inofensivo, puedo jugar con eso",
            "Confías en tu intuición, podría venir su dueño a reclamarlo y salir lastimado"
        ],
        variables:
        [
            [0, 0, 1, 0, 0, 0, 0, 1],   // SENSACIÓN - PERCEPCIÓN
            [0, 0, 0, 1, 0, 0, 1, 0]    // INTUICION - JUICIO
        ]
    },
    {
        pregunta: "Llegaron visitas a tu casa sin previo aviso",
        imagen: "images/p10.gif",
        alternativas:
        [
            "Te acercas a la gente a compartir y juguetear",
            "Simplemente te vas, quieres soledad y tranquilidad"
        ],
        variables:
        [
            [0, 1, 0, 0, 0, 0, 0, 0],   // EXTRAVERSION
            [1, 0, 0, 0, 0, 0, 0, 0]    // INTROVERSIÓN
        ]
    },
    {
        pregunta: "Las visitas tratas de acercarte a ti para mimarte",
        imagen: "images/p11.gif",
        alternativas:
        [
            "Permites que ellos se acerquen sin tener miedo",
            "Tienes puesto un pie en el acelerador, en cualquier momento sales corriendo"
        ],
        variables:
        [
            [0, 1, 0, 0, 0, 0, 0, 0],   // EXTRAVERSION
            [1, 0, 0, 0, 0, 1, 0, 0]    // INTROVERSIÓN - SENTIMIENTO
        ]
    },
    {
        pregunta: "Ya se fueron las visitas y es momento del paseo con tu Karen(cio)",
        imagen: "images/p12.gif",
        alternativas:
        [
            "Prefieres los mismos lugares y hacer lo mismo",
            "Te gustaría que fueran a un lugar nuevo, nuevas emociones y sensaciones"
        ],
        variables:
        [
            [0, 0, 0, 1, 0, 0, 0, 0],   // INTUICION
            [0, 0, 1, 0, 0, 0, 0, 0]    // SENSACIÓN 
        ]
    },
    {
        pregunta: "El paseo se acabó y es momento de volver",
        imagen: "images/p13.gif",
        alternativas:
        [
            "Ya es momento de volver, es parte del plan",
            "Haces tiempo, el clima está agradable, no quieres volver aun"
        ],
        variables:
        [
            [0, 0, 0, 0, 1, 0, 1, 0],   // PENSAMIENTO - JUICIO
            [0, 0, 0, 0, 0, 1, 0, 0]    // SENTIMIENTO
        ]
    },
    {
        pregunta: "Es hora de dormir, tu Karen(cio) está en su cama, agotada(o) por el día de trabajo",
        imagen: "images/p14.gif",
        alternativas:
        [
            "Le das su espacio, que ocupe toda la cama si quiere",
            "Necesita un poquito de amor, te acuestas en su regazo"
        ],
        variables:
        [
            [0, 0, 0, 0, 1, 0, 0, 0],   // PENSAMIENTO
            [0, 0, 0, 0, 0, 1, 0, 1]    // SENTIMIENTO - PERCEPCIÓN
        ]
    }
];

// 16 personalidades
var personalidades =
[
    {
        nombre: "ESTJ",
        nombreGato: "Gato Burmés",
        descripción: "El Gato Burmés es una combinación fascinante de cualidades que lo hacen un compañero felino activo, enérgico y social. Este gato exhibe rasgos que lo hacen curioso, comunicativo, pero también un tanto dominante en su búsqueda de atención. Es una combinación única de curiosidad, energía, comunicación constante, socialización activa y dominancia en su búsqueda de atención. Es un compañero felino activo y enérgico que trae vitalidad y alegría a cualquier hogar, aunque puede requerir un manejo cuidadoso para satisfacer sus necesidades de atención y estimulación.",
        imagen: "images/r1.png"
    },
    {
        nombre: "ISTJ",
        nombreGato: "Gato Balinés",
        descripción: "El Gato Balinés con personalidad es una mezcla fascinante de rasgos que lo hacen un compañero felino leal y confiable. Este gato exhibe cualidades que lo hacen inteligente, sociable pero selectivamente independiente y enfocado en su dueño principal. Es una combinación única de fidelidad, inteligencia, sociabilidad selectiva, necesidad de ser el centro de atención y dificultad para convivir con otros animales. Es un compañero felino leal y confiable que brinda amor y compañía a su dueño principal, pero puede requerir atención especial en entornos con múltiples mascotas.",
        imagen: "images/r2.png"
    },
    {
        nombre: "ENTJ",
        nombreGato: "Gato Siamés",
        descripción: "El Gato Siamés es una mezcla intrigante de características que lo hacen destacar en el reino felino. Exhibe cualidades que lo distinguen como un compañero felino líder y comunicativo. Es una combinación única de afectuosidad, comunicación hábil, confianza, determinación y liderazgo. Es un compañero felino carismático y seguro de sí mismo que deja una impresión duradera en aquellos que tienen el privilegio de compartir su vida con él.",
        imagen: "images/r3.png"
    },
    {
        nombre: "INTJ",
        nombreGato: "Gato Siberiano",
        descripción: "El Gato Siberiano se caracteriza por ser una combinación única de rasgos que hacen de él un compañero felino fascinante y peculiar. Es una mezcla intrigante de inteligencia, tranquilidad, selectividad social y juguetona seriedad. Es un compañero felino que ofrece una combinación única de cualidades que lo hacen fascinante para aquellos que aprecian su singularidad.",
        imagen: "images/r4.png"
    },
    {
        nombre: "ESFJ",
        nombreGato: "Gato Snowshoe",
        descripción: "El Gato Snowshoe es una mezcla encantadora de serenidad, sociabilidad y amabilidad que lo convierte en un compañero felino excepcionalmente agradable y adaptable. Este gato exhibe rasgos que lo hacen tranquilo, social y cariñoso. Es una combinación única de tranquilidad, sociabilidad, adaptabilidad, empatía y deseo de paz y armonía. Es un compañero felino amable, amoroso y compasivo que brinda alegría y calidez a cualquier hogar que tenga la suerte de compartir con él.",
        imagen: "images/r5.png"
    },
    {
        nombre: "ISFJ",
        nombreGato: "Gato Ruso Azul",
        descripción: "El Gato Ruso Azul es una combinación cautivadora de cualidades que lo convierten en un compañero felino amable, leal y afectuoso. Este gato exhibe rasgos que lo hacen inteligente, tímido pero cariñoso, y dedicado a sus dueños. Es una combinación única de inteligencia, timidez inicial, lealtad, necesidad de atención y sensibilidad. Es un compañero felino cariñoso y devoto que brinda amor y compañía incondicional a sus seres queridos, convirtiéndose en una parte invaluable de su hogar y familia.",
        imagen: "images/r6.png"
    },
    {
        nombre: "ENFJ",
        nombreGato: "Gato Cartujo",
        descripción: "El Gato Cartujo es una combinación excepcional de cualidades que lo convierten en un compañero felino verdaderamente especial. Este gato exhibe rasgos que lo hacen afectuoso, tranquilo y adaptativo. Es una combinación única de adaptabilidad, afectuosidad, tranquilidad, vínculo familiar fuerte, sociabilidad y empatía. Es un compañero felino excepcionalmente especial que brinda amor, calma y conexión emocional a aquellos que tienen el privilegio de compartir su vida con él.",
        imagen: "images/r7.png"
    },
    {
        nombre: "INFJ",
        nombreGato: "Gato Don Sphynx",
        descripción: "El Gato Don Sphynx es una combinación única de rasgos que lo distinguen como un compañero felino excepcionalmente especial. Este gato exhibe cualidades que lo hacen sereno, compasivo y afectuoso. Es una combinación única de tranquilidad, sociabilidad compasiva, afectuosidad demandante, empatía y sensibilidad. Es un compañero felino excepcionalmente especial que brinda amor, apoyo y conexión emocional a aquellos que tienen el privilegio de compartir su vida con él.",
        imagen: "images/r8.png"
    },
    {
        nombre: "ESTP",
        nombreGato: "Gato Bengalí",
        descripción: "El Gato Bengalí es una combinación fascinante de cualidades que lo hacen un compañero felino audaz, curioso y lleno de energía. Este gato exhibe rasgos que reflejan su naturaleza aventurera, independiente y activa. Es una combinación única de curiosidad, audacia, independencia, juego como actividad principal y adaptabilidad. Es un compañero felino emocionante y lleno de energía que brinda vitalidad y emoción a cualquier hogar que tenga el privilegio de compartir con él.",
        imagen: "images/r9.png"
    },
    {
        nombre: "ISTP",
        nombreGato: "Gato Bosque de Noruega",
        descripción: "El Gato Bosque de Noruega es una combinación única de rasgos que lo hacen un compañero felino intrépido, independiente y astuto. Este gato exhibe características que reflejan su naturaleza exploradora, adaptable y lógica. Es una combinación única de curiosidad, independencia, inteligencia, aventura, pragmatismo y lógica. Es un compañero felino fascinante que aporta vitalidad y exploración a cualquier hogar que tenga el privilegio de compartir con él.",
        imagen: "images/r10.png"
    },
    {
        nombre: "ENTP",
        nombreGato: "Gato Angora Turco",
        descripción: "El Gato Angora Turco es una fascinante combinación de cualidades que lo hacen destacar en el mundo felino. Exhibe rasgos que lo convierten en un compañero felino encantador y versátil. Es una combinación única de inteligencia, comunicación expresiva, juguetonería, tolerancia y adaptabilidad. Es un compañero felino encantador y versátil que aporta alegría y vitalidad a cualquier hogar en el que se encuentre",
        imagen: "images/r11.png"
    },
    {
        nombre: "INTP",
        nombreGato: "Gato Savannah",
        descripción: "El Gato Savannah es una fascinante combinación de rasgos que lo distinguen como un compañero felino único y cautivador. Es una combinación única de inteligencia, lealtad, curiosidad, independencia y adaptabilidad. Es un compañero felino excepcional que ofrece una experiencia gratificante para aquellos que valoran su singularidad y su capacidad para aprender y adaptarse",
        imagen: "images/r12.png"
    },
    {
        nombre: "ESFP",
        nombreGato: "Gato americano de pelo corto",
        descripción: "El Gato americano de pelo corto es una mezcla encantadora de cualidades que lo convierten en un compañero felino sociable, divertido y en busca de aventuras. Este gato exhibe rasgos que reflejan su naturaleza extrovertida, juguetona y enérgica. Es una combinación única de sociabilidad, diversión, aventura, sensibilidad emocional y necesidad de interacción y afecto. Es un compañero felino cariñoso y enérgico que brinda alegría y vitalidad a cualquier hogar que tenga el privilegio de compartir con él.",
        imagen: "images/r13.png"
    },
    {
        nombre: "ISFP",
        nombreGato: "Gato Bombay",
        descripción: "El Gato Bombay con personalidad es una mezcla encantadora de cualidades que lo hacen un compañero felino cariñoso, Este gato exhibe rasgos que reflejan su naturaleza emocional, aventurera y sensible. Es una combinación única de curiosidad, cariño, energía, aventura y necesidad de expresión creativa. Es un compañero felino encantador y emocionante que brinda alegría y vitalidad a cualquier hogar que tenga el privilegio de compartir con él.",
        imagen: "images/r14.png"
    },
    {
        nombre: "ENFP",
        nombreGato: "Gato Británico de Pelo Corto Azul",
        descripción: "El Gato Británico de Pelo Corto Azul es una combinación encantadora de cualidades que lo hacen un compañero felino verdaderamente especial. Este gato exhibe rasgos que lo hacen afectuoso, amigable e independiente. Es una combinación única de afectuosidad, amistad sin prejuicios, independencia equilibrada, curiosidad y aventura, energía y vitalidad. Es un compañero felino encantador y divertido que brinda alegría y calidez a aquellos que tienen el privilegio de compartir su vida con él.",
        imagen: "images/r15.png"
    },
    {
        nombre: "INFP",
        nombreGato: "Gato Abisinio",
        descripción: "El Gato Abisinio es una combinación intrigante de cualidades que lo hacen único en el mundo felino. Este gato exhibe rasgos que lo hacen ser sensible, independiente y adaptable. Es una combinación única de sensibilidad, actividad, independencia, posible agresividad y adaptabilidad. Es un compañero felino fascinante que ofrece una conexión emocional profunda y una energía contagiosa a aquellos que tienen el privilegio de compartir su vida con él.",
        imagen: "images/r16.png"
    }
];
