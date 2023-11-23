
const link = document.querySelectorAll('a');

const langEl = document.querySelector('.langWrap');
const home  = document.querySelector('.home');
const live = document.querySelector('.live');
const work = document.querySelector('.work');
const relax = document.querySelector('.relax');
const contact = document.querySelector('.contact');
const proyects = document.querySelector('.proyects');
const whatIs = document.querySelector('.whatIs');
const arqDesc = document.querySelector('.arqDesc');
const selectGallery = document.querySelector('.selectGallery');
const contLive = document.querySelector('.contLive');
const contWork = document.querySelector('.contWork');
const contRelax = document.querySelector('.contRelax');
const actionReady = document.querySelector('.actionReady');
const designTo = document.querySelector('.designTo');
const arqText = document.querySelector('.arqText');
const sustainable = document.querySelector('.sustainable');
const goGreen = document.querySelector('.goGreen');
const watchVid = document.querySelector('.watchVid');
const survey = document.querySelector('.survey');
const subscribe = document.querySelector('.subscribe');
const email1 = document.querySelector('.email1');
const subscribe2 = document.querySelector('.subscribe2');
const closeVid = document.querySelector('.closeVid');
const arqText2 = document.querySelector('.arqText2');
const backTo = document.querySelector('.backTo');
const opinion1 = document.querySelector('.opinion1');
const opinion2 = document.querySelector('.opinion2');
const opinion3 = document.querySelector('.opinion3');
const opinion4 = document.querySelector('.opinion4');
const expertise = document.querySelector('.expertise');
const finishedProy = document.querySelector('.finishedProy');
const satisfaction = document.querySelector('.satisfaction');
const ourTeam = document.querySelector('.ourTeam');
const rights = document.querySelector('.rights');
const journey = document.querySelector('.journey');

link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        home.textContent = changeLanguage[attr].home;       
        live.textContent = changeLanguage[attr].live;
        work.textContent = changeLanguage[attr].work;
        relax.textContent = changeLanguage[attr].relax;
        contact.textContent = changeLanguage[attr].contact;
        proyects.textContent = changeLanguage[attr].proyects;
        whatIs.textContent = changeLanguage[attr].whatIs;
        arqDesc.textContent = changeLanguage[attr].arqDesc;
        selectGallery.textContent = changeLanguage[attr].selectGallery;
        contLive.textContent = changeLanguage[attr].contLive;
        contWork.textContent = changeLanguage[attr].contWork;
        contRelax.textContent = changeLanguage[attr].contRelax;
        actionReady.textContent = changeLanguage[attr].actionReady;
        designTo.textContent = changeLanguage[attr].designTo;
        arqText.textContent = changeLanguage[attr].arqText;
        sustainable.textContent = changeLanguage[attr].sustainable;
        goGreen.textContent = changeLanguage[attr].goGreen;
        watchVid.textContent = changeLanguage[attr].watchVid;
        survey.textContent = changeLanguage[attr].survey;
        subscribe.textContent = changeLanguage[attr].subscribe;
        email1.placeholder = changeLanguage[attr].email1;
        subscribe2.value = changeLanguage[attr].subscribe2;
        closeVid.textContent = changeLanguage[attr].closeVid;
        arqText2.textContent = changeLanguage[attr].arqText2;
        backTo.textContent = changeLanguage[attr].backTo;
        opinion1.textContent = changeLanguage[attr].opinion1;
        opinion2.textContent = changeLanguage[attr].opinion2;
        opinion3.textContent = changeLanguage[attr].opinion3;
        opinion4.textContent = changeLanguage[attr].opinion4;
        expertise.textContent = changeLanguage[attr].expertise;
        finishedProy.textContent = changeLanguage[attr].finishedProy;
        satisfaction.textContent = changeLanguage[attr].satisfaction;
        ourTeam.textContent = changeLanguage[attr].ourTeam;
        satisfaction.textContent = changeLanguage[attr].satisfaction;
        rights.textContent = changeLanguage[attr].rights;
        journey.textContent = changeLanguage[attr].journey;
        
    });
});

let changeLanguage = {

    "espanish":
    {   "home": "Inicio",
        "live": "Vivir",
        "work": "Trabajar",
        "relax": "Relax",
        "contact": "Contacto",
        "proyects": "Proyectos",
        "whatIs": "¿Qué es ARQUITECTURA?",
        "arqDesc": "Arquitectura crea unidades prefabricadas móviles, completamente terminadas. ¡Ya sea junto a un lago, en lo profundo de un bosque, en el borde de un campo, en una empinada colina de montaña o en la azotea de tu ciudad! Haz tu sueño realidad, instalado en un día, limitando al mínimo el trabajo en el lugar.",
        "selectGallery": "Selecciona una opción para una vista rápida de nuestros Containers",
        "contLive": "ARQUITECTURA para Viviendas",
        "contWork": "ARQUITECTURA para Oficinas",
        "contRelax": "ARQUITECTURA para Descanso",
        "actionReady": "Listo para tomar acción?",
        "designTo": "Diseñado para relajar e inspirar",
        "arqText": "ARQUITECTURA muestra la belleza de la luz natural y te permite reconectar con la naturaleza. El diseño moderno y las ventanas grandes y de una sola pieza integran perfectamente el entorno natural en tu contenedor. Esto conduce a la inspiración o te permite tomar tiempo para relajarte.",
        "sustainable": "Sostenible",
        "goGreen": "Reducimos continuamente la huella de carbono de nuestras unidades y más. Los refugios se pueden construir utilizando fuentes reutilizables, como energía solar y agua de lluvia. Los refugios se colocan entornillos de tierra que no afectan la naturaleza.",
        "watchVid": "Ver video",
        "survey": "Ya sigues nuestra encuesta?",
        "subscribe": "Suscríbete para recibir actualizaciones, acceso a ofertas exclusivas, un descuento de bienvenida y más.",
        "email1": "Ingresa tu correo",
        "subscribe2": "Suscribirse",
        "closeVid": "Cerrar | ✕",
        "arqText2": "ARQUITECTURA nació como un medio de refugio, con un aprecio por la arquitectura de baja tecnología. Al principio, era precisamente eso: un refugio, un capullo alejado de la vida cotidiana acelerada, un lugar tranquilo para reconectar y apreciar la naturaleza, un hogar donde puedes encontrarte a ti mismo   El primer refugio fue autosuficiente sin ningún impacto. Recogía y filtraba el agua de lluvia, la convertíaen agua potable y utilizaba paneles solares y baterías para almacenar la energía generada. Después de eso, llegamos a comprender que nuestras creaciones deberían centrarse más en nuestros ritmos biológicos.",
        "backTo": "Volver",
        "opinion1": "Opté por un diseño vanguardista utilizando contenedores. ¡El resultado superó mis expectativas!",
        "opinion2": "Decidí construir mi casa sostenible y ecológica utilizando contenedores reciclados, y el resultado ha sido excepcional.",
        "opinion3": "Elegimos la opción de convertir contenedores en una oficina sostenible. Estoy impresionado por la versatilidad y diseño de mi nueva oficina.",
        "opinion4": "Opté por la construcción con contenedores, y ha sido un gran éxito. Mis clientes adoran la apariencia y la eficiencia energética del lugar.",
        "expertise": "Años de Experiencia",
        "finishedProy": "Proyectos Realizados",
        "satisfaction": "Clientes Satisfechos",
        "ourTeam": "Nuestro equipo",
        "rights": "Derechos reservados 2023",
        "journey": "Nuestro Trayecto",
    },

  //"english"
    "english":
    {   
        "home" : "Home",
        "live": "Live",
        "work": "Work",
        "relax": "Relax",
        "contact": "Contact",
        "proyects": "Projects",
        "whatIs": "What is ARCHITECTURE?",
        "arqDesc": "ARCHITECTURE creates fully finished, mobile prefabricated units. Whether it's by a lake, deep in a forest, at the edge of a field, on a steep mountain hill, or on your city rooftop! Make your dream come true, installed in a day, minimizing on-site work.",
        "selectGallery": "Select an option for a quick view of our Containers",
        "contLive": "ARCHITECTURE for Living",
        "contWork": "ARCHITECTURE for Offices",
        "contRelax": "ARCHITECTURE for Relaxation",
        "actionReady": "Ready to take action?",
        "designTo": "Designed to relax and inspire",
        "arqText": "ARCHITECTURE showcases the beauty of natural light and lets you reconnect with nature. Modern design and large, seamless windows seamlessly integrate the natural surroundings into your container. This leads to inspiration or allows you to take time to relax.",
        "sustainable": "Sustainable",
        "goGreen": "We continuously reduce the carbon footprint of our units and more. Shelters can be built using reusable sources like solar energy and rainwater. Shelters are placed on earth screws that do not harm nature.",
        "watchVid": "Watch video",
        "survey": "Are you following our survey?",
        "subscribe": "Subscribe to receive updates, access to exclusive deals, a welcoming discount and more.", 
        "email1": "Enter your mail",
        "subscribe2": "Subscribe",
        "closeVid": "Close | ✕",
        "arqText2": "ARCHITECTURE was born as a means of shelter, with an appreciation for low-tech architecture. At first, it was precisely that: a refuge, a cocoon away from the fast-paced everyday life, a quiet place to reconnect and appreciate nature, a home where you can find yourself. The first refuge was self-sufficient without any impact. It collected and filtered rainwater, converted it into drinking water, and used solar panels and batteries to store generated energy. After that, we came to understand that our creations should focus more on our biological rhythms.",
        "backTo": "Back",
        "opinion1": "I opted for a cutting-edge design using containers. The result exceeded my expectations!",
        "opinion2": "I decided to build my sustainable and eco-friendly home using recycled containers, and the result has been exceptional.",
        "opinion3": "We chose the option to convert containers into a sustainable office. I am impressed by the versatility and design of my new office.",
        "opinion4": "I chose container construction, and it has been a great success. My clients love the look and energy efficiency of the place.",
        "expertise": "Years of Experience",
        "finishedProy": "Completed Projects",
        "satisfaction":"Satisfied Customers",
        "ourTeam": "Our Team",
        "rights": "All Rights Reserved 2023",
        "journey": "Our Journey",
    }
}