new Vue({
    el: '#app',

    data () {
        return{
            name: 'Bitcoin',
            img: 'http://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: 0,
            prices: [8400, 7900, 8200, 9000, 9400, 10000,10200],
            pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 8200 },
                { day: 'Jueves', value: 9000 },
                { day: 'Viernes', value: 9400 },
                { day: 'Sabado', value: 10000 },
                { day: 'Domingo', value: 10200 },
            ]
        }
    }
})