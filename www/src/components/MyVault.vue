<template>
    <div>
        <form @submit.prevent="createVault">
            <div class="card-content blue-text center">
                <h4 class="center">Create Vault</h4>
                <div class="input-field">
                    <input id="name" type="title" v-model="name" required>
                    <label for="name">New Vault Name</label>
                </div>
                <!--<div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea" v-model="description"></textarea>
                    <label for="textarea1">Description</label>
                </div>-->
                <div class="input-field">
                    <button class="waves-effect waves-teal btn indigo" type="submit">Create Vault</button>
                </div>
            </div>
        </form>

        <div class="container">
            <div class="row">
                <ul>

                    <li v-for="vault in this.$root.$data.store.state.myVaults">

                        <div class="col s6 m4 l3">
                            <div class="card">
                                <div class="card-image">
                                    <img :src="vault.imgUrl">
                                    <span class="card-title"></span>
                                </div>
                                <div class="card-content">
                                    <p>{{ vault.name }}</p>
                                </div>
                                <div class="card-action">
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyVault',
        data() {
            return {
                name: '',
                description: ''
            }
        },
        methods: {
            createVault() {
                let vue = this;
                var select = document.getElementById('selected');
                this.$root.$data.store.actions.createVault(this.name, this.description);
            }
        }
    }

</script>

<style>

</style>