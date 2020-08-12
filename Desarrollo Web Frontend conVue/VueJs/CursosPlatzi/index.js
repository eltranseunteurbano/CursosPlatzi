

new Vue({
    el: '#app',

    data () {
        return{
            courses: [],
            title: "",
            hour: "",
        }
    },
    watch: {

       
    },
    computed: {
       totalTime(){
           let total = 0;
           if(this.courses.length > 0){
                this.courses.forEach(element => {
                   total += parseInt(element.hour)
               });
            }
            return total;
       }
    },
    methods: {
        addCourse (){
            if ( this.title != "" && this.hour != ""){
                this.courses.push({
                    'title': this.title,
                    'hour': this.hour });
                this.hour = "";
                this.title = "";
            }
        }
    }
});