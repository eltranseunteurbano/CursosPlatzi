Vue.component('CoinDetail',{
    props: ['coin'],
    data() {
        return {
            showPrices: false,
            value: 0,
        }
    },
    methods: {
        toggleShowPrices () {
            this.showPrices =! this.showPrices;
            //this.color = this.color.split('').reverse().join('')
        }
    },
    computed: {
        convertedValue () {
            if (!this.value){
                return 0
            }

            if( this.price > 0){
                return this.value / this.price
            } else {
                return "error"
            }
        },
        title(){
            return `${this.coin.name} - ${this.coin.symbol}`
        }
    },
    template: `
        <div>
            <img v-bind:src="coin.img" v-bind:alt="coin.name" v-on:mouseover="toggleShowPrices" v-on:mouseout="toggleShowPrices">
        
            <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red' ">{{ title }}
                <span v-if="coin.changePercent > 0">&#x1F44D;</span>
                <span v-else-if="coin.changePercent < 0">&#x1F44E;</span>
                <span v-else>&#x1F91E;</span>
                <span class="button" v-on:click="toggleShowPrices">{{ showPrices ? '🙈 Ocultar Precios 🙈' : '🐵 Mostrar Precios 🐵' }}</span>
            </h1>
        
            <input type="number" v-model="value">
            <span>{{coin.convertedValue}}</span>

            <ul v-show="showPrices == true">
                <li class="uppercase" v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price }" v-for="(p,i) in coin.pricesWithDays" v-bind:key="i"> {{i}}: {{p.day}} - {{ p.value }}</li>
            </ul>

        </div>
    `,
})

new Vue({
    el: '#app',

    data () {
        return{
            btc: {
                name: 'Bitcoin',
                symbol: "BTC",
                img: 'http://cryptologos.cc/logos/bitcoin-btc-logo.png',
                changePercent: -10,
                price: 8400,
                pricesWithDays: [
                    { day: 'Lunes', value: 8400 },
                    { day: 'Martes', value: 7900 },
                    { day: 'Miercoles', value: 8200 },
                    { day: 'Jueves', value: 9000 },
                    { day: 'Viernes', value: 9400 },
                    { day: 'Sabado', value: 10000 },
                    { day: 'Domingo', value: 10200 },
                ],
            },
            color: 'f4f4f4',
        }
    },
})