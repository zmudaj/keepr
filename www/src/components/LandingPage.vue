<template>
    <div>
        <div class="parallax-container">
            <div class="parallax">
                <img class="parallax-bg" src="../assets/vault.jpg">
            </div>
        </div>
        <div class="section black center white-text">
            <div class="row container">
                <h3 class="header">Welcome to Keepr! It's what Pintrest would be like if it was built by a single junior developer.</h3>
                <div class="col s12 m4">
                    <h5><i class="fa fa-key"></i> Create Keeps</h5>
                    <p>Make your own creative keeps to share or use.</p>
                </div>
                <div class="col s12 m4">
                    <h5><i class="fa fa-cogs"></i> Store in Vaults</h5>
                    <p>Orginze your collected keeps into vaults. You decide how to catergize them!</p>
                </div>
                <div class="col s12 m4">
                    <h5><i class="fa fa-users"></i> Share with Friends!</h5>
                    <p>It wouldn't be the internet without excessive social contact. Share your keeps with others and check out your friend's keeps</p>
                </div>
            </div>
        </div>
        <div class="parallax-container">
            <div class="parallax">
                <img class="parallax-bg" src="../assets/chest.jpg">
            </div>
            <div class="center">
                <router-link to="/register" class="sign-up waves-effect waves-indigo btn btn-large blue darken-2 hoverable raised">Sign Up Today</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'landing-page',
        mounted: function () {
            $('.parallax').parallax();
        }
    }
</script>

<style>
    .parallax-container {
        height: 500px;
    }
    
    .sign-up {
        margin-top: 70px;
    }
    
    .parallax-bg {
        width: 100%;
    }
    /*.parallax {
        background-image: url("https://cdn0.vox-cdn.com/uploads/chorus_image/image/53522233/Nintendo_Switch_2.0.0.jpg");
        min-width: 100%;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    .bgimg-2 {
        background-image: url("http://unsplash.com/photos/CuFYW1c97w8/download?force=true");
        min-height: 100%;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }*/
    
    .section {
        padding-top: 20px;
        padding-bottom: 20px;
        color: white;
    }
    
    hr {
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>