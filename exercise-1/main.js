Vue.createApp({
    data() {
        return {
            greeting: 'Hello!',
            otherLanguage: 'En Español'
        }
    },
    methods:{
        changeLanguage(){
            if(this.otherLanguage == 'En Español'){
                //This means that the current language is english 
                //and the user wants to change to spanish.
                this.greeting = 'Hola!'
                this.otherLanguage = 'In English'
            } else {
                this.greeting = 'Hello!'
                this.otherLanguage = "En Español"
            }
        }
    }
}).mount('#app')