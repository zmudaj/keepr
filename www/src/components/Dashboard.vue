<template>
    <div class="container">
        <ul class="pagination">
            <li :class="{ active: showVaults, 'waves-effect': showKeeps }"><a @click="activateVaults">Vaults</a></li>
            <li :class="{ active: showKeeps, 'waves-effect': showVaults }"><a @click="activateKeeps">Keeps</a></li>
        </ul>
        <div v-show="showVaults">
            <h4 class="center">My Vaults
                <router-link to="/vaults" class="btn-floating btn right blue darken-4 hoverable"><i class="fa fa-plus"></i></router-link>
            </h4>
            <!--<ul class="collection with-header">
                <li v-for="vault in myVaults" class="collection-item" :style="'background: url(' + vault.imageUrl + ')'">
                    <div>
                        <h5><router-link :to="'vaults/' + vault._id">{{ vault.name }}</router-link></h5>
                        {{ vault.description }}
                        <span class="secondary-content"><a @click="deleteVault(vault)"><i class="fa fa-trash"></i></a>
                        </span>
                    </div>
                </li>
            </ul>-->
            <div v-for="vault in myVaults" class="card horizontal">
                <div class="card-image" v-if="vault.imageUrl">
                    <img :src="vault.imageUrl">
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <h5>
                            <router-link :to="'/vaults/' + vault._id">{{ vault.name }}</router-link>
                        </h5>
                        <p>{{ vault.description }}</p>
                        <p class="right-align"><a @click="deleteVault(vault)"><i class="fa fa-trash"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showKeeps">
            <h4 class="center">My Keeps
                <router-link to="/keeps" class="btn right black hoverable">Add Keep</router-link>
            </h4>
            <div class="row">
                <div v-for="keep in myKeeps" class="col s6 m4">
                    <keep :keep="keep"></keep>
                    <!--<div class="card hoverable" v-on:mouseenter="showAction" v-on:mouseleave="showAction">
                        <div class="card-image" v-if="keep.imageUrl">
                            <img :src="keep.imageUrl">
                        </div>
                        <div class="card-content">
                            <span v-if="!keep.articleLink" class="card-title">{{ keep.title }}</span>
                            <span v-if="keep.articleLink" class="card-title"><a :href="keep.articleLink">{{ keep.title }}</a></span>
                        </div>
                        <div class="card-action height">
                            <span class="left" v-show="hoverShow"><i class="fa fa-eye"></i> {{ keep.views }} | <i class="fa fa-retweet"></i> {{ keep.timesVaulted }}</span>
                            <span class="right" v-show="hoverShow"><router-link :to="'/keep/' + keep._id">add to vault</router-link></span>
                        </div>
                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Keep from './Keep'
    export default {
        name: 'dashboard',
        components: {
            Keep
        },
        data() {
            return {
                hoverShow: false,
                showKeeps: false,
                showVaults: true
            }
        },
        computed: {
            user() {
                return this.$root.$data.store.state.user;
            },
            myVaults() {
                return this.$root.$data.store.state.myVaults;
            },
            myKeeps() {
                return this.$root.$data.store.state.myKeeps;
            }
        },
        mounted() {
            this.$nextTick(() => {
                console.log('initialize select..... hopefully');
                setTimeout(function () {
                    $(".button-collapse").sideNav();
                    $('.button-collapse').sideNav('hide');
                }, 1000);
            })
            this.$root.$data.store.actions.getUserVaults();
            this.$root.$data.store.actions.getUserKeeps();
            this.$root.$data.store.actions.clearSearch();
            // $('#loginModal').modal('close');
        },
        methods: {
            showAction() {
                this.hoverShow = !this.hoverShow;
            },
            activateKeeps() {
                this.showVaults = false;
                this.showKeeps = true;
            },
            activateVaults() {
                this.showVaults = true;
                this.showKeeps = false;
            },
            deleteVault(vault) {
                this.$root.$data.store.actions.deleteVault(vault._id);
            }
        }
    }
</script>

<style>
    .height {
        height: 43px;
    }
    
    .secondary-content a {
        color: white;
    }
    
    .secondary-content a:hover {
        color: black;
    }
    
    .collection-item {
        color: white;
        text-shadow: black 0.1em 0.1em 0.1em, 0px 0px 5px black;
    }
    
    .collection-item a {
        color: white;
    }
    
    .collection-item a:hover {
        color: #696969;
    }
    
    .pagination li.active {
        background: black;
    }
    
    .pagination li.active a {
        color: white;
    }
    
    .btn-floating i {
        color: white;
    }
</style>