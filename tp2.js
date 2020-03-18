
function ex9(x,y){
    if((x<0)||(x>90)||(y<0)||(y>70)){
        return;
    }
    if(((15<=x)&&(x<45)||(60<=x)&&(x<85))&&(60<=y)&&(y<70)){
        console.log("rouge");
    }
    else{
        if((((10<=x)&&(x<25)||(50<=x)&&(x<85))&&(10<=y)&&(y<55))||((25<=x)&&(x<50)&&((10<=y)&&(y<20)||(45<=y)&&(y<55)))){
            console.log("bleu");
        }
        else{
            console.log("jaune et rouge");
        }
    }
}

function argent(n){
    let b=n;
    n=n%100;
    let k=(b-n)/100;
    b=k;
    b="==> ";
    b=b+k;
    b=b+" billet(s) de 100 euros, reste ";
    b=b+n;
    console.log(b);
    b=n;
    n=n%50;
    k=(b-n)/50;
    b=k;
    b="==> ";
    b=b+k;
    b=b+" billet(s) de 50 euros, reste ";
    b=b+n;
    console.log(b);
    b=n;
    n=n%10;
    k=(b-n)/10;
    b=k;
    b="==> ";
    b=b+k;
    b=b+" billet(s) de 10 euros, reste ";
    b=b+n;
    console.log(b);
    b=n;
    n=n%2;
    k=(b-n)/2;
    b=k;
    b="==> ";
    b=b+k;
    b=b+" piece(s) de 2 euros, reste ";
    b=b+n;
    console.log(b);
    b="==> ";
    b=b+k;
    b=b+" piece(s) de 1 euro";
    console.log(b);
}

function miroir(n){
    let b;
    b=0;
    while (n>=10){
        b=b*10+n%10;
        n=Math.trunc(n/10);
    }
    b=b*10+n%10;
    return b;
}

function retourne_chiffres(n){
    let b=n%1000;
    return b;
}

function lampe(A1,A2,A3,A4,A5,A6){
    if((A1==true&&A3==true)||(A1==true&&A4==true&&A5==true)||(A2==true&&A6==true)){
        return true;
    }
    return false;
}

function triangle_videinv(n){
    for(let j=n;j>=1;j--){
        if(j==n){
            ligne(n);
        }
        else{
            if(j==1){
                console.log("*");
            }
            else{
            let a="* ";
            let b=a;
            for(let i=2;i<j;i++){
                b=b+"  ";
            }
            b=b+a;
            console.log(b);
            }
        }
    }
}

function triangle_vide(n){
    for(let j=1;j<=n;j++){
        if(j==n){
            ligne(n);
        }
        else{
            if(j==1){
                console.log("*");
            }
            else{
            let a="* ";
            let b=a;
            for(let i=2;i<j;i++){
                b=b+"  ";
            }
            b=b+a;
            console.log(b);
            }
        }
    }
}

function carre_vide(n){
    for(let j=1;j<=n;j++){
        if(j==1||j==n){
            ligne(n);
        }
        else{
            let a="* ";
            let b=a;
            for(let i=1;i<n-1;i++){
                b=b+"  ";
            }
            b=b+a;
            console.log(b);
        }
    }
}

function triangle_iso(n){
    for(let j=n-1;j>=0;j--){
        ligne(n-j);
    }
}

function carre_plein(n){
    for(let j=1;j<=n;j++){
        ligne(n);
    }
}

function ligne(n){
    let a="* ";
    let b=a;
    for(let i=1;i<n;i++){
        b=b+a;
    }
    console.log(b);
}

function toByte(x, unit){
    switch(unit){
        case 'T':
            x=x*1024;
        case 'G':
            x=x*1024;
        case 'M':
            x=x*1024;
        case 'K':
            x=x*1024;
            break;
    }
    return x;
}

function isPerfect2(n){
    let d=0;
    for(let i=1;i<n;i++){
        (n%i==0)?d=d+i:d=d
    }
    return (n==d);
}


function isPerfect(n){
    let d=0;
    for(let i=1;i<n;i++){
        if (n%i==0){
            d=d+i;
        }
    }
    if (n==d){
        return true;
    }
    return false;
}

function celciusToFahrenheit(celcius){
    let F;
    F =(celcius * 1.8) + 32;
    return F;
}

function limit(x, inf, sup){
    if(inf>x){
        x=inf;
    }
    if(x>sup){
        x=sup;
    }
    return x;
}

function main(){
    console.log(isPerfect2(6)); 	// => true
    console.log(isPerfect2(496)); 	// => true
    console.log(isPerfect2(42)); 	// => false
    console.log(isPerfect2(1337)); // => false*/
    /*let d;
    d=toByte(150,'K');
    console.log(d);
    d=toByte(400,'M');
    console.log(d);
    d=toByte(5,'G');
    console.log(d);
    d=toByte(2,'T');
    console.log(d);*/
}

main();