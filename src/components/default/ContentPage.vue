<template>
<section>
    <div>
        <p>Meu contador</p>
        <div>
            <input v-model="nome" placeholder="Digite seu nome">
            <p>Seu nome é: {{ nome }}</p>
            <button @click="submeterFormulario()">Procurar usuário</button>
            <p v-if="url">
                {{ url }}
            </p>
        </div>
    </div>
</section>
</template>

<script>
import { normalizeClass } from 'vue';  
export default {
    name: "ContentPage",
    data(){
        return{
            nome: '',
            url: ''
        };
    },
    methods: {
        submeterFormulario(){
            fetch(`https://api.github.com/users/${this.nome}`).then((data) =>{
                this.url = data.url;
                console.log(this.url)
            })
        }
    }
}

</script>
<style>

</style>