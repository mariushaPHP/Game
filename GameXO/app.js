const boxes = document.querySelectorAll('.box');

let mas = [true, true, true,
           true, true, true,
           true, true, true];
    
const lentelesMaysvas = [
    { zaidejas: 0, tuscias: true},
    { zaidejas: 0, tuscias: true},
    { zaidejas: 0, tuscias: true},
    { zaidejas: 0, tuscias: true},
    { zaidejas: 0, tuscias: true},
    { zaidejas: 0, tuscias: true},
    { zaidejas: 0, tuscias: true},
    { zaidejas: 0, tuscias: true},
    { zaidejas: 0, tuscias: true}
]

//------------------------------------------------------
function zaidimoAlgoritmukas(item, arr){
    let zaidejas = 2;
    let galas = true;
    
    for (let i = 0; i < item.length; i++) {
        
        item[i].addEventListener('click', function() {

            if(arr[i].tuscias == true && galas){
                arr[i].zaidejas = kurisZaidejas(zaidejas);
                zaidejas = arr[i].zaidejas;
                paspaudimas(item[i], arr[i].zaidejas);
                arr[i].tuscias = false;
            }
            if(linija(arr) != false){
                console.log(linija(arr))
                console.log(`Laimejo zaidejas ${linija(arr).zaidejas} uzbraukes linija ${linija(arr).linija}`);
                boxes[linija(arr).linija[0]].style.backgroundColor = 'red';
                boxes[linija(arr).linija[1]].style.backgroundColor = 'red';
                boxes[linija(arr).linija[2]].style.backgroundColor = 'red';
                document.querySelector('.container').style.visibility = 'visible';
                galas = false;
            }
        });          
    } 
}
//------------------------------------------------------
function kurisZaidejas(i){
    if(i % 2 == 0) return 1;
    else return 2;
}
//------------------------------------------------------
function paspaudimas(langelis, zaidejas){
    langelis.style.backgroundColor = 'white';
    if(zaidejas == 1) langelis.innerHTML = `<p class="simbolis">X</>`;
    else langelis.innerHTML = `<p class="simbolis">O</>`;
    
}
//------------------------------------------------------
zaidimoAlgoritmukas(boxes, lentelesMaysvas);
//------------------------------------------------------
function pabaiga(arr){
    let baigta = 0;
    for(let i in arr){
        if(arr[i] == true) baigta += 1;
        console.log(baigta)
    }
    if(baigta > 0) return true;
    else return false;
}
//------------------------------------------------------
function linija(arr, zaidejoNr){
    if(arr[0].zaidejas == 1 && arr[1].zaidejas == 1 && arr[2].zaidejas == 1) return {zaidejas: 1, linija: [0, 1, 2]};
    if(arr[3].zaidejas == 1 && arr[4].zaidejas == 1 && arr[5].zaidejas == 1) return {zaidejas: 1, linija: [3, 4, 5]};
    if(arr[6].zaidejas == 1 && arr[7].zaidejas == 1 && arr[8].zaidejas == 1) return {zaidejas: 1, linija: [6, 7, 8]};

    if(arr[0].zaidejas == 1 && arr[3].zaidejas == 1 && arr[6].zaidejas == 1) return {zaidejas: 1, linija: [0, 3, 6]};
    if(arr[1].zaidejas == 1 && arr[4].zaidejas == 1 && arr[7].zaidejas == 1) return {zaidejas: 1, linija: [1, 4, 7]};
    if(arr[2].zaidejas == 1 && arr[5].zaidejas == 1 && arr[8].zaidejas == 1) return {zaidejas: 1, linija: [2, 5, 8]};

    if(arr[0].zaidejas == 1 && arr[4].zaidejas == 1 && arr[8].zaidejas == 1) return {zaidejas: 1, linija: [0, 4, 8]};
    if(arr[2].zaidejas == 1 && arr[4].zaidejas == 1 && arr[6].zaidejas == 1) return {zaidejas: 1, linija: [2, 4, 6]};

    if(arr[0].zaidejas == 2 && arr[1].zaidejas == 2 && arr[2].zaidejas == 2) return {zaidejas: 2, linija: [0, 1, 2]};
    if(arr[3].zaidejas == 2 && arr[4].zaidejas == 2 && arr[5].zaidejas == 2) return {zaidejas: 2, linija: [3, 4, 5]};
    if(arr[6].zaidejas == 2 && arr[7].zaidejas == 2 && arr[8].zaidejas == 2) return {zaidejas: 2, linija: [6, 7, 8]};

    if(arr[0].zaidejas == 2 && arr[3].zaidejas == 2 && arr[6].zaidejas == 2) return {zaidejas: 2, linija: [0, 3, 6]};
    if(arr[1].zaidejas == 2 && arr[4].zaidejas == 2 && arr[7].zaidejas == 2) return {zaidejas: 2, linija: [1, 4, 7]};
    if(arr[2].zaidejas == 2 && arr[5].zaidejas == 2 && arr[8].zaidejas == 2) return {zaidejas: 2, linija: [2, 5, 8]};

    if(arr[0].zaidejas == 2 && arr[4].zaidejas == 2 && arr[8].zaidejas == 2) return {zaidejas: 2, linija: [0, 4, 8]};
    if(arr[2].zaidejas == 2 && arr[4].zaidejas == 2 && arr[6].zaidejas == 2) return {zaidejas: 2, linija: [2, 4, 6]};
    
    return false;
}