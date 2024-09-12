import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

export const contactCardData = [
    {
        className : 'col-12 Mk-ContactCard',
        icon : faLocationDot,
        title : 'Address',
        desc : 'A108 Adam Street, New York, NY 535022'
    },
    {
        className : 'col-12 col-lg-6 mt-4 Mk-ContactCard',
        icon : faPhone,
        title : 'Call Us',
        desc : '+1 5589 55488 55'
    },
    {
        className : 'col-12 col-lg-6  mt-4 Mk-ContactCard ',
        icon : faEnvelope,
        title : 'Email Us',
        desc : 'info@example.com'
    },
]