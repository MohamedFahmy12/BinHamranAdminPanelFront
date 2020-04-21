


// window.onload = function(){ 

//     // let ad_Input = document.getElementById('gregDate')
//     // let hijri_Input = document.getElementById('hijrDate')

//     // ad_Button.addEventListener('click', () => {
//     //     debugger;
//     //     ad_Button.classList.add('active')
//     //     hijri_Button.classList.remove('active')
//     //     console.log('Say hi')
//     //     // ad_Input.classList.remove('d-none')
//     //     // hijri_Input.classList.add('d-none')
//     // })

//     hijri_Button.addEventListener('click', () => {
//         hijri_Button.classList.add('active')
//         ad_Button.classList.remove('active')
//         console.log('Say hi')
//         // hijri_Input.classList.remove('d-none')
//         // ad_Input.classList.add('d-none')
//     })  
// };
$(".date_hijiri_melady .form-group .btn_melady").on('click', function() {
    $('.date_hijiri_melady .form-group.date_hijiri').toggleClass('z_index');
    $('.date_hijiri_melady .form-group.date_melady').removeClass('z_index');
});
$(".date_hijiri_melady .form-group .btn_hijiri").on('click', function() {
    $('.date_hijiri_melady .form-group.date_melady').toggleClass('z_index');
    $('.date_hijiri_melady .form-group.date_hijiri').removeClass('z_index');
});


function readyFn( jQuery ){
$(".date_hijiri_melady .form-group .btn_melady").on('click', function() {
    $('.date_hijiri_melady .form-group.date_hijiri').toggleClass('z_index');
    $('.date_hijiri_melady .form-group.date_melady').removeClass('z_index');
});
$(".date_hijiri_melady .form-group .btn_hijiri").on('click', function() {
    $('.date_hijiri_melady .form-group.date_melady').toggleClass('z_index');
    $('.date_hijiri_melady .form-group.date_hijiri').removeClass('z_index');
});
}


function addGeogerian(){
    let  ad_Button = document.getElementById('ad_button')
    let hijri_Button = document.getElementById('hijri_button')

    let ad_Input = document.getElementById('gregDate')
    let hijri_Input = document.getElementById('hijrDate')

    console.log(ad_Input)
    ad_Button.classList.add('active')
    hijri_Button.classList.remove('active')
    ad_Input.classList.remove('d-none')
    hijri_Input.classList.add('d-none')
}

function addHigri(){
    let  ad_Button = document.getElementById('ad_button')
    let hijri_Button = document.getElementById('hijri_button')
    let ad_Input = document.getElementById('gregDate')
    let hijri_Input = document.getElementById('hijrDate')
    console.log(hijri_Input)
    hijri_Button.classList.add('active')
    ad_Button.classList.remove('active')
    ad_Input.classList.add('d-none')
    hijri_Input.classList.remove('d-none')
}

function addGeogerianMulti(idGre,idHij,btnGre,btnHij){
    let  ad_Button = document.getElementById(btnGre)
    let hijri_Button = document.getElementById(btnHij)

    let ad_Input = document.getElementById(idGre)
    let hijri_Input = document.getElementById(idHij)

    console.log(ad_Input)
    ad_Button.classList.add('active')
    hijri_Button.classList.remove('active')
    ad_Input.classList.remove('d-none')
    hijri_Input.classList.add('d-none')
}

function addHigriMulti(idGre,idHij,btnGre,btnHij){
    let  ad_Button = document.getElementById(btnGre)
    let hijri_Button = document.getElementById(btnHij)
    
    let ad_Input = document.getElementById(idGre)
    let hijri_Input = document.getElementById(idHij)
    console.log(hijri_Input)
    hijri_Button.classList.add('active')
    ad_Button.classList.remove('active')
    ad_Input.classList.add('d-none')
    hijri_Input.classList.remove('d-none')
}