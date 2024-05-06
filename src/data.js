const data = [
    {
      question: "Buxgalteriya hisobining predmeti deb tushuniladi:",
      answer: "Korxona va tashkilotning xo‘jalik faoliyati.",
    },
    {
      question: "Xo‘jalik faoliyatini ta'min etuvchi ob'ektlarga kiradi:",
      answer: "Xo‘jalik mablag‘lari.",
    },
    {
        question: "Buxgalteriya hisobining turlari:",
        answer: "Moliyaviy va boshqaruv.",
      },
      {
        question: "Moliyaviy hisobning mahsuli-bu:",
        answer: "Moliyaviy hisobot.",
      },
      {
        question: "O‘zbekiston Respublikasida moliyaviy hisob tartibga solinadi:",
        answer: "Buxgalteriya hisobining milliy andozalari bilan.",
      },
      {
        question: "Daromadni kamaytirib xarajatni ko‘paytirib buxgalter buzdi:",
        answer: "Ehtiyotkorlik (konservatizm) prentsipini.",
      },
      {
        question: "Buxgalteriya hisobi uslubining elementiga kirmaydi:",
        answer: "Guruhlash",
      },
      {
        question: "Aktivlarni holati va harakati pul ifodasida aks ettiriladi:",
        answer: "Balansda",
      },
      {
        question: "Jami korxona balansida mavjud bo‘lgan aktivlari nimaga teng bo‘ladi?",
        answer: "Aktiv=Xususiy kapital+Majburiyatlar.",
      },
      {
        question: "Balansning aktivida aks ettiriladi:",
        answer: "Xo‘jalik mablag‘lari",
      },
      {
        question: "Balans aktivining 2- bo‘limida aks ettirilmaydi:",
        answer: "Ustav kapitali",
      },
      {
        question: "Bularning qaysi birib balans passivining 2-bo‘limiga kirmaydi?",
        answer: "Pul mablag‘lari",
      },
      {
        question: "Materiallarning asosiy ishlab chiqarishga berilishi balansdagi qaysi tip o‘zgarishga ta'luqli?",
        answer: "1-tipga",
      },
      {
        question: "Buxgalteriya hisobi schyotlari-bu:",
        answer: "Aktivlar va ular manbalari holati va harakatini hisobot davrida pul ifodasida umumlashtirib aks ettirish va iqtisodiy guruhlash usuli.",
      },
      {
        question: "Aktiv schyotning debetida aks ettiriladi:",
        answer: "Sal’do va aktivlarning ko‘payishi",
      },
      {
        question: "Passiv schyotning kreditida aks ettiriladi:",
        answer: "Saldo va passiv schyotning ko‘payishi",
      },
      {
        question: "Ikki yoqlama yozuv-bu:",
        answer: "Aynan bir so‘mmani bitta schyotning debetida va boshqa schyotning kreditida aks ettirish",
      },
      {
        question: "Hujjatlashtirish-bu:",
        answer: "Faktlar va hodisalarni ma'lum hujjatlar yordamida rasmiylashtirish usuli",
      },
      {
        question: "Hujjatlar aylanishini to‘g‘ri tashkil etilganligiga kim javobgar?",
        answer: "Bosh buxgalter",
      },
      {
        question: "Korxonaning hisob siyosati-bu:",
        answer: "Korxona tomonidan buxgalteriya hisobini yuritishning jamlangan usul va uslublarning yig‘indisi.",
      },
      {
        question: "Bir yilda moddiy javobgar shaxslar ikki marta almashdi, bu ularning mehnat ta'tiliga taalluqli emas.Qanday inventarizatsiya turi o‘tqazilgan?",
        answer: "Rejadan tashqari",
      },
      {
        question: "Kalьkulyatsiya - bu:",
        answer: "Aktivlarning sotib olish, ishlab chiqarish va sotish qiymatlarini hisoblab topish usuli",
      },
      {
        question: "Baholashning LIFO usuli – bu",
        answer: "Oxirgi kirim qilingan xom – ashyo va materiallar birinchi chiqim qilinadi",
      },
      {
        question: "Baholashning FIFO usulu - bu",
        answer: "Birinchi kirim qilingan xom – ashyo va materiallar birinchi chiqim qilinadi",
      },
      {
        question: "Hisob registrlarini qanday ta'riflaysiz?",
        answer: "Dastlabki hujjatlarda qayd etilgan muomalalar to‘g‘risidagi ma'lumotlarni ro‘yxatga olish va guruhlash uchun moslangan maxsus jadvallar",
      },
      {
        question: "Kassa xo‘jaligini tashkil etish uchun kim javobgar?",
        answer: "Rahbar",
      },
      {
        question: "Pul mablag‘lari hisob varag‘i (schyoti):",
        answer: "Doimiy schet",
      },
      {
        question: "Hisob-kitob schetidan pudratchilarga pul o‘tkazildi, qanday provodka beriladi?",
        answer: "Debet 6010 Kredit 5110",
      },
      {
        question: "Pul mablaglari - bu:",
        answer: "B va c javoblarda keltirilgan xususiyatlarga ega bulgan aktivlar",
      },
      {
        question: "Buxgalteriya hisobining ob'ektlariga nimalar kiradi?",
        answer: "Xo‘jalik faoliyatini tashkil etuvchi ob'ektlar.",
      },
      {
        question: "Xo‘jalik faoliyati deganda tushuniladi:",
        answer: "Ta'minot, ishlab chiqarish va sotish jarayonining yig‘indisi.",
      },
      {
        question: "Buxgalteriya hisobining ob'ektlariga kirmaydi:",
        answer: "Texnologik chizmalar.",
      },
      {
        question: "Moliyaviy hisob:",
        answer: "Qat'iy tartibga solinadigan hisob.",
      },
      {
        question: "Kimlar moliyaviy hisob axborotlari foydalanuvchilari emas?",
        answer: "Kassirning qarindoshlari.",
      },
      {
        question: "Baholash printsipi deganda nima tushuniladi?",
        answer: "Pul birligida o‘lchash.",
      },
      {
        question: "Buxgalteriya hisobining uslubi deganda tushuniladi:",
        answer: "Usullar yig‘indisi bo‘lib, ular yordamida ma'lumotlarni ketma-ket yig‘ish, ro‘yxatga olish, ishlov berish, umumlashtirish va uzatish amalga oshiriladi.",
      },
      {
        question: "Balans bu-:",
        answer: "Aktivlar va ularni tashkil topish manbalarining ma'lum sanadagi tengligi.",
      },
      {
        question: "Balans tarkib topgan:",
        answer: "Moddalar, schyotlar va bo‘limlardan.",
      },
      {
        question: "Balansning aktivida aks ettiriladi:",
        answer: "Uzoq muddatli aktivlar.",
      },
      {
        question: "Balans passivining 1-bo‘limida aks ettiriladi:",
        answer: "O‘z mablag‘larining manbalari.",
      },
      {
        question: "Balans valyutasi-bu:",
        answer: "Korxona aktivlarining hamma so‘mmasi.",
      },
      {
        question: "Kassasadan berilgan ish haqi balansdagi qaysi tip o‘zgarishga ta'luqli?",
        answer: "1-tipga.",
      },
      {
        question: "Ta'minotchilarga olingan tovarlar uchun hisob raqamidan pul ko‘chirishda balansdagi qaysi tip o‘zgarishsodir bo‘ladi?",
        answer: "4-tipga.",
      },
      {
        question: "Aktiv schyot nimani holati va harakatini aks ettirishga mo‘ljallangan?",
        answer: "Korxona aktivlarini.",
      },
      {
        question: "Aktiv schyotlarning oxirgi salьdosi qanday aniqlanadi?",
        answer: "Boshlang‘ich salьdo+debet oboroti-kredit oboroti.",
      },
      {
        question: "Passiv schyotning oxirgi salьdosi aniqlanadi:",
        answer: "Boshlang‘ich salьdo+kredit oboroti-debet oboroti.",
      },
      {
        question: "Analitik schyotlar nima uchun kerak?",
        answer: "To‘laroq ma'lumotlar olish uchun.",
      },
      {
        question: "Oddiy provodkada nechta schyot qatnashadi?",
        answer: "Ikkita schyot.",
      },
      {
        question: "Hujjat-bu:",
        answer: "Biron bir faktni sodir etilishining yozma guvohi yoki kelgusida sodir etiladigan faktga beriladigan huquq.",
      },
      {
        question: "Quyidagilarni qaysisi buxgalteriya hisobining shakllariga kirmaydi?",
        answer: "Jadvalli",
      },
      {
        question: "Uzoq muddatli aktivlarga taaluqli emas:",
        answer: "Tovar moddiy boyliklar.",
      },
      {
        question: "Quyidagilarni qaysi biri ishlab chiqarish zaxiralariga kirmaydi?",
        answer: "Nomoddiy aktivlar",
      },
      {
        question: "Quyidagilarni qaysi biri tayyor mahsulotga tuliq ta'sif beradi?",
        answer: "Qayta ishlashni talab qilmaydigan va TNB (OTK) dan o‘tib omborga qabul qilingan mahsulot.",
      },
      {
        question: "Kassadagi pul mablag‘lari uchun kim javobgar?",
        answer: "Kassir",
      },
      {
        question: "Bankda hisob raqami ochish uchun quyidagi hujjatlardan qaysisi taqdim etilmaydi?",
        answer: "Joylashgan joyidan ma'lumotnoma",
      },
      {
        question: "Buxgalteriya hisobida baholash - …..",
        answer: "xo‘jalik mablag‘lari, majburiyatlar va xo‘jalik jarayonlarini pul o‘lchov birligida aks ettirish usulidir.",
      },
      {
        question: "Ta'minotchilardan xom ashyo sotib olindi, lekin puli to‘lanmadi, ushbu muomalaga qanday provodka beriladi?",
        answer: "Debet 1010 Kredit 6010",
      },
      {
        question: "Kassa muomalalarini amalga oshirish uchun qanday hujjatlar tuziladi",
        answer: "“Kassa kirim orderi”, “Kassa chiqim orderi”, “kirim va chiqim orderlarini qayd qilis hjurnali” va “kassa kitobi”",
      },
      {
        question: "Ishlash davrining davomiyligiga kura korxona va tashkilotlarning barcha ishlovchilari qanday guruxlarga bulinadi?",
        answer: "asosiy va yordamchi xodimlar",
      },
      {
        question: "Xodimlarni ishga olishda qanday xukukiy xujjat tuziladi?",
        answer: "Korxona raxbari va xodim urtasida mexnat shartnomasi",
      },
      {
        question: "Xodimlarning ishga kelishi qaysi xujjat asosida xisobga olinadi?",
        answer: "Ishga kelish xisobi tabeli",
      },
      {
        question: "Mexnatga xak tulashning qanday tizimlari bor?",
        answer: "Tarif va tarifsiz",
      },
      {
        question: "Mexnatga xak tulashning kanday shakllari bor?",
        answer: "Brigada va individual",
      },
      {
        question: "Xodimga bajargan ishi uchun tulanadigan xak qaysi gurux daromadlar tarkibiga kiradi?",
        answer: "mexnatga xak tulash tarzidagi daromadlar",
      },
      {
        question: "Xodimga mexnat ta’tili uchun tulanadigan xak kaysi gurux daromadlar tarkibiga kiradi?",
        answer: "ishlanmagan vakt uchun xak tulash tarzidagi daromadlar",
      },
      {
        question: "Materiallar",
        answer: "ishlab chikarishning moddiy negizini tashkil etadi",
      },
      {
        question: "Quyidagilarning kaysi biri zaxiraning tannarxiga kirmaydi?",
        answer: "Direktorning ish xaki",
      },
      {
        question: "Quyidagilarni kaysi biri tug’ri?",
        answer: "FIFO tannarxni kamaytiradi",
      },
      {
        question: "Kelib tushgan ishlab chikarish zaxiralarining butlugi uchun javobgar",
        answer: "Ombor mudiri",
      },
      {
        question: "Materiallar xarakatini rasmiylashtirish uchun Solik Kodeksida kanday xujjat kuzda tutilgan",
        answer: "Nakladnoy",
      },
      {
        question: "Arzon baxoli inventarga kiradi",
        answer: "Togora",
      },
      {
        question: "Arzon baxoli buyumning xisobdan chikarilishi nimaga bog’lik?",
        answer: "Yarokliligiga",
      },
      {
        question: "Investisiyaga kiradi...",
        answer: "Korxonaning moliyaviy kuyilmalari",
      },
      {
        question: "Quyidagilarning kaysi biri aksiyaning nominal kiymatini tashkil kiladi?",
        answer: "Aksiyaning sotish baxosi",
      },
      {
        question: "Quyidagilarning kaysi biri tug’ri?",
        answer: "Moliyaviy investisiyalar tulik kaytariladi",
      },
      {
        question: "Aksiyalar",
        answer: "Dividend berish uchun sotib olinadi",
      },
      {
        question: "Qarz sifatida kiritilgan investisiyalarga kirmaydi...",
        answer: "Kredit sifatida berilgan pul mablaglari",
      },
      {
        question: "Quyidagilarning qaysi biri asosiy vositalarga kirmaydi?",
        answer: "Gudvill",
      },
      {
        question: "Quyidagilarning qaysi biri boshlang’ich qiymatga kirmaydi?",
        answer: "Direktorning ish haqi",
      },
      {
        question: "Bepul kelib tushgan asosiy vosita",
        answer: "Korxona xarajatlarini kamaytirishga olib boriladi",
      },
      {
        question: "Ta’sischilardan olingan asosiy vosita kirim qilinadi",
        answer: "Kelishuv bahosida",
      },
      {
        question: "Kapital investisiyalar",
        answer: "asosiy vositalarning qiymatini oshiradi",
      },
      {
        question: "Asosiy vositalar bo’yicha eskirish me’yorini kim belgilaydi?",
        answer: "Moliya Vazirligi",
      },
      {
        question: "Asosiy vositalar amortizasiyasini hisoblashning qaysi usuli 'Soliq Kodeksi' negiziga olingan?",
        answer: "Bir maromda hisoblash usuli",
      },
      {
        question: "Moliyaviy lizing – bu...",
        answer: "Bir yildan ko’p muddatga ijaraga berilgan asosiy vositalar",
      },
      {
        question: "Quyidagilarning kaysi biri ishlab chikarishga doir nomoddiy aktivlarga kirmaydi?",
        answer: "“1-S “ buxgalteriya dasturi",
      },
      {
        question: "Bepul kelib tushgan nomoddiy aktiv",
        answer: "Korxona xarajatlarini kamaytirishga olib boriladi",
      },
      {
        question: "Boshqaruv hisobi axborotlari qanday maqsadda foydalaniladi:",
        answer: "Menedjerlar qarorlar qabul qilish hamda rejalashtirish uchun",
      },
      {
        question: "To‘g‘ridan-to‘g‘ri harajatlar bu:",
        answer: "Aniq tannarx ob’ektiga bevosita identifikatsiyalanadigan harajatlar",
      },
      {
        question: "Bilvosita harajatlar bu:",
        answer: "Yordamchi ishlab chikarish harajatlari va boshqa harajatlar",
      },
      {
        question: "Boshqaruv hisobining ob’ektlarini aniqlang:",
        answer: "Bo‘limlar, sexlar, uchastkalar",
      },
      {
        question: "Quyidagilarning kaysi biri tug’ri",
        answer: "Maxsulotlar tannarxi buyicha xisobga olinadi",
      },
      {
        question: "Maxsulotni sotishdan olingan mos ushbu solikni tulovchi korxonada",
        answer: "Olinadigan schyotlar summasiga kiradi",
      },
      {
        question: "Xususiy kapital - bu...",
        answer: "korxonaning majburiyatlari chegirib tashlangandan sung kolgan aktivlari",
      },
      {
        question: "Quyidagilarning kaysi biri tug’ri?",
        answer: "Ustav kapitali korxona ta’sis etilgan sanada vujudga keladi",
      },
      {
        question: "Quyidagilarning kaysi biri kushilgan kapitalga olib boriladi?",
        answer: "Ta’sis badalini kiritishda vujudga kelgan kurslar urtasidagi fark",
      },
      {
        question: "Quyidagilarni kaysi biri rezerv kapitaliga kiriti¬ladi?",
        answer: "Bepul kelib tushgan mulk",
      },
      {
        question: "Sotib olingan xususiy aksiyalar",
        answer: "Kushilgan kapitalni kupaytiradi",
      },
      {
        question: "Quyidagilarning kaysi biri maksadli tushumga kirmaydi?",
        answer: "Rezerv kapitaliga ajratma",
      },
      {
        question: "Kelgusi xarajatlar va tulovlar uchun rezerv",
        answer: "Taksimlanmagan foyda xisobidan shakllantiriladi",
      },
      {
        question: "Majburiyatlar - bu",
        answer: "korxonaning qarzlari",
      },
      {
        question: "Quyidagilarning qaysi biri to’gri",
        answer: "Majburiyatlar milliy valyutada sof kiymatda balansda aks ettiriladi",
      },
      {
        question: "Quyidagilarni qaysi biri korxona uchun kreditor bo’lishi mumkin emas?",
        answer: "Ta’sischi bo’lishga xoxish bildirgan  shaxs",
      },
      {
        question: "Valyuta kurslaridagi ijobiy farqlar?",
        answer: "Majburiyatlarni ko’paytiradi",
      },
      {
        question: "Ish haqi bo’yicha berilgan  bo’nak",
        answer: "majburiy ushlanmalarga kiradi",
      },
      {
        question: "To’lanadigan foizlar va dividendlarlar bo’yicha majburiyatlar",
        answer: "korxona xarajati hisoblanadi",
      },
      {
        question: "Quyidagilarning kaysi biri tug’ri?",
        answer: "Sotishdan olingan foyda - bu sotishdan olingan yalpi tushum va KKS urtasidagi fark",
      },
      {
        question: "Sotishdan olingan daromad -1 000 000 000 sum, sotish tannarxi 500 000 000 sum, davr xarajatlari -300 000 000 sum, asosiy faoliyatdan olingan boshka daromadlar -50 000 000 sum, dividendlar - 10 000 000 sum, tulangan foizlar -30 000 000 sum, ijobiy kurs farki 15 000 000 sum, solik bazasiga kayta kushiladigan xarajatlar - 60 000 000 sum, solik buyicha imtiyozlar - 20 000 000 sum. Asosiy faoliyatdan olingan foyda summasini toping",
        answer: "300 000 000 sum",
      },
      {
        question: "Choraklik xisobotga kiradi:",
        answer: "a va b javobda keltirilgan hisobot shakllari",
      },
      {
        question: "Mikrofirma va kichik korxonalar moliyaviy xisobotni tuzadi:",
        answer: "yil yakuni buyicha",
      },
      {
        question: "Yillik xisobot topshiriladi:",
        answer: "15 fevralgacha",
      },
      {
        question: "Korxona ustav kapitali balansning kaysi tomoni va bulimida aks ettiriladi",
        answer: "Passiv, 1-bulimda",
      },
      {
        question: "Korxonaning moliyaviy natijalari tug’risida xisobot kaysi schyotlar ma’lumotlari asosida tuziladi?",
        answer: "Tranzit schetlar",
      },
      {
        question: "Debitorlik karzlarning oshishi",
        answer: "Pul kirimini oshiradi",
      },
      {
        question: "Pulsiz operasiyalarga kirmaydi",
        answer: "ta’minotchilarga tulov",
      },
      {
        question: "Kapitalning turlarini aks  ettiruvchi schotlar",
        answer: "aktiv schotlardir",
      },
      {
        question: "Xodimlar soni, ularning harakati xisobini korxonaning qaysi bo’linmasi yuritadi?",
        answer: "Kadrlar bo’limi",
      }
      

  ];
  
  export default data;
  