const decToBin = document.querySelector("#dtb")
const binToDec = document.querySelector("#btd")
const input = document.querySelector("#input")
const text = document.querySelector("#text")
const iner = document.querySelector("#in")
const div = document.querySelector("#div")
const card = document.createElement("card")
const cardBody = document.createElement("cardbody")
const alarmBody = document.createElement("uyarı")
const alarm = document.createElement("alarm")
run()
function run() {
    decToBin.addEventListener("click", decBin)
    binToDec.addEventListener("click", binDec)
    input.addEventListener("keyup", yesil)
    input.addEventListener("keyup", kırmızıEkleSil)
    iner.addEventListener("click", indi)
}
function decBin() {
    //İnen menüden Decimal To Binary seçilirse:a
    text.textContent = decToBin.textContent
    text.addEventListener("click", işlemDecimalTo)
    decToBin.className = "dropdown-item disabled"
    binToDec.classList.remove("disabled")
}
function binDec() {
    //İnen menüden Binary To Decimal seçilirse:1
    text.textContent = binToDec.textContent
    text.addEventListener("click", işlemBinaryTo)
    binToDec.className = "dropdown-item disabled"
    decToBin.classList.remove("disabled")
}
function işlemDecimalTo() {
    //DecToBin işlemini başlatır
    if (input.value !== "" && input.value > 1) {
        //Girilen değer boş değilse ve 1 den büyükse (değer>=1 ise çalışmıyor) çalışır
        if (text.textContent == "Decimal To Binary") {
            let binaryStr = ""
            let num = Number(input.value)
            while (true) {
                binaryStr = String(num % 2) + binaryStr;
                num = Math.floor(num / 2);
                if (num == 1) {
                    binaryStr = "1" + binaryStr;
                    break;
                }
            }
            //Eski sonucu temizler
            card.remove()
            //Yeni sonucu yazdırır
            sonuçEkle(binaryStr)
        }
    }
}
function işlemBinaryTo() {
    //BinToDec işlemini başlatır
    if (input.value !== "" && input.value >= 0) {
        //Girilen değer boş değilse ve >=0 ise çalışır
        if (text.textContent == "Binary To Decimal") {
            let toplam = 0;
            let ust = 0;
            for (let i = input.value.length - 1; i >= 0; i--) {
                if (Number(input.value.charAt(i)) != 0) {
                    toplam += Number(input.value.charAt(i)) * Math.pow(2, ust);
                }
                ust++;
            }
            //Eski sonucu temizler
            card.remove()
            //Yeni sonucu yazdırır
            sonuçEkle(toplam)
        }
    }
}
function yesil() {
    //Girilen değer sayı ise buton yeşil olur
    if (text.textContent !== "Lütfen seçim yapınız" && input.value > 0) {
        text.className = "btn bg-success border border-dark"
    } else {
        text.classList.remove("bg-success")
    }
}
function kırmızıEkleSil() {
    //Girilen değer sayı değil ise input kırmızı olur
    if (input.value >= 0) {
        input.classList.remove("bg-danger")

    } else if (input.value !== Number() && input.value !== "") {
        input.className = "form-control bg-danger border border-dark rounded-right"
        uyar()
        setTimeout(function () {
            uyarıKaldır()
        }, 2500)

    }
}
function indi() {
    //İner menünüyü ilk tıktan sonra yeşilden normale alır
    if (text.textContent == "Lütfen seçim yapınız") {
        iner.className = "btn btn-outline-success dropdown-toggle dropdown-toggle-split"
    }
}
function sonuçEkle(e) {
    //sonucu yazdırır
    card.className = "col-12  card border border-dark mt-2"

    cardBody.className = "card-body py-1 pl-0"
    cardBody.innerHTML = "Sonuç : " + e

    card.appendChild(cardBody)
    div.appendChild(card)
}
function uyar() {
    //uyarıyı ekler
    alarmBody.className = "card-body py-1 pl-0"
    alarmBody.innerHTML = "Lütfen geçerli bir sayı giriniz ! (ör:1010)"
    alarm.appendChild(alarmBody)
    div.appendChild(alarm)
    alarm.className = "col-12 card border border-dark mt-2 alert alert-danger"
    
}
function uyarıKaldır() {
    //uyarıyı kaldırır
    alarm.remove()
}