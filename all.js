const submit =document.querySelector('.btn')
const names =document.querySelector('.name')
const price =document.querySelector('.price')
const sizes =document.querySelectorAll('.size')
const notes =document.querySelector('.notes')
const list =document.querySelector('.content')
let size =Array.from(sizes);
let datas=JSON.parse(localStorage.getItem('coffeeshop')) || [];


//載入資料
function updata(){
    let str=`<h2>目前訂單列表</h2>
    <li>
        <p>name</p>
        <p>price</p>
        <p>size</p>
        <p>notes</p>
        <P></P>
        <P></P>
    </li>`;
    for(let i =0 ;i<datas.length ;i++){
        str+=`<li >
        <p>${datas[i].names}</p>
        <p>${datas[i].price}</p>
        <p>${datas[i].sized}</p>
        <p>${datas[i].notes}</p>
        <p><a href="#" data-edi="${i}" >${datas[i].type}</a></p>
        <p><a href="#" data-num="${i}" >刪除</a></p>
        </li>`
    }
    list.innerHTML=str;
}; 
//新增資料
function newData(e){
    e.preventDefault();
    let sized = size.filter(siz => siz.checked == true);
    if(names.value =='' || price.value ==''){
        if(names.value =='' && price.value ==''){
            alert('品項名稱與價格不能為空')
        }else if(names.value ==''){
            alert('品項名稱不能為空')
        }
        else{
            alert('價格不能為空')
        }
    }else{
        datas.push({names:names.value , price:price.value , sized:sized[0].value , notes:notes.value , type:'編輯'})
        let values = JSON.stringify(datas);
        localStorage.setItem('coffeeshop',values);
        updata();
    }
}
//刪除資料
function del(e){
    e.preventDefault();
    if(e.target.tagName !=='A'){
        return;
        }else if(e.target.outerText =='刪除'){
        let num =e.target.dataset.num;
        datas.splice(num,1);
        let values = JSON.stringify(datas);
        localStorage.setItem('coffeeshop',values);
        updata();
       
    }else{
        return;
    }
  
};
//編輯資料
function edit(e){
    e.preventDefault();

    if(e.target.tagName !=='A'){
        return;
        }else if(e.target.outerText =='編輯'){
        changeitem(e);
       
    }else if(e.target.outerText =='確定'){
        let edi =e.target.dataset.edi;
        let ediName =document.querySelector('.ediName')
        let ediprice =document.querySelector('.ediprice')
        let edisize =document.querySelector('.edisize')
        let edinotes =document.querySelector('.edinotes')

        console.log(ediName.dataset)
        if(ediName.value =='' || ediprice.value =='' || edisize.value =='' ){
            alert('欄位不能為空')
        }else if(edi !=ediName.dataset.coffee){
            alert('請先確定最上方的編輯')
        }else{
            if(edisize.value !=='L' && edisize.value !=='M' && edisize.value !="S" ){
                alert('size輸入錯誤')
            }
            else{
                
                datas[edi].names=ediName.value
                datas[edi].price=ediprice.value
                datas[edi].sized=edisize.value
                datas[edi].notes=edinotes.value
                datas[edi].type='編輯'
                let values = JSON.stringify(datas);
                localStorage.setItem('coffeeshop',values);
                updata();    
            }
        }
    }else{
        return;
    }
   
};
//編輯資料的輸入窗
function changeitem(e){
    let edi =e.target.dataset.edi;
    datas[edi].names=`<input type="text" name="name" placeholder="請輸入品項名稱" class="ediName" data-coffee="${edi}" value="${ datas[edi].names}">`
    datas[edi].price=`<input type="number" name="price" placeholder="請輸入價格" class="ediprice" value="${ datas[edi].price}">`
    datas[edi].sized=`<input type="text" name="price" placeholder="L / M /S" class="edisize" value="${ datas[edi].sized}">`
    datas[edi].notes=`<textarea name="notes" class="edinotes" placeholder="備註，非必填">${datas[edi].notes}</textarea>`
    datas[edi].type='確定'
    let values = JSON.stringify(datas);
    localStorage.setItem('coffeeshop',values);
    updata();
}



updata();
submit.addEventListener('click',newData);
list.addEventListener('click',del);
list.addEventListener('click',edit);
