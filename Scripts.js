//** DB den gelen kullanici bilgileri
var defaultUser={
    userName:"admin",
    userPassword:"12345"
}

//** Kullanicidan veri girisi alma
var name=prompt("Kullanici adinizi giriniz: ")
var password=prompt("Sifrenizi giriniz: ")

//** Giris için olusturulan fonksiyonu cagirma
access()


function access(){
    while(true){
        if(name===defaultUser.userName && password===defaultUser.userPassword){
            document.write("Giris basarili.")
            document.write("<br><br>"+"Hosgeldin "+defaultUser.userName)
            break
        }
        else{
            alert("Lutfen tekrar deneyiniz...")
            var name=prompt("Kullanici adinizi giriniz: ")
            var password=prompt("Sifrenizi giriniz: ")
        }
    }
}