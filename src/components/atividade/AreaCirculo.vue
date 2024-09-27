<template>
    <div>
        <h1>Área do circulo</h1>
        <form @submit.prevent='calcularArea'>
            <input type="number" v-model="raio" placeholder="Raio">
            <button type="submit" @click="calcularArea">Calcular</button>
        </form>
        <h2>{{ area }}</h2>
    </div>
    
    </template>
    <script>
    export default {
        data(){
            return {
                raio: '',
                area: ''
            };
            
    
        },
        methods: {
            calcularArea(){
                    this.area = (this.raio * this.raio) * 3.141
            }
        }
    }
    </script>
    <style>
    
    </style>