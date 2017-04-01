<template>
  <div class="container">
    <!--<form v-if="this.$root.$data.store.state.user._id" @submit.prevent="searchByTag">-->
      <div class="input-field">
        <input id="search" type="search" v-model="tagSearch" v-on:keyup="searchByTag">
        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
        <i class="material-icons">close</i>
      </div>
    <!--</form>-->
    <div class="row">
      <div v-if="searchResults[0]">
        <div class="col s10">
          <h4 class="topmargin">Showing results for {{ tagSearch }}</h4>
        </div>
        <div class="col s2">
          <button @click="clearSearch" class="waves-effect waves-teal btn blue darken-4 right">Clear</button>
        </div>
        <div class="clearfix"></div>
        <div v-for="keep in searchResults" class="col s6 m4">
          <keep :keep="keep"></keep>
        </div>
      </div>
      <div v-if="!searchResults[0]">
        <!--<h4 class="center">All Keeps</h4>-->
        <div v-for="keep in keeps" class="col s6 m4">
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
    name: 'Browse',
    components: {
      Keep
    },
    data() {
      return {
        hoverShow: false,
        tagSearch: '',
        searchResults: []
      }
    },
    computed: {
      keeps() {
        return this.$root.$data.store.state.keeps;
      }
      // searchResults() {
      //   return this.$root.$data.store.state.searchResults;
      // },
    },
    mounted() {
      this.$nextTick(() => {
        console.log('initialize select..... hopefully');
        setTimeout(function () {
          $(".button-collapse").sideNav();
          $('.button-collapse').sideNav('hide');
        }, 1000);
      })
      this.$root.$data.store.actions.getPublicKeeps();
    },
    methods: {
      showAction() {
        this.hoverShow = !this.hoverShow;
      },
      clearSearch() {
        this.tagSearch = '';
        this.searchResults = [];
      },
      // searchByTag() {
      //   this.$root.$data.store.actions.searchByTag(this.tagSearch);
      //   this.tagSearch = '';
      // }
      searchByTag(){
        if(this.tagSearch != ''){
        let search = this.tagSearch;
        let regex = new RegExp(search, 'i');
        let filtered = [];
        for(var i = 0; i < this.keeps.length; i++){
          var keep = this.keeps[i];
          if(regex.test(keep.tags)){
            filtered.push(keep)
          }
        }
        this.searchResults = filtered;
        } else {
          this.searchResults = [];
        }
      }
    }
  }
</script>

<style>
  .topmargin {
    margin-top: -4px;
  }
</style>