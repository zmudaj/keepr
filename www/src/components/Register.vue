<template>
    <div>
        <form @submit.prevent="registerUser" id="signupModal" class="modal">
            <div class="modal-content">
                <h4 class="center">Sign Up</h4>
                <div class="row">
                    <div class="input-field col s6">
                        <input type="text" id="name" v-model="name" required>
                        <label for="name">Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input type="text" id="email" v-model="email" required>
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field col s6">
                        <input type="password" id="password" v-model="password" required>
                        <label for="password">Password</label>
                    </div>
                    <div class="input-field col s6">
                        <input type="password" id="confirmPass" v-model="confirmPass" required>
                        <label for="confirmPass">Confirm Password</label>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="left">
                    <router-link to="/login" class="waves-effect waves-teal btn-flat">Login</router-link>
                </div>
                <div class="right">
                    <button type="submit" class="waves-effect waves-indigo btn blue darken-4 right-align">Sign Up</button>
                </div>
            </div>
        </form>
    </div>

</template>

<script>
    export default {
        name: 'SignUp',
        data() {
            return {
                name: '',
                email: '',
                password: '',
                confirmPass: ''
            }
        },
        mounted() {
            let vue = this;
            $('.modal').modal();
            var onModalHide = function () {
                vue.$router.push({ path: '/' });
            }
            $('#signupModal').modal({
                complete: onModalHide
            });
            $('#signupModal').modal('open');
        },
        methods: {
            registerUser: function () {
                if (this.password == this.confirmPass) {
                    this.$root.$data.store.actions.register(this.name, this.email, this.password);
                    this.email = '';
                    this.name = '';
                    this.password = '';
                    this.confirmPass = '';
                    $('#signupModal').modal('close');
                    this.$router.push({ path: '/' });
                } else {
                    this.password = '';
                    this.confirmPass = '';
                    Materialize.toast('Login failed', 1000);
                }
            }
        }
    }
</script>

<style>
</style>