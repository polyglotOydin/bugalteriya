const data = [
  {
    question: "Tabiatda ko‘pincha uchraydigan salbiy ta‘sirlarning asosiy sababchisi qaysi?",
    answer: "Fan texnika inqilobi"
  },
  {
    question: "Tabiiy landshaftlarning o‘zgarishi qanday landshaftlarning o‘zgarishiga olib keladi?",
    answer: "Antropogen landshaftlar"
  },
  {
    question: "Ekologiya tushunchasini birinchi marta qo‘llagan olim kim?",
    answer: "nemis naturalisti E.Gekkel"
  },
  {
    question: "Gekkelning qisqacha ta‘rifiga ko‘ra ekologiya bu-…",
    answer: "tabiat iqtisodiyoti"
  },
  {
    question: "XIX asrning oxiriga kelib ekologiya qanday sohadan ajralib chiqdi?",
    answer: "fiziologiya"
  },
  {
    question: "XX asrning birinchi choragida ekologiya tushunchasi qanday sohadan ajralib chiqqan?",
    answer: "biologiya"
  },
  {
    question: "Jamiyat va tabiatning o‘zaro ta‘siri konsepsiyasi qanday nom olgan?",
    answer: "Global ekologiya"
  },
  {
    question: "Organizm va uning muhitini o‘rganuvchi ekologik bo‘lim?",
    answer: "Putoekologiya"
  },
  {
    question: "Ekotizimlar va uning muhitini o‘rganuvchi ekologik bo‘lim?",
    answer: "Sinekologiya"
  },
  {
    question: "Populyatsiya va uning muhitini o‘rganuvchi ekologik bo‘lim?",
    answer: "Demekologiya"
  },
  {
    question: "Yirik geotizimlar va uning muhitini o‘rganuvchi ekologik bo‘lim?",
    answer: "Landshaft ekologiyasi"
  },
  {
    question: "Yer biosfera ta‘limoti deb ataluvchi ekologik bo‘lim qaysi?",
    answer: "Global ekologiya"
  },
  {
    question: "Atrof-muhit va tabiat resurslari iqtisodiyoti o‘rganish predmetiga ko‘ra nechaga bo‘linadi?",
    answer: "4 turga"
  },
  {
    question: "\"Tabiatdan foydalanish iqtisodiyoti\" fani qaysi asrda rivojlana boshladi?",
    answer: "XX asrning oxirida"
  },
  {
    question: "...- bu geografik ma‘lumotlarni yozma ma‘lumotlar bilan bog‘lovchi muhitdir.",
    answer: "GAT"
  },
  {
    question: "Atrof-muhitni muhofaza qilishda O‘zbekistonda qabul qilingan normativlar nechta?",
    answer: "5 ta"
  },
  {
    question: "Ekologik normativlar nechga bo‘linadi?",
    answer: "2 ga"
  },
  {
    question: "...- inson salomatligiga muvofiq keluvchi atrof-muhit ko‘rsatkichlarini belgilaydi.",
    answer: "Sanitariya-gigiyena normativlari"
  },
  {
    question: "O‘zbekiston Respublikasi Prezidentining 2017-yil 21-aprelda imzolangan PF-5024-son farmoni qanday doirasidagi masala asosida edi?",
    answer: "Ekologik tarbiya, targ‘ibot va ma’rifiy ishlarni, shuningdek, ekologiya va atrof-muhit muhofazasi sohasi mutaxassislarini qayta tayyorlash va malakasini oshirishni tashkil etish"
  },
  {
    question: "Qanday parametr barqaror, mustahkam va ko‘p marta takrorlanadigan hodisalar bo‘lib hisoblanadi?",
    answer: "Qonuniyatlar"
  },
  {
    question: "Ekologiya hamda ekologik iqtisodiyotni qonuniyatlari nechta prispga ko‘ra farqlanadi?",
    answer: "3 ta"
  },
  {
    question: "Ekologiyaning asosiy qonunlari nechta?",
    answer: "7 ta"
  },
  {
    question: "Tabiatdan foydalanishning ijtimoiy foydaliligi formulasi to‘g‘ri ko‘rsatilgan qatorni toping?",
    answer: "Fi = Sx / Sn"
  },
  {
    question: "Atrof-muhit va tabiat resurslari iqtisodiyotining xususiy qonuniyatlari nechta xususiy prisplar orqali amalga oshiriladi?",
    answer: "5 ta"
  },
  {
    question: "O‘zbekiston Respublikasida Yashil iqtisodiyotga o‘tish strategiyasi qaysi yillarga mo‘ljallangan?",
    answer: "2019-2030-yillar"
  },
  {
    question: "O‘zbekiston Respublikasida Yashil iqtisodiyotga o‘tish Prezidentimizning nechchi sonli qarori bilan tasdiqlangan?",
    answer: "PQ-4477-sonli"
  },
  {
    question: "O‘zbekiston Respublikasida ekologik ta‘limni rivojlantirish konsepsiyasi to‘g‘risidagi qaror qachon qabul qilingan?",
    answer: "2019-yilda"
  },
  {
    question: "Atrof-muhit va tabiat resurslar iqtisodiyoti kursining asosiy vazifalari nechta?",
    answer: "8 ta"
  },
  {
    question: "\"Barqaror iqtisodiyot\" atamasi qachon fan bo‘limlarida e‘lon qilingan?",
    answer: "1987-yilda"
  },
  {
    question: "Ekologik masalalar asosidagi ingliz tilidan kirib kelgan \"Sustainable Development\" birikmasi qanday ma‘noni anglatadi?",
    answer: "Barqaror taraqqiyot"
  },
  {
    question: "Barqaror taraqqiyot konsepsiyasi nechanchi yilda tasdiqlangan?",
    answer: "1992-yilda"
  },
  {
    question: "Barqaror taraqqiyot konsepsiyasi qayerda qabul qilingan?",
    answer: "Rio de janeora"
  },
  {
    question: "BMT ning Barqaror taraqqiyot konsepsiyasida nechta davlat vakillari ishtirok etgan?",
    answer: "179 davlat"
  },
  {
    question: "BMT ning pragnoziga ko‘ra global isish jahon iqtisodiyoti yiliga qancha zarar ko‘rishi ko‘zga tutilganini aytgan?",
    answer: "2 trillion"
  },
  {
    question: "Inson sivilizatsiyasining gullagan vaqtidan buyon global harorat qancha kamroq qiymatga o‘zgargan?",
    answer: "1 gardusdan kamroq"
  },
  {
    question: "Tabiat va jamiyat munosabatlarining rivojlanishi qanday bosqich asosida ajratiladi?",
    answer: "Biogen, antropogen, texnogen shulardan biri"
  },
  {
    question: "Tabiat va jamiyat munosabatlarining rivojlanishi qanday bosqich asosida ajratiladi?",
    answer: "Biogen, antropogen, texnogen shulardan biri"
  },
  {
    question: "Tabiat va jamiyat munosabatlarining rivojlanishi qanday bosqich asosida ajratiladi?",
    answer: "Biogen, antropogen, texnogen shulardan biri"
  },
  {
    question: "Tabiat va jamiyat munosabatlarining rivojlanishi nechta bosqichga ajratiladi?",
    answer: "3 bosqich"
  },
  {
    question: "XX asrda insoniyatni xavf ostida qoldirayotgan hodisalardan asosiy deb qaysi topilgan?",
    answer: "Ekologik vaziyat"
  },
  {
    question: "Atrof-muhit haqidagi asosiy qarashlar bu ekologiya bilan bog‘liq ekanligini aytib o‘tgan faylasuf kim?",
    answer: "Geroklit Geppokrat Aristotel (uchovidan bittasi)"
  },
  {
    question: "Ekologik yer yuzidagi har qanday moddiy narsa bu -… Ekologiya yer yuzidagi har qanday moddiy narsa – geografik unsurlarning (tog‘ jinslari, suv, tuproq, o‘simliklar, hayvonlar, odamlar, inshootlar va boshqalar) tadrijiy rivojiga, ularni o‘rab turgan muhitning ko‘rsatgan ta’sirini o‘rganadigan va bu jarayonni boshqarishga yo‘naltirilgan faoliyat sohasidir.",
    answer: "Ekologiya yer yuzidagi har qanday moddiy narsa – geografik unsurlarning (tog‘ jinslari, suv, tuproq, o‘simliklar, hayvonlar, odamlar, inshootlar va boshqalar) tadrijiy rivojiga, ularni o‘rab turgan muhitning ko‘rsatgan ta’sirini o‘rganadigan va bu jarayonni boshqarishga yo‘naltirilgan faoliyat sohasidir."
  },
  {
    question: "Ekologik yer yuzidagi har qanday moddiy narsalar asnosiga qanday unsirlar kiradi?",
    answer: "Ekologiya yer yuzidagi har qanday moddiy narsa – geografik unsurlarning (tog‘ jinslari, suv, tuproq, o‘simliklar, hayvonlar, odamlar, inshootlar va boshqalar) tadrijiy rivojiga, ularni o‘rab turgan muhitning ko‘rsatgan ta’sirini o‘rganadigan va bu jarayonni boshqarishga yo‘naltirilgan faoliyat sohasidir."
  },
  {
    question: "Ekologik yer yuzidagi har qanday moddiy narsalar asnosiga qanday unsirlar kiradi?",
    answer: "Ekologiya yer yuzidagi har qanday moddiy narsa – geografik unsurlarning (tog‘ jinslari, suv, tuproq, o‘simliklar, hayvonlar, odamlar, inshootlar va boshqalar) tadrijiy rivojiga, ularni o‘rab turgan muhitning ko‘rsatgan ta’sirini o‘rganadigan va bu jarayonni boshqarishga yo‘naltirilgan faoliyat sohasidir."
  },
  {
    question: "Ekologik yer yuzidagi har qanday moddiy narsalar asnosiga qanday unsirlar kiradi?",
    answer: "Ekologiya yer yuzidagi har qanday moddiy narsa – geografik unsurlarning (tog‘ jinslari, suv, tuproq, o‘simliklar, hayvonlar, odamlar, inshootlar va boshqalar) tadrijiy rivojiga, ularni o‘rab turgan muhitning ko‘rsatgan ta’sirini o‘rganadigan va bu jarayonni boshqarishga yo‘naltirilgan faoliyat sohasidir."
  },
  {
    question: "Ekologik yer yuzidagi har qanday moddiy narsalar asnosiga qanday unsirlar kiradi?",
    answer: "Ekologiya yer yuzidagi har qanday moddiy narsa – geografik unsurlarning (tog‘ jinslari, suv, tuproq, o‘simliklar, hayvonlar, odamlar, inshootlar va boshqalar) tadrijiy rivojiga, ularni o‘rab turgan muhitning ko‘rsatgan ta’sirini o‘rganadigan va bu jarayonni boshqarishga yo‘naltirilgan faoliyat sohasidir."
  },
  {
    question: "Ekologik yer yuzidagi har qanday moddiy narsalar asnosiga qanday unsirlar kiradi?",
    answer: "Ekologiya yer yuzidagi har qanday moddiy narsa – geografik unsurlarning (tog‘ jinslari, suv, tuproq, o‘simliklar, hayvonlar, odamlar, inshootlar va boshqalar) tadrijiy rivojiga, ularni o‘rab turgan muhitning ko‘rsatgan ta’sirini o‘rganadigan va bu jarayonni boshqarishga yo‘naltirilgan faoliyat sohasidir."
  },
  {
    question: "Evalyutsion ta‘limotning ekologiya fani asosidagi rolini ochib bergan olim kim?",
    answer: "Ch Darvin"
  },
  
  
    {
      question: "Ekologiya so‘zining ma‘nosi nima?",
      answer: "Yunoncha oykos – yashash muhiti, turar joyi va logos – ta’limot"
    },
    {
      question: "Ekologiyaning umumiy vazifalari nechta?",
      answer: "6"
    },
    {
      question: "Ekologiyaning amaliy vazifalari nechta?",
      answer: "9"
    },
    {
      question: "Ekologiya tushunchasi vujudga kelganiga necha yil bo‘ldi?",
      answer: "158"
    },
    {
      question: "Amerikalik qaysi olim ekologik ma‘lumotlarni umumlashtirib chop etgan?",
      answer: "Ch. Adams (1913)"
    },
    {
      question: "Beruniy qaysi asarida tabiatdagi 1116 tur dori-darmonlarni tavsiflagan?",
      answer: "Saydana"
    },
    {
      question: "Ekologiyaning asosi deb yuritiluvchi ta‘limot tizimi qaysi?",
      answer: "Biologik ekologiya"
    },
    {
      question: "Yashil iqtisodiyot bo‘yicha Parij bitimi nechanchi yil qabul qilingan?",
      answer: "2015-yil 12-dekabr"
    },
    {
      question: "Yashil iqtisodiyot bo‘yicha Parij bitimi nechanchi sanada qabul qilingan?",
      answer: "Parij, 2015-yil 12-dekabr"
    },
    {
      question: "O‘zbekiston Respublikasi Yashil iqtisodiyotga o‘tishining nechta asosiy maqsadi mavjud?",
      answer: "6"
    },
    {
      question: "BMT konferensiyasining nechanchi sessiyasida Parij bitimi qabul qilingan?",
      answer: "21- sessiyasida"
    },
    {
      question: "Hozirgi kunda Parij bitimini nechta mamalakat imzolagan?",
      answer: "195 ta (internetda 197 ta)"
    },
    {
      question: "Hozirgi kunda Parij bitimida nechta davlat ishtirokchi hisoblanadi?",
      answer: "180 ta"
    },
    {
      question: "Mamalakat xazinasiga oid siyosat yana qanday nomlanadi?",
      answer: "Fiskal"
    },
    {
      question: "2030-yilga borib 2020-yilga nisbatan necha % ga suv sarfi qisqartirish rejalashtirilgan?",
      answer: "90% (2020 ni suragan kitobda 2021ga nisbatan)"
    },
    {
      question: "O‘zbekiston Respublikasida 2019-2030-yillarga mo‘ljallangan Yashil iqtisodiyotni rivojlantirishga eng katta tasir qilgan omil qaysi?",
      answer: "..."
    },
    {
      question: "Yer fondi yerlaridan foydlanishning asosiy nechta maqsadi mavjud?",
      answer: "8 ta"
    },
    {
      question: "O‘zbekiston Respublikasida Yer kodeksining nechanchi moddasi Yer fondi yerlaridan foydalanish to‘g‘risida?",
      answer: "8-moddasi"
    },
    {
      question: "Yashil iqtisodiyoti va barqaror o‘sish atamasini tenglashtirgan olim kim?",
      answer: "D.X. Poʻlatov"
    },
    {
      question: "Organik qishloq xo‘jaligini rivojlantirish konsepsiyasi qachon ishlab chiqilgan?",
      answer: "2020-yil 18-mayda"
    },
    {
      question: "Organik mahsulatlar to‘g‘risidagi O‘RQ-766-sonli qonun qachon qabul qilingan?",
      answer: "2022-yil 25-aprel"
    },
    {
      question: "Organik qishloq xo‘jaligi tadqiqotlari instituti qanday ifodalanadi?",
      answer: "FiBL"
    },
    {
      question: "Organik qishloq xo‘jaligining asosiy yo‘nalishlaridan biri qaysi?",
      answer: "-qonun va qarorlar; -standartlar; -organik qishloq xoʻjaligi boʻyicha faoliyat koʻrsatayotgan tashkilotlar; -sertifikatlash; -eksport; (shulardan 1tasi buladi)"
    },
    {
      question: "Organik qishloq xo‘jaligining asosiy yo‘nalishlaridan biri qaysi?",
      answer: "-qonun va qarorlar; -standartlar; -organik qishloq xoʻjaligi boʻyicha faoliyat koʻrsatayotgan tashkilotlar; -sertifikatlash; -eksport; (shulardan 1tasi buladi)"
    },
    {
      question: "Organik qishloq xo‘jaligining asosiy yo‘nalishlaridan biri qaysi?",
      answer: "-qonun va qarorlar; -standartlar; -organik qishloq xoʻjaligi boʻyicha faoliyat koʻrsatayotgan tashkilotlar; -sertifikatlash; -eksport; (shulardan 1tasi buladi)"
    },
    {
      question: "Organik qishloq xo‘jaligining asosiy yo‘nalishlaridan biri qaysi?",
      answer: "-qonun va qarorlar; -standartlar; -organik qishloq xoʻjaligi boʻyicha faoliyat koʻrsatayotgan tashkilotlar; -sertifikatlash; -eksport; (shulardan 1tasi buladi)"
    },
    {
      question: "...- bu tabiiy jarayonlar asosida dehqonchilik yuritishdir.",
      answer: "Organik dehqonchilik"
    },
    {
      question: "Agro oziq-ovqat bozorlari turlari nechta?",
      answer: "3 ta"
    },
    {
      question: "Qishloq xo‘jaligi asnosidagi Alimentarius Kodeksi qachon qabul qilingan?",
      answer: "2007 yil"
    },
    {
      question: "Organik qishloq xo‘jaligi harakati xalqaro federatsiyasi (IFOAM) organik qishloq xo‘jaligi yuritishning qanday tamoyillarini ishlab chiqqan?",
      answer: "-salomatlik tamoyili. -ekologik musaffolik tamoyili -adolatlik tamoyili -gʻamxoʻrlik tamoyili. -hamkorlik tamoyili (shulardan biri)"
    },
    {
      question: "Organik qishloq xo‘jaligi harakati xalqaro federatsiyasi (IFOAM) organik qishloq xo‘jaligi yuritishning qanday tamoyillarini ishlab chiqqan?",
      answer: "-salomatlik tamoyili. -ekologik musaffolik tamoyili -adolatlik tamoyili -gʻamxoʻrlik tamoyili. -hamkorlik tamoyili (shulardan biri)"
    },
    {
      question: "Organik qishloq xo‘jaligi harakati xalqaro federatsiyasi (IFOAM) organik qishloq xo‘jaligi yuritishning qanday tamoyillarini ishlab chiqqan?",
      answer: "-salomatlik tamoyili. -ekologik musaffolik tamoyili -adolatlik tamoyili -gʻamxoʻrlik tamoyili. -hamkorlik tamoyili (shulardan biri)"
    },
    {
      question: "Organik qishloq xo‘jaligi harakati xalqaro federatsiyasi (IFOAM) organik qishloq xo‘jaligi yuritishning qanday tamoyillarini ishlab chiqqan?",
      answer: "-salomatlik tamoyili. -ekologik musaffolik tamoyili -adolatlik tamoyili -gʻamxoʻrlik tamoyili. -hamkorlik tamoyili (shulardan biri)"
    },
    {
      question: "Ekologik barqarorlik nechta asosiy bo‘g‘inga bo‘lib o‘rganiladi?",
      answer: "5 ta"
    },
    {
      question: "Ijtimoiy barqarorlik nechta asosiy bo‘g‘inga bo‘lib o‘rganiladi?",
      answer: "2 ta"
    },
    {
      question: "Iqtisodiy barqarorlik nechta asosiy bo‘g‘inga bo‘lib o‘rganiladi?",
      answer: "3 ta"
    },
    {
      question: "Eng yirik organik qishloq xo‘jaligi bozoriga ega bo‘lgan davlat qaysi?",
      answer: "AQSH"
    },
    {
      question: "O‘zbekiston suv sifatini baholash indeksiga ko‘ra 'juda toza' sifat indeksi qancha?",
      answer: "SII-0,3 va undan kam"
    },
    {
      question: "O‘zbekiston suv sifatini baholash indeksiga ko‘ra 'toza' sifat indeksi qancha?",
      answer: "SII-0,31-1,0"
    },
    {
      question: "O‘zbekiston suv sifatini baholash indeksiga ko‘ra 'o‘rtacha toza' sifat indeksi qancha?",
      answer: "SII-1,1-2,5"
    },
    {
      question: "FAO bu - qishloq xo‘jaligi bo‘yicha qanday tashkilot?",
      answer: "BMT Oziq-ovqat va qishloq xojaligi tashkiloti"
    },
    {
      question: "Ekologik xavfsizlik doirasida Jahon yovvoyi tabiat tashkiloti qanday ifodalanadi?",
      answer: "WWF-Butunjahon yovvoyi tabiat fondi"
    },
    {
      question: "Jahon statistik ma‘lumotiga ko‘ra har yil qancha o‘rmonlar kesilmoqda?",
      answer: "11 million gektar"
    },
    {
      question: "Mamlakatimizning qaysi hududida yashil makon dasturi asosida 10 million 57 ming tub ko‘chat o‘tqazildi?",
      answer: "Jizzax viloyatida"
    },
    {
      question: "Namoyon bo‘lishi darajasiga ko‘ra 10% gacha bo‘lgan ekologik muammo turi qanday sanaladi?",
      answer: "Kuchsiz"
    },
    {
      question: "Namoyon bo‘lishi darajasiga ko‘ra 50% dan yuqori bo‘lgan ekologik muammo turi qanday sanaladi?",
      answer: "Kuchli"
    },
    {
      question: "Global ekologik muammolar nechta xususiyatga ko‘ra ajralib turadi?",
      answer: "4 ta"
    },
    {
      question: "BMT ning 28-konferensiyasida iqlim o‘zgarishlariga qarshi kurashish Jahon sammiti qaysi shaharda bo‘lib o‘tgan?",
      answer: "Dubay shahrida"
    },
    {
      question: "2023-yildagi iqlim o‘zgarishlariga qarshi kurashish sammiti qachon bo‘lib o‘tdi?",
      answer: "1-2 dekabr kunlari"
    },
    {
      question: "Ekologik muammo keltirilgan javobni toping?",
      answer: "Suv ifloslanishi Havo ifloslanishi Iqlim o'zgarishi Global isish Atmosfera ishlolishi O'rmonlarning kamayishi Atmosferani o'z-o'zini tozalash (yuvish) hajmi. (shulardan biri)"
    },

    
  {
    question: "Ekologik muammo keltirilgan javobni toping?",
    answer: "Suv ifloslanishi Havo ifloslanishi Iqlim o'zgarishi Global isish Atmosfera ishlolishi O'rmonlarning kamayishi Atmosferani o'z-o'zini tozalash (yuvish) hajmi. (shulardan biri)"
  },
  {
    question: "Ekologik siyosatni amalga oshirish usullari nechta?",
    answer: "6 ta"
  },
  {
    question: "O‘zbekiston Respublikasining Ekologik partiyasi qachon ro‘yxatdan o‘tkazildi?",
    answer: "2019-yil 24-yanvarda"
  },
  {
    question: "Ekologik siyosatni amalga oshirishning iqtisodiy mexanizmalari nechta?",
    answer: "3 ta"
  },
  {
    question: "Ekologik siyosatni amalga oshirishning qanday iqtisodiy mexanizmlari mavjud?",
    answer: "Qoplovchi (yumshoq) Rag’batlantiruvchi Cheklovchi (qattiq) (shulardan biri)"
  },
  {
    question: "Issiqxona gazi savdosi tizimi Jahon faoliyatida qanday shaklda yuritiladi?",
    answer: "Kvotalar tizimi"
  },
  {
    question: "O‘simlik organizmlari majmuasi nima deb yuritiladi?",
    answer: "flora"
  },
  {
    question: "Hayvonot organizmlar majmuasi bu - …",
    answer: "fauna"
  },
  {
    question: "Yer sharida qanchaga yaqin o‘simlik turi mavjud?",
    answer: "350000 ga yaqin"
  },
  {
    question: "O‘zbekiston qancha umumiy flora va fauna turali mavjud?",
    answer: "27000 dan ortiq"
  },
  {
    question: "O‘zbekiston qancha hayvon turlari mavjud?",
    answer: "15000 dan ortiq"
  },
  {
    question: "O‘zbekiston qancha o‘simlik va zamburug‘lar turi mavjud?",
    answer: "11000 ga yaqin"
  },
  {
    question: "Yerdagi biomassaning 99% i nimaning ulushiga to‘g‘ri keladi?",
    answer: "o‘simliklar hissasiga"
  },
  {
    question: "O‘simliklarning asosiy necha xil funksiyalari mavjud?",
    answer: "11 ta"
  },
  {
    question: "Rio-de-Janeyroda Atrof-muhit mavzusidagi yig‘ilish qachon bo‘lib o‘tgan?",
    answer: "1992-yil"
  },
  {
    question: "Muhofaza etiladigan tabiiy hududlar bo‘yicha O‘zbekiston Respublikasida qonun qachon qabul qilingan?",
    answer: "2004-yil 3-dekabr"
  },
  {
    question: "Xalqaro bioxilma-xillik konvensiyaga 1995-yil qayer mezbonlik qilgan?",
    answer: "Riode-ja-nero"
  },
  {
    question: "O‘zbekistonda muhofaza qilinadigan yerlar qonunchiligi qaysi organ tomonidan ishlab chiqildi?",
    answer: "O’zbekiston respublikasi vazirlar mahkamsi"
  },
  {
    question: "Qonunga muvofiq muhofazadagi tabiiy hududlar necha toifaga bo‘linadi?",
    answer: "(Bu so'ralgan savolning javobi berilmagan)"
  },
  {
    question: "Qanday biomassa yerdagi tirik organizmlarning 2% ini tashkil qiladi?",
    answer: "Hayvonotlar (fauna) biomassasi"
  },
  {
    question: "Tabiatda hayvonlarning nechta birlamchi funksiyasi mavjud?",
    answer: "6 ta"
  },
  {
    question: "O‘simliklar dunyosi obyektlari ko‘rsatilgan javobni toping?",
    answer: "Yovvoyi organizmlar daraxtlar, butalar va o‘tsimon urug‘laydigan o‘simliklar, qirqquloqsimonlar, yo‘sinsimonlar, suvo‘tlar, lishayniklar va zamburug‘lar o‘zining barcha xilma-xil turlari bilan; yovvoyi organizmlardan tashkil topadigan tabiiy o‘simlik jamoalari yoki ularning har qanday majmuyi; kamyob va yo‘qolib ketish xavfi ostida turgan o‘simlik turlari; yovvoyi o‘simliklarning mevalari, urug‘lari va boshqa qismlari yoki ular hayoti faoliyatining mahsullari. (Shulardan biri)"
  },
  {
    question: "O‘rmon resurslari butun yer yuzida qanchani tashkil qiladi?",
    answer: "40 mln. km2 (4 mlrd. ga)"
  },
  {
    question: "O‘rmon resurslari butun yer quruqligining qancha qismini tashlik qiladi?",
    answer: "30%"
  },
  {
    question: "Qaysi geografik zonada yer sharining 40% flora va fauna turlari uchraydi?",
    answer: "Lotin Amerikasida"
  },
  {
    question: "Tabiatni muhofaza qilish xalqaro ittifoqi Jahon tashkilotlari asnosida qanday yuritiladi?",
    answer: "Ovoz berish yo’li bilan"
  },
  {
    question: "Tabiatni muhofaza qilish xalqaro ittifoqi qachon tashlik topgan?",
    answer: "1948-yil"
  },
  {
    question: "Tabiatni muhofaza qilish xalqaro ittifoqi nechta mamlakat tashkilotlarni birlashtirgan?",
    answer: "170 dan ortiq"
  },
  {
    question: "Tabiatni muhofaza qilish xalqaro ittifoqi jahon bo‘yicha qancha davlat va nodavlat tashkilotlarni birlashtirgan?",
    answer: "1400 dan ortiq"
  },
  {
    question: "Tabiatni muhofaza qilish xalqaro ittifoqi ning shtab-kvarteriyasi qaysi shaharda joylashgan?",
    answer: "Gland shahrida"
  },
  {
    question: "Tabiatni muhofaza qilish xalqaro ittifoqi ning shtab-kvartirasi qaysi dablatda joylashgan?",
    answer: "Shvetsariya"
  },
  {
    question: "Tabiatni muhofaza qilish xalqaro ittifoqi qayerda 65 ta a‘zodan iborat bo‘lgan?",
    answer: "Bryusselda"
  },
  {
    question: "Hozirgi zamonda xalqaro ekologik hamkorlik necha yo‘nalishda amalga oshiriladi?",
    answer: "(Bu so'ralgan savolning javobi berilmagan)"
  },
  {
    question: "Jahon hamjamiyati ishlab chiqqan xalqaro ekologik prisplar nechta?",
    answer: "7 ta"
  },
  {
    question: "Aholi sonining keskin oshib ketishi qanday nomlanadi?",
    answer: "Demografik portlash"
  },
  {
    question: "...- bu atrof-muhit holatiga javob bera olish demakdir.",
    answer: "Ekologik xavfsizlik"
  },
  {
    question: "O‘zbekiston ekologik xavfsizlikni ta‘minlash bo‘yicha nechta asosiy tadbirlarni qo‘llash ko‘zda tutilgan.",
    answer: "9ta"
  },
  {
    question: "Konstitutsiyaning nechanchi moddasida \" Yer osti va yer usti boyliklari davlat muhofazasidadir \" deb takidlangan?",
    answer: "54-moddasi"
  },
  {
    question: "O‘zbekiston suv va suvdan foydalanish to‘g‘risidagi qonun qachon qabul qilingan?",
    answer: "1993-yil"
  },
  {
    question: "O‘zbekistonda atmosferani muhofaza qilish to‘g‘risidagi qonun qachon qabul qilingan?",
    answer: "1996-yil"
  },
  {
    question: "1973-yil turli nodir hayvonlar bilan savdo qilishni chegaralash to‘g‘risidagi konsepsiya qanday nomlanadi?",
    answer: "SITES"
  },
  {
    question: "1972-yil Atrof-muhitni muhofaza qilish bo‘yicha I- Umumjahon konferensiyasi qayerda o‘tkazildi?",
    answer: "Stokgolim"
  },
  {
    question: "YUNESKO ning \" inson va biosfera\" dasturi nechta loyihadan iborat?",
    answer: "14 ta loyiha"
  },

  
    {
      question: "Hozirgi kunda atrof-muhit muhofazasi sohasida nechta yirik xalqaro nodavlat tashkilotlar faoliyat ko‘rsatmoqda? 250 dan ortiq",
      answer: "250 dan ortiq"
    },
    {
      question: "Yerning suv qobig‘i qanday nomlanadi?",
      answer: "Gidrosfera"
    },
    {
      question: "Qaysi millat maqoliga ko‘ra 'Biz hechqachon quduqdagi suv qurumagunicha suvning bahosini qanchaligini bilmaymiz' deyilgan?",
      answer: "Millatga ko‘ra: 'Biz hechqachon quduqdagi suv qurumagunicha suvning bahosini qanchaligini bilmaymiz.'"
    },
    {
      question: "Qaysi tashkilot bosh kotibi suvni tinchlik bilan bog‘lagan?",
      answer: "BMT"
    },
    {
      question: "Gidrosfera yer yuzasining qancha % ini egallaydi.",
      answer: "71%"
    },
    {
      question: "Umumiy bug‘lanishning 90% ini qaysi suv manbalari ta‘minlaydi?",
      answer: "Okeanlar"
    },
    {
      question: "O‘simliklar bug‘latishi orqali namlikning necha % i taminlanadi?",
      answer: "10%"
    },
    {
      question: "Yer yuzining jami muzliklari 90% i qayerda to‘plangan?",
      answer: "Antarktida"
    },
    {
      question: "Tabiatda suv aylanish bosqichlarini qaysi davlat Geologik kuzatish markazi ajratib bergan?",
      answer: "AQSh"
    },
    {
      question: "Suvning tabiatda aylanishi necha bosqich asosida sodir bo‘ladi?",
      answer: "16 bosqich"
    },
    {
      question: "O‘zbekiston hududida oqib turadigan suv hajmi qancha?",
      answer: "117 km kub"
    },
    {
      question: "Yer yuzasida ishlatilgan suvning 70% i qaysi bo‘g‘inga to‘g‘ri keladi?",
      answer: "Qishloq xoʻjaligi"
    },
    {
      question: "Pragnozlarga ko‘ra 2025-yilga borib qancha aholi suvsizlikdan aziyat chekadi?",
      answer: "Bu savolga javob topilmadi."
    },
    {
      question: "O‘zbekistonning umumiy Yer fondi qancha?",
      answer: "44.9 mln"
    },
    {
      question: "O‘zbekistonning yer fondida qishloq xo‘jaligiga qarashli yerlar qancha?",
      answer: "27.9 mln"
    },
    {
      question: "Tuproq tarkibodan olingan biomassaning umumiy gumusining yakuni qanday topiladi?",
      answer: "Gya =Gb +Oʻ+P"
    },
    {
      question: "Normal sharoitlarda gumus zaxiralari qanday o‘zgaradi?",
      answer: "Stabil, barqaror"
    },
    {
      question: "Tuproqdagi asosiy organik moddalar?",
      answer: "Torf, goʻng"
    },
    {
      question: "Tuproq tarkibini unumlilashtiruvchi miniral o‘g‘itlar?",
      answer: "Ohak, lyoss"
    },
    {
      question: "Sanoat va koryerlardan chiqarib tashlangan chiqindilar qanday nomlanadi?",
      answer: "Otval"
    },
    {
      question: "O‘zbekistonda Rekultivatsiya qilish zarur bo‘lgan yerlar tarkibi nechta?",
      answer: "5 ta"
    },
    {
      question: "Mamlakatimizda sug‘oriladigan yerlar ulushi necha %",
      answer: "10 foiz"
    },
    {
      question: "O‘zbekiston Respublikasida yer degrodadsiyasiga qarshi kurashish to‘g‘risidagi qaror qachon qabul qilingan?",
      answer: "2022 yil 10 iyun"
    },
    {
      question: "O‘zbekiston Respublikasida yer degrodadsiyasiga qarshi kurashish to‘g‘risidagi qaror qachon qabul qilingan?",
      answer: "2022 yil 10 iyun"
    },
    {
      question: "Yoqilg‘i energetikaning qanday turlari mavjud?",
      answer: "Neft, gaz, koʻmik, kondensat - 4 ta"
    },
    {
      question: "Yoqilg‘i energetikaning qanday turlari mavjud?",
      answer: "Neft, gaz, koʻmik, kondensat - 4 ta"
    },
    {
      question: "O‘zbekiston oltin zaxiralari bo‘yicha dunyoda nechanchi o‘rinda ?",
      answer: "4-oʻrin"
    },
    {
      question: "O‘zbekiston oltin qazib olish bo‘yicha dunyoda nechanchi o‘rinni egallaydi?",
      answer: "9-oʻrin"
    },
    {
      question: "Respublikamizda topilgan oltin konlarining qancha qismi qazib olingan?",
      answer: "20 foizi"
    },
    {
      question: "O‘zbekistonda bezak tosh zaxiralari qaysi hisoblanadi?",
      answer: "Marmar, granit, gabbro va bosh."
    },
    {
      question: "Mamlakatimizda kaliy tuz konlarining zaxiralari qancha muddatga yetadi?",
      answer: "100 yilgacha"
    },
    {
      question: "...- bu xalq xo‘jaligi ehtiyojlari uchun foydalanish mumkin bo‘lgan yerlar.",
      answer: "Yer resurslari."
    },
    {
      question: "Qaysi davlatda yil davomida 3% yer , mulk sifatida almashiniladi?",
      answer: "AQSH. IRLANDIYA da"
    },
    {
      question: "Qaysi davlatda yil davomida 2% yer , mulk sifatida almashiniladi?",
      answer: "Buyuk Britaniya Fransiya Italiya da"
    },
    {
      question: "...- bu yerning qattiq qobig‘i hisoblanadi.",
      answer: "Litosfera"
    },
    {
      question: "Litosferaning quyi chegarasi qalinligi qancha oralig‘da ekanligi taxmin qilinadi?",
      answer: "40 km dan 100 km gacha"
    },
    {
      question: "Materiklar hajmi okean hajmidan 12.7 marta kichikligini takidlagan olim kim?",
      answer: "Yu.M. Shatalskiy"
    },
    {
      question: "Litosfera sathi umumiy qanchaga teng?",
      answer: "510 mln km kvadrat"
    },
    {
      question: "Quruqlikning qancha qismida inson hayot kechiradi?",
      answer: "15%"
    },
    {
      question: "Qumli sahrolar quruqlikning necha % ini tashlik qiladi?",
      answer: "27%"
    },
    {
      question: "Yer po‘stlog‘ini tashkil qiluvchi tog‘ jinslari o‘zlarining hosil bo‘lishiga ko‘ra necha katta guruhga bo‘linadi?",
      answer: "3 ta guruhga"
    },
    {
      question: "Litosfera ba‘zan qanday nom bilan yuritiladi?",
      answer: "Plita"
    },
    {
      question: "Yer uchastkalarini xususiylashtirishning asosiy prinsplaridan biri?",
      answer: "Qonuniylik prinsipi"
    },
    {
      question: "Yer uchastkalarini xususiylashtirishning asosiy prinsplaridan biri?",
      answer: "Ixitiyoriylik prinsipi"
    },
    {
      question: "Yerni xususiylashtirish obyektlariga nimalar kiradi?",
      answer: "Yuridik shaxslarga tadbirkorlik, shaharsozlik faoliyatini va qonunchilikda taqiqlanmagan boshqa faoliyatni amalga oshirish uchun berilgan yer uchastkalari; Ozbekiston Respublikasi fuqarolariga yakka tartibda uy-joy qurish va uy-joyni obodonlashtirish, shuningdek tadbirkorlik va shaharsozlik faoliyatini amalga oshirish uchun berilgan yer uchastkalari; xususiylashtirilishi lozim bolgan davlat kochmas mulk obyektlari joylashgan yer uchastkalari; bosh turgan yer uchastkalari"
    },
    {
      question: "Qishloq xo‘jalik yerlariga qanday yerlar kiradi?",
      answer: "Bu savolga javob topilmadi."
    },
    {
      question: "Ekin yerlari necha turga bo‘linadi?",
      answer: "2 ta Sug'oriladigan Lalmi yerlar"
    },
    {
      question: "Suv inshootlari sug‘orishlarisiz hosil oluvchi yer turi?",
      answer: "Bu savolga javob topilmadi."
    },
    {
      question: "Suv inshootlari sug‘orishlari asosida hosil oluvchi ekin yerlari qanday ataladi?",
      answer: "Sug'oriladigan yer"
    },
    {
      question: "Tuproq degradadsiyasi necha turga bo‘linadi?",
      answer: "3 ta turga"
    },

    
      {
        "question": "Gradatsiya so‘zi qanday ma‘noni anglatadi?",
        "answer": "Asta sekin yuksalish"
      },
      {
        "question": "O‘zbekistonda \" Yer kodekisi \" qachon qabul qilingan?",
        "answer": "1998 30 aprel"
      },
      {
        "question": "Yer kodekisining necha asosiy prinspi mavjud?",
        "answer": "8 ta prinsipi"
      },
      {
        "question": "...- deb birga yashovchi bir xil organizmlar va ularning o‘zaro bog‘liqligiga aytiladi?",
        "answer": "Ekologik tizim"
      },
      {
        "question": "Biogeotsenoz terminini tavsiya etgan olim?",
        "answer": "V N Sukachev 1942"
      },
      {
        "question": "\"Ekotizm\" tushinchasini ilk bor qo‘llagan ekolog kim?",
        "answer": "Albert Tensli 1935"
      },
      {
        "question": "Ekotizm xizmatlari qachon to‘liq holda shakllanib bo‘ldi?",
        "answer": "XX asr oxirida"
      },
      {
        "question": "G. Daleyning Tabiat bilan bog‘liq kitob qanday nomlangan?",
        "answer": "Tabiat xizmatlari"
      },
      {
        "question": "O‘zbekistonda bio xilma-xillikni saqlash strategiyasi qaysi yillar kesimida ishlab chiqilgan?",
        "answer": "2019 -2028"
      },
      {
        "question": "Ekotizm xizmatlari nechta asosiy turlarga ajratilgan?",
        "answer": "4 ta"
      },
      {
        "question": "Xalqaro klasifikatsiyaga muvofiq ekotizm xizmatlari turlaridan biri?",
        "answer": null
      },
      {
        "question": "Ekotizm qo‘yilgan maqsadlariga muvofiq nechta asosiy tarmoqlarga bo‘linadi?",
        "answer": "7 ta"
      },
      {
        "question": "Turizm yer yuzidagi ishlab chiqarish , xizmat ko‘rastish bozori mablag‘ aylanmasining necha % ini tashkil etadi?",
        "answer": "10%"
      },
      {
        "question": "Dunyo bo‘yicha milliy bog‘larning yillik daromad hajmi qancha?",
        "answer": "1 mlrd AQSH dollaridan oshadi"
      },
      {
        "question": "...- bu park modelining rivojlanish konsepsiyasi o‘ziga xos mazmuniga ega.",
        "answer": "Rezerv"
      },
      {
        "question": "O‘zbekistonda bugungi kunda necha qo‘riqxona mavjud?",
        "answer": "7 ta qòriqxona mavjud"
      },
      {
        "question": "O‘zbekistonda qaysi hududlarda davlat ro‘yxati asosida qo‘riqlanuvchi qo‘riqxonalar mavjud.",
        "answer": "Toshkent, Jizzax, Surxondaryo, Qashqadaryo, Buxoro va Xorazm"
      },
      {
        "question": "Hozirda mamlakatimizda qo‘riqxonalarning umumiy maydoni qanchadan oshgan.",
        "answer": "188,33 ming gektardan oshadi."
      },
      {
        "question": "Oxirgi 3 yilda mamlakatimizda import o‘rnini bosuvchi nechta tur mahsulot ishlab chiqilgan?",
        "answer": null
      },
      {
        "question": "Oxirgi 3 yilda mamlakatimizda import hajmi qanchaga kamaydi?",
        "answer": null
      },
      {
        "question": "\" Sog‘lom ovqatlanish \" iborasi xalqaro tizim doirasida qanday nomlanadi?",
        "answer": "Nutrition"
      },
      {
        "question": "Zamonaviy bio texnologiyalarni qo‘llash asnosida yaratiladigan mahsulotlar qanday nomlanadi?",
        "answer": ".Kartaxena protokoli"
      },
      {
        "question": "Davlat ekologiya qo‘mitasiga nechta asosiy vazifa yuklangan?",
        "answer": null
      },
      {
        "question": "Tabiatni muhofaza qilishni ta‘minlashning iqtisodiy tartiboti nechanchi moddada keltirilgan?",
        "answer": "33-moddada"
      },
      {
        "question": "Havo haroratining necha gradusdan (°C ) oshishi mamlakatimizda poliz ekinlariga noqulaylik tug‘diradi.",
        "answer": "40 gradusdan"
      },
      {
        "question": "Degrodatsiya so‘zining lug‘aviy ma‘nosi qanday?",
        "answer": null
      },
      {
        "question": "\" Yashil iqtisodiyot \" ga o‘tish strategiyasi qachon qabul qilindi?",
        "answer": "2019-yilda"
      },
      {
        "question": "Mamlakatimizda aholi yashash uy-joylari qanchani tashkil qiladi?",
        "answer": null
      },
      {
        "question": "Energiya manbalarining 100% i ham qayta tiklanuvchi energiya manbalari asosida ishlatiluvchi davlat qaysi?",
        "answer": "Islandiya"
      },
      {
        "question": "O‘zbekistonda Energiya sohasini isloh qilish maqsadida qaysi tashkilotni qaytadan qurish amalga oshirildi?",
        "answer": "Oʻzbekenergo AJ"
      },
      {
        "question": "O‘zbekistonda iste‘mol qilinayotgan energiyaning necha % i issiqlik elektr stansiyalaridan ishlab chiqariladi?",
        "answer": "88.7%"
      },
      {
        "question": "Himoya qilinadigan hududlar maydoniva hududning umumiy maydoni nisbati koʻrsatkichi nima debataladi.",
        "answer": "qamrov darajai"
      },
      {
        "question": "Muhofaza etiladigan tabiiy hududlarni saqlash samaradorligini baholash uchun qanday barqarorlik koʻrsatkichlaridan foydalaniladi?",
        "answer": "2 ta: tabiatni muhofaza qilish barqarorligi va dinamik barqarorlik"
      },
      {
        "question": "Iqtisodiy baholanishi zarur boʻlgan nechta ekologik funksiyalarni ajratib koʻrsatish mumkin?",
        "answer": "3 ta"
      },
      {
        "question": "Tabiiy resurslar va xizmatlarni iqtisodiy baholashda hozirgi kunda mavjud yondashuvlar nechta?",
        "answer": "5 ta"
      },
      {
        "question": "Tabiiy resurslar va xizmatlarni iqtisodiy baholashda hozirgi kunda qanday mavjud yondashuvlar bor?",
        "answer": "bozordagi baholanish, renta, xarajat boʻyicha y, muqobil qiymat, umumiy iqt qiymat"
      },
      {
        "question": "Tabiiy resurslar va xizmatlarni iqtisodiy baholashda hozirgi kunda qanday mavjud yondashuvlar bor?",
        "answer": "bozordagi baholanish, renta, xarajat boʻyicha y, muqobil qiymat, umumiy iqt qiymat"
      },
      {
        "question": "Yer ekotizimlari taklif qiladigan oʻn yetti asosiy mahsulot va xizmatlarning qiymati yiliga necha mlrd. dollarga baholanadi.",
        "answer": "41476 mlrd"
      },
      {
        "question": "Yevropaning atrof-muhit agentligi (YeEA) maʼlumotlariga koʻra, daraxtlar bilan qoplanganlik darajasi, yashil hududlar Yevropaning 38 ta poytaxtida oʻrtacha necha foizni tashkil etadi?",
        "answer": "30%"
      },
      {
        "question": "Mamlakatimizning necha % qismi tekislikdan iborat ?",
        "answer": "78.7%"
      },
      {
        "question": "Mamlakatimizning necha % qismi tog‘liklardan iborat?",
        "answer": "21.3%"
      },
      {
        "question": "Muhofaza etiladigan tabiiy hududlar belgilangan maqsadiva rejimiga qarab necha toifalarga boʻlinadi?",
        "answer": "8 yoki 7ta"
      },
      {
        "question": "Muhofaza etiladigan tabiiy hududlar belgilangan maqsadiva rejimiga qarab qanday toifalarga boʻlinadi?",
        "answer": "Davlat qoriqxonalari, landshaft buyurtma qoriqxonalar, tabiat bogʻlari, davlat tabiat yidgorliklari, ayrim.., muhofaza etiladigan landshaftlar, davlat biosfera rezervat yoki 7 ta"
      },
      {
        "question": "“Choʻllanish-tabiiy	ekosistemada	oʻsimlik qoplamining yoʻqotilishi boʻlib, uni kelajakdainson yordamisiz tiklab boʻlmaydigan jarayondir”- degan ta‘rif mualkifi kim?",
        "answer": "Varnskiy"
      },
      {
        "question": "Respublika hududining necha % i tabiiy shoʻrlanishga, qum koʻchkilari, changli boʻronlar va garemsellar tarqalishi taʼsiriga uchragan qurgʻoqchil va yarim qurgʻoqchil maydonlardan iborat.",
        "answer": "70%"
      },
      {
        "question": "Statistik maʼlumotlarga koʻra, har yili choʻllanish va qurgʻoqchilik natijasida necha milliard dollarga yaqin qishloq xoʻjaligi ekinlari nobud boʻladi.",
        "answer": "42 mlrd"
      },
      {
        "question": "Orolbo‘yi qumning qum va chang boʻronlari Qoraqalpogʻistonga necha million dollardan ortiq iqtisodiy zarar yetkazadi.",
        "answer": "44 mln dan ortiq"
      },
      {
        "question": "Qaysi agentligi bilan shartnoma asosida ekologik markirovkalarga taalluqli bo‘lgan 6 ta standart loyihalari ishlab chiqilib, ekspertizadan o‘tkazildi.",
        "answer": "Oʻzstandart"
      },
      {
        "question": "O‘zbekiston Respublikasi Prezidentining nechanchi yil qarori doirasida Tadbirkorlik subyektlariga “Yagona darcha” tamoyili asosida xizmat ko‘rsatish yo‘lga qo‘yildi?",
        "answer": "2015 yil 28 sent"
      }
    
    
  
  
 
      

]
  
  export default data;
  