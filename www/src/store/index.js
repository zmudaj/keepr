import axios from 'axios'
import router from '../router'

let api = axios.create({
  baseURL: 'https://vaultkeepr.herokuapp.com/api/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  user: {},
  myVaults: [],
  myKeeps: [],
  activeVault: {},
  activeKeep: {userId : { }},
  searchResults: [],
  searchedTerm: '',
  //Dummy Data
  keeps: [{
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/c7/80/e3/c780e34c14258f4087df410f03d76e83.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatisconsectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }],
  error: {}
}

let handleError = (err) => {
  state.error = err
}

export default {
  // ALL DATA LIVES IN THE STATE
  state,
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {
    getUserVaults(){
      api('myvaults')
        .then(res => {
          state.myVaults = res.data.data;
        })
        .catch(handleError);
    },
    getUserKeeps(){
      api('mykeeps')
        .then(res => {
          state.myKeeps = res.data.data;
        })
        .catch(handleError);
    },
    getPublicKeeps(){
      api('publickeeps')
        .then(res => {
          state.keeps = res.data.data;
        })
        .catch(handleError);
    },
    searchByTag(tags){
      api.post('taggedkeeps', {
        tags: tags
      })
        .then(res => {
          state.searchedTerm = tags;
          state.searchResults = res.data.data;
        })
        .catch(handleError);
    },
    clearSearch(){
      state.searchedTerm = '';
      state.searchResults = [];
    },
    createKeep(vaultId, keep){
      console.log(keep);
      api.post('/keep/' + vaultId, keep)
        .then(res => {
          state.activeKeep = res.data.data;
          router.push({ path: '/keeps/' + state.activeKeep._id })
        })
        .catch(handleError);
    },
    setActiveKeep(keepId){
      api('keep/' + keepId)
        .then(res => {
          state.activeKeep = res.data.data;
        })
        .catch(handleError);
    },
    deleteKeep(keepId){
      api.delete('keeps/' + keepId)
        .then(res => {
          router.push({ path: '/' });
        })
        .catch(handleError);
    },
    editKeep(keepId, keep){
      api.put('keeps/' + keepId, keep)
        .then(res => {
          this.setActiveKeep(keepId);
        })
        .catch(handleError);
    },
    addToVault(keepId, vaultId){
      api.put('vault/' + vaultId + '/keep', {
        keepId: keepId
      })
        .then(res => {
          state.activeVault = res.data.data;
          router.push({ path: '/vaults/' + state.activeVault._id })
        })
        .catch(handleError);
    },
    removeFromVault(vaultId, keepId){
      api.put('vault/' + vaultId + '/removekeep', keepId)
        .then(res => {
          this.setActiveVault(vaultId);
        })
        .catch(handleError);
    },
    createVault(name, description, image){
      api.post('vaults', {
        name: name,
        description: description,
        imageUrl: image
      })
        .then(res => {
          console.log(res.data.data);
          state.activeVault = res.data.data;
          router.push({ path: '/' })
        })
        .catch(handleError);
    },
    editVault(vaultId, vaultName, vaultDesc, vaultImg){
      api.put('vaults/' + vaultId, {
        name: vaultName,
        description: vaultDesc,
        imageUrl: vaultImg
      })
        .then(res => {
          this.setActiveVault(vaultId);
        })
        .catch(handleError);
    },
    deleteVault(vaultId){
      api.delete('vaults/' + vaultId)
        .then(res => {
          this.getUserVaults();
        })
        .catch(handleError);
    },
    setActiveVault(vaultId){
      api('vault/' + vaultId)
        .then(res => {
          state.activeVault = res.data.data
        })
        .catch(handleError);
    },
    login(email, password) {
      api.post('https://vaultkeepr.herokuapp.com/login', {
        email: email,
        password: password
      })
        .then(res => {
          if (res.data.data) {
            state.user = res.data.data;
            this.getUserKeeps();
            this.getUserVaults();
          } else {
            state.error = res.data.error;
            Materialize.toast(res.data.error, 1000);
          }
        })
        .catch(handleError);
    },
    register(name, email, password) {
      api.post('https://vaultkeepr.herokuapp.com/register', {
        name: name,
        email: email,
        password: password
      })
        .then(res => {
          state.user = res.data.data;
        })
        .catch(handleError);
    },
    logout() {
      api.delete('https://vaultkeepr.herokuapp.com/logout')
        .then(res => {
          state.user = {};
          Materialize.toast(res.data.message, 1000);
          router.push({ path: '/' });
        })
        .catch(handleError);
    },
    authenticate() {
      api('https://vaultkeepr.herokuapp.com/authenticate')
        .then(res => {
          if (res.data.data) {
            state.user = res.data.data;
            this.getUserKeeps();
            this.getUserVaults();
          }
        })
        .catch(handleError);
    }
  }

}

