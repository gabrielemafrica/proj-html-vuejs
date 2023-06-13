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

        contacts: {
            'Corporate Location': '1600 Amphitheatre Parkway London WC1 1BA',
            'Residential Location': '9521 Broadsberry Avenue paddington RC7 9ZA',
            'telephone': '1.800.458.556 / 1.800.532.2112',
            'mail': 'info@your-domin.com',
            'ore': 'Monday - Friday: 9:00 AM - 6:00 PM',
            'oreWe': 'Saturday - Sunday: 9:00 AM - 12:00 PM'
        }



    }
)