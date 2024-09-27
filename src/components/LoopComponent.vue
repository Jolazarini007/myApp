<template>
<div>
    <form @submit.prevent='addItem'>
        <input type="text" v-model="inputValue" placeholder="Digite um item">
        <input type="submit" value="Adicionar">
    </form>


    <table style="border: 1pc solid black">
        <thead>Itens da lista</thead>
        <tr>
            <td>index</td>
            <td>Key</td>
        </tr>
        <tr v-for="(item, index) in itens" :key="index">
            <td>{{ index }}</td>
            <td>{{ item }}</td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    data(){
        return {
            itens: [],
            inputValue: ''
        };
        

    },
    methods: {
        addItem(){
            if (this.inputValue){
                this.itens.push(this.inputValue);
                this.inputValue = '';
            }
        }
    }
}
</script>

<style>

</style>