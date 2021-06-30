var vm = new Vue({
    el:'.memberALL',
    data:{
        logo:'coffee!',
        menu:[{name:'首頁',link:'index.html'},{name:'產品列表',link:'product.html'},{name:'會員中心',link:'member.html'},{name:'購物車',link:'shopcar.html'}],
        account:'',
        password:'',
        Newaccount:'',
        Newpassword:'',
        email:'sky0975657713@gmail.com',
        socialLink:{
            fb:'https://facebook.com/tiancai1228',
            ig:'https://www.instagram.com/tiancai_1228',
            github:'https://github.com/tiancai-1228'
        },
        log:{
            type:true,
            class:'log-content',
            title:'會員登入',
            color:'black',
            Noaccount :false,
            Nopassword:false,
        },
        reg:{
            type:false,
            class:'reg-content',
            title:'會員註冊',
            color:'gray',
            Noaccount :false,
            Nopassword:false,
        },
        

    },
    methods:{
        golog(){
            
            this.log.color='black';
            this.reg.color='gray';
            this.log.type=true;
            this.reg.type=false;
        },
        goreg(){
            this.log.color='gray';
            this.reg.color='black';
            this.log.type=false;
            this.reg.type=true;
        },
        logcheck(e){
            if(this.account ==''&& this.password==''){
                e.preventDefault();
                this.log.Noaccount =true;
                this.log.Nopassword=true;
            }else if(this.account ==''){
                e.preventDefault();
                this.log.Noaccount =true;
                this.log.Nopassword=false;
            }else if(this.password==''){
                e.preventDefault();
                this.log.Noaccount =false;
                this.log.Nopassword=true;
            }else{
                this.log.Noaccount =false;
                this.log.Nopassword=false;
                alert("目前不開放登入哦: )")
            }
        },
        regcheck(e){
            if(this.Newaccount ==''&& this.Newpassword==''){
                e.preventDefault();
                this.reg.Noaccount =true;
                this.reg.Nopassword=true;
            }else if(this.Newaccount ==''){
                e.preventDefault();
                this.reg.Noaccount =true;
                this.reg.Nopassword=false;
            }else if(this.Newpassword==''){
                e.preventDefault();
                this.reg.Noaccount =false;
                this.reg.Nopassword=true;
            }else{
                this.reg.Noaccount =false;
                this.reg.Nopassword=false;
                alert("目前不開放註冊哦: )")
            }
        }
    },

})