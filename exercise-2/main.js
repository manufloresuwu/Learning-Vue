Vue.createApp({
    data() {
        return {
            items: [
                'Try this program :D',
                'Drink water',
                'Smile'
            ]
        }
    },
    methods:{
        newItem(event){
            var text = event.target.value.trim()
            if (text !== ''){
                this.items.push(text)
            }
            event.target.value = ''
        },
        removeItem(text){
            var index_to_delete = this.items.indexOf(text)
            this.items.splice(index_to_delete, 1)
        }
    }

    
}).mount('#app')