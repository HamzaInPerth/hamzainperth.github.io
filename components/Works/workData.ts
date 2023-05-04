import vuejs from '../../assets/_img/tech_logo/vuejs.png'
import laravel from '../../assets/_img/tech_logo/laravel.svg'
import bootstrap from '../../assets/_img/tech_logo/bootstrap.png'
import jquery from '../../assets/_img/tech_logo/jquery.jpeg'
import mysql from '../../assets/_img/tech_logo/mysql.svg'
import nodejs from '../../assets/_img/tech_logo/nodejs.svg'
import nuxtjs from '../../assets/_img/tech_logo/nuxtjs.svg'
import php from '../../assets/_img/tech_logo/php.svg'
import strapi from '../../assets/_img/tech_logo/strapi.png'
import tailwind from '../../assets/_img/tech_logo/tailwind.svg'
import typescript from '../../assets/_img/tech_logo/typescript.png'
import docker from '../../assets/_img/tech_logo/docker.webp'

import biotopia from '../../assets/_img/works/biotopia.svg'
import vytree from '../../assets/_img/works/vytree.png'
import dmlog from '../../assets/_img/works/dmlog.png'
import panel from '../../assets/_img/works/panel.svg'
import uncompagnon from '../../assets/_img/works/uncompagnon.png'

import noLogo from '../../assets/_img/no-image.jpeg'

const Works = () => {
    return [
        {
            "name": "biotopia",
            "cover": "url",
            "logo": biotopia,
            "link": "https://www.biotopia.bio/",
            "description": "Biotopia responds to the growth challenges of players in the organic sector.",
            "details": [
                {
                    "picture": nuxtjs,
                    "alt": "nuxtjs",
                    "link": "https://nuxtjs.org"
                },
                {
                    "picture": tailwind,
                    "alt": "tailwind",
                    "link": "https://tailwindcss.com"
                }
            ]
        },
        {
            "name": "vytree",
            "cover": "url",
            "logo": vytree,
            "link": "https://www.vytree.com/",
            "description": "A living space of more than 2,000m² dedicated to creation and innovation.",
            "details": [
                {
                    "picture": nodejs,
                    "alt": "nodejs",
                    "link": "https://nodejs.org"
                },
                {
                    "picture": strapi,
                    "alt": "strapi",
                    "link": "https://strapi.io"
                },
                {
                    "picture": nuxtjs,
                    "alt": "nuxtjs",
                    "link": "https://nuxtjs.org"
                },
                {
                    "picture": tailwind,
                    "alt": "tailwind",
                    "link": "https://tailwindcss.com"
                }
            ]
        },
        {
            "name": "Dmlog",
            "cover": "url",
            "logo": dmlog,
            "link": "http://dmlog-app.tmmz3250.odns.fr/",
            "description": "Issue reporting tools for hotels, assign tasks, and keep teams sync.",
            "details": [
                {
                    "picture": docker,
                    "alt": "docker",
                    "link": "https://www.docker.com/"
                },
                {
                    "picture": laravel,
                    "alt": "laravel",
                    "link": "https://laravel.com"
                },
                {
                    "picture": mysql,
                    "alt": "mysql",
                    "link": "https://www.mysql.com/"
                },
                {
                    "picture": vuejs,
                    "alt": "vuejs",
                    "link": "https://vuejs.org"
                },
                {
                    "picture": bootstrap,
                    "alt": "bootstrap",
                    "link": "https://getbootstrap.com"
                }
            ]
        },
        {
            "name": "panel",
            "cover": "url",
            "logo": panel,
            "link": "https://www.panel.bio/",
            "description": "Measure the performance of your organic products within their categories.",
            "details": [
                {
                    "picture": php,
                    "alt": "php",
                    "link": "https://www.php.net"
                },
                {
                    "picture": typescript,
                    "alt": "typescript",
                    "link": "https://www.typescriptlang.org"
                },
                {
                    "picture": tailwind,
                    "alt": "tailwind",
                    "link": "https://tailwindcss.com"
                }
            ]
        },
        {
            "name": "Etude-Panel",
            "cover": "url",
            "logo": noLogo,
            "link": "https://etude.panel.bio/",
            "description": "Analyze the performance of organic products categories.",
            "details": [
                {
                    "picture": laravel,
                    "alt": "laravel",
                    "link": "https://lumen.laravel.com/"
                },
                {
                    "picture": vuejs,
                    "alt": "vuejs",
                    "link": "https://vuejs.org"
                },
                {
                    "picture": typescript,
                    "alt": "typescript",
                    "link": "https://www.typescriptlang.org"
                },
                {
                    "picture": tailwind,
                    "alt": "tailwind",
                    "link": "https://tailwindcss.com"
                }
            ]
        },
        {
            "name": "uncompagnon",
            "cover": 'url',
            "logo": uncompagnon,
            "link": "https://www.uncompagnon.fr/",
            "description": "Specialist in Free Pet Ads. Sale, purchase or adoption of dogs, cats, horses...",
            "details": [
                {
                    "picture": php,
                    "alt": "php",
                    "link": "https://www.php.net"
                },
                {
                    "picture": mysql,
                    "alt": "mysql",
                    "link": "https://www.mysql.com/"
                },
                {
                    "picture": jquery,
                    "alt": "jquery",
                    "link": "https://jquery.com"
                },
                {
                    "picture": bootstrap,
                    "alt": "bootstrap",
                    "link": "https://getbootstrap.com"
                }
            ]
        }
    ]
}

export default Works()