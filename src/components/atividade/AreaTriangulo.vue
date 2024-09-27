<template>
<div>
    <h1>Área do triângulo</h1>
    <form @submit.prevent='calcularArea'>
        <input type="number" v-model="base" placeholder="Base">
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
            base: '',
            altura: '',
            area: ''
        };
        

    },
    methods: {
        calcularArea(){
                this.area = (this.altura * this.base)/2
        }
    }
}
</script>
<style>

</style>