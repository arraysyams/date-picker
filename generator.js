// @ts-nocheck

var btPicker = document.getElementById("btPick");
var btGoToday = document.getElementById("btToday");
var txtOut = document.getElementById("txtRes");

btGoToday.addEventListener("click", function () {
    btPicker.valueAsNumber = Date.now();
    generateText();
})

btPicker.addEventListener("change", generateText)

function getBulan (arrMonth) {
    let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return bulan[arrMonth];
}

function getBulanPendek (arrMonth) {
    let bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    return bulan[arrMonth];
}

function getNamaHari (arrDay) {
    let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    return hari[arrDay];
}

function generateText () {
    var tanggal = new Date(btPicker.valueAsNumber);
    let out = getNamaHari(tanggal.getDay()) + ", " + tanggal.getDate() + " " + getBulan(tanggal.getMonth()) + " " + tanggal.getFullYear();
    txtOut.textContent = out;
}