 
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { initializeApp } from "firebase/app"; 
import 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA1oa_0wH24tHXoyBroWFgcy-wvL6E7jZA",
  authDomain: "human-error-ex.firebaseapp.com",
  databaseURL: "https://human-error-ex-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "human-error-ex",
  storageBucket: "human-error-ex.appspot.com",
  messagingSenderId: "12403789009",
  appId: "1:12403789009:web:58223534d241ab6e1749f0",
  measurementId: "G-RQQRFNHM58"
};

const input = document.querySelector("input");
input.addEventListener("input", updateInput);

 

function updateInput(e) {
 
  const slangWords = ["ลุงตู่","อัยการศึก","พระมหากษัตริย์","เสรีภาพ","Freedom","สำนักราช","ความจริง","สุจริต","หยาบ","หมิ่น","มาตรา","สังคม","เสรีภาพ","หมิ่นประมาท","เสี่ยโอ","รัชทายาท","กฎหมาย","อาญา","hlab","senate","วุฒิสภา","วุฒิสภา","สว.","สว.","ตู่","หนึ่งหนึ่งสอง","goverment","king","112","5h1t","5hit","a_s_s","a55","anal","anus","ar5e","arrse","arse","ass","ass-fucker","asses","assfucker","assfukka","asshole","assholes","asswhole","b!tch","b00bs","b17ch","b1tch","ballbag","balls","ballsack","bastard","beastial","beastiality","bellend","bestial","bestiality","bi+ch","biatch","bitch","bitcher","bitchers","bitches","bitchin","bitching","bloody","blow job","blowjob","blowjobs","boiolas","bollock","bollok","boner","boob","boobs","booobs","boooobs","booooobs","booooooobs","breasts","buceta","bugger","bum","bunny fucker","butt","butthole","buttmuch","buttplug","c0ck","c0cksucker","carpet muncher","cawk","chink","cipa","cl1t","clit","clitoris","clits","cnut","cock","cock-sucker","cockface","cockhead","cockmunch","cockmuncher","cocks","cocksuck","cocksucked","cocksucker","cocksucking","cocksucks","cocksuka","cocksukka","cok","cokmuncher","coksucka","coon","cox","crap","cum","cummer","cumming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cuntlick","cuntlicker","cuntlicking","cunts","cyalis","cyberfuc","cyberfuck","cyberfucked","cyberfucker","cyberfuckers","cyberfucking","d1ck","damn","dick","dickhead","dildo","dildos","dink","dinks","dirsa","dlck","dog-fucker","doggin","dogging","donkeyribber","doosh","duche","dyke","ejaculate","ejaculated","ejaculates","ejaculating","ejaculatings","ejaculation","ejakulate","f u c k","f u c k e r","f_u_c_k","f4nny","fag","fagging","faggitt","faggot","faggs","fagot","fagots","fags","fanny","fannyflaps","fannyfucker","fanyy","fatass","fcuk","fcuker","fcuking","feck","fecker","felching","fellate","fellatio","fingerfuck","fingerfucked","fingerfucker","fingerfuckers","fingerfucking","fingerfucks","fistfuck","fistfucked","fistfucker","fistfuckers","fistfucking","fistfuckings","fistfucks","flange","fook","fooker","fuck","fucka","fucked","fucker","fuckers","fuckhead","fuckheads","fuckin","fucking","fuckings","fuckingshitmotherfucker","fuckme","fucks","fuckwhit","fuckwit","fudge packer","fudgepacker","fuk","fuker","fukker","fukkin","fuks","fukwhit","fukwit","fux","fux0r","gangbang","gangbanged","gangbangs","gaylord","gaysex","goatse","God","god-dam","god-damned","goddamn","goddamned","hardcoresex","heshe","hoar","hoare","hoer","homo","hore","horniest","horny","hotsex","jack-off","jackoff","jap","jerk-off","jism","jiz","jizm","jizz","kawk","knob","knobead","knobed","knobend","knobhead","knobjocky","knobjokey","kock","kondum","kondums","kum","kummer","kumming","kums","kunilingus","l3i+ch","l3itch","labia","lmfao","lust","lusting","m0f0","m0fo","m45terbate","ma5terb8","ma5terbate","masochist","master-bate","masterb8","masterbat*","masterbat3","masterbate","masterbation","masterbations","masturbate","mo-fo","mof0","mofo","mothafuck","mothafucka","mothafuckas","mothafuckaz","mothafucked","mothafucker","mothafuckers","mothafuckin","mothafucking","mothafuckings","mothafucks","mother fucker","motherfuck","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","muff","mutha","muthafecker","muthafuckker","muther","mutherfucker","n1gga","n1gger","nazi","nigg3r","nigg4h","nigga","niggah","niggas","niggaz","nigger","niggers","nob","nob jokey","nobhead","nobjocky","nobjokey","numbnuts","nutsack","orgasim","orgasims","orgasm","orgasms","p0rn","pawn","pecker","penis","penisfucker","phonesex","phuck","phuk","phuked","phuking","phukked","phukking","phuks","phuq","pigfucker","pimpis","piss","pissed","pisser","pissers","pisses","pissflaps","pissin","pissing","pissoff","poop","porn","porno","pornography","pornos","prick","pricks","pron","pube","pusse","pussi","pussies","pussy","pussys","rectum","retard","rimjaw","rimming","s hit","s_h_i_t","s.o.b.","sadist","schlong","screwing","scroat","scrote","scrotum","semen","sex","sh!+","sh!t","sh1t","shag","shagger","shaggin","shagging","shemale","shi+","shit","shitdick","shite","shited","shitey","shitfuck","shitfull","shithead","shiting","shitings","shits","shitted","shitter","shitters","shitting","shittings","shitty","skank","slut","sluts","smegma","smut","snatch","son-of-a-bitch","spac","spunk","t1tt1e5","t1tties","teets","teez","testical","testicle","tit","titfuck","tits","titt","tittie5","tittiefucker","titties","tittyfuck","tittywank","titwank","tosser","turd","tw4t","twat","twathead","twatty","twunt","twunter","v14gra","v1gra","vagina","viagra","vulva","w00se","wang","wank","wanker","wanky","whoar","whore","willies","willy","กระดอ","กะหรี่","กู","ควย","ควาย","เงี่ยน","จิ๋ม","จู๋","เจี๊ยว","ชิบหาย","ดอกทอง","ตอแหล","แตด","ถ่อย","พ่อมึงตาย","ไพร่","มึง","แม่ง","แมงดา","แม่มึงตาย","เยด","เย็ด","เย๊ด","ร่าน","สถุน","ส้นตีน","สลัม","สวะ","สัด","สาส","สัส","เสือก","หน้าด้าน","หน้าตัวเมีย","หมอย","หัม","ห่า","หำ","หี","เหี้ย","เหยด","เย้ด","หงี่","เน้ด","กะดอ","Yed","กระดอ","kuy","hee","หัวดอ","เหรี้ย","สันขวาน","จัญไร","ควยถอก","กระแดะ","เย็ดแม่","ถอก","ลวยคุย","เยี่ยว","หนังหี","กะโปก","ชักว่าว","โม้ค","ลากมูก","เชรี้ย","พ่อง","พ่อม","ฆวย","ฅวย","ส๊าส","สาด","Fuck"];
  // console.log( e.target.value )
  // const regex = new RegExp(`\\b(${slangWords.join("|")})\\b`, "gi");
  // console.log(regex.test(e.target.value));

  //  const regexPattern = new RegExp("\\b(" + slangWords.join("|") + ")\\b", "gi");
  // const matches = e.target.value.match(regexPattern);

// console.log(containsBadWord(e.target.value)); // true

  // console.log("matches"+ matches)

  // if (matches && matches.length > 0) {
  //   console.log("true")
  //   document.querySelector("input").value=''
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oh no!',
  //     html:'<div style="color:white" class="popup">please do not use filthy language</div>',
  //     width: 340,
  //     padding: '1em',
  //     color: 'black',
  //     background: '#fff url(asset/clickbg.jpg)',
  //     confirmButtonColor: 'red',
  //     confirmButtonText:'OK',
  //   })
  // } else console.log("false")

//////////////////////////////////////////////////////////////
for (let i = 0; i < slangWords.length; i++) {
 
  if(e.target.value.includes(slangWords[i].toLowerCase())){
    document.querySelector("input").value=''
      Swal.fire({
      icon: 'error',
      title: 'OH NO!',
      html:'<div style="color:white" class="popup">You just got censored for no reason</div>',
      width: 340,
      padding: '1em',
      color: 'black',
      background: '#fff url(asset/clickbg.jpg)',
      confirmButtonColor: 'red',
      confirmButtonText:'Fu▇k it',
    })
  }
}
  // if(slangWords.includes(e.target.value.toLowerCase())){
 
  // document.querySelector("input").value=''

  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oh no!',
  //     html:'<div style="color:white" class="popup">please do not use filthy language</div>',
  //     width: 340,
  //     padding: '1em',
  //     color: 'black',
  //     background: '#fff url(asset/clickbg.jpg)',
  //     confirmButtonColor: 'red',
  //     confirmButtonText:'OK',
  //   })
  // }
  
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore();

  async function addMessage(message,myname) {

    const datenow = Date.now();
    try {
      //const docRef = await addDoc(collection(db, "humanerror", datenow), {name: "myname" ,msg: "Ada", timestamp: datenow});
      const setdoc = await setDoc(doc(db,"humanerror", datenow+''), {
        name: myname, msg: message, timestamp: datenow})
        .then(() => {
          console.log("Successful")
          window.location.href = "index1.html"
        });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  document.getElementById('summitme').onclick = function(){

    const myname = document.getElementById('nametext').value;
    const mymsg = document.getElementById('humantext').value;

    if(mymsg=='' || mymsg.trim()=='' ||mymsg==null || mymsg==undefined ||myname=='' ||  myname.trim()=='' || myname==null ||  myname==undefined){
      Swal.fire({
        icon: 'info',
        title: 'Ah..!',
        html:'<div style="color:white" class="popup">please type something, no blank</div>',
        width: 340,
        padding: '1em',
        color: 'black',
        background: '#fff url(asset/clickbg.jpg)',
        confirmButtonColor: '#ffc800d0',
        confirmButtonText:'OK',
      })

    } else {
      addMessage(mymsg,myname);
    }
  }
  