let tampilan = document.getElementById("display").value; //Tampilan dari kalkulator
let memory = "" //Hasil dari operasi matematika yang dilakukan

//Arrow Function Input angka
let numberInput = (value) => {
    //Check string tampilan
    let check1 = tampilan.charAt(tampilan.length - 1);
    let check2 = tampilan.charAt(tampilan.length - 2);
    
    // Jika hasil sudah ditampilkan dan user menginput angka baru maka
    if(memory!==""){ 
        memory=""; // Kosongkan memory
        tampilan = `${value}`; //masukkan value baru tersebut
    }
    // Kondisi yang digunakan ketika string terakhir adalah angka 0
    else if (check1 === "0" && (check2 === "" || check2 === " ")) {
        tampilan = tampilan.slice(0, -1) + value; //Buang angka 0, dan gantikan dengan value yang dimasukkan (contoh 09 menjadi 9)
    } 
    // selain itu maka
    else {
        tampilan = tampilan + value; //masukkan nilainya
    }
    document.getElementById("display").value = tampilan; //Tampilan variabel tampilan ke id display di HTML
}

//Arrow Function Input All Clear (AC)
const allClearInput = () =>{
    memory=""; //Kosongkan memory
    tampilan="0"; //Tampilan ganti menjadi 0
    document.getElementById("display").value = tampilan; //Tampilan variabel tampilan ke id display di HTML
}

//Arrow Function Input Clear Entry (CE)
const clearEntryInput= () => {
    //cek operator (+,-,*,/)
    let operator = tampilan.charAt(tampilan.length-2);
    //Jika sudah ada hasilnya dan tombol CE ditekan maka tampilan akan kembali ke 0
    if(memory!==""){
        tampilan="0";
        memory="";
    }
    //Kondisi yang digunakan jika yang dihapus adalah operator (-, +, *, /)
    else if(tampilan.length>3 &&(operator === "-" ||operator === "+"||operator === "*"||operator === "/")){
        tampilan = tampilan.slice(0, -3); //Buang 3 karakter terakhir
    }
    //Kondisi yang hanya akan digunakan jika tampilan = " - " (tanda kurang saja)
    else if(tampilan.length == 3){
        tampilan = "0";
    }
    //Kondisi yang digunakan jika belum ada hasil
    else if(tampilan.length > 1){
        tampilan = tampilan.slice(0, -1); // Hapus karakter terakhir
    }
    //Selain itu maka ganti menjadi 0
    else{
        tampilan = "0";
    }
    document.getElementById("display").value = tampilan; //Tampilan variabel tampilan ke id display di HTML
}

//Arrow Function Input Operator (+, -, /, *)
const operatorInput = (value) => {
    // Jika sudah ada hasilnya dan user mengimput operator maka tampilkan hasilnya saja beserta dengan operator yang digunakan
    if(memory!==""){
        tampilan = `${memory} ${value} `;  // Contoh 8+8 = 16, kemudian user menginput +, maka menjadi 16 +
        memory = ""; //Kosongkan memory
    }
    // Kondisi yang digunakan jika tampilan masih kosong (0) dan value yang diinput adalah (-)
    else if(tampilan === "0"){
        if(value ==='-'){
            tampilan = tampilan.slice(0, -1) + ` ${value} `; //Buang angka 0 dan gantikan dengan negatif
        }
        else{ //Selain itu masukkan operatornya
            tampilan += ` ${value} `
        }
    }

    //Kondisi yang akan digunakan ketika tampilan != 0 (sudah ada isinya)
    else if(tampilan !=='0'){
        // Jika tampilannya adalah negatif(-), maka operator tidak boleh dimasukkan
        if(tampilan ===' - '){
            tampilan +=''
        }
        // Jika string terakhirnya adalah operator
        else if(isNaN(tampilan.charAt(tampilan.length-2))){
            // Jika (string terakhir bukan operator kurang (-) dan yang ditekan adalah tanda kurang (-)) atau pada urutan dua terakhir pada tampilan adalah titik (.)
            if((tampilan.charAt(tampilan.length-2) !=='-' && value === '-') || tampilan.charAt(tampilan.length-2) ==='.' ){
                tampilan += ` ${value} ` // masukkan operatornya
            }
            // Jika string terakhir bukan operator kurang (-) dan yang ditekan bukan tanda kurang (-)
            else if(tampilan.charAt(tampilan.length-2) !=='-' && value !== '-'){
                tampilan = tampilan.slice(0, -3) + ` ${value} `; // Buang operator paling akhir di tampilan dan gantikan dengan yang diinput user
            }
            // Jika string terakhir adalah operator kurang (-) dan tampilan sebelum (-) adalah tanda titik (.)
            else if(tampilan.charAt(tampilan.length-2) ==='-' && tampilan.charAt(tampilan.length-5) === '.'){
                tampilan = tampilan.slice(0, -3) + ` ${value} `; // Buang operator paling akhir di tampilan dan gantikan dengan yang diinput user
            }
            // Jika string terakhir adalah operator kurang (-) dan tampilan sebelum (-) adalah operator lagi
            else if(tampilan.charAt(tampilan.length-2) ==='-' && isNaN(tampilan.charAt(tampilan.length-5))){
                tampilan +=''; // operator tidak dimasukkan (agar tidak terjadi penumpukkan operator)
            }
            // Jika string terakhir adalah operator kurang (-) dan tampilan sebelum (-) adalah angka
            else if(tampilan.charAt(tampilan.length-2) ==='-' && !isNaN(tampilan.charAt(tampilan.length-5))){
                tampilan = tampilan.slice(0, -3) + ` ${value} `; // Buang operator paling akhir di tampilan dan gantikan dengan yang diinput user
            }

        }
        // jika string terakhirnya adalah tanda titik
        else if(tampilan.charAt(tampilan.length-1) ==='.'){
            tampilan += '' //Maka operator tidak bisa dimasukkan
        }
        //Selain itu masukkan operator seperti biasanya
        else{
            tampilan += ` ${value} `
        }
    }
    document.getElementById("display").value = tampilan; //Tampilan variabel tampilan ke id display di HTML
}

//Arrow Function Input sama dengan (Menampilkan hasil perhitungan)
const result = () => {
    //Mencegah agar tanda titik tidak bertemu dengan =
    if(tampilan.charAt(tampilan.length-1) === "."){
        tampilan += ""
    }

    //selain itu maka hitung hasilnya, tampilkan hasilnya dan simpan ke memory
    else{
        let hasil = eval(tampilan); //lakukan perhitungan
        memory = hasil; //simpan hasil ke memory
        tampilan += ` = ${hasil}`
    }
    document.getElementById("display").value = tampilan; //Tampilan variabel tampilan ke id display di HTML
}

//Arrow Function Input Tanda Titik (Untuk bilangan desimal)
const decimalInput = () => {
    let number = ""; //deklarasi variabel penampung
    //Perulangan untuk mengambil huruf dari belakang
    for(let i = tampilan.length - 1; i >= 0; i--){
        //Jika jumpa dengan spasi atau string kosong, maka proses berhenti
        if(tampilan.charAt(i) === " " || tampilan.charAt(i) === ""){
            break
        }
        //Selain itu massukan kedalam variabel number
        else{
            number += tampilan.charAt(i);
        }
    }
    //Jika ternyata didalam variabel number sudah ada tanda titik atau spasi atau string kosong maka tidak akan bisa menambahkan titik lagi
    if(number.includes(".") || number === " "|| number === ''){
        tampilan += ""
    }
    //Selain itu masukkan tanda titik ke tampilan
    else{
        tampilan += "."
    }
    document.getElementById("display").value = tampilan; //Tampilan variabel tampilan ke id display di HTML
}