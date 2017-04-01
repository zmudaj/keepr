<template>
    <div>
        <ul id="slide-out" class="side-nav">
            <li>
                <div class="userView">
                    <div class="background">
                        <img src="">
                    </div>
                    <span v-if="this.$root.$data.store.state.user._id" class="white-text name">{{ this.$root.$data.store.state.user.name }}</span>
                    <span v-if="this.$root.$data.store.state.user._id" class="white-text email">{{ this.$root.$data.store.state.user.email }}</span>
                </div>
            </li>
            <li>
                <router-link to="/">Dashboard</router-link>
            </li>
            <li>
                <router-link to="/browse">Browse</router-link>
            </li>
            <li>
                <router-link to="/vaults">New Vault</router-link>
            </li>
            <li>
                <router-link to="/keeps">New Keep</router-link>
            </li>
            <li>
                <div class="divider"></div>
            </li>
            <li><a class="waves-effect" @click="logout">Logout</a></li>
        </ul>
        <div class="navbar-fixed">
            <nav class="black">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo left"><img class="logo" src="../assets/logo.jpg"></a>
                    <ul v-if="!this.$root.$data.store.state.user._id" class="right">
                        <li>
                            <router-link to="login">Login</router-link>
                        </li>
                        <li>
                            <router-link to="register">Sign Up</router-link>
                        </li>
                        <li>
                            <router-link to="/browse">Browse</router-link>
                        </li>
                    </ul>
                    <ul v-if="this.$root.$data.store.state.user._id" class="right">
                        <!--<li><router-link to="/">Dashboard</router-link></li>
                        <li><router-link to="/browse">Browse</router-link></li>-->
                        <li><a data-activates="slide-out" class="button-collapse show-on-large"><i class="fa fa-bars"></i></a></li>
                        <!--<li>
                            <a @click="logout">Logout</a>
                        </li>-->
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Nav',
        data() {
            return {
                tagSearch: ''
            }
        },
        methods: {
            logout() {
                this.$root.$data.store.actions.logout();
                this.$router.push({ path: '/' });
                $('.button-collapse').sideNav('hide');
            },
            searchByTag() {
                this.$root.$data.store.actions.searchByTag(this.tagSearch);
                this.tagSearch = '';
                this.$router.push({ path: '/browse' });
            }
        },
        mounted() {
            this.$root.$data.store.actions.authenticate();
            this.$nextTick(() => {
                console.log('initialize select..... hopefully');
                setTimeout(function () {
                    $(".button-collapse").sideNav();
                }, 500);
            })
        }
    }
</script>

<style scoped>
    .brand-logo {
        margin-left: 10px;
    }
    
    li {
        color: white;
    }
    
    li a {
        color: white;
    }
    
    li a i {
        color: white;
    }
    
    .menu-padding {
        margin-right: 30px;
    }
    
    .logo {
        max-width: 50px;
        margin-top: 7px;
    }
    
    ul.side-nav {
        background-color: black;
    }
    
    .name,
    .email {
        font-weight: bold;
        text-shadow: black 0.1em 0.1em 0.1em, 0px 0px 5px black;
    }
</style>