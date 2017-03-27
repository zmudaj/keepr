<template>
    <div>
        <ul>
            <li v-for="keep in this.$root.$data.store.state.keeps">
                {{ keep.title }}
                <img :src="keep.imgUrl" class="keep-image">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'public-keeps'
    }
</script>

<style>
    .keep-image {
        max-height: 250px;
    }
</style>