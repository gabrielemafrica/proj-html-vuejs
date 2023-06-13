import { VueElement, reactive } from "vue";

export const store = reactive(
    {
        selectedIdx: 0,

        vociMenu: [
            {
                "nome": 'home',
                "selected": true
            },
            {
                "nome": 'about',
                "selected": false
            },
            {
                "nome": 'services',
                "selected": false
            },
            {
                "nome": 'work',
                "selected": false
            },
            {
                "nome": 'articles',
                "selected": false
            }
        ],

        tweets: {
            nome: 'ThemeFusion',
            nomeAsh: '@Theme_Fusion',
            logoURL: '/3a74ce3d0532b7773b174c45ca3bd05a_normal.png',
            post: 'Do you need sublime WordPress hosting for your next website? Take advantage of exclusive partner offers that we have secured jast for you, & launch your site in seconds whit <a href="#">#avada</a> on WP Engine hosting & get 30% Off this Black Friday <a href="#">bit.iy/3KjLLE2 #BlackFriday2020</a>',
            imageURL: '/En2TRxLW4AEiWUN.jpeg'
        }
        ,

        contacts: [

            {
                nome: 'Corporate Location',
                valore: '1600 Amphitheatre Parkway London WC1 1BA',
                img: '<i class="bi bi-globe2"></i>'
            },
            {
                nome: 'Residential Location',
                valore: '9521 Broadsberry Avenue paddington RC7 9ZA',
                img: '<i class="bi bi-house-fill"></i>'
            },
            {
                // nome: '',
                valore: '1.800.458.556 / 1.800.532.2112',
                img: '<i class="bi bi-telephone-fill"></i>'
            },
            {
                // nome: '',
                valore: 'info@your-domin.com',
                img: '<i class="bi bi-envelope"></i>'
            },
            {
                // nome: '',
                valore: 'Monday - Friday: 9:00 AM - 6:00 PM',
                img: '<i class="bi bi-clock"></i>'
            },
            {
                // nome: '',
                valore: 'Saturday - Sunday: 9:00 AM - 12:00 PM',
                img: '<i class="bi bi-clock"></i>'
            }

        ],

        schede: [
            {
                logo: '<i class="bi bi-building"></i>',
                title: 'Buildings',
                content: 'Quisquam dicta totam eos. Necessitatibus culpa earum optio ab et explicabo aliquam odio ducimus dolore voluptatem.'
            },
            {
                logo: '<i class="bi bi-arrow-repeat"></i>',
                title: 'Renovate',
                content: 'Quisquam dicta totam eos. Necessitatibus culpa earum optio ab et explicabo aliquam odio ducimus dolore voluptatem.'
            },
            {
                logo: '<i class="bi bi-house-fill"></i>',
                title: 'Construct',
                content: 'Quisquam dicta totam eos. Necessitatibus culpa earum optio ab et explicabo aliquam odio ducimus dolore voluptatem.'
            },
            {
                logo: '<i class="bi bi-truck"></i>',
                title: 'Exclusive',
                content: 'Quisquam dicta totam eos. Necessitatibus culpa earum optio ab et explicabo aliquam odio ducimus dolore voluptatem.'
            }
        ]



    }
)