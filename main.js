const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'awesome socks',
            image: './assets/images/socks_green.jpg',
            inventory: 100,
            details: ['50% cotton', '50% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ]
        }
    }
})