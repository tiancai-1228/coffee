var vm = new Vue({
    el:'#shopcar',
    data:{
        logo:'coffee!',
        menu:[{name:'首頁',link:'index.html'},{name:'產品列表',link:'product.html'},{name:'會員中心',link:'member.html'},{name:'購物車',link:'shopcar.html'}],
        socialLink:{
            fb:'https://facebook.com/tiancai1228',
            ig:'https://www.instagram.com/tiancai_1228',
            github:'https://github.com/tiancai-1228'
        },
        title:'My  CoffeeShop',
        h2:['About ME', 'Skill'],
        txt:['這只是一個單純練習用的購物網站', '此網站所用技術大多為vue.js / Html / Css / Javascrip / 基礎RWD變版'],

        email:'sky0975657713@gmail.com',

    }
})