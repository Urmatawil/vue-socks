const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            inStock: true,
            description: 'awesome socks',
            image: './assets/images/socks_green.jpg',
            inventory: 100,
            details: ['50% cotton', '50% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart++
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})