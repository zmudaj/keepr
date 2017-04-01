<template>
  <div class="container">
    <h4 class="center">Create a Keep</h4>
    <form @submit.prevent="createKeep" class="row">
      <div class="input-field col s12">
        <input id="title" type="text" v-model="title" required>
        <label for="title">Title</label>
      </div>
      <div class="input-field col s6">
        <input id="image" type="text" v-model="image">
        <label for="image">Image URL</label>
      </div>
      <div class="input-field col s6">
        <input id="article" type="text" v-model="article">
        <label for="article">Article URL</label>
      </div>
      <div class="input-field col s10">
        <input id="tags" type="text" v-model="tags">
        <label for="tags">Tags</label>
      </div>
      <div class="input-field col s2">
        <input type="checkbox" class="filled-in" id="filled-in-box" checked>
        <label for="filled-in-box"><sup>Public</sup></label>
      </div>
      <div class="input-field col s12">
        <select id="selected" required>
          <option v-for="vault in myVaults" :value="vault._id">{{ vault.name }}</option>
        </select>
      </div>
      <div class="input-field col s12 center">
        <button type="submit" class="waves-effect waves-teal btn blue darken-4">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'new-keep',
    data() {
      return {
        title: '',
        image: '',
        article: '',
        tags: ''
      }
    },
    computed: {
      myVaults() {
        return this.$root.$data.store.state.myVaults;
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
      this.$root.$data.store.actions.clearSearch();
    },
    methods: {
      createKeep() {
        var checkbox = document.getElementById('filled-in-box').checked;
        var select = document.getElementById('selected').value;
        if (this.image == '' && this.article == '') {
          Materialize.toast('A keep must have an image or article!', 1000);
        } else {
          let keep = {
            title: this.title,
            imageUrl: this.image,
            articleLink: this.article,
            public: checkbox,
            tags: this.tags,
            userId: this.$root.$data.store.state.user._id
          }
          this.$root.$data.store.actions.createKeep(select, keep);
        }
      }
    }
  }
</script>

<style>
</style>