let minus=document.getElementsByClassName('minus-btn')
let plus=document.getElementsByClassName('plus-btn')
let like=document.getElementsByClassName('like')
let quantity=document.getElementsByClassName('Quant')
let del=document.querySelectorAll('.delete')
let price=document.getElementsByClassName('price')
let tot=document.getElementById('finalprice')

cal()

for (let i = 0; i < like.length; i++) {

    like[i].addEventListener("click", function () {
        let color = document.getElementsByClassName('like')[i].style.color
        if (color == "red") {
            document.getElementsByClassName('like')[i].style.color = "black"
        } else { document.getElementsByClassName('like')[i].style.color = "red" }
    })
}

for(let i=0; i<minus.length;i++){
    minus[i].addEventListener("click",function(){
        if (quantity[i].value>0){
            quantity[i].value--
        }
        cal()
    })
}
for (let i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function(){
        quantity[i].value++
        cal()
    })
}
for (let i=0;i<del.length;i++){
    del[i].addEventListener("click",function(){
            del[i].parentElement.remove()
            cal()
    })
}

function cal(){
    let result=0
    for (let i = 0; i < price.length; i++) {
        result = result + ((price[i].innerHTML) * (quantity[i].value))
    }
    document.getElementById('finalPrice').value = result
}