cartObj()
let a = cartObj()
let sum=0
let name=''
for(key in a){
    for(key2 in a[key]){
        if(key2=='price'){
            sum=sum+a[key][key2]    
        }else{
            name = name +' '+key +' '+ a[key][key2]+','
        }
    }
}
console.log( `Sizning buyurtmangiz: ${name}  | yetqazib berish xizmati
bilan bo'lgan narx ${sum+9000} yetkazish xaqqi (9000)`);
