function validateForm() {
    let input = document.getElementById('main-input');
    console.log(input.value);
    console.log("berhasil di eksekusi")
    
    if(input.value == "") {
        alert('Input tidak boleh kosong');
    } else {
        let calc = convertToCelcius(input.value);
        //hasilnya
        document.getElementById('main-result').value = calc;
        document.getElementById('cara-konversi').value = 'Cara Konversi : F = ' + '(' + (input.value) + ' * 9/5 ) + 32';
    }
}
let convertToCelcius = (input) => {
    return (input * 9/5) + 32;
}
