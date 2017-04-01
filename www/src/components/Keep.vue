<template>
  <div class="card hoverable" v-on:mouseenter="showAction" v-on:mouseleave="showAction">
    <div class="card-image" v-if="keep.imageUrl">
      <img :src="keep.imageUrl">
    </div>
    <div class="card-content">
      <span v-if="!keep.articleLink" class="card-title">{{ keep.title }}</span>
      <span v-if="keep.articleLink" class="card-title"><a :href="keep.articleLink">{{ keep.title }}</a></span>
    </div>
    <div class="card-action height">
      <span class="left" v-show="hoverShow"><i class="fa fa-eye"></i> {{ keep.views }} | <i class="fa fa-retweet"></i> {{ keep.timesVaulted }}</span>
      <span class="right" v-show="hoverShow"><a @click="viewDetails(keep._id)">details</a></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'keeps',
    props: ['keep'],
    data() {
      return {
        hoverShow: false
      }
    },
    methods: {
      showAction() {
        this.hoverShow = !this.hoverShow;
      },
      viewDetails(keepId){
        if(this.$root.$data.store.state.user._id){
          this.$router.push({ path: '/keeps/' + keepId })
        } else {
          this.$router.push({ path: '/register' })
          Materialize.toast('You must have an account to view and save keeps!', 1000);
        }
      }
    }
  }
</script>

<style>
  
</style>