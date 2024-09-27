const title = "Antony Kids";
const email = "antonykids719@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573208344384";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Antony Kids, nos especializamos en la confección de chaquetas para niños. Nuestros diseños infantiles están pensados para brindar comodidad y estilo a los más pequeños.",
        description2: "Cada prenda de Antony Kids combina calidad y creatividad, ofreciendo a los niños la oportunidad de lucir lo último en moda infantil. ¡Descubre nuestros nuevos diseños y vístete de alegría!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Antony Kids: nuevos diseños infantiles.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61566371840076&mibextid=ZbWKwL", // Facebook proporcionado
        instagram: "www.instagram.com", // Instagram no proporcionado
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
