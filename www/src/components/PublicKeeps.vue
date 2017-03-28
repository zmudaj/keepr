<template>
    <div>
        <div class="container">
            <div class="row">
        <ul>
            
            <li v-for="keep in this.$root.$data.store.state.keeps">
               
                    <div class="col s6 m4 l3">
                        <div class="card">
                            <div class="card-image">
                                <img :src="keep.imgUrl">
                                <span class="card-title"></span>
                            </div>
                            <a :href="keep.articleLink">
                            <div class="card-content">
                                <p>{{ keep.title }}</p>
                            </div>
                            <div class="card-action">
                            </div>
                                </a>
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
        name: 'public-keeps'
    }

</script>

<style>
    .keep-image {
        max-width: 100%;
        max-height: 100%;
    }
    /*.keep-column {
        max-height: 100px;
    }*/
</style>