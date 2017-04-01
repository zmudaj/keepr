<template>
  <div class="container">
    <div class="card horizontal">
      <div class="card-image" v-if="activeVault.imageUrl">
        <img :src="activeVault.imageUrl">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <h4>{{ activeVault.name }}</h4>
          <p>{{ activeVault.description }}</p>
          <p class="right-align"><button class="btn btn-flat waves-effect waves-teal" @click="toggleEdit"><i v-if="!showEdit" class="fa fa-pencil"></i><i v-if="showEdit" class="fa fa-times"></i></button></p>
          <div v-if="showEdit">
            <form @submit.prevent="editVault">
              <div class="input-field">
                <input id="name" type="text" v-model="editName">
              </div>
              <div class="input-field">
                <input id="image" type="text" v-model="editImg">
              </div>
              <div class="input-field">
                <input id="description" type="text" v-model="editDesc">
              </div>
              <div class="input-field">
                <button type="submit" class="waves-effect waves-teal blue darken-4 btn">Update Vault</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="activeVault.keeps" class="row">
      <div v-for="keep in activeVault.keeps" class="col s6 m4">
        <div class="right-align">
          <a @click="removeFromVault(keep)"><i class="fa fa-times"></i></a>
        </div>
        <keep :keep="keep"></keep>
      </div>
    </div>
    <div v-if="!activeVault.keeps">
      <router-link to="/browse">Go add some keeps!</router-link>
    </div>
  </div>
</template>

<script>
  import Keep from './Keep'
  export default {
    name: 'Vault',
    components: {
      Keep
    },
    data() {
      return {
        showEdit: false,
        editName: '',
        editDesc: '',
        editImg: ''
      }
    },
    computed: {
      activeVault() {
        return this.$root.$data.store.state.activeVault;
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
      this.$root.$data.store.actions.setActiveVault(this.$route.params.id);
    },
    methods: {
      removeFromVault(keep) {
        this.$root.$data.store.actions.removeFromVault(this.$route.params.id, keep._id);
      },
      toggleEdit() {
        this.showEdit = !this.showEdit;
        this.editName = this.activeVault.name;
        this.editDesc = this.activeVault.description;
        this.editImg = this.activeVault.imageUrl;
      },
      editVault() {
        this.$root.$data.store.actions.editVault(this.$route.params.id, this.editName, this.editDesc, this.editImg);
        this.showEdit = false;
      }
    }
  }
</script>

<style>
</style>