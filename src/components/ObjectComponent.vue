<template>
    <form @submit.prevent="addPerson">
        <div>
            <input type="text" v-model="name" placeholder="Nome">
            <input type="text" v-model="age" placeholder="Idade">
            <input type="text" v-model="document" placeholder="Documento">
        </div>
            <button type="button" @click="addPerson">Enviar</button>
    </form>
    <div style="display: flex; flex-direction: column;">
        <div v-for="(person, index) in personList" :key="index" style="margin: 10px">
            <p>ID: {{ index+1 }}</p>
            <p>Nome: {{ person.name }}</p>
            <p>Idade: {{ person.age }}</p>
            <p>Documento: {{ person.document }}</p>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            personList: [],
            name: '',
            age: '',
            document: ''
        }
    },
    methods: {
        addPerson(){
            let person = {
                name:this.name,
                age:this.age,
                document:this.document
            }
            this.personList.push(person)
        }
    }
}
</script>

<style>

</style>