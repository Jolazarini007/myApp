<template>
    <div>
        <h1>Área do trapézio</h1>
        <form @submit.prevent='calcularArea'>
            <input type="number" v-model="baseMaior" placeholder="Base maior">
            <input type="number" v-model="baseMenor" placeholder="Base menor">
            <input type="number" v-model="altura" placeholder="Altura">
            <button type="submit" @click="calcularArea">Calcular</button>
        </form>
        <h2>{{ area }}</h2>
    </div>
    
    </template>
    <script>
    export default {
        data(){
            return {
                baseMenor: '',
                baseMaior: '',
                altura: '',
                area: ''
            };
            
    
        },
        methods: {
            calcularArea(){
                    this.area = (this.baseMaior + this.baseMenor) * this.altura / 2
            }
        }
    }
    </script>
    <style>
    
    </style>