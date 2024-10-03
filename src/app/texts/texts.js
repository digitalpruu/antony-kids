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
        description1: "Descripción que se aprobó: Antony Kids se especializa en la confección de chaquetas para niños, combinando funcionalidad y estilo en cada diseño. Desde su fundación, nuestro propósito ha sido ofrecer prendas que no solo protejan a los más pequeños, sino que también reflejen su personalidad y entusiasmo.\n" +
            "En Antony Kids, estamos dedicados a crear chaquetas con los mejores materiales y un diseño innovador. Nuestro equipo se enfoca en la calidad y el detalle, asegurando que cada chaqueta no solo sea resistente y cómoda, sino también atractiva y moderna.\n" +
            "Nos enorgullece presentar nuevos diseños infantiles que capturan la imaginación de los niños y la tranquilidad de los padres. Cada prenda está pensada para proporcionar comodidad y estilo, manteniendo a los niños abrigados y felices.\n" +
            "Si buscas chaquetas que combinen calidad, diseño y funcionalidad para tus pequeños, Antony Kids es tu mejor elección. Descubre nuestra colección y elige entre los más recientes y encantadores diseños para tus hijos. \n"
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
