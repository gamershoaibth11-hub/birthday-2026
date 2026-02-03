// 20 Chithis in 5 batches of 4
// Batch unlocks: 12:00 AM, 9:00 AM, 1:00 PM, 5:00 PM, 9:00 PM, 11:59 PM
// 10 second cooldown between chithis in same batch

const CHITHIS = [
    // Batch 1: 12:00 AM (Feb 4, 2026)
    {
        id: 1,
        title: "Chithi #1",
        batch: 1,
        batchTime: "12:00 AM",
        content: `Hey Onti, Happy Birthday ❤️

12tay chaisilam tomake dekhaite, kintu 12tar moddhe korte parlam na.

Shei exam er por theke tana ei website ta bananor cheshtay chilam, kintu shomoy moto uthte parini. Onek kichu bad diteo hoise.

Tobuo cheshta ta chilo mon theke.

Ajker din ta tomaaaar jonmodinnnnn. Tumi jekhanei thako na keno, ami tomake shob khanei feel kori amar kase. Distance ei jinishta change korte pare na.`
    },
    {
        id: 2,
        title: "Chithi #2",
        batch: 1,
        batchTime: "12:00 AM",
        content: `Mone ache amra prothom kobe kotha bolechilam?

Tokhon bujhini je tumi amar kache eto important hoye jabe. Ekhon tomar chara kono din e normal lage na.

Choto choto kotha, rater phone call, ar tomar oi hashi — boddo valobashi.`
    },
    {
        id: 3,
        title: "Chithi #3",
        batch: 1,
        batchTime: "12:00 AM",
        content: `Tumi jokhon excited hoye kotha bolo, amar sathe mon khuile shob shob bole deo, ekta bacchar moto.

Ar jokhon tired thako ba rege thako, tokhon ekdom chup. Ar jokhon fate, ekdom shesh.

Kintu baire theke jei pagol amar manush ta, bhitor theke totoi mishti.`
    },
    {
        id: 4,
        title: "Chithi #4",
        batch: 1,
        batchTime: "12:00 AM",
        content: `Ajker raat ta onek special, karon ajke tumi jonmo nisoooo amar jonnnnoooo.

Tumi jiggesh korbana, “ki gift diba?”

Ei website ta puro tomar jonno banano. Ajke tumi eka na. Virtual holeo ami ekhanei achi, tomar sathei.

Ekhon shuye poro, kal shokale fresh hoye uthba. Ami tomar ekta voice er opekkha korbo shokale ❤️`
    },

    // Batch 2: 9:00 AM (Feb 4, 2026)
    {
        id: 5,
        title: "Chithi #5",
        batch: 2,
        batchTime: "9:00 AM",
        content: `Good morning birthday girl ☀️

Ekhon hoyto uthe geso. Hoyto breakfast koronai.

Taratari jao, kisu kheye neo. Phone ta raikhe dour deo 😄

Ajke shundor ekta din par korba, In sha Allah. Kheye eshe amake janabaaaaaa.`
    },
    {
        id: 6,
        title: "Chithi #6",
        batch: 2,
        batchTime: "9:00 AM",
        content: `Tumi jokhon busy thako, ontike ar khuje paoa jay na.

Abar hotath jokhon message dao, tokhon pura dhumay lafay pori, onek bhalo lage.

Amio majhe majhe kaje haray jai, egula tumi bujho. Kaj korte giye khoj thake na.

Egula bujhar jonno onek thank you.`
    },
    {
        id: 7,
        title: "Chithi #7",
        batch: 2,
        batchTime: "9:00 AM",
        content: `Ami jani tumi sometimes overthink koro.

Tai ekta kotha clear — tomake niye amar kono confusion nai.

Tumi amar kache important. Ageo chila, ekhon o, ar thakba.`
    },
    {
        id: 8,
        title: "Chithi #8",
        batch: 2,
        batchTime: "9:00 AM",
        content: `Tomar dream niye kotha bolar way ta amar khub bhalo lage.

Tomar ambition, tomar goal — ami chai tumi shob achieve koro.

Dure thakleo, ami support e achi. Always.`
    },

    // Batch 3: 1:00 PM (Feb 4, 2026)
    {
        id: 9,
        title: "Chithi #9",
        batch: 3,
        batchTime: "1:00 PM",
        content: `Dupur hoye geche. Khaisooooooo to? 🍽️

Ajke kisu order kore dei?

Tomake khaite dekhle amar onek shanti lage.

Ekdin tomar sathe khaite jabo. Tomar sathe ghurte amar onek bhalo lage.`
    },
    {
        id: 10,
        title: "Chithi #10",
        batch: 3,
        batchTime: "1:00 PM",
        content: `Amader khaite jaoa, ghurte jaoa gula — shob tomar help niyei thik kori. Amar matha kaj kore na 😅

Ghonta por ghonta kotha, ar mone hoy time ta kmne chole jay.

Ami chai aro emon din asuk. Aro ghurar jayga, aro onek khaoa-daoa. Just aro amra.`
    },
    {
        id: 11,
        title: "Chithi #11",
        batch: 3,
        batchTime: "1:00 PM",
        content: `Tumi nijeke onek shomoy underestimate koro.

Kintu tumi bujho na, tumi koto kichu eka handle koro.

Ami tomake admire kori. Tumi ja koro, mon diye koro. Eta onek boro quality.`
    },
    {
        id: 12,
        title: "Chithi #12",
        batch: 3,
        batchTime: "1:00 PM",
        content: `Ajke hoyto ektu celebrate korba, chobi tulba, In sha Allah.

Ami dure theke tomar hashi imagine kortesi. Oi hashi ta amar shobcheye priyo.

Happy Birthday again ❤️`
    },

    // Batch 4: 5:00 PM (Feb 4, 2026)
    {
        id: 13,
        title: "Chithi #13",
        batch: 4,
        batchTime: "5:00 PM",
        content: `Shondhya hoye geche! 🌅

Ajker din ta ki memorable hochhe? Hopefully ha! Tumi ekhon ki korcho? Baire giyecho naki bari te acho?

Whatever it is, I hope tumi khub enjoy korcho. Ajker ta tomar special day. Make the most of it!`
    },
    {
        id: 14,
        title: "Chithi #14",
        batch: 4,
        batchTime: "5:00 PM",
        content: `Tumi jokhon nervous thako, tomar voice ta ektu kaape.

Kintu tarpor o confident bhab e kotha bolo. Nijer control maintain koro.

Ei courage ta tomar inside theke ashe. Ar ei ta i tomake special kore. Tumi nijeke jei bhabe present koro, sheta amazing.`
    },
    {
        id: 15,
        title: "Chithi #15",
        batch: 4,
        batchTime: "5:00 PM",
        content: `Amar kache tomar shobcheye boro quality ta holo — tumi real.

Tumi fake hou na, pretend koro na. Ja mone hoy tai bolo. Ei honesty amar kache priceless.

Tumi tumi e thakba always. Change hote hobe na kono kichu. Just stay the way you are.`
    },
    {
        id: 16,
        title: "Chithi #16",
        batch: 4,
        batchTime: "5:00 PM",
        content: `Tumi jokhon series dekhte bosho, pura alada ekta duniyay chole jao.

Tomar kichu change ami notice kori.

Beshi influenced hoye jeo na kintu 😅 Ar ektu break diye diye deikho, pagol.`
    },

    // Batch 5: 9:00 PM (Feb 4, 2026)
    {
        id: 17,
        title: "Chithi #17",
        batch: 5,
        batchTime: "9:00 PM",
        content: `Raat hoye esche 🌙 Din ta almost shesh.

Ajker din ta kemon laglo? Tired? Happy? Mixed?

Aro onek birthday asbe. Next time hopefully ami physically pashe thakbo, In sha Allah.`
    },
    {
        id: 18,
        title: "Chithi #18",
        batch: 5,
        batchTime: "9:00 PM",
        content: `Tomar kichu habit amar khub bhalo lage.

Jemon — tumi jokhon rege jao, chup thako ba onek kotha shunao. Kintu ektu por nijer theke message dao.

Eta ami shob shomoy thik moto handle korte parina. Amar onek kharap lage, kintu ami shob shomoy msg dite pari na.

Tumi je dhore na raikhe, eta vule abar thik moto asho — ei jinishta cute, ar onek boro blessing.`
    },
    {
        id: 19,
        title: "Chithi #19",
        batch: 5,
        batchTime: "9:00 PM",
        content: `Ajker din almost shesh.

Kintu amar feelings din er sathe shesh hoy na. Tumi jekhanei thako, joto durei thako — amar jonno tumi shob theke kachei.`
    },
    {
        id: 20,
        title: "Chithi #20",
        batch: 5,
        batchTime: "9:00 PM",
        content: `Ami hoyto sharadin emon kichu korte parini jeta tomar din ta shundor banaito.

In sha Allah amra khub taratari amader shomporko halal kore, ajibon eksathe theke tomar birthday gulo special korte parbo.

Jao, taratari khabar kheye neo.`
    },

    // Batch 6: 11:59 PM (Feb 4, 2026) - Final 4 Chithis
    {
        id: 21,
        title: "Chithi #21",
        batch: 6,
        batchTime: "11:59 PM",
        content: `Tomar birthday er last er dike.

Ajker pura din ami tomar sathei chilam. Ekhon din ta shesh er dike.

Kintu kichui shesh na. Website just ekta medium. Tomar proti amar feelings permanent.`
    },
    {
        id: 22,
        title: "Chithi #22",
        batch: 6,
        batchTime: "11:59 PM",
        content: `Tomar birthday amar kache mixed feeling er chilo.

Khushi — karon tomar sathe celebrate korte parsilam. Ektu mon kharap — karon ajker din tay physically pashe nai.

Tobuo ei year ta special korar cheshta korechi. Tumi happy thakle, ami satisfied.`
    },
    {
        id: 23,
        title: "Chithi #23",
        batch: 6,
        batchTime: "11:59 PM",
        content: `Next year er birthday te ami cheshta korbo tomar pashe thakte, In sha Allah.

Thik jemon tumi chao, In sha Allah cheshta korbo — cake, ektu shajano, onek chobi, onek memories.

Oi din ta asbe. Distance amader bhalobasha weak korte parbe na.`
    },
    {
        id: 24,
        title: "Chithi #24",
        batch: 6,
        batchTime: "11:59 PM",
        content: `Eta shesh chithi.

24 ta chithi, 24 hours er jonno. Protita mon theke lekha.

Ekdin shamne boshe ei memories gula mone korbo. Totokkhon — ei vabei pashe thaiko ❤️

I love you, Onti. Happy Birthday! 🎂

— Shoaib`
    }
];

// Memory Images & Videos Data - All 74 files
// All 98 memories (92 images + 6 videos)
const MEMORIES = [
    { id: 1, file: "images/1.jpg", type: "image", caption: "Tomar ei smile dekhe amar diner shuru hoy 😊" },
    { id: 2, file: "images/10.jpg", type: "image", caption: "Ei chobi ta dekhe prottek bar mone pore toke 💕" },
    { id: 3, file: "images/100.jpg", type: "image", caption: "Amader choto choto moment gula amar shompod 🌟" },
    { id: 4, file: "images/101.jpg", type: "image", caption: "Tomar sathe thakle shob kichu aro shundor lagey ✨" },
    { id: 5, file: "images/102.jpg", type: "image", caption: "Ei muhurto gula amader golpo likhe dey 📖" },
    { id: 6, file: "images/11.jpg", type: "image", caption: "Forever mone thakbe ei din ta 🎯" },
    { id: 7, file: "images/12.jpeg", type: "image", caption: "Toke niye amar shob theke favourite memory 💝" },
    { id: 8, file: "images/13.jpg", type: "image", caption: "Distance thakleo closeness e ki change ashena? 🌙" },
    { id: 9, file: "images/14.jpg", type: "image", caption: "Ei photo amar phone er wallpaper chilo ekshomoy 😅" },
    { id: 10, file: "images/15.jpg", type: "image", caption: "Simple moment kintu special memory 🎈" },
    { id: 11, file: "images/16.jpg", type: "image", caption: "Tomar laughter ta shune amar mood thik hoye jay 🌸" },
    { id: 12, file: "images/17.jpg", type: "image", caption: "Amra mile ekta perfect combination ❤️" },
    { id: 13, file: "images/18.jpg", type: "image", caption: "Ei ghorar shomoy gula missing you even more 💭" },
    { id: 14, file: "images/19.jpg", type: "image", caption: "Tomar choto habits amar routine er part hoye gese 🫶" },
    { id: 15, file: "images/2.mp4", type: "video", caption: "Ei video tay tomar hashir shobdo ekhono mone achhe 🎥" },
    { id: 16, file: "images/20.jpg", type: "image", caption: "Choto bepar kintu boro feelings 🌺" },
    { id: 17, file: "images/21.jpg", type: "image", caption: "Amader journey er ekta beshi valo chapter 📚" },
    { id: 18, file: "images/22.jpg", type: "image", caption: "Toke dekhe mone hoy shob kichu worth it 🌻" },
    { id: 19, file: "images/23.jpg", type: "image", caption: "Precious moments jegula price diye kinba na 💎" },
    { id: 20, file: "images/25.jpg", type: "image", caption: "This day = forever saved in memory card 💾" },
    { id: 21, file: "images/26.jpg", type: "image", caption: "Toke ebar dekhe amar mone hoyechilo 'perfect' 🌹" },
    { id: 22, file: "images/27.jpg", type: "image", caption: "Ei photo ta amar gallery te hidden folder e safe 🔒" },
    { id: 23, file: "images/28.jpg", type: "image", caption: "Random click kintu precious forever 🎯" },
    { id: 24, file: "images/29.jpg", type: "image", caption: "Amra mile koto shundor memories baniyechi 🌈" },
    { id: 25, file: "images/3.jpeg", type: "image", caption: "Tomar chokher expression ei photo te priceless 👀" },
    { id: 26, file: "images/30.jpg", type: "image", caption: "Feeling grateful for moments like these 🙏" },
    { id: 27, file: "images/31.jpg", type: "image", caption: "Ei din ta chilo ekdom special 💫" },
    { id: 28, file: "images/32.jpg", type: "image", caption: "Together = better, always 🤝" },
    { id: 29, file: "images/33.jpg", type: "image", caption: "Tomar hashir shobdo ta ekhono mone achhe 🎵" },
    { id: 30, file: "images/34.jpg", type: "image", caption: "Choto moment, boro feelings attached 💗" },
    { id: 31, file: "images/35.jpg", type: "image", caption: "Time freeze hoye geleo bhalo lagto ei muhurte ⏸️" },
    { id: 32, file: "images/36.jpg", type: "image", caption: "Forever vibes with you ♾️" },
    { id: 33, file: "images/37.jpg", type: "image", caption: "Random but special, like us 🎲" },
    { id: 34, file: "images/38.jpg", type: "image", caption: "Pure happiness captured in one frame 📸" },
    { id: 35, file: "images/39.jpg", type: "image", caption: "Journey er best parts gula tomar shathe 🚀" },
    { id: 36, file: "images/40.jpg", type: "image", caption: "Simple khushi = real happiness 😊" },
    { id: 37, file: "images/41.jpg", type: "image", caption: "This one's my phone wallpaper sometimes 📱" },
    { id: 38, file: "images/42.jpg", type: "image", caption: "Ekdum amader moto — chilling & vibing 🌊" },
    { id: 39, file: "images/43.mp4", type: "video", caption: "Ei video te tomar voice shune mone hoye kichu bolar ache 🎤" },
    { id: 40, file: "images/44.jpg", type: "image", caption: "Never gonna forget this particular day 📅" },
    { id: 41, file: "images/45.jpg", type: "image", caption: "Wholesome vibes only when I'm with you 🫶" },
    { id: 42, file: "images/46.jpg", type: "image", caption: "Tomar ei angle theke chobi tular style perfect 📷" },
    { id: 43, file: "images/47.jpg", type: "image", caption: "Core memory unlocked 🔓" },
    { id: 44, file: "images/48.jpg", type: "image", caption: "Amader golpe ei page ta underlined 📖" },
    { id: 45, file: "images/49.jpg", type: "image", caption: "Ek second er moment, lifetime er memory 🕐" },
    { id: 46, file: "images/5.jpg", type: "image", caption: "You = naturally beautiful, always 🌺" },
    { id: 47, file: "images/50.jpg", type: "image", caption: "Joyful moments with my favorite person 🎊" },
    { id: 48, file: "images/51.jpg", type: "image", caption: "Perfect timing, perfect person 🕰️" },
    { id: 49, file: "images/52.jpg", type: "image", caption: "Ei photo dekhlei mood fresh hoy jay 🍃" },
    { id: 50, file: "images/53.jpg", type: "image", caption: "Memory lane er shera chobi gular ekta 🛣️" },
    { id: 51, file: "images/54.mp4", type: "video", caption: "Tomar sathe thakle time ta bhulei jai ⏳" },
    { id: 52, file: "images/55.jpg", type: "image", caption: "Forever type er muhurto 💫" },
    { id: 53, file: "images/56.jpg", type: "image", caption: "Randomly captured, deeply cherished 💝" },
    { id: 54, file: "images/57.jpg", type: "image", caption: "Real happiness looks like this 😄" },
    { id: 55, file: "images/58.jpg", type: "image", caption: "Adventure continues with you by my side 🧭" },
    { id: 56, file: "images/59.jpg", type: "image", caption: "Choto choto shukh gula e asol happiness 🌼" },
    { id: 57, file: "images/6.jpg", type: "image", caption: "Amar shob favorite lists e ei photo thakbe 📋" },
    { id: 58, file: "images/60.jpg", type: "image", caption: "Amader special days gular moddhe ekta 🎪" },
    { id: 59, file: "images/61.jpg", type: "image", caption: "With you, every moment feels beautiful ✨" },
    { id: 60, file: "images/62.jpg", type: "image", caption: "Bhula jawa shombhob na ei din ta 🎈" },
    { id: 61, file: "images/63.jpeg", type: "image", caption: "Ei moment ta amar kache special" },
    { id: 62, file: "images/64.jpeg", type: "image", caption: "Tomar ei smile ta favorite" },
    { id: 63, file: "images/65.mp4", type: "video", caption: "Best memory with you" },
    { id: 64, file: "images/66.jpeg", type: "image", caption: "Amader journey er ekta part" },
    { id: 65, file: "images/67.jpg", type: "image", caption: "Mone rakhar moto moment" },
    { id: 66, file: "images/68.jpg", type: "image", caption: "You looked beautiful here" },
    { id: 67, file: "images/69.jpg", type: "image", caption: "Simple joy, maximum happiness" },
    { id: 68, file: "images/7.jpg", type: "image", caption: "Perfect day together" },
    { id: 69, file: "images/70.mp4", type: "video", caption: "Ei photo dekhe smile chole ashe" },
    { id: 70, file: "images/71.mp4", type: "video", caption: "Precious memory" },
    { id: 71, file: "images/73.jpg", type: "image", caption: "Tomar sathe thakle time ure jay" },
    { id: 72, file: "images/74.jpg", type: "image", caption: "Ei muhurto ta forever" },
    { id: 73, file: "images/75.jpg", type: "image", caption: "Random moment, big memory" },
    { id: 74, file: "images/76.jpg", type: "image", caption: "Genuine happiness captured" },
    { id: 75, file: "images/77.jpg", type: "image", caption: "Our adventure continues" },
    { id: 76, file: "images/79.jpg", type: "image", caption: "Choto khushi, boro memory" },
    { id: 77, file: "images/8.jpeg", type: "image", caption: "This is my favorite" },
    { id: 78, file: "images/80.jpg", type: "image", caption: "Amader special moment" },
    { id: 79, file: "images/81.jpg", type: "image", caption: "Beautiful memory with you" },
    { id: 80, file: "images/82.jpg", type: "image", caption: "Can't forget this day" },
    { id: 81, file: "images/83.jpg", type: "image", caption: "Ei moment ta amar kache special" },
    { id: 82, file: "images/84.jpg", type: "image", caption: "Tomar ei smile ta favorite" },
    { id: 83, file: "images/85.jpg", type: "image", caption: "Best memory with you" },
    { id: 84, file: "images/86.jpg", type: "image", caption: "Amader journey er ekta part" },
    { id: 85, file: "images/87.jpg", type: "image", caption: "Mone rakhar moto moment" },
    { id: 86, file: "images/88.jpg", type: "image", caption: "You looked beautiful here" },
    { id: 87, file: "images/89.jpg", type: "image", caption: "Simple joy, maximum happiness" },
    { id: 88, file: "images/9.jpg", type: "image", caption: "Perfect day together" },
    { id: 89, file: "images/90.jpg", type: "image", caption: "Ei photo dekhe smile chole ashe" },
    { id: 90, file: "images/91.jpg", type: "image", caption: "Precious memory" },
    { id: 91, file: "images/92.jpg", type: "image", caption: "Tomar sathe thakle time ure jay" },
    { id: 92, file: "images/93.jpg", type: "image", caption: "Ei muhurto ta forever" },
    { id: 93, file: "images/94.jpg", type: "image", caption: "Random moment, big memory" },
    { id: 94, file: "images/95.jpg", type: "image", caption: "Genuine happiness captured" },
    { id: 95, file: "images/96.jpg", type: "image", caption: "Our adventure continues" },
    { id: 96, file: "images/97.jpg", type: "image", caption: "Choto khushi, boro memory" },
    { id: 97, file: "images/98.jpg", type: "image", caption: "This is my favorite" },
    { id: 98, file: "images/99.jpg", type: "image", caption: "Amader special moment" },
];


// Little Things Data
const LITTLE_THINGS = [
    {
        icon: "☕",
        title: "Tor late reply kintu long messages",
        detail: "Tui bujhis na, ei choto jinish gula i amar kache eto valuable. Reply late hole o, details e lekish. Ar ei ta i special."
    },
    {
        icon: "😄",
        title: "Tor nijer joke e nijei hasha",
        detail: "Tui nijei joke bolis ar nijei hashte shuru koris. Eta amar khub valo lage. So pure, so genuine."
    },
    {
        icon: "🎧",
        title: "Tor music taste",
        detail: "Tui je gan gula shonis, shegula tor mood reflect kore. Ar ami shegula diye toke aro valo bujhi. Tor playlist amar connection to you."
    },
    {
        icon: "🌙",
        title: "Rate kemon calm hoye jay",
        detail: "Rate tui ekdom different person hoye jay — calm, thoughtful, real. That's when I feel closest to you. Shob guard neme jay."
    },
    {
        icon: "💭",
        title: "Tor overthinking sessions",
        detail: "Ha, tui overthink koris. Kintu sheta shows tui care koris, deeply. Ar ami eta appreciate kori. Tor thoughtfulness amar priyo."
    },
    {
        icon: "📱",
        title: "Tor random 2 AM texts",
        detail: "Jokhn tui hotath msg koris rate — sheta amar day make kore dey. Karon jani tui amar kotha vabchis. Distance e o connected."
    },
    {
        icon: "🎨",
        title: "Tor choto choto habits",
        detail: "Tui jokhn excited hosh, fast kotha bolis. Jokhn tired thakis, shudhu 'hmm' bolis. Ei shob i tor part. Ar ami shob ta love kori."
    },
    {
        icon: "🌟",
        title: "Tor honesty",
        detail: "Tui ja mone koris tai bolis. No filter, no pretending. Ei realness amar kache priceless. Never change this about yourself."
    }
];

// Mood Responses
const MOOD_RESPONSES = {
    happy: "I'm so glad tui happy aaj! ❤️\nEi smile ta never harabi na.\nTui deserve koris shob happiness in the world.",
    missing: "Amake miss korchis?\nThat's okay. Ami o toke miss kori.\nDistance change kore na ei feelings.\n\nChokh bondho kor — imagine kor ami tor pasha ei achhi. Ami achhi, always.",
    calm: "Take a deep breath. 🤍\nAaj tor din — tui peaceful thakbi.\n\nJust remember, I'm here. Even in silence. Shobshomoy.",
    low: "Hey, it's okay to not feel okay sometimes.\n\nTui strong, tui brave. Ar tui alone na.\n\nAmi shudhu ekta call away. Always. Jokhn e dorkar, ami achhi."
};

// Miss Me Messages (Random - Mix of Funny, Emotional, Loved)
const MISS_MESSAGES = [
    // Emotional
    "I'm only one call away ❤️",
    "Ei distance shesh hobe, I promise",
    "Chokh bondho koro — imagine koro ami tomake smile korchi",
    "Tumi amar shobcheye kacher manush, even from far",
    "Missing you too. Always. Shobshomoy",
    "You're always on my mind ❤️",
    "Distance temporary, feelings permanent",
    "Ami achhi tomar sathe, virtually holeo",
    "Tomar kotha mone porche ekhon. Miss you Onti!",
    "Just wanted you to know — tomake niye vabchi",
    "Dure thakleo, tomar pasha achhi always",
    
    // Loved/Romantic
    "One day, amra same city te thakbo. Wait for it",
    "Tumi na thakle shob incomplete lage",
    "Tomar hashi amar weakness, always has been",
    "Amader connection special — distance change korte pare na",
    "Jani tumi ek call e chole asbe, ami o tai",
    "Tumi amar home, wherever I am",
    "Every moment thinking about you ❤️",
    "Tumi ami shobshomoy connected, feel koro",
    
    // Funny/Light
    "Ebar to khub miss korcho, na? 😏",
    "Button e bar bar press korcho mane beshi miss korcho!",
    "Ami bujhte parchi tumi amar kotha vabcho 😊",
    "Ekhon amake call dile ki korbe? Hehe",
    "Miss me or just bored? Both are valid 😂",
    "Oi button e click korte korte finger betha hobe but!",
    "Tomake dekhar jonno ekhon screen e smile korchi",
    "Ami o tomake miss kori... maybe tomar cheye beshi 😌",
    "Long distance hard, but we're harder! 💪",
    "Tumi জানো ami এখন কি করছি? Tomake miss korchi!"
];

// Why I Love You Reasons
const LOVE_REASONS = [
    "Tumi jemon spontaneous, shetai amar khub priyo. Unexpected moments create korte paro",
    "Tomar kotha bolar dhong ta — passionate ar genuine. Fake feelings nai",
    "Tumi choto jinish niye excited ho. Sheta dekhe amar o valo lage",
    "Tomar patience level — ami jani sometimes ami annoying hoi, but tumi handle koro",
    "Tumi ami always chemistry ache. Comfortable feel hoi shobshomoy",
    "Tomar supportive nature. Ami jokhn down thaki, tumi pasha pao",
    "Tumi understand koro amar silence. Words na chaile o bujhe jao",
    "Tomar laugh — genuine, contagious. Shune amar din e valo hoye jay",
    "Tumi real. No pretending, no show-off. Tumi tumi e",
    "Tomar caring nature — choto choto kore dekhao but boro effect",
    "Tumi amar weird side accept koro. Judge koro na",
    "Tomar ambitions ar dreams — inspire kore amake",
    "Tumi loyal — trust er upor relationship build korechi amra",
    "Tomar presence calming. Stressed hole o tomar sathe calm feel hoi",
    "Tumi independent but amake value dao. Perfect balance",
    "Tomar forgiveness — mistakes hole o second chance dao",
    "Tumi listen koro properly. Half-minded na, full attention",
    "Tomar little gestures — remember koro choto details",
    "Tumi challenge koro amake grow korte. Better version hote help koro",
    "Tomar honesty — sometimes brutally honest but appreciate kori",
    "Tumi understanding — situations er context bujhe decision nao",
    "Tomar compromise korar ability — relationship e important",
    "Tumi make me laugh even jokhn mood kharap thake",
    "Tomar inner strength — inspire kore constantly",
    "Tumi ami perfect match — imperfections accept kore eksathe"
];

// Secret Code Answers (customize these!)
const SECRET_CODES = {
    "cafe": "Mone ache shei cafe te prothom meet up? Tumi late esechile 20 minutes! But worth chilo ❤️",
    "park": "Park e amra prothom kotha bolsilam properly. Shei bench ta ekhono mone ache.",
    "library": "Library te hide kore kotha boltam. Fun chilo!",
    "default": "Hmm, that's not it! Try again 💕 (Hint: Amader first meetup place)"
};
