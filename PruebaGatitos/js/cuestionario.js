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
    txtResultado.innerHTML = '<h2 class="pregunta mt-1 ml-2">' + personalidades[personalidad].nombre + '</h2>';

    var txtDescripciónResultado = document.getElementById('txtDescripciónResultado');
    txtDescripciónResultado.innerHTML = '<h2 class="pregunta mt-1 ml-2">' + personalidades[personalidad].descripción + '</h2>';

    var imgResultado = document.getElementById('imgResultado');
    imgResultado.src = personalidades[personalidad].imagen;
};

// 14 preguntas con sus variables
var preguntas =
[
    {
        pregunta: "Acabas de despertar, todos duermen en casa. Tu primer pensamiento es:",
        imagen: "images/p1.png",
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
        imagen: "images/p1.png",
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
        imagen: "images/p1.png",
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
        imagen: "images/p1.png",
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
        imagen: "images/p1.png",
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
        imagen: "images/p1.png",
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
        imagen: "images/p1.png",
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
        imagen: "images/p1.png",
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
        imagen: "images/p1.png",
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
        imagen: "images/p1.png",
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
        imagen: "images/p1.png",
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
        imagen: "images/p1.png",
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
        imagen: "images/p1.png",
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
        imagen: "images/p1.png",
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
        descripción: "r1",
        imagen: "images/r1.png"
    },
    {
        nombre: "ISTJ",
        descripción: "r2",
        imagen: "images/r2.png"
    },
    {
        nombre: "ENTJ",
        descripción: "r3",
        imagen: "images/r3.png"
    },
    {
        nombre: "INTJ",
        descripción: "r4",
        imagen: "images/r4.png"
    },
    {
        nombre: "ESFJ",
        descripción: "r5",
        imagen: "images/r5.png"
    },
    {
        nombre: "ISFJ",
        descripción: "r6",
        imagen: "images/r6.png"
    },
    {
        nombre: "ENFJ",
        descripción: "r7",
        imagen: "images/r7.png"
    },
    {
        nombre: "INFJ",
        descripción: "r8",
        imagen: "images/r8.png"
    },
    {
        nombre: "ESTP",
        descripción: "r9",
        imagen: "images/r9.png"
    },
    {
        nombre: "ISTP",
        descripción: "r10",
        imagen: "images/r10.png"
    },
    {
        nombre: "ENTP",
        descripción: "r11",
        imagen: "images/r11.png"
    },
    {
        nombre: "INTP",
        descripción: "r12",
        imagen: "images/r12.png"
    },
    {
        nombre: "ESFP",
        descripción: "r13",
        imagen: "images/r13.png"
    },
    {
        nombre: "ISFP",
        descripción: "r14",
        imagen: "images/r14.png"
    },
    {
        nombre: "ENFP",
        descripción: "r15",
        imagen: "images/r15.png"
    },
    {
        nombre: "INFP",
        descripción: "r16",
        imagen: "images/r16.png"
    }
];
