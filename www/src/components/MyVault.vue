<template>
    <div>
        <form @submit.prevent="createVault">
            <div class="card-content white-text">
                <h4 class="center">Create Vault</h4>
                <!--<div class="input-field">
                        <label>Game</label>
                    </div>-->
                <div class="input-field">
                    <input id="title" type="text" v-model="title" required>
                    <label for="title">Title</label>
                </div>
                <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea" v-model="description"></textarea>
                    <label for="textarea1">Description</label>
                </div>
                <div class="input-field center">
                    <button class="waves-effect waves-teal btn indigo" type="submit">Create Vault</button>
                </div>
            </div>
        </form>

        </form>
    </div>
</template>

<script>
    export default {
        name: 'MyVault',
        methods: {
            createVault() {
                let vue = this;
                var select = document.getElementById('selected');
                this.$root.$data.store.actions.createGroup(select.value, this.title, this.description);
            }
        }
    }

</script>

<style>

</style>