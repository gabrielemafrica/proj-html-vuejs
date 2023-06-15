import { VueElement, reactive } from "vue";

export const store = reactive(
    {
        selectedIdx: 0,

        owner1Speaking: true,

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
                foto: '<i class="bi bi-building"></i>',
                title: 'Buildings',
                content: 'Quisquam dicta totam eos. Necessitatibus culpa earum optio ab et explicabo aliquam odio ducimus dolore voluptatem.'
            },
            {
                foto: '<i class="bi bi-arrow-repeat"></i>',
                title: 'Renovate',
                content: 'Quisquam dicta totam eos. Necessitatibus culpa earum optio ab et explicabo aliquam odio ducimus dolore voluptatem.'
            },
            {
                foto: '<i class="bi bi-house-fill"></i>',
                title: 'Construct',
                content: 'Quisquam dicta totam eos. Necessitatibus culpa earum optio ab et explicabo aliquam odio ducimus dolore voluptatem.'
            },
            {
                foto: '<i class="bi bi-truck"></i>',
                title: 'Exclusive',
                content: 'Quisquam dicta totam eos. Necessitatibus culpa earum optio ab et explicabo aliquam odio ducimus dolore voluptatem.'
            }
        ],

        works: [
            {
                foto: '<i class="bi bi-pc-display"></i>',
                title: 3534,
                content: 'planning applications'
            },
            {
                foto: '<i class="bi bi-building"></i>',
                title: 896,
                content: 'completed projects'
            },
            {
                foto: '<i class="bi bi-people-fill"></i>',
                title: 172,
                content: 'trained professionals'
            },
            {
                foto: '<i class="bi bi-globe"></i>',
                title: 19,
                content: 'international offices'
            },
        ],

        core: [
            {
                foto: '<i class="bi bi-house-fill"></i>',
                title: 'Great Services',
                content: 'Quisquam dicta totam eos. Necessitatibus culpa earum optio ab et explicabo aliquam odio ducimus dolore voluptatem.'
            },
            {
                foto: '<i class="bi bi-gear"></i>',
                title: 'Highest Standards',
                content: 'Quisquam dicta totam eos. Necessitatibus culpa earum optio ab et explicabo aliquam odio ducimus dolore voluptatem.'
            },
            {
                foto: '<i class="bi bi-people-fill"></i>',
                title: 'Professional Team',
                content: 'Quisquam dicta totam eos. Necessitatibus culpa earum optio ab et explicabo aliquam odio ducimus dolore voluptatem.'
            },
            {
                foto: '<i class="bi bi-lightbulb"></i>',
                title: 'Creative Solutions',
                content: 'Quisquam dicta totam eos. Necessitatibus culpa earum optio ab et explicabo aliquam odio ducimus dolore voluptatem.'
            }
        ],

        news: [
            {
                foto: '<img src="../../public/blog-post-134132600-400x241.jpg" alt="news">',
                title: "Redeveloping Florida's Remote Southern Coast",
                data: 'December 7th, 2015',
                content: 'Quisquam dicta totam eos. Necessiticta totam eosatibicta totam eoss culpa earum optio ab et expliicta totam eoscabo aliquam odiicta totam eoso ducimus dolore voluptatem.'
            },
            {
                foto: '<img src="../../public/blog-post-92486644-400x241.jpg" alt="news">',
                title: "How We Manage Large Construction Projects",
                data: 'December 7th, 2015',
                content: 'Quisquam dicta totam eoicta totam eoss. Necicta totam eosessitaicta totam eostibicta totam eosus culpa earum optio ab et explicabo aliicta totam eosquam odio ducimus dolore voluptatem.'
            },
            {
                foto: '<img src="../../public/blog-post-332773904-400x241.jpg" alt="news">',
                title: "Future proofing a modern home",
                data: 'December 6th, 2015',
                content: 'Quisquam dicta totam eos. Necessitaticta totam eosibus cicta totam eosulpa earum optio ab et expliicta totam eoscabo aliquicta totam eosam odio ducimus dolore voluptatem.'
            }
        ],




    }
)