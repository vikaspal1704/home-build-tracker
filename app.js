/* ---------- icons ---------- */
const P = {
  home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
  money:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 9v6M18 9v6"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  tasks:'<rect x="4" y="3.5" width="16" height="17" rx="2"/><path d="M8 9l1.5 1.5L12 8M8 15l1.5 1.5L12 14M14 9.5h3M14 15.5h3"/>',
  stages:'<path d="M3 20h18"/><path d="M5 20v-5h4v5M10 20v-9h4v9M15 20V6h4v14"/>',
  people:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-3.5 3.2-5.5 6.5-5.5s6 2 6.5 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.5 0 4.2 1.6 4.5 4.5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>', minus:'<path d="M5 12h14"/>',
  edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
  clip:'<path d="M20 11.5l-8.2 8.2a5 5 0 0 1-7.1-7.1L13 4.3a3.3 3.3 0 0 1 4.7 4.7l-8.3 8.3a1.7 1.7 0 0 1-2.4-2.4l7.6-7.6"/>',
  up:'<path d="M6 15l6-6 6 6"/>', down:'<path d="M6 9l6 6 6-6"/>', back:'<path d="M15 6l-6 6 6 6"/>', right:'<path d="M9 6l6 6-6 6"/>',
  bill:'<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/>',
  diary:'<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/><path d="M9 8h6"/>',
  more:'<rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/>',
  doc:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
  decide:'<path d="M12 4v16M6 20h12"/><path d="M4 9l3-5 3 5a3 3 0 0 1-6 0zM14 9l3-5 3 5a3 3 0 0 1-6 0z"/><path d="M7 4h10"/>',
  heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>'
};
const ic = (n, w=2) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;

/* ---------- words (English / हिंदी) ---------- */
const T = {
 en:{home:'Home',money:'Money',tasks:'Tasks',stages:'Stages',people:'People',diary:'Site diary',more:'More',docs:'Documents',decisions:'Decisions',
  defaultName:'Our Home Build',addExpense:'Add expense',addTask:'Add task',addPerson:'Add person',addStage:'Add stage',
  spent:'Spent so far',budget:'Budget',left:'Left',over:'Over budget by',noBudget:'No budget set yet',setBudget:'Set budget',editProject:'Project details',
  daysLeft:'{n} days to move-in',moveIn:'Move-in',
  whereWeAre:'Where we are',stagesDone:'{a} of {b} stages done',nowWorking:'Working on now',notStartedYet:'Nothing started yet',
  todoNext:'To do next',seeAll:'See all',recent:'Recent spending',toPay:'Still to pay people',
  nothingDue:'No open tasks. Add what needs doing next.',
  needsAttention:'Needs attention',allClear:'All clear. Nothing urgent right now.',
  diaryMissing:'Today’s site diary is not written yet',overdueTasks:'{n} tasks are overdue',wagesDue:'Wages to pay: {a}',
  milestoneDue:'Pay {p}: {m} ({a})',docExpired:'{d} has expired',docExpiring:'{d} expires in {n} days',decisionDue:'Decide: {d}',advOpen:'Advance not adjusted with {p}: {a}',
  thisMonth:'This month',entries:'Entries',allStages:'All stages',allCats:'All types',search:'Search…',byType:'Where the money went',
  noExpenses:'No expenses yet. Add every payment here, even small cash given to labour.',noMatch:'No entries match these filters.',
  open:'Open',done:'Done',all:'All',noStage:'No stage',overdue:'Overdue',today:'Today',due:'Due',
  noTasks:'Nothing on the list yet. Add things like “Get demolition permission” or “Book water tanker”.',
  notStarted:'Not started',inProgress:'In progress',finished:'Done',spentHere:'Spent',tasksDone:'Tasks',stageBudget:'Stage budget',
  noStages:'Add the steps of your build, from demolition to moving in.',addStandard:'Add standard steps',moveUp:'Move up',moveDown:'Move down',
  agreed:'Agreed',paid:'Paid',balance:'Balance',copy:'Copy',copied:'Number copied',noPeople:'Add your contractor, architect, workers and shops with phone numbers.',
  payments:'{n} payments',
  save:'Save',cancel:'Cancel',del:'Delete',delSure:'Tap again to delete',saving:'Saving…',saved:'Saved',deleted:'Deleted',
  newExpense:'New expense',editExpense:'Edit expense',whatFor:'What was it for?',whatForPh:'e.g. 50 bags cement',amount:'Amount',date:'Date',
  category:'Type of expense',stage:'Stage',paidTo:'Paid to',someoneElse:'Someone else / not listed',mode:'Paid by',bill:'Bill or photo',viewBill:'View bill',
  replaceBill:'Choose a new file to replace it',notes:'Notes',notesPh:'Anything to remember',
  kind:'Kind of payment',kPayment:'Payment',kAdvance:'Advance',kWages:'Daily wages',
  advanceHint:'Money given before the work or bill. Tick “adjusted” once it is cut from a bill.',adjusted:'Already adjusted in a bill',
  advPending:'Advance · not adjusted',advDone:'Advance · adjusted',markAdjusted:'Mark adjusted',advNotAdj:'Advance not adjusted',
  newTask:'New task',editTask:'Edit task',taskTitle:'What needs to be done?',taskPh:'e.g. Call electrician for wiring plan',who:'Who will do it',whoPh:'Name',dueDate:'Due date',status:'Status',
  todo:'To do',doing:'Doing',
  newPerson:'New person',editPerson:'Edit person',name:'Name',role:'Work / role',phone:'Phone',agreedAmt:'Total agreed amount',agreedHint:'The full deal with them, if any. Leave empty if paid per day.',
  newStage:'New stage',editStage:'Edit stage',stageName:'Stage name',start:'Start',end:'End',
  projectName:'Project name',currency:'Currency',startDate:'Work started',moveDate:'Target move-in date',address:'Site address',
  needTitle:'Please write what it was for.',needAmount:'Please enter the amount.',needName:'Please enter a name.',
  viewOnly:'You can see everything here. Ask the owner for edit access to add entries.',
  loading:'Loading your project…',timeout:'Could not load the project. Check your internet and open this page again.',
  saveFail:'Could not save. Check your internet and try again.',uploadFail:'A file could not be uploaded. Try a smaller photo or PDF.',
  addedBy:'Added by {n}',lakh:'lakh',crore:'crore',back:'Back',someone:'Someone',you:'You',
  // people detail + milestones
  payPerson:'Pay {n}',schedule:'Payment schedule',scheduleHint:'Split the agreed amount by stage, e.g. “Plinth done: 10%”. When the work is done, tap Pay.',
  addMilestone:'Add installment',newMilestone:'New installment',editMilestone:'Edit installment',milestoneTitle:'When is it paid?',milestonePh:'e.g. Slab casting done',
  pay:'Pay',paidOn:'Paid {d}',pctOfAgreed:'{p}% of agreed amount',covers:'Installments add up to {a} of {b}',paymentsMade:'Payments made',noPayments:'No payments to them yet.',
  milestone:'Installment',stageDoneDue:'Stage done, payment due',notDueYet:'Not due yet',
  // diary
  writeToday:'Write today’s diary',editToday:'Edit today’s diary',diaryFor:'Diary for {d}',workers:'Workers on site',
  mason:'Mistri',helper:'Helper / Labour',otherWorker:'Other skilled',perDay:'/ day',rate:'Daily rate',dayWages:'Wages for the day: {a}',
  whatHappened:'What happened today?',whatPh:'e.g. Old roof removed, debris taken away',photos:'Photos',
  thisWeek:'This week',wagesEarned:'Wages earned',wagesOwed:'Wages still to pay',paidAhead:'Wages paid ahead',payWages:'Pay wages',wagesTitle:'Labour wages',
  noDiary:'No diary entries yet. Write one line a day: who came and what got done. Add a photo if you can.',noWorkers:'No workers',
  todayDone:'Today’s diary is written',
  // documents
  addDoc:'Add document',newDoc:'New document',editDoc:'Edit document',docTitle:'Document name',docPh:'e.g. Demolition permission from municipality',docKind:'Kind of document',
  file:'File (photo or PDF)',openFile:'Open file',docDate:'Date on document',expiry:'Valid until',kept:'Where is the original kept?',keptPh:'e.g. Blue file in Papa’s almirah',
  expired:'Expired',expiresIn:'{n} days left',noDocs:'Keep all papers here: approvals, agreement, drawings, bills and warranties.',
  filesUnavailable:'Uploading files is not available here. You can still note where the paper is kept.',
  // decisions
  addDecision:'Add decision',newDecision:'New decision',editDecision:'Edit decision',decTitle:'What do we need to decide?',decPh:'e.g. Kitchen floor tiles',
  room:'Room or area',roomPh:'e.g. Kitchen',needBy:'Decide by',openDec:'To decide',decided:'Decided',options:'Options',addOption:'Add option',
  newOption:'New option',editOption:'Edit option',optName:'Option name',optPh:'e.g. Grey matt tile 2×2 ft',price:'Price',photo:'Photo',
  like:'I like this',likes:'{n} like this',chooseThis:'Choose this',chosen:'Chosen',decidedBy:'Decided by {n} on {d}',reopen:'Change decision',
  noDecisions:'List the choices the family must make: tiles, paint colours, kitchen layout. Add options with photos and vote.',
  noOptions:'No options yet. Add 2 or 3 to compare.',optionsCount:'{n} options',
  // more
  language:'Language',moreDocs:'{n} papers',moreDec:'{n} to decide',morePeople:'{n} people',moreStages:'{a} of {b} done',
  // sign in + access
  signInTitle:'Sign in to open your home project',signInHint:'Use the email the owner added for you. We will send a 6-digit code, no password needed.',
  emailLabel:'Your email',emailPh:'name@gmail.com',sendCode:'Send code',codeSent:'We sent a 6-digit code to {e}. Check your inbox, and the spam folder too.',
  codeLabel:'Code from the email',signIn:'Sign in',otherEmail:'Use a different email',withGoogle:'Continue with Google',or:'or',
  badEmail:'Please enter a valid email.',badCode:'That code did not work. Check it, or send a new one.',sendFail:'Could not send the code. Wait a minute and try again.',
  sending:'Sending…',checking:'Checking…',
  noAccessTitle:'This email is not on the family list',noAccessBody:'You are signed in as {e}. Ask the owner to add this email under More → Family & access, then open this page again.',
  signOut:'Sign out',setupTitle:'Almost ready',setupBody:'The owner still needs to connect the database. Follow the steps in README.md: add the Supabase address and key to config.js.',
  access:'Family & access',accessHint:'Only people on this list can open the app. Add their email here, then tell them to open the link and sign in with that email.',
  addMember:'Add person',memberEmail:'Email',memberName:'Name',roleLabel:'What can they do?',roleOwner:'Owner',roleEditor:'Can add and edit',roleViewer:'Can only view',
  remove:'Remove',removeSure:'Tap again to remove',joined:'Has signed in',notJoined:'Not signed in yet',moreAccess:'{n} people can open the app',
  added:'Added',removed:'Removed',addFail:'Could not add. Is this email already on the list?'},
 hi:{home:'होम',money:'खर्चा',tasks:'काम',stages:'चरण',people:'लोग',diary:'साइट डायरी',more:'और',docs:'कागज़ात',decisions:'फ़ैसले',
  defaultName:'हमारा नया घर',addExpense:'खर्चा जोड़ें',addTask:'काम जोड़ें',addPerson:'व्यक्ति जोड़ें',addStage:'चरण जोड़ें',
  spent:'अब तक खर्चा',budget:'बजट',left:'बचा हुआ',over:'बजट से ज़्यादा',noBudget:'अभी बजट तय नहीं है',setBudget:'बजट तय करें',editProject:'प्रोजेक्ट जानकारी',
  daysLeft:'गृह प्रवेश में {n} दिन',moveIn:'गृह प्रवेश',
  whereWeAre:'काम कहाँ तक पहुँचा',stagesDone:'{b} में से {a} चरण पूरे',nowWorking:'अभी चल रहा है',notStartedYet:'अभी कुछ शुरू नहीं हुआ',
  todoNext:'आगे के काम',seeAll:'सब देखें',recent:'हाल के खर्चे',toPay:'लोगों को बाकी देना है',
  nothingDue:'कोई काम बाकी नहीं। आगे का काम जोड़ें।',
  needsAttention:'ध्यान दें',allClear:'सब ठीक है। अभी कुछ ज़रूरी नहीं।',
  diaryMissing:'आज की साइट डायरी अभी नहीं लिखी',overdueTasks:'{n} काम देर से चल रहे हैं',wagesDue:'मज़दूरी देनी है: {a}',
  milestoneDue:'{p} को दें: {m} ({a})',docExpired:'{d} की मियाद खत्म हो गई',docExpiring:'{d} की मियाद {n} दिन में खत्म',decisionDue:'फ़ैसला करें: {d}',advOpen:'{p} का एडवांस एडजस्ट नहीं हुआ: {a}',
  thisMonth:'इस महीने',entries:'एंट्री',allStages:'सभी चरण',allCats:'सभी प्रकार',search:'खोजें…',byType:'पैसा कहाँ गया',
  noExpenses:'अभी कोई खर्चा नहीं। हर पेमेंट यहाँ लिखें, मज़दूरों को दिया छोटा नकद भी।',noMatch:'इन फ़िल्टर से कोई एंट्री नहीं मिली।',
  open:'बाकी',done:'हो गए',all:'सभी',noStage:'बिना चरण',overdue:'देर हो गई',today:'आज',due:'तारीख',
  noTasks:'अभी कोई काम नहीं। जैसे “तोड़ने की अनुमति लेना” या “पानी का टैंकर बुक करना” जोड़ें।',
  notStarted:'शुरू नहीं',inProgress:'चल रहा है',finished:'पूरा',spentHere:'खर्चा',tasksDone:'काम',stageBudget:'चरण का बजट',
  noStages:'घर बनने के चरण जोड़ें, तोड़ने से लेकर गृह प्रवेश तक।',addStandard:'आम चरण जोड़ें',moveUp:'ऊपर',moveDown:'नीचे',
  agreed:'तय रकम',paid:'दिया',balance:'बाकी',copy:'कॉपी',copied:'नंबर कॉपी हो गया',noPeople:'ठेकेदार, आर्किटेक्ट, मज़दूर और दुकानों को फ़ोन नंबर के साथ जोड़ें।',
  payments:'{n} पेमेंट',
  save:'सेव करें',cancel:'रद्द करें',del:'हटाएँ',delSure:'हटाने के लिए फिर दबाएँ',saving:'सेव हो रहा है…',saved:'सेव हो गया',deleted:'हटा दिया',
  newExpense:'नया खर्चा',editExpense:'खर्चा बदलें',whatFor:'किस चीज़ के लिए?',whatForPh:'जैसे 50 बोरी सीमेंट',amount:'रकम',date:'तारीख',
  category:'खर्चे का प्रकार',stage:'चरण',paidTo:'किसको दिया',someoneElse:'कोई और / सूची में नहीं',mode:'कैसे दिया',bill:'बिल या फ़ोटो',viewBill:'बिल देखें',
  replaceBill:'बदलने के लिए नई फ़ाइल चुनें',notes:'नोट',notesPh:'कुछ याद रखना हो तो',
  kind:'भुगतान किस तरह का',kPayment:'भुगतान',kAdvance:'एडवांस',kWages:'रोज़ की मज़दूरी',
  advanceHint:'काम या बिल से पहले दिया पैसा। बिल में कट जाए तो “एडजस्ट हो गया” पर टिक करें।',adjusted:'बिल में एडजस्ट हो गया',
  advPending:'एडवांस · एडजस्ट नहीं हुआ',advDone:'एडवांस · एडजस्ट हुआ',markAdjusted:'एडजस्ट हो गया',advNotAdj:'एडवांस बाकी',
  newTask:'नया काम',editTask:'काम बदलें',taskTitle:'क्या करना है?',taskPh:'जैसे वायरिंग के लिए इलेक्ट्रीशियन को फ़ोन',who:'कौन करेगा',whoPh:'नाम',dueDate:'कब तक',status:'स्थिति',
  todo:'करना है',doing:'चल रहा है',
  newPerson:'नया व्यक्ति',editPerson:'व्यक्ति बदलें',name:'नाम',role:'काम',phone:'फ़ोन',agreedAmt:'कुल तय रकम',agreedHint:'अगर पूरा ठेका तय है तो लिखें। रोज़ की मज़दूरी हो तो खाली छोड़ें।',
  newStage:'नया चरण',editStage:'चरण बदलें',stageName:'चरण का नाम',start:'शुरू',end:'खत्म',
  projectName:'प्रोजेक्ट का नाम',currency:'मुद्रा',startDate:'काम शुरू हुआ',moveDate:'गृह प्रवेश की तारीख',address:'साइट का पता',
  needTitle:'कृपया लिखें किस चीज़ के लिए था।',needAmount:'कृपया रकम लिखें।',needName:'कृपया नाम लिखें।',
  viewOnly:'आप सब देख सकते हैं। एंट्री जोड़ने के लिए मालिक से एडिट की अनुमति लें।',
  loading:'प्रोजेक्ट खुल रहा है…',timeout:'प्रोजेक्ट नहीं खुला। इंटरनेट देखें और पेज फिर खोलें।',
  saveFail:'सेव नहीं हुआ। इंटरनेट देखें और फिर कोशिश करें।',uploadFail:'फ़ाइल अपलोड नहीं हुई। छोटी फ़ोटो या PDF आज़माएँ।',
  addedBy:'{n} ने जोड़ा',lakh:'लाख',crore:'करोड़',back:'वापस',someone:'कोई',you:'आप',
  payPerson:'{n} को भुगतान करें',schedule:'भुगतान की किश्तें',scheduleHint:'तय रकम को चरणों में बाँटें, जैसे “प्लिंथ पूरा: 10%”। काम पूरा होने पर “भुगतान करें” दबाएँ।',
  addMilestone:'किश्त जोड़ें',newMilestone:'नई किश्त',editMilestone:'किश्त बदलें',milestoneTitle:'कब देना है?',milestonePh:'जैसे छत की ढलाई पूरी',
  pay:'भुगतान करें',paidOn:'{d} को दिया',pctOfAgreed:'तय रकम का {p}%',covers:'किश्तें मिलाकर {b} में से {a}',paymentsMade:'किए गए भुगतान',noPayments:'अभी कोई भुगतान नहीं।',
  milestone:'किश्त',stageDoneDue:'चरण पूरा, भुगतान बाकी',notDueYet:'अभी देय नहीं',
  writeToday:'आज की डायरी लिखें',editToday:'आज की डायरी बदलें',diaryFor:'{d} की डायरी',workers:'साइट पर कारीगर',
  mason:'मिस्त्री',helper:'मज़दूर / बेलदार',otherWorker:'अन्य कारीगर',perDay:'/ दिन',rate:'रोज़ की दर',dayWages:'दिन की मज़दूरी: {a}',
  whatHappened:'आज क्या हुआ?',whatPh:'जैसे पुरानी छत हटाई, मलबा उठवाया',photos:'फ़ोटो',
  thisWeek:'इस हफ़्ते',wagesEarned:'मज़दूरी बनी',wagesOwed:'मज़दूरी देनी बाकी',paidAhead:'पहले दी गई मज़दूरी',payWages:'मज़दूरी दें',wagesTitle:'मज़दूरी',
  noDiary:'अभी कोई डायरी नहीं। रोज़ एक लाइन लिखें: कौन आया और क्या काम हुआ। हो सके तो फ़ोटो जोड़ें।',noWorkers:'कोई कारीगर नहीं',
  todayDone:'आज की डायरी लिख दी गई है',
  addDoc:'कागज़ जोड़ें',newDoc:'नया कागज़',editDoc:'कागज़ बदलें',docTitle:'कागज़ का नाम',docPh:'जैसे नगर निगम से तोड़ने की अनुमति',docKind:'कागज़ का प्रकार',
  file:'फ़ाइल (फ़ोटो या PDF)',openFile:'फ़ाइल खोलें',docDate:'कागज़ की तारीख',expiry:'कब तक मान्य',kept:'असली कागज़ कहाँ रखा है?',keptPh:'जैसे पापा की अलमारी में नीली फ़ाइल',
  expired:'मियाद खत्म',expiresIn:'{n} दिन बाकी',noDocs:'सारे कागज़ यहाँ रखें: अनुमति, एग्रीमेंट, नक्शे, बिल और वारंटी।',
  filesUnavailable:'यहाँ फ़ाइल अपलोड नहीं हो सकती। आप लिख सकते हैं कि कागज़ कहाँ रखा है।',
  addDecision:'फ़ैसला जोड़ें',newDecision:'नया फ़ैसला',editDecision:'फ़ैसला बदलें',decTitle:'किस बात का फ़ैसला करना है?',decPh:'जैसे किचन के फ़र्श की टाइल',
  room:'कमरा या जगह',roomPh:'जैसे किचन',needBy:'कब तक तय करना है',openDec:'तय करना है',decided:'तय हो गया',options:'विकल्प',addOption:'विकल्प जोड़ें',
  newOption:'नया विकल्प',editOption:'विकल्प बदलें',optName:'विकल्प का नाम',optPh:'जैसे ग्रे मैट टाइल 2×2 फ़ुट',price:'कीमत',photo:'फ़ोटो',
  like:'मुझे पसंद है',likes:'{n} को पसंद',chooseThis:'यही चुनें',chosen:'चुना गया',decidedBy:'{n} ने {d} को तय किया',reopen:'फिर से तय करें',
  noDecisions:'परिवार को जो चुनना है वो लिखें: टाइल, पेंट का रंग, किचन का डिज़ाइन। फ़ोटो के साथ विकल्प जोड़ें और वोट करें।',
  noOptions:'अभी कोई विकल्प नहीं। तुलना के लिए 2-3 जोड़ें।',optionsCount:'{n} विकल्प',
  language:'भाषा',moreDocs:'{n} कागज़',moreDec:'{n} तय करने बाकी',morePeople:'{n} लोग',moreStages:'{b} में से {a} पूरे',
  signInTitle:'अपना घर प्रोजेक्ट खोलने के लिए साइन इन करें',signInHint:'वही ईमेल डालें जो मालिक ने आपके लिए जोड़ा है। हम 6 अंकों का कोड भेजेंगे, पासवर्ड नहीं चाहिए।',
  emailLabel:'आपका ईमेल',emailPh:'name@gmail.com',sendCode:'कोड भेजें',codeSent:'{e} पर 6 अंकों का कोड भेजा है। इनबॉक्स और स्पैम फ़ोल्डर दोनों देखें।',
  codeLabel:'ईमेल में आया कोड',signIn:'साइन इन करें',otherEmail:'दूसरा ईमेल डालें',withGoogle:'Google से जारी रखें',or:'या',
  badEmail:'कृपया सही ईमेल डालें।',badCode:'यह कोड नहीं चला। जाँचें, या नया कोड मँगाएँ।',sendFail:'कोड नहीं भेजा जा सका। एक मिनट रुककर फिर कोशिश करें।',
  sending:'भेज रहे हैं…',checking:'जाँच रहे हैं…',
  noAccessTitle:'यह ईमेल परिवार की सूची में नहीं है',noAccessBody:'आप {e} से साइन इन हैं। मालिक से कहें कि इसे और → परिवार और अनुमति में जोड़ें, फिर यह पेज दोबारा खोलें।',
  signOut:'साइन आउट',setupTitle:'लगभग तैयार',setupBody:'मालिक को अभी डेटाबेस जोड़ना है। README.md के कदम देखें: config.js में Supabase का पता और key डालें।',
  access:'परिवार और अनुमति',accessHint:'सिर्फ़ इस सूची के लोग ऐप खोल सकते हैं। यहाँ उनका ईमेल जोड़ें, फिर उन्हें लिंक खोलकर उसी ईमेल से साइन इन करने को कहें।',
  addMember:'व्यक्ति जोड़ें',memberEmail:'ईमेल',memberName:'नाम',roleLabel:'वे क्या कर सकते हैं?',roleOwner:'मालिक',roleEditor:'जोड़ और बदल सकते हैं',roleViewer:'सिर्फ़ देख सकते हैं',
  remove:'हटाएँ',removeSure:'हटाने के लिए फिर दबाएँ',joined:'साइन इन कर चुके',notJoined:'अभी साइन इन नहीं किया',moreAccess:'{n} लोग ऐप खोल सकते हैं',
  added:'जोड़ दिया',removed:'हटा दिया',addFail:'नहीं जुड़ा। क्या यह ईमेल पहले से सूची में है?'}
};
const CATS = {
  labour:['Labour','मज़दूरी'], cement_steel:['Cement & Steel','सीमेंट और सरिया'], bricks_sand:['Bricks, Sand & Stone','ईंट, रेत और गिट्टी'],
  electrical:['Electrical','बिजली का सामान'], plumbing:['Plumbing & Sanitary','प्लंबिंग और सैनिटरी'], tiles:['Tiles & Flooring','टाइल और फ़र्श'],
  wood:['Wood, Doors & Windows','लकड़ी, दरवाज़े, खिड़की'], paint:['Paint','पेंट'], fees:['Fees & Permits','फ़ीस और परमिट'],
  transport:['Machines & Transport','मशीन और ढुलाई'], design:['Architect & Design','आर्किटेक्ट और डिज़ाइन'], other:['Other','अन्य']
};
const ROLES = {contractor:['Contractor','ठेकेदार'],architect:['Architect','आर्किटेक्ट'],engineer:['Engineer','इंजीनियर'],mason:['Mason','मिस्त्री'],
  electrician:['Electrician','इलेक्ट्रीशियन'],plumber:['Plumber','प्लंबर'],carpenter:['Carpenter','बढ़ई'],painter:['Painter','पेंटर'],
  supplier:['Shop / Supplier','दुकान / सप्लायर'],family:['Family','परिवार'],other:['Other','अन्य']};
const MODES = {cash:['Cash','नकद'],upi:['UPI','UPI'],bank:['Bank','बैंक'],cheque:['Cheque','चेक'],card:['Card','कार्ड']};
const DOC_KINDS = {permit:['Approvals & permits','अनुमति और मंज़ूरी'],agreement:['Agreements','एग्रीमेंट'],drawing:['Drawings & maps','नक्शे और ड्रॉइंग'],
  property:['Property papers','प्रॉपर्टी के कागज़'],utility:['Electricity & water','बिजली और पानी'],bill:['Bills & warranties','बिल और वारंटी'],other:['Other','अन्य']};
const WORKERS = ['mason','helper','other'];
const WORKER_KEY = {mason:'mason', helper:'helper', other:'otherWorker'};
const DEFAULT_RATES = {mason:900, helper:600, other:800};
const STAGE_HI = {'Planning & Permits':'योजना और अनुमति','Demolition':'पुराना घर तोड़ना','Foundation':'नींव','Structure (Columns & Slabs)':'ढांचा (कॉलम और छत)',
  'Brickwork':'ईंट की चिनाई','Plumbing & Electrical':'प्लंबिंग और बिजली','Plastering':'प्लास्टर','Flooring & Tiles':'फ़र्श और टाइल',
  'Doors & Windows':'दरवाज़े और खिड़कियाँ','Painting':'पेंटिंग','Fittings & Finishing':'फिटिंग और फिनिशिंग','Handover & Move-in':'हैंडओवर और गृह प्रवेश'};
const STANDARD_STAGES = Object.keys(STAGE_HI);
const CURRENCIES = ['INR','USD','EUR','GBP','AED','CAD','AUD','SGD'];
const EXPIRY_WARN_DAYS = 30, DECISION_WARN_DAYS = 7;

/* ---------- helpers ---------- */
const $ = (s, r=document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pref = { get(k){ try{ return localStorage.getItem('homebuild.'+k) }catch{ return null } }, set(k,v){ try{ localStorage.setItem('homebuild.'+k,v) }catch{} } };
const savedLang = pref.get('lang');
let langChosen = savedLang === 'hi' || savedLang === 'en';
let lang = langChosen ? savedLang : (/^hi/i.test(navigator.language || '') ? 'hi' : 'en');
const DEFAULT_NAMES = ['Our Home Build','हमारा नया घर'];
const t = (k, vars={}) => (T[lang][k] ?? T.en[k] ?? k).replace(/\{(\w+)\}/g, (_,v) => vars[v] ?? '');
const pick = (map, k) => (map[k] || map.other || [k,k])[lang==='hi'?1:0];
const stageLabel = s => (lang==='hi' && STAGE_HI[s?.name]) ? STAGE_HI[s.name] : (s?.name || '');
const num = v => { const n = Number(String(v ?? '').replace(/[^\d.]/g,'')); return Number.isFinite(n) ? n : 0; };
const cur = () => S.settings.currency || 'INR';
function money(n){
  const c = cur();
  try { return new Intl.NumberFormat(c==='INR'?'en-IN':'en-US', {style:'currency',currency:c,maximumFractionDigits:0}).format(n||0); }
  catch { return c+' '+Math.round(n||0); }
}
function shortMoney(n){
  if (cur() !== 'INR' || n < 100000) return '';
  if (n >= 1e7) return (n/1e7).toFixed(2).replace(/\.?0+$/,'')+' '+t('crore');
  return (n/1e5).toFixed(2).replace(/\.?0+$/,'')+' '+t('lakh');
}
const isoOf = d => { const x = new Date(d); x.setMinutes(x.getMinutes()-x.getTimezoneOffset()); return x.toISOString().slice(0,10); };
const todayISO = () => isoOf(new Date());
const loc = () => lang==='hi'?'hi-IN':'en-IN';
function fmtDate(iso, withYear){
  if (!iso) return '';
  const d = new Date(iso+'T00:00:00'); if (isNaN(d)) return iso;
  const opts = {day:'numeric',month:'short'}; if (withYear || d.getFullYear()!==new Date().getFullYear()) opts.year='numeric';
  return d.toLocaleDateString(loc(), opts);
}
const fmtDay = iso => new Date(iso+'T00:00:00').toLocaleDateString(loc(), {weekday:'long', day:'numeric', month:'short'});
const monthLabel = iso => new Date((iso||todayISO())+'T00:00:00').toLocaleDateString(loc(),{month:'long',year:'numeric'});
const daysBetween = (a,b) => Math.round((new Date(b+'T00:00:00') - new Date(a+'T00:00:00'))/86400000);
function weekStartISO(iso){ const d = new Date(iso+'T00:00:00'); d.setDate(d.getDate() - (d.getDay()+6)%7); return isoOf(d); }
const sum = (arr, f) => arr.reduce((s,x)=>s+(f(x)||0),0);
const initials = n => (n||'?').trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();
const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2,7);
const blobUrl = id => Backend.fileUrl(id);
const isImage = type => /^image\//.test(type || '');

/* ---------- state ---------- */
const S = { state:'loading', auth:{step:'email', email:'', busy:false, err:''}, email:'', role:null, members:[], membersLoaded:false, settings:{}, stages:[], expenses:[], tasks:[], people:[], milestones:[], diary:[], docs:[], decisions:[],
  loaded:{}, db:null, user:null, assets:null, canWrite:null, myId:null, names:{}, asked:new Set(),
  personId:null, decisionId:null, keepDetail:false, f:{ stage:'', cat:'', q:'', task:'open', docQ:'' } };
const COLS = ['stages','expenses','tasks','people','milestones','diary','docs','decisions'];

const sortedStages = () => [...S.stages].sort((a,b)=>(a.order??0)-(b.order??0));
const stageById = id => S.stages.find(s=>s.id===id);
const personById = id => S.people.find(p=>p.id===id);
const paidToPerson = id => S.expenses.filter(e=>e.paidTo===id);
const spentTotal = () => sum(S.expenses, e=>num(e.amount));
const currentStageId = () => (sortedStages().find(s=>s.status==='doing') || sortedStages().find(s=>s.status!=='done'))?.id || '';
const canWrite = () => S.canWrite !== false;
const byDateDesc = (a,b) => (b.date||'').localeCompare(a.date||'') || (b.createdAt||0)-(a.createdAt||0);
const openTasksSorted = () => S.tasks.filter(x=>x.status!=='done').sort((a,b)=>(a.due||'9999').localeCompare(b.due||'9999') || (a.createdAt||0)-(b.createdAt||0));

/* money derived */
const advancePending = pid => sum(S.expenses.filter(e=>e.paidTo===pid && e.kind==='advance' && !e.adjusted), e=>num(e.amount));
const milestonesOf = pid => S.milestones.filter(m=>m.personId===pid).sort((a,b)=>(a.order??0)-(b.order??0) || (a.createdAt||0)-(b.createdAt||0));
const milestonePaid = m => m.expenseId ? S.expenses.some(e=>e.id===m.expenseId) : !!m.paid;
const milestoneDue = m => !milestonePaid(m) && stageById(m.stageId)?.status === 'done';
/* wages derived */
const dayWages = d => sum(WORKERS, k => num(d['c_'+k]) * num(d['r_'+k]));
const dayWorkers = d => sum(WORKERS, k => num(d['c_'+k]));
const wagesEarned = () => sum(S.diary, dayWages);
const wagesPaid = () => sum(S.expenses.filter(e=>e.kind==='wages'), e=>num(e.amount));
const wagesOwed = () => wagesEarned() - wagesPaid();
const rates = () => ({...DEFAULT_RATES, ...(S.settings.rates||{})});
/* docs derived */
const docDaysLeft = d => d.expiry ? daysBetween(todayISO(), d.expiry) : null;

/* ---------- people names (who added / voted / decided) ---------- */
async function resolveNames(){
  if (!S.user || !S.user.profiles) return;
  const all = [...S.expenses.map(e=>e.addedBy), ...S.diary.map(d=>d.addedBy), ...S.decisions.map(d=>d.decidedBy),
    ...S.decisions.flatMap(d=>(d.options||[]).flatMap(o=>o.votes||[]))];
  const ids = [...new Set(all.filter(Boolean))].filter(id=>!S.asked.has(id));
  if (!ids.length) return;
  ids.forEach(id=>S.asked.add(id));
  try { const ps = await S.user.profiles(ids); for (const id of ids) S.names[id] = ps?.[id]?.name || ''; } catch {}
  scheduleRender();
}
const nameOf = id => id && id===S.myId ? t('you') : (S.names[id] || t('someone'));

/* ---------- routing ---------- */
const VIEWS = ['home','money','diary','tasks','more','stages','people','docs','decisions','access'];
const TABS = ['home','money','diary','tasks','more'];
const TAB_ICON = {home:'home',money:'money',diary:'diary',tasks:'tasks',more:'more'};
const view = () => { const h = location.hash.slice(1); return VIEWS.includes(h) ? h : 'home'; };
const tabOf = v => TABS.includes(v) ? v : 'more';
function go(hash, detail){
  if (detail) Object.assign(S, detail);
  if (location.hash.slice(1) === hash){ window.scrollTo(0,0); render(); return; }
  S.keepDetail = !!detail; location.hash = hash;
}
let rq = 0;
function scheduleRender(){ if (rq) return; rq = requestAnimationFrame(()=>{ rq=0; render(); }); }

function renderChrome(){
  const tab = tabOf(view());
  $('#tabs').hidden = !langChosen || !['ready','loading'].includes(S.state) || !S.db;
  $('#tabs').innerHTML = TABS.map(k => `<a href="#${k}" ${k===tab?'aria-current="page"':''}>${ic(TAB_ICON[k])}<span>${esc(t(k))}</span></a>`).join('');
  const [en, hi] = $('#langBtn').children; en.classList.toggle('on', lang==='en'); hi.classList.toggle('on', lang==='hi');
  $('#projName').textContent = (!S.settings.name || DEFAULT_NAMES.includes(S.settings.name)) ? t('defaultName') : S.settings.name;
  document.documentElement.lang = lang;
}
function render(){
  const a = document.activeElement;
  const focus = a && a.id && $('#main').contains(a) ? { id:a.id, s:a.selectionStart, e:a.selectionEnd } : null;
  renderChrome();
  let html;
  if (!langChosen) html = vChooser();
  else if (S.state==='loading') html = `<div class="empty"><p>${esc(t('loading'))}</p></div>`;
  else if (S.state==='setup') html = `<section class="card authcard"><h2>${esc(t('setupTitle'))}</h2><p class="muted" style="margin:0">${esc(t('setupBody'))}</p></section>`;
  else if (S.state==='signin') html = vSignIn();
  else if (S.state==='noaccess') html = `<section class="card authcard"><h2>${esc(t('noAccessTitle'))}</h2><p style="margin:0">${esc(t('noAccessBody',{e:S.email}))}</p><button class="btn" data-act="sign-out">${esc(t('signOut'))}</button></section>`;
  else if (S.state==='timeout') html = `<div class="notice">${esc(t('timeout'))}</div>`;
  else {
    const v = view();
    const body = v==='people' && S.personId && personById(S.personId) ? vPerson(personById(S.personId))
      : v==='decisions' && S.decisionId && S.decisions.find(d=>d.id===S.decisionId) ? vDecision(S.decisions.find(d=>d.id===S.decisionId))
      : ({home:vHome,money:vMoney,diary:vDiary,tasks:vTasks,more:vMore,stages:vStages,people:vPeople,docs:vDocs,decisions:vDecisions,access:vAccess}[v])();
    html = (S.canWrite===false ? `<div class="notice" style="margin-bottom:16px">${esc(t('viewOnly'))}</div>` : '') + body;
  }
  $('#main').innerHTML = html;
  if (focus){ const el = document.getElementById(focus.id); if (el){ el.focus(); try{ if (focus.s!=null) el.setSelectionRange(focus.s, focus.e); }catch{} } }
}

/* ---------- shared bits ---------- */
const addBtn = (act, label, cls='primary', extra='') => canWrite() ? `<button class="btn ${cls}" data-act="${act}" ${extra}>${ic('plus',2.4)}${esc(label)}</button>` : '';
const emptyBox = (icon, text, act, label) => `<div class="empty">${ic(icon,1.6)}<p>${esc(text)}</p>${act?addBtn(act,label):''}</div>`;
const backBtn = act => `<button class="back" data-act="${act}">${ic('back')}${esc(t('back'))}</button>`;
const head = (title, right='') => `<div class="sec-head" style="margin:0"><h2>${esc(title)}</h2>${right}</div>`;
const statusPill = (st, kind) => {
  const lbl = kind==='stage' ? {todo:t('notStarted'),doing:t('inProgress'),done:t('finished')}[st||'todo'] : {todo:t('todo'),doing:t('doing'),done:t('done')}[st||'todo'];
  return `<span class="pill ${st||'todo'}">${esc(lbl)}</span>`;
};
function thumbs(files, max=4){
  if (!files || !files.length) return '';
  const shown = files.slice(0, max); const extra = files.length - shown.length;
  return `<div class="thumbs">${shown.map((f,i)=>`<a class="thumb" href="${blobUrl(f.id)}" target="_blank" rel="noopener">${isImage(f.type)?`<img src="${blobUrl(f.id)}" alt="" loading="lazy">`:ic('doc',1.6)}${i===shown.length-1&&extra>0?`<span class="more">+${extra}</span>`:''}</a>`).join('')}</div>`;
}
function kindPill(e){
  if (e.kind==='advance') return `<span class="pill ${e.adjusted?'done':'doing'}">${esc(e.adjusted?t('advDone'):t('advPending'))}</span>`;
  if (e.kind==='wages') return `<span class="pill info">${esc(t('kWages'))}</span>`;
  if (e.milestoneId) return `<span class="pill info">${esc(t('milestone'))}</span>`;
  return '';
}
function expenseRow(e){
  const st = stageById(e.stageId); const p = personById(e.paidTo);
  const bits = [pick(CATS, e.category||'other'), st?stageLabel(st):'', p?p.name:'', e.mode?pick(MODES,e.mode):''].filter(Boolean);
  return `<button class="row" data-act="edit-expense" data-id="${esc(e.id)}">
    <div class="main"><div class="t">${esc(e.title||'—')} ${e.billId?`<span class="muted" style="display:inline-block;width:16px;vertical-align:-2px">${ic('clip')}</span>`:''}</div>
    <div class="s">${esc(bits.join(' · '))}</div>${kindPill(e)?`<div style="margin-top:4px">${kindPill(e)}</div>`:''}</div>
    <div><div class="amt num">${esc(money(num(e.amount)))}</div><div class="s" style="text-align:right">${esc(fmtDate(e.date))}</div></div></button>`;
}
function dueBadge(tk){
  if (!tk.due || tk.status==='done') return tk.due ? `<span class="muted small">${esc(fmtDate(tk.due))}</span>` : '';
  const d = daysBetween(todayISO(), tk.due);
  if (d < 0) return `<span class="pill bad">${esc(t('overdue'))} · ${esc(fmtDate(tk.due))}</span>`;
  if (d === 0) return `<span class="pill doing">${esc(t('today'))}</span>`;
  return `<span class="pill info">${esc(fmtDate(tk.due))}</span>`;
}
function taskRow(tk){
  const st = stageById(tk.stageId); const on = tk.status==='done';
  const sub = [st?stageLabel(st):'', tk.assignee||''].filter(Boolean).join(' · ');
  return `<div class="row ${on?'task-done':''}" style="cursor:default">
    <button class="check ${on?'on':''}" data-act="toggle-task" data-id="${esc(tk.id)}" aria-label="${esc(tk.title)}" aria-pressed="${on}" ${canWrite()?'':'disabled'}>${ic('check',3)}</button>
    <button class="main" data-act="edit-task" data-id="${esc(tk.id)}" style="border:0;background:none;text-align:left;cursor:pointer;padding:0">
      <div class="t">${esc(tk.title)}</div>${sub?`<div class="s">${esc(sub)}</div>`:''}</button>
    <div>${tk.status==='doing'?statusPill('doing'):''} ${dueBadge(tk)}</div></div>`;
}

/* ---------- language chooser ---------- */
function vChooser(){
  return `<div class="chooser"><h2>भाषा चुनें<br>Choose your language</h2>
    <div class="opts"><button class="btn primary" data-act="set-lang" data-v="hi" lang="hi">हिंदी<small>Hindi</small></button>
    <button class="btn" data-act="set-lang" data-v="en">English<small>अंग्रेज़ी</small></button></div>
    <p class="muted" style="margin:0">ऊपर दिए बटन से कभी भी भाषा बदल सकते हैं।<br>You can change this any time with the button at the top.</p></div>`;
}

/* ---------- Home ---------- */
function attentionItems(){
  const items = []; const today = todayISO();
  const overdue = S.tasks.filter(x=>x.status!=='done' && x.due && x.due < today).length;
  if (overdue) items.push({tone:'bad', text:t('overdueTasks',{n:overdue}), href:'#tasks'});
  S.milestones.filter(milestoneDue).forEach(m => { const p = personById(m.personId); if (p) items.push({tone:'warn', text:t('milestoneDue',{p:p.name, m:m.title, a:money(num(m.amount))}), act:'pay-milestone', id:m.id}); });
  const owed = wagesOwed(); if (owed > 0) items.push({tone:'warn', text:t('wagesDue',{a:money(owed)}), act:'pay-wages'});
  S.docs.forEach(d => { const n = docDaysLeft(d); if (n==null || n > EXPIRY_WARN_DAYS) return;
    items.push({tone: n<0?'bad':'warn', text: n<0 ? t('docExpired',{d:d.title}) : t('docExpiring',{d:d.title, n}), act:'edit-doc', id:d.id}); });
  S.decisions.filter(d=>d.status!=='decided' && d.needBy && daysBetween(today, d.needBy) <= DECISION_WARN_DAYS)
    .forEach(d => items.push({tone: d.needBy < today ? 'bad':'warn', text:t('decisionDue',{d:d.title})+' · '+fmtDate(d.needBy), act:'open-decision', id:d.id}));
  S.people.forEach(p => { const a = advancePending(p.id); if (a > 0) items.push({tone:'info', text:t('advOpen',{p:p.name, a:money(a)}), act:'open-person', id:p.id}); });
  const working = S.stages.some(s=>s.status==='doing');
  if (working && !S.diary.some(d=>d.id===today)) items.push({tone:'info', text:t('diaryMissing'), act:'diary-today'});
  return items;
}
function attentionRow(x){
  const inner = `<span>${esc(x.text)}</span>${ic('right')}`.replace('<svg', '<svg class="go"');
  return x.href ? `<a class="att ${x.tone}" href="${x.href}">${inner}</a>` : `<button class="att ${x.tone}" data-act="${x.act}" ${x.id?`data-id="${esc(x.id)}"`:''}>${inner}</button>`;
}
function vHome(){
  const spent = spentTotal(); const budget = num(S.settings.budget);
  const pct = budget ? Math.min(100, spent/budget*100) : 0; const over = budget && spent > budget;
  const stages = sortedStages(); const doneN = stages.filter(s=>s.status==='done').length;
  const now = stages.filter(s=>s.status==='doing');
  const target = S.settings.moveIn; const days = target ? daysBetween(todayISO(), target) : null;
  const owe = S.people.map(p=>({p, bal: num(p.agreed) - sum(paidToPerson(p.id), e=>num(e.amount))})).filter(x=>num(x.p.agreed)>0 && x.bal>0).sort((a,b)=>b.bal-a.bal).slice(0,4);
  const recent = [...S.expenses].sort(byDateDesc).slice(0,5);
  const next = openTasksSorted().slice(0,5);
  const att = attentionItems();
  const hasToday = S.diary.some(d=>d.id===todayISO());
  return `<div class="stack">
  <section class="card hero">
    <div class="hero-top">
      <div><div class="label">${esc(t('spent'))}</div><div class="big num">${esc(money(spent))}</div>
        ${shortMoney(spent)?`<div style="opacity:.85">${esc(shortMoney(spent))}</div>`:''}</div>
      ${canWrite()?`<button class="btn sm" data-act="edit-project">${ic('edit')}${esc(t('editProject'))}</button>`:''}
    </div>
    ${budget ? `<div class="bar ${over?'over':''}"><i style="width:${pct.toFixed(1)}%"></i></div>
      <div class="hero-stats num"><div><span class="label">${esc(t('budget'))}</span><br><b>${esc(money(budget))}</b></div>
      <div><span class="label">${esc(over?t('over'):t('left'))}</span><br><b>${esc(money(Math.abs(budget-spent)))}</b></div>
      ${days!=null?`<div><span class="label">${esc(t('moveIn'))}</span><br><b>${esc(fmtDate(target,true))}</b>${days>=0?` · ${esc(t('daysLeft',{n:days}))}`:''}</div>`:''}</div>`
      : `<p style="margin:12px 0 0;opacity:.9">${esc(t('noBudget'))}</p>${canWrite()?`<div style="margin-top:10px"><button class="btn sm" data-act="edit-project">${esc(t('setBudget'))}</button></div>`:''}`}
  </section>
  ${canWrite()?`<div class="actions">${addBtn('add-expense',t('addExpense'))}
    <button class="btn" data-act="diary-today">${ic('diary')}${esc(hasToday?t('editToday'):t('writeToday'))}</button>
    ${addBtn('add-task',t('addTask'),'')}</div>`:''}
  <section class="card">
    <h2 style="margin-bottom:12px">${esc(t('needsAttention'))}</h2>
    ${att.length ? att.map(attentionRow).join('') : `<p class="muted" style="margin:0">${esc(t('allClear'))}</p>`}
  </section>
  <div class="grid2">
    <section class="card">
      <div class="sec-head"><h2>${esc(t('whereWeAre'))}</h2><a class="btn sm ghost" href="#stages">${esc(t('seeAll'))}</a></div>
      ${stages.length ? `<div class="muted">${esc(t('stagesDone',{a:doneN,b:stages.length}))}</div>
        <div class="strip" aria-hidden="true">${stages.map(s=>`<i class="${s.status||''}" title="${esc(stageLabel(s))}"></i>`).join('')}</div>
        <div style="margin-top:14px"><div class="label">${esc(t('nowWorking'))}</div>
        <div class="chips" style="margin-top:6px">${now.length? now.map(s=>`<span class="pill doing" style="font-size:15px;padding:6px 12px">${esc(stageLabel(s))}</span>`).join('') : `<span class="muted">${esc(t('notStartedYet'))}</span>`}</div></div>`
        : emptyBox('stages', t('noStages'), 'add-standard', t('addStandard'))}
    </section>
    <section class="card">
      <div class="sec-head"><h2>${esc(t('todoNext'))}</h2><a class="btn sm ghost" href="#tasks">${esc(t('seeAll'))}</a></div>
      ${next.length ? `<div class="list">${next.map(taskRow).join('')}</div>` : `<p class="muted" style="margin:0">${esc(t('nothingDue'))}</p>`}
    </section>
  </div>
  <div class="grid2">
    <section class="card">
      <div class="sec-head"><h2>${esc(t('recent'))}</h2><a class="btn sm ghost" href="#money">${esc(t('seeAll'))}</a></div>
      ${recent.length ? `<div class="list">${recent.map(expenseRow).join('')}</div>` : emptyBox('bill', t('noExpenses'))}
    </section>
    ${owe.length ? `<section class="card"><div class="sec-head"><h2>${esc(t('toPay'))}</h2><a class="btn sm ghost" href="#people">${esc(t('seeAll'))}</a></div>
      <div class="list">${owe.map(x=>`<button class="row" data-act="open-person" data-id="${esc(x.p.id)}"><div class="avatar">${esc(initials(x.p.name))}</div>
      <div class="main"><div class="t">${esc(x.p.name)}</div><div class="s">${esc(pick(ROLES,x.p.role||'other'))}</div></div><div class="amt num">${esc(money(x.bal))}</div></button>`).join('')}</div></section>` : ''}
  </div></div>`;
}

/* ---------- Money ---------- */
function filteredExpenses(){
  const q = S.f.q.trim().toLowerCase();
  return S.expenses.filter(e => (!S.f.stage || e.stageId===S.f.stage) && (!S.f.cat || (e.category||'other')===S.f.cat) &&
    (!q || [e.title, e.notes, personById(e.paidTo)?.name].join(' ').toLowerCase().includes(q))).sort(byDateDesc);
}
function vMoney(){
  if (!S.expenses.length) return `<div class="stack">${head(t('money'))}<section class="card">${emptyBox('bill', t('noExpenses'), 'add-expense', t('addExpense'))}</section></div>`;
  const list = filteredExpenses(); const total = sum(list, e=>num(e.amount));
  const mPrefix = todayISO().slice(0,7); const monthTotal = sum(list.filter(e=>(e.date||'').startsWith(mPrefix)), e=>num(e.amount));
  const byCat = {}; list.forEach(e=>{ const k=e.category||'other'; byCat[k]=(byCat[k]||0)+num(e.amount); });
  const cats = Object.entries(byCat).sort((a,b)=>b[1]-a[1]); const maxC = cats[0]?.[1] || 1;
  const groups = []; list.forEach(e=>{ const m=(e.date||'').slice(0,7); let g=groups[groups.length-1]; if(!g||g.m!==m){ g={m,items:[]}; groups.push(g);} g.items.push(e); });
  return `<div class="stack">
  ${head(t('money'), addBtn('add-expense',t('addExpense')))}
  <section class="card"><div class="hero-stats num">
    <div><div class="label">${esc(t('spent'))}</div><div class="big" style="font-size:32px">${esc(money(total))}</div>${shortMoney(total)?`<div class="muted">${esc(shortMoney(total))}</div>`:''}</div>
    <div><div class="label">${esc(t('thisMonth'))}</div><div style="font-size:22px;font-weight:700">${esc(money(monthTotal))}</div></div>
    <div><div class="label">${esc(t('entries'))}</div><div style="font-size:22px;font-weight:700">${list.length}</div></div></div></section>
  <div class="filters">
    <select id="fStage" data-filter="stage" aria-label="${esc(t('stage'))}"><option value="">${esc(t('allStages'))}</option>${sortedStages().map(s=>`<option value="${esc(s.id)}" ${S.f.stage===s.id?'selected':''}>${esc(stageLabel(s))}</option>`).join('')}</select>
    <select id="fCat" data-filter="cat" aria-label="${esc(t('category'))}"><option value="">${esc(t('allCats'))}</option>${Object.keys(CATS).map(k=>`<option value="${k}" ${S.f.cat===k?'selected':''}>${esc(pick(CATS,k))}</option>`).join('')}</select>
    <input class="search" id="fQ" type="search" data-filter="q" placeholder="${esc(t('search'))}" value="${esc(S.f.q)}" aria-label="${esc(t('search'))}">
  </div>
  <div class="grid2" style="grid-template-columns:repeat(auto-fit,minmax(300px,1fr))">
    <section class="card" style="order:2">${cats.length?`<h2 style="margin-bottom:14px">${esc(t('byType'))}</h2>${cats.map(([k,v])=>`<div class="cat"><span>${esc(pick(CATS,k))}</span><b class="num">${esc(money(v))}</b><div class="lightbar"><i style="width:${(v/maxC*100).toFixed(1)}%"></i></div></div>`).join('')}`:''}</section>
    <section class="card" style="order:1;padding-top:6px">${groups.length ? groups.map(g=>`<div class="month"><span>${esc(monthLabel(g.m+'-01'))}</span><span class="num">${esc(money(sum(g.items,e=>num(e.amount))))}</span></div><div class="list">${g.items.map(expenseRow).join('')}</div>`).join('') : `<p class="muted">${esc(t('noMatch'))}</p>`}</section>
  </div></div>`;
}

/* ---------- Site diary ---------- */
function workersLine(d){
  const parts = WORKERS.filter(k=>num(d['c_'+k])>0).map(k=>`${num(d['c_'+k])} ${t(WORKER_KEY[k])}`);
  return parts.length ? parts.join(' · ') : t('noWorkers');
}
function vDiary(){
  const today = todayISO(); const todayEntry = S.diary.find(d=>d.id===today);
  const ws = weekStartISO(today); const weekEarned = sum(S.diary.filter(d=>d.id>=ws), dayWages);
  const owed = wagesOwed();
  const days = [...S.diary].sort((a,b)=>b.id.localeCompare(a.id));
  const groups = []; days.forEach(d=>{ const m=d.id.slice(0,7); let g=groups[groups.length-1]; if(!g||g.m!==m){ g={m,items:[]}; groups.push(g);} g.items.push(d); });
  return `<div class="stack">
  ${head(t('diary'))}
  <div class="grid2">
    <section class="card" style="display:flex;flex-direction:column;gap:12px">
      <div class="label">${esc(fmtDay(today))}</div>
      ${todayEntry ? `<div><span class="pill done">${esc(t('todayDone'))}</span></div><div class="muted">${esc(workersLine(todayEntry))}</div>` : ''}
      ${canWrite()?`<button class="btn ${todayEntry?'':'primary'}" style="min-height:60px;font-size:17px" data-act="diary-today">${ic(todayEntry?'edit':'plus',2.4)}${esc(todayEntry?t('editToday'):t('writeToday'))}</button>`:''}
    </section>
    <section class="card" style="display:flex;flex-direction:column;gap:10px">
      <div class="hero-stats num">
        <div><div class="label">${esc(t('thisWeek'))}</div><div style="font-size:22px;font-weight:700">${esc(money(weekEarned))}</div><div class="small muted">${esc(t('wagesEarned'))}</div></div>
        <div><div class="label">${esc(owed>=0?t('wagesOwed'):t('paidAhead'))}</div><div style="font-size:22px;font-weight:700;color:${owed>0?'var(--warn)':'var(--good)'}">${esc(money(Math.abs(owed)))}</div></div>
      </div>
      ${owed>0 && canWrite() ? `<button class="btn" data-act="pay-wages">${ic('money')}${esc(t('payWages'))}</button>` : ''}
    </section>
  </div>
  ${!days.length ? `<section class="card">${emptyBox('diary', t('noDiary'))}</section>` :
    groups.map(g=>`<section class="card"><div class="month" style="padding-top:0"><span>${esc(monthLabel(g.m+'-01'))}</span></div>${g.items.map(d=>{
      const st = stageById(d.stageId); const w = dayWages(d);
      return `<div class="day"><div class="day-head"><div><h3>${esc(fmtDay(d.id))}</h3><div class="small muted">${esc([st?stageLabel(st):'', workersLine(d)].filter(Boolean).join(' · '))}</div></div>
        <div style="display:flex;gap:8px;align-items:center">${w?`<b class="num">${esc(money(w))}</b>`:''}${canWrite()?`<button class="iconbtn" data-act="edit-diary" data-id="${esc(d.id)}" aria-label="${esc(t('diaryFor',{d:fmtDate(d.id)}))}">${ic('edit')}</button>`:''}</div></div>
        ${d.note?`<p>${esc(d.note)}</p>`:''}${thumbs(d.photos)}</div>`; }).join('')}</section>`).join('')}
  </div>`;
}

/* ---------- Tasks ---------- */
function vTasks(){
  const mode = S.f.task;
  const list = S.tasks.filter(x => mode==='all' || (mode==='done' ? x.status==='done' : x.status!=='done'))
    .sort((a,b)=>(a.due||'9999').localeCompare(b.due||'9999') || (a.createdAt||0)-(b.createdAt||0));
  const groups = [...sortedStages().map(s=>({s, items:list.filter(x=>x.stageId===s.id)})), {s:null, items:list.filter(x=>!stageById(x.stageId))}].filter(g=>g.items.length);
  const counts = { open:S.tasks.filter(x=>x.status!=='done').length, done:S.tasks.filter(x=>x.status==='done').length, all:S.tasks.length };
  return `<div class="stack">
  ${head(t('tasks'), addBtn('add-task',t('addTask')))}
  <div class="chips" role="group">${['open','done','all'].map(k=>`<button class="chip" data-act="task-filter" data-v="${k}" aria-pressed="${mode===k}">${esc(t(k))} · ${counts[k]}</button>`).join('')}</div>
  ${!S.tasks.length ? `<section class="card">${emptyBox('tasks', t('noTasks'), 'add-task', t('addTask'))}</section>`
    : groups.length ? groups.map(g=>`<section class="card"><div class="sec-head"><h2>${esc(g.s?stageLabel(g.s):t('noStage'))}</h2>${g.s?statusPill(g.s.status,'stage'):''}</div><div class="list">${g.items.map(taskRow).join('')}</div></section>`).join('')
    : `<section class="card"><p class="muted" style="margin:0">${esc(t('nothingDue'))}</p></section>`}
  </div>`;
}

/* ---------- More ---------- */
function vMore(){
  const st = sortedStages(); const openDec = S.decisions.filter(d=>d.status!=='decided').length;
  const tile = (href, icon, title, sub) => `<a class="tile" href="#${href}"><span class="ti">${ic(icon)}</span><span><b>${esc(title)}</b><small>${esc(sub)}</small></span></a>`;
  return `<div class="stack">${head(t('more'))}
  <div class="tiles">
    ${tile('people','people',t('people'),t('morePeople',{n:S.people.length}))}
    ${tile('docs','doc',t('docs'),t('moreDocs',{n:S.docs.length}))}
    ${tile('decisions','decide',t('decisions'),t('moreDec',{n:openDec}))}
    ${tile('stages','stages',t('stages'),t('moreStages',{a:st.filter(s=>s.status==='done').length,b:st.length}))}
    ${canWrite()?`<button class="tile" data-act="edit-project"><span class="ti">${ic('home')}</span><span><b>${esc(t('editProject'))}</b><small>${esc(t('budget'))} · ${esc(t('moveIn'))}</small></span></button>`:''}
    ${tile('access','people',t('access'), S.membersLoaded ? t('moreAccess',{n:S.members.length}) : S.email)}
    <button class="tile" data-act="lang"><span class="ti">${ic('globe')}</span><span><b>${esc(t('language'))}</b><small>${lang==='hi'?'हिंदी → English':'English → हिंदी'}</small></span></button>
    <button class="tile" data-act="sign-out"><span class="ti">${ic('back')}</span><span><b>${esc(t('signOut'))}</b><small>${esc(S.email)}</small></span></button>
  </div></div>`;
}

/* ---------- Sign in ---------- */
function vSignIn(){
  const a = S.auth;
  const google = Backend.googleEnabled ? `<button type="button" class="btn" data-act="google" style="min-height:56px">${esc(t('withGoogle'))}</button><div class="muted small" style="text-align:center">${esc(t('or'))}</div>` : '';
  const body = a.step==='email'
    ? `${google}<form class="f" id="authForm" novalidate><div class="field"><label for="authEmail">${esc(t('emailLabel'))}</label>
        <input id="authEmail" type="email" inputmode="email" autocomplete="email" placeholder="${esc(t('emailPh'))}" value="${esc(a.email)}"></div>
        ${a.err?`<div class="err">${esc(a.err)}</div>`:''}
        <button class="btn primary" type="submit" style="min-height:56px;font-size:17px" ${a.busy?'disabled':''}>${esc(a.busy?t('sending'):t('sendCode'))}</button></form>`
    : `<form class="f" id="authForm" novalidate><p style="margin:0">${esc(t('codeSent',{e:a.email}))}</p>
        <div class="field"><label for="authCode">${esc(t('codeLabel'))}</label>
        <input id="authCode" inputmode="numeric" autocomplete="one-time-code" maxlength="10" style="font-size:24px;letter-spacing:.3em;text-align:center" placeholder="••••••"></div>
        ${a.err?`<div class="err">${esc(a.err)}</div>`:''}
        <button class="btn primary" type="submit" style="min-height:56px;font-size:17px" ${a.busy?'disabled':''}>${esc(a.busy?t('checking'):t('signIn'))}</button>
        <button class="btn ghost" type="button" data-act="auth-back">${esc(t('otherEmail'))}</button></form>`;
  return `<section class="card authcard"><h2>${esc(t('signInTitle'))}</h2><p class="muted" style="margin:0">${esc(t('signInHint'))}</p>${body}</section>`;
}
async function handleAuthSubmit(){
  const a = S.auth; if (a.busy) return;
  a.err = '';
  if (a.step==='email'){
    const email = ($('#authEmail')?.value || '').trim().toLowerCase(); a.email = email;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ a.err = t('badEmail'); render(); return; }
    a.busy = true; render();
    try { await Backend.auth.sendCode(email); a.step = 'code'; } catch { a.err = t('sendFail'); }
    a.busy = false; render(); setTimeout(()=>$('#authCode')?.focus(), 30); return;
  }
  const code = ($('#authCode')?.value || '').replace(/\D/g,'');
  if (code.length < 6){ a.err = t('badCode'); render(); return; }
  a.busy = true; render();
  try { await Backend.auth.verifyCode(a.email, code); } catch { a.err = t('badCode'); a.busy = false; render(); return; }
  a.busy = false;
}

/* ---------- Family & access ---------- */
const ROLE_LABEL = r => ({owner:t('roleOwner'), editor:t('roleEditor'), viewer:t('roleViewer')}[r] || r);
async function loadMembers(){
  try { S.members = await Backend.members.list(); S.membersLoaded = true; } catch {}
  scheduleRender();
}
function vAccess(){
  if (!S.membersLoaded) loadMembers();
  const owner = S.role === 'owner';
  return `<div class="stack">
  ${backBtn('go-more')}
  ${head(t('access'))}
  <div class="notice">${esc(t('accessHint'))}</div>
  ${owner ? `<section class="card"><h2 style="margin-bottom:12px">${esc(t('addMember'))}</h2>
    <form class="f" id="memberForm" novalidate>
      <div class="two"><div class="field"><label for="mEmail">${esc(t('memberEmail'))}</label><input id="mEmail" type="email" inputmode="email" placeholder="${esc(t('emailPh'))}"></div>
      <div class="field"><label for="mName">${esc(t('memberName'))}</label><input id="mName" type="text"></div></div>
      <div class="field"><div class="flabel">${esc(t('roleLabel'))}</div><div class="seg" role="radiogroup">
        <label><input type="radio" name="mRole" value="editor" checked>${esc(t('roleEditor'))}</label>
        <label><input type="radio" name="mRole" value="viewer">${esc(t('roleViewer'))}</label></div></div>
      <div class="err" id="memberErr" hidden></div>
      <button class="btn primary" type="submit">${ic('plus',2.4)}${esc(t('addMember'))}</button>
    </form></section>` : ''}
  <section class="card"><div class="list">${S.members.map(m=>`
    <div class="row" style="cursor:default;flex-wrap:wrap">
      <div class="avatar">${esc(initials(m.name || m.email))}</div>
      <div class="main"><div class="t">${esc(m.name || m.email.split('@')[0])}${m.email===S.email?` · ${esc(t('you'))}`:''}</div><div class="s">${esc(m.email)}</div>
        <div style="margin-top:4px"><span class="pill ${m.user_id?'done':'todo'}">${esc(m.user_id?t('joined'):t('notJoined'))}</span></div></div>
      ${owner && m.role!=='owner' ? `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
          <select data-member-role="${esc(m.email)}" aria-label="${esc(t('roleLabel'))}" style="width:auto">
            <option value="editor" ${m.role==='editor'?'selected':''}>${esc(t('roleEditor'))}</option>
            <option value="viewer" ${m.role==='viewer'?'selected':''}>${esc(t('roleViewer'))}</option></select>
          <button class="btn sm danger" data-act="remove-member" data-email="${esc(m.email)}">${esc(t('remove'))}</button></div>`
        : `<span class="pill info">${esc(ROLE_LABEL(m.role))}</span>`}
    </div>`).join('')}</div></section></div>`;
}
async function handleMemberSubmit(){
  const email = ($('#mEmail')?.value || '').trim().toLowerCase(); const name = ($('#mName')?.value || '').trim();
  const role = document.querySelector('input[name=mRole]:checked')?.value || 'editor';
  const err = $('#memberErr');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ err.textContent = t('badEmail'); err.hidden = false; return; }
  try { await Backend.members.add(email, name, role); toast(t('added')); await loadMembers(); }
  catch { err.textContent = t('addFail'); err.hidden = false; }
}

/* ---------- Stages ---------- */
function vStages(){
  const stages = sortedStages();
  if (!stages.length) return `<div class="stack">${head(t('stages'))}<section class="card">${emptyBox('stages', t('noStages'), 'add-standard', t('addStandard'))}</section></div>`;
  return `<div class="stack">
  ${head(t('stages'), addBtn('add-stage',t('addStage'),''))}
  <section class="card">${stages.map((s,i)=>{
    const spent = sum(S.expenses.filter(e=>e.stageId===s.id), e=>num(e.amount));
    const tk = S.tasks.filter(x=>x.stageId===s.id); const tkDone = tk.filter(x=>x.status==='done').length;
    const b = num(s.budget); const st = s.status||'todo';
    return `<div class="stage ${st}"><div class="no num">${i+1}</div><div class="body">
      <div class="stage-head"><h3>${esc(stageLabel(s))}</h3>
        <div style="display:flex;gap:6px">${canWrite()?`
          <button class="iconbtn" data-act="move-stage" data-id="${esc(s.id)}" data-dir="-1" aria-label="${esc(t('moveUp'))}" ${i===0?'disabled':''}>${ic('up')}</button>
          <button class="iconbtn" data-act="move-stage" data-id="${esc(s.id)}" data-dir="1" aria-label="${esc(t('moveDown'))}" ${i===stages.length-1?'disabled':''}>${ic('down')}</button>
          <button class="iconbtn" data-act="edit-stage" data-id="${esc(s.id)}" aria-label="${esc(t('editStage'))}">${ic('edit')}</button>`:''}</div></div>
      <div class="seg" role="group" aria-label="${esc(t('status'))}">${['todo','doing','done'].map(v=>`<button data-act="stage-status" data-id="${esc(s.id)}" data-v="${v}" aria-pressed="${st===v}" ${canWrite()?'':'disabled'}>${esc({todo:t('notStarted'),doing:t('inProgress'),done:t('finished')}[v])}</button>`).join('')}</div>
      <div class="meta num"><span>${esc(t('spentHere'))}: <b>${esc(money(spent))}</b>${b?` / ${esc(money(b))}`:''}</span>
        ${tk.length?`<span>${esc(t('tasksDone'))}: <b>${tkDone}/${tk.length}</b></span>`:''}
        ${(s.start||s.end)?`<span>${esc(fmtDate(s.start))}${s.end?' → '+esc(fmtDate(s.end)):''}</span>`:''}</div>
      ${b?`<div class="lightbar ${spent>b?'over':''}"><i style="width:${Math.min(100,spent/b*100).toFixed(1)}%"></i></div>`:''}
      ${s.notes?`<div class="small muted">${esc(s.notes)}</div>`:''}
    </div></div>`; }).join('')}</section></div>`;
}

/* ---------- People ---------- */
function personMoney(p){
  const paid = sum(paidToPerson(p.id), e=>num(e.amount)); const ag = num(p.agreed);
  return {paid, ag, bal: ag - paid, adv: advancePending(p.id), count: paidToPerson(p.id).length};
}
function moneyTriple(m){
  return `<div class="money3 num">
    ${m.ag?`<div><span class="muted">${esc(t('agreed'))}</span><b>${esc(money(m.ag))}</b></div>`:''}
    <div><span class="muted">${esc(t('paid'))}</span><b>${esc(money(m.paid))}</b></div>
    ${m.ag?`<div><span class="muted">${esc(t('balance'))}</span><b style="color:${m.bal>0?'var(--warn)':'var(--good)'}">${esc(money(m.bal))}</b></div>`:`<div><span class="muted">&nbsp;</span><span class="muted">${esc(t('payments',{n:m.count}))}</span></div>`}
  </div>`;
}
const phoneBox = p => p.phone ? `<div class="phone"><span>${esc(p.phone)}</span><button class="btn sm" data-act="copy" data-text="${esc(p.phone)}">${ic('copy')}${esc(t('copy'))}</button></div>` : '';
function vPeople(){
  return `<div class="stack">
  ${backBtn('go-more')}
  ${head(t('people'), addBtn('add-person',t('addPerson')))}
  ${!S.people.length ? `<section class="card">${emptyBox('people', t('noPeople'), 'add-person', t('addPerson'))}</section>` :
  `<div class="people">${[...S.people].sort((a,b)=>(a.name||'').localeCompare(b.name||'')).map(p=>{
    const m = personMoney(p); const dueN = milestonesOf(p.id).filter(milestoneDue).length;
    return `<section class="card person">
      <button class="who" data-act="open-person" data-id="${esc(p.id)}" style="border:0;background:none;padding:0;text-align:left;cursor:pointer;width:100%">
        <div class="avatar">${esc(initials(p.name))}</div><div style="flex:1;min-width:0"><h3 style="font-size:17px;overflow-wrap:anywhere">${esc(p.name)}</h3><div class="muted small">${esc(pick(ROLES,p.role||'other'))}</div></div>
        <span style="width:22px;color:var(--muted)">${ic('right')}</span></button>
      ${phoneBox(p)}
      ${moneyTriple(m)}
      ${(m.adv>0 || dueN)?`<div class="chips">${m.adv>0?`<span class="pill doing">${esc(t('advNotAdj'))}: ${esc(money(m.adv))}</span>`:''}${dueN?`<span class="pill bad">${esc(t('stageDoneDue'))}</span>`:''}</div>`:''}
    </section>`; }).join('')}</div>`}
  </div>`;
}
function vPerson(p){
  const m = personMoney(p); const ms = milestonesOf(p.id);
  const msTotal = sum(ms, x=>num(x.amount));
  const pays = paidToPerson(p.id).sort(byDateDesc);
  return `<div class="stack">
  ${backBtn('close-person')}
  <section class="card person">
    <div class="who"><div class="avatar">${esc(initials(p.name))}</div><div style="flex:1;min-width:0"><h2 style="overflow-wrap:anywhere">${esc(p.name)}</h2><div class="muted">${esc(pick(ROLES,p.role||'other'))}</div></div>
      ${canWrite()?`<button class="iconbtn" data-act="edit-person" data-id="${esc(p.id)}" aria-label="${esc(t('editPerson'))}">${ic('edit')}</button>`:''}</div>
    ${phoneBox(p)}
    ${moneyTriple(m)}
    ${m.adv>0?`<div><span class="pill doing">${esc(t('advNotAdj'))}: ${esc(money(m.adv))}</span></div>`:''}
    ${p.notes?`<div class="small muted">${esc(p.notes)}</div>`:''}
    ${canWrite()?`<button class="btn primary" style="min-height:56px;font-size:17px" data-act="pay-person" data-id="${esc(p.id)}">${ic('money')}${esc(t('payPerson',{n:p.name}))}</button>`:''}
  </section>
  <section class="card">
    <div class="sec-head"><h2>${esc(t('schedule'))}</h2>${addBtn('add-milestone',t('addMilestone'),'sm',`data-id="${esc(p.id)}"`)}</div>
    ${ms.length ? `<div>${ms.map(x=>{
      const paidE = x.expenseId ? S.expenses.find(e=>e.id===x.expenseId) : null; const isPaid = milestonePaid(x); const due = milestoneDue(x);
      const st = stageById(x.stageId); const pct = m.ag ? Math.round(num(x.amount)/m.ag*100) : 0;
      return `<div class="ms-row"><span class="dot ${isPaid?'paid':due?'due':''}"></span>
        <button class="main" data-act="edit-milestone" data-id="${esc(x.id)}"><div class="t">${esc(x.title)}</div>
          <div class="s num">${esc([money(num(x.amount)), pct?`${pct}%`:'', st?stageLabel(st):''].filter(Boolean).join(' · '))}</div>
          <div class="s">${isPaid ? esc(t('paidOn',{d:fmtDate(paidE?.date || x.paidOn)})) : due ? `<span style="color:var(--warn);font-weight:600">${esc(t('stageDoneDue'))}</span>` : esc(t('notDueYet'))}</div></button>
        ${!isPaid && canWrite() ? `<button class="btn sm ${due?'primary':''}" data-act="pay-milestone" data-id="${esc(x.id)}">${esc(t('pay'))}</button>` : isPaid ? `<span class="pill done">${esc(t('paid'))}</span>` : ''}
      </div>`; }).join('')}</div>
      ${m.ag?`<p class="small muted" style="margin:10px 0 0">${esc(t('covers',{a:money(msTotal), b:money(m.ag)}))}</p>`:''}`
      : `<p class="muted" style="margin:0">${esc(t('scheduleHint'))}</p>`}
  </section>
  <section class="card">
    <h2 style="margin-bottom:8px">${esc(t('paymentsMade'))}</h2>
    ${pays.length ? `<div class="list">${pays.map(e => e.kind==='advance' && !e.adjusted && canWrite()
      ? `<div>${expenseRow(e)}<div style="padding:0 4px 10px"><button class="btn sm" data-act="mark-adjusted" data-id="${esc(e.id)}">${ic('check')}${esc(t('markAdjusted'))}</button></div></div>`
      : expenseRow(e)).join('')}</div>` : `<p class="muted" style="margin:0">${esc(t('noPayments'))}</p>`}
  </section></div>`;
}

/* ---------- Documents ---------- */
function vDocs(){
  const q = S.f.docQ.trim().toLowerCase();
  const list = S.docs.filter(d => !q || [d.title, d.notes, d.kept, pick(DOC_KINDS, d.kind||'other')].join(' ').toLowerCase().includes(q));
  const groups = Object.keys(DOC_KINDS).map(k=>({k, items:list.filter(d=>(d.kind||'other')===k).sort((a,b)=>(b.date||'').localeCompare(a.date||''))})).filter(g=>g.items.length);
  return `<div class="stack">
  ${backBtn('go-more')}
  ${head(t('docs'), addBtn('add-doc',t('addDoc')))}
  ${!S.assets && canWrite() ? `<div class="notice">${esc(t('filesUnavailable'))}</div>` : ''}
  ${!S.docs.length ? `<section class="card">${emptyBox('doc', t('noDocs'), 'add-doc', t('addDoc'))}</section>` : `
  <input id="fDocQ" type="search" data-filter="docQ" placeholder="${esc(t('search'))}" value="${esc(S.f.docQ)}" aria-label="${esc(t('search'))}">
  ${groups.length ? groups.map(g=>`<section class="card"><h2 style="margin-bottom:6px">${esc(pick(DOC_KINDS,g.k))}</h2><div class="list">${g.items.map(d=>{
    const n = docDaysLeft(d);
    const exp = n==null ? '' : n<0 ? `<span class="pill bad">${esc(t('expired'))}</span>` : n<=EXPIRY_WARN_DAYS ? `<span class="pill doing">${esc(t('expiresIn',{n}))}</span>` : `<span class="pill info">${esc(t('expiry'))}: ${esc(fmtDate(d.expiry))}</span>`;
    return `<button class="row" data-act="edit-doc" data-id="${esc(d.id)}">
      <div class="thumb" style="width:52px;height:52px">${d.fileId && isImage(d.fileType) ? `<img src="${blobUrl(d.fileId)}" alt="" loading="lazy">` : ic('doc',1.6)}</div>
      <div class="main"><div class="t">${esc(d.title)}</div><div class="s">${esc([fmtDate(d.date), d.kept].filter(Boolean).join(' · '))}</div></div>${exp}</button>`; }).join('')}</div></section>`).join('')
    : `<section class="card"><p class="muted" style="margin:0">${esc(t('noMatch'))}</p></section>`}`}
  </div>`;
}

/* ---------- Decisions ---------- */
function decisionRow(d){
  const opts = d.options || []; const chosen = opts.find(o=>o.id===d.chosenId);
  const today = todayISO();
  const need = d.status!=='decided' && d.needBy ? `<span class="pill ${d.needBy<today?'bad':daysBetween(today,d.needBy)<=DECISION_WARN_DAYS?'doing':'info'}">${esc(t('needBy'))}: ${esc(fmtDate(d.needBy))}</span>` : '';
  const pic = chosen?.photoId || opts.find(o=>o.photoId)?.photoId;
  return `<button class="row" data-act="open-decision" data-id="${esc(d.id)}">
    <div class="thumb" style="width:56px;height:56px">${pic?`<img src="${blobUrl(pic)}" alt="" loading="lazy">`:ic('decide',1.6)}</div>
    <div class="main"><div class="t">${esc(d.title)}</div><div class="s">${esc([d.room, chosen ? `${t('chosen')}: ${chosen.name}` : t('optionsCount',{n:opts.length})].filter(Boolean).join(' · '))}</div></div>
    ${need}</button>`;
}
function vDecisions(){
  const open = S.decisions.filter(d=>d.status!=='decided').sort((a,b)=>(a.needBy||'9999').localeCompare(b.needBy||'9999'));
  const done = S.decisions.filter(d=>d.status==='decided').sort((a,b)=>(b.decidedAt||'').localeCompare(a.decidedAt||''));
  return `<div class="stack">
  ${backBtn('go-more')}
  ${head(t('decisions'), addBtn('add-decision',t('addDecision')))}
  ${!S.decisions.length ? `<section class="card">${emptyBox('decide', t('noDecisions'), 'add-decision', t('addDecision'))}</section>` : `
  ${open.length?`<section class="card"><h2 style="margin-bottom:6px">${esc(t('openDec'))}</h2><div class="list">${open.map(decisionRow).join('')}</div></section>`:''}
  ${done.length?`<section class="card"><h2 style="margin-bottom:6px">${esc(t('decided'))}</h2><div class="list">${done.map(decisionRow).join('')}</div></section>`:''}`}
  </div>`;
}
function vDecision(d){
  const opts = d.options || []; const decided = d.status==='decided';
  return `<div class="stack">
  ${backBtn('close-decision')}
  <section class="card" style="display:flex;flex-direction:column;gap:10px">
    <div class="sec-head" style="margin:0"><h2 style="font-size:22px">${esc(d.title)}</h2>${canWrite()?`<button class="iconbtn" data-act="edit-decision" data-id="${esc(d.id)}" aria-label="${esc(t('editDecision'))}">${ic('edit')}</button>`:''}</div>
    <div class="chips">${decided?`<span class="pill done">${esc(t('decided'))}</span>`:`<span class="pill doing">${esc(t('openDec'))}</span>`}
      ${d.room?`<span class="pill info">${esc(d.room)}</span>`:''}${!decided&&d.needBy?`<span class="pill info">${esc(t('needBy'))}: ${esc(fmtDate(d.needBy))}</span>`:''}</div>
    ${decided?`<div class="muted">${esc(t('decidedBy',{n:nameOf(d.decidedBy), d:fmtDate(d.decidedAt)}))}</div>`:''}
    ${d.notes?`<div class="muted">${esc(d.notes)}</div>`:''}
    ${decided && canWrite()?`<div><button class="btn sm" data-act="reopen-decision" data-id="${esc(d.id)}">${esc(t('reopen'))}</button></div>`:''}
  </section>
  <div class="sec-head" style="margin:0"><h2>${esc(t('options'))}</h2>${addBtn('add-option',t('addOption'),'',`data-id="${esc(d.id)}"`)}</div>
  ${!opts.length ? `<section class="card"><p class="muted" style="margin:0">${esc(t('noOptions'))}</p></section>` :
  `<div class="opts">${opts.map(o=>{
    const votes = o.votes || []; const mine = S.myId && votes.includes(S.myId); const isChosen = d.chosenId===o.id;
    return `<article class="opt ${isChosen?'chosen':''}">
      ${o.photoId?`<a class="ph" href="${blobUrl(o.photoId)}" target="_blank" rel="noopener"><img src="${blobUrl(o.photoId)}" alt="" loading="lazy"></a>`:`<div class="ph">${ic('camera',1.6)}</div>`}
      <div class="ob">
        <div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start"><h3>${esc(o.name)}</h3>${isChosen?`<span class="pill done">${esc(t('chosen'))}</span>`:''}</div>
        ${o.price?`<b class="num">${esc(money(num(o.price)))}</b>`:''}
        ${o.note?`<div class="small muted">${esc(o.note)}</div>`:''}
        ${votes.length?`<div class="small muted">${esc(t('likes',{n:votes.length}))}: ${esc(votes.map(nameOf).join(', '))}</div>`:''}
        <div class="row-btns">
          ${S.myId && canWrite() ? `<button class="btn sm like" data-act="vote" data-id="${esc(d.id)}" data-opt="${esc(o.id)}" aria-pressed="${!!mine}">${ic('heart')}${esc(t('like'))}</button>` : ''}
          ${!decided && canWrite() ? `<button class="btn sm primary" data-act="choose-option" data-id="${esc(d.id)}" data-opt="${esc(o.id)}">${ic('check')}${esc(t('chooseThis'))}</button>` : ''}
          ${canWrite() ? `<button class="iconbtn" data-act="edit-option" data-id="${esc(d.id)}" data-opt="${esc(o.id)}" aria-label="${esc(t('editOption'))}">${ic('edit')}</button>` : ''}
        </div>
      </div></article>`; }).join('')}</div>`}
  </div>`;
}

/* ---------- form sheet ---------- */
let sheet = null;
function fieldHTML(f, v){
  const id = 'f_'+f.key; const val = v ?? f.default ?? '';
  const lab = `<label for="${id}">${esc(f.label)}</label>`;
  let html;
  if (f.type==='select') html = `<div class="field">${lab}<select id="${id}" name="${f.key}">${f.options.map(o=>`<option value="${esc(o.v)}" ${String(o.v)===String(val)?'selected':''}>${esc(o.l)}</option>`).join('')}</select>${f.hint?`<div class="hint">${esc(f.hint)}</div>`:''}</div>`;
  else if (f.type==='seg') html = `<div class="field"><div class="flabel" id="${id}_l">${esc(f.label)}</div><div class="seg" role="radiogroup" aria-labelledby="${id}_l">${f.options.map((o,i)=>`<label><input type="radio" name="${f.key}" id="${id}_${i}" value="${esc(o.v)}" ${String(o.v)===String(val)?'checked':''}>${esc(o.l)}</label>`).join('')}</div>${f.hint?`<div class="hint">${esc(f.hint)}</div>`:''}</div>`;
  else if (f.type==='textarea') html = `<div class="field">${lab}<textarea id="${id}" name="${f.key}" placeholder="${esc(f.ph||'')}">${esc(val)}</textarea></div>`;
  else if (f.type==='check') html = `<label class="checkrow" for="${id}"><input type="checkbox" id="${id}" name="${f.key}" value="1" ${val?'checked':''}>${esc(f.label)}</label>`;
  else if (f.type==='amount') html = `<div class="field">${lab}<input id="${id}" name="${f.key}" inputmode="numeric" autocomplete="off" placeholder="0" value="${val?esc(val):''}" data-amount>${amountHint(id, num(val), f.pctOf)}${f.hint?`<div class="hint">${esc(f.hint)}</div>`:''}</div>`;
  else if (f.type==='file' || f.type==='files'){
    if (!S.assets) return '';
    const existing = f.existing || [];
    html = `<div class="field"><div class="flabel">${esc(f.label)}</div><div class="filebox" style="flex-direction:column;align-items:stretch">
      ${existing.length?`<div class="thumbs">${existing.map(x=>`<div class="thumb" data-file="${esc(x.id)}"><a href="${blobUrl(x.id)}" target="_blank" rel="noopener" style="display:contents">${isImage(x.type)?`<img src="${blobUrl(x.id)}" alt="">`:ic('doc',1.6)}</a>${f.type==='files'?`<button type="button" data-act="toggle-file" data-file="${esc(x.id)}" aria-label="${esc(t('del'))}">${ic('x',2.5)}</button>`:''}</div>`).join('')}</div>`:''}
      ${f.type==='file' && existing.length?`<span class="small muted">${esc(t('replaceBill'))}</span>`:''}
      <input id="${id}" name="${f.key}" type="file" accept="${esc(f.accept||'image/*')}" ${f.type==='files'?'multiple':''}></div></div>`;
  }
  else if (f.type==='labour'){
    const r = f.rates || {};
    html = `<div class="field"><div class="flabel">${esc(f.label)}</div><div class="labour">${WORKERS.map(k=>`
      <div class="lrow"><div class="lname">${esc(t(WORKER_KEY[k]))}</div>
        <div class="stepper"><button type="button" class="iconbtn" data-act="step" data-for="f_c_${k}" data-d="-1" aria-label="−">${ic('minus',2.6)}</button>
          <input id="f_c_${k}" name="c_${k}" inputmode="numeric" value="${num(f.values?.['c_'+k])}" aria-label="${esc(t(WORKER_KEY[k]))}" data-labour>
          <button type="button" class="iconbtn" data-act="step" data-for="f_c_${k}" data-d="1" aria-label="+">${ic('plus',2.6)}</button></div>
        <div class="rate"><input id="f_r_${k}" name="r_${k}" inputmode="numeric" value="${num(f.values?.['r_'+k] ?? r[k])}" aria-label="${esc(t('rate'))}" data-labour><span>${esc(t('perDay'))}</span></div>
      </div>`).join('')}</div><div class="total-line num" id="wageTotal"></div></div>`;
  }
  else if (f.type==='row') return `<div class="two">${f.fields.map(x=>fieldHTML(x, f.values?.[x.key])).join('')}</div>`;
  else {
    const type = f.type || 'text';
    html = `<div class="field">${lab}<input id="${id}" name="${f.key}" type="${type}" ${f.list?`list="${id}_dl"`:''} placeholder="${esc(f.ph||'')}" value="${esc(val)}">${f.list?`<datalist id="${id}_dl">${f.list.map(x=>`<option value="${esc(x)}">`).join('')}</datalist>`:''}${f.hint?`<div class="hint">${esc(f.hint)}</div>`:''}</div>`;
  }
  return f.showIf ? `<div data-show-if="${esc(f.showIf[0])}=${esc(f.showIf[1])}">${html}</div>` : html;
}
function amountHint(id, n, pctOf){
  const parts = n ? [money(n), shortMoney(n), pctOf ? t('pctOfAgreed',{p:Math.round(n/pctOf*100)}) : ''].filter(Boolean) : [];
  return `<div class="hint num" data-hint-for="${id}" ${pctOf?`data-pct-of="${pctOf}"`:''}>${esc(parts.join(' · '))}</div>`;
}
function applyShowIf(form){
  form.querySelectorAll('[data-show-if]').forEach(w => { const [k,v] = w.dataset.showIf.split('='); const el = form.elements[k]; w.hidden = !el || el.value !== v; });
}
function updateWageTotal(){
  const box = $('#wageTotal'); if (!box) return;
  const total = sum(WORKERS, k => num($('#f_c_'+k)?.value) * num($('#f_r_'+k)?.value));
  box.textContent = t('dayWages',{a:money(total)});
}
function openForm(cfg){
  const vals = cfg.values || {};
  const fieldsHTML = cfg.fields.map(f => f.type==='row' ? fieldHTML({...f, values:vals}) : fieldHTML(f.type==='labour'?{...f, values:vals}:f, vals[f.key])).join('');
  $('#modal').innerHTML = `<div class="scrim" data-act="scrim"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheetTitle">
    <div class="sheet-head"><h2 id="sheetTitle">${esc(cfg.title)}</h2><button class="iconbtn" type="button" data-act="close" aria-label="${esc(t('cancel'))}">${ic('x')}</button></div>
    <form class="f" id="sheetForm" novalidate>${fieldsHTML}
      ${cfg.meta?`<div class="small muted">${esc(cfg.meta)}</div>`:''}
      <div class="err" id="formErr" hidden></div>
      <div class="form-foot">
        ${cfg.onDelete && canWrite() ? `<button type="button" class="btn danger" data-act="form-delete">${esc(t('del'))}</button>` : ''}
        <div class="grow"><button type="button" class="btn" data-act="close">${esc(t('cancel'))}</button>
        <button type="submit" class="btn primary" id="saveBtn" ${canWrite()?'':'disabled'}>${esc(t('save'))}</button></div>
      </div></form></div></div>`;
  sheet = {...cfg, removed:new Set()};
  const form = $('#sheetForm');
  applyShowIf(form); updateWageTotal();
  if (!cfg.edit) setTimeout(()=>{ if (!form.contains(document.activeElement)) form.querySelector('input:not([type=radio]):not([type=file]):not([type=checkbox]), textarea')?.focus(); }, 30);
  form.addEventListener('change', () => applyShowIf(form));
  form.addEventListener('submit', async ev => {
    ev.preventDefault();
    const fd = new FormData(form); const out = {};
    for (const [k,v] of fd.entries()) if (!(v instanceof File)) out[k] = v;
    const err = cfg.validate ? cfg.validate(out) : '';
    const errEl = $('#formErr');
    if (err){ errEl.textContent = err; errEl.hidden = false; return; }
    const btn = $('#saveBtn'); btn.disabled = true; btn.textContent = t('saving');
    try { await cfg.onSave(out, form); closeForm(); toast(t('saved')); }
    catch (e) { errEl.textContent = e?.message === 'upload' ? t('uploadFail') : t('saveFail'); errEl.hidden = false; btn.disabled = false; btn.textContent = t('save'); }
  });
}
function closeForm(){ $('#modal').innerHTML = ''; sheet = null; }
let toastTimer;
function toast(msg){ const el=$('#toast'); el.textContent=msg; el.hidden=false; clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.hidden=true, 2200); }

/* ---------- data writes ---------- */
const clean = o => Object.fromEntries(Object.entries(o).map(([k,v])=>[k, v===undefined?'':v]));
async function saveDoc(col, id, data){
  data = clean({...data, updatedAt: Date.now()});
  if (id){ await S.db.doc(col+'/'+id).update(data); return id; }
  const ref = await S.db.collection(col).add({...data, createdAt: Date.now(), addedBy: S.myId || ''});
  return ref.id;
}
async function uploadFiles(input){
  const files = [...(input?.files || [])].filter(f=>f.size);
  if (!files.length || !S.assets) return [];
  const out = [];
  for (const f of files){
    try { const r = await S.assets.upload(f); out.push({id:r.id, type:r.contentType || f.type || ''}); }
    catch { throw new Error('upload'); }
  }
  return out;
}

/* ---------- forms per record ---------- */
const stageOptions = () => [{v:'',l:'—'}, ...sortedStages().map(s=>({v:s.id,l:stageLabel(s)}))];
const peopleOptions = () => [{v:'',l:t('someoneElse')}, ...[...S.people].sort((a,b)=>(a.name||'').localeCompare(b.name||'')).map(p=>({v:p.id,l:p.name+' · '+pick(ROLES,p.role||'other')}))];
function expenseForm(e, opts={}){
  const edit = !!e; e = e || {};
  const ms = e.milestoneId ? S.milestones.find(m=>m.id===e.milestoneId) : null;
  const metaBits = [edit && e.addedBy ? t('addedBy',{n:nameOf(e.addedBy)}) : '', ms ? `${t('milestone')}: ${ms.title}` : ''].filter(Boolean);
  openForm({ title: edit?t('editExpense'):t('newExpense'), edit,
    values: {...(opts.preset||{}), ...e},
    meta: metaBits.join(' · '),
    fields: [
      {key:'title', label:t('whatFor'), ph:t('whatForPh')},
      {type:'row', fields:[{key:'amount', type:'amount', label:t('amount')}, {key:'date', type:'date', label:t('date'), default:todayISO()}]},
      {key:'kind', type:'seg', label:t('kind'), default:'payment', options:[{v:'payment',l:t('kPayment')},{v:'advance',l:t('kAdvance')},{v:'wages',l:t('kWages')}]},
      {key:'adjusted', type:'check', label:t('adjusted'), showIf:['kind','advance']},
      {key:'paidTo', type:'select', label:t('paidTo'), options:peopleOptions()},
      {key:'category', type:'select', label:t('category'), default:'labour', options:Object.keys(CATS).map(k=>({v:k,l:pick(CATS,k)}))},
      {key:'stageId', type:'select', label:t('stage'), default:currentStageId(), options:stageOptions()},
      {key:'mode', type:'seg', label:t('mode'), default:'cash', options:Object.keys(MODES).map(k=>({v:k,l:pick(MODES,k)}))},
      {key:'bill', type:'file', label:t('bill'), accept:'image/*,application/pdf', existing: e.billId ? [{id:e.billId, type:e.billType}] : []},
      {key:'notes', type:'textarea', label:t('notes'), ph:t('notesPh')}
    ],
    validate: v => !v.title.trim() ? t('needTitle') : num(v.amount) <= 0 ? t('needAmount') : '',
    onSave: async v => {
      const [up] = await uploadFiles($('#f_bill'));
      const kind = v.kind || 'payment';
      const data = {title:v.title.trim(), amount:num(v.amount), date:v.date||todayISO(), kind, adjusted: kind==='advance' && v.adjusted==='1',
        category: kind==='wages' ? 'labour' : v.category, stageId:v.stageId, paidTo:v.paidTo, mode:v.mode||'cash', notes:v.notes.trim(),
        ...(opts.preset?.milestoneId ? {milestoneId:opts.preset.milestoneId} : {}), ...(up ? {billId:up.id, billType:up.type} : {})};
      const id = await saveDoc('expenses', e.id, data);
      if (opts.afterSave) await opts.afterSave(id, data);
    },
    onDelete: edit ? () => S.db.doc('expenses/'+e.id).delete() : null });
}
function taskForm(tk){
  const edit = !!tk; tk = tk || {};
  openForm({ title: edit?t('editTask'):t('newTask'), edit, values:{...tk},
    fields: [
      {key:'title', label:t('taskTitle'), ph:t('taskPh')},
      {key:'stageId', type:'select', label:t('stage'), default:currentStageId(), options:stageOptions()},
      {type:'row', fields:[{key:'assignee', label:t('who'), ph:t('whoPh'), list:S.people.map(p=>p.name)}, {key:'due', type:'date', label:t('dueDate')}]},
      {key:'status', type:'seg', label:t('status'), default:'todo', options:[{v:'todo',l:t('todo')},{v:'doing',l:t('doing')},{v:'done',l:t('done')}]},
      {key:'notes', type:'textarea', label:t('notes'), ph:t('notesPh')}
    ],
    validate: v => !v.title.trim() ? t('needTitle') : '',
    onSave: v => saveDoc('tasks', tk.id, {title:v.title.trim(), stageId:v.stageId, assignee:v.assignee.trim(), due:v.due, status:v.status||'todo', notes:v.notes.trim()}),
    onDelete: edit ? () => S.db.doc('tasks/'+tk.id).delete() : null });
}
function personForm(p){
  const edit = !!p; p = p || {};
  openForm({ title: edit?t('editPerson'):t('newPerson'), edit, values:{...p},
    fields: [
      {key:'name', label:t('name')},
      {key:'role', type:'select', label:t('role'), default:'contractor', options:Object.keys(ROLES).map(k=>({v:k,l:pick(ROLES,k)}))},
      {key:'phone', type:'tel', label:t('phone')},
      {key:'agreed', type:'amount', label:t('agreedAmt'), hint:t('agreedHint')},
      {key:'notes', type:'textarea', label:t('notes'), ph:t('notesPh')}
    ],
    validate: v => !v.name.trim() ? t('needName') : '',
    onSave: v => saveDoc('people', p.id, {name:v.name.trim(), role:v.role, phone:v.phone.trim(), agreed:num(v.agreed), notes:v.notes.trim()}),
    onDelete: edit ? async () => { await S.db.doc('people/'+p.id).delete(); S.personId = null; } : null });
}
function milestoneForm(personId, m){
  const edit = !!m; m = m || {}; const p = personById(personId || m.personId);
  openForm({ title: edit?t('editMilestone'):t('newMilestone'), edit, values:{...m},
    meta: p ? p.name : '',
    fields: [
      {key:'title', label:t('milestoneTitle'), ph:t('milestonePh')},
      {key:'amount', type:'amount', label:t('amount'), pctOf: num(p?.agreed) || 0},
      {key:'stageId', type:'select', label:t('stage'), hint:t('scheduleHint'), options:stageOptions()},
    ],
    validate: v => !v.title.trim() ? t('needTitle') : num(v.amount) <= 0 ? t('needAmount') : '',
    onSave: v => saveDoc('milestones', m.id, {personId: m.personId || personId, title:v.title.trim(), amount:num(v.amount), stageId:v.stageId,
      ...(edit ? {} : {order: milestonesOf(personId).length + 1, paid:false})}),
    onDelete: edit ? () => S.db.doc('milestones/'+m.id).delete() : null });
}
function payMilestone(m){
  const p = personById(m.personId);
  expenseForm(null, { preset:{ title: `${m.title}${p?' · '+p.name:''}`, amount: num(m.amount), paidTo: m.personId, stageId: m.stageId || currentStageId(),
      category: p?.role==='architect' ? 'design' : 'labour', kind:'payment', milestoneId: m.id },
    afterSave: (id, data) => S.db.doc('milestones/'+m.id).update({paid:true, expenseId:id, paidOn:data.date, updatedAt:Date.now()}) });
}
function payWages(){
  const owed = Math.max(0, wagesOwed());
  expenseForm(null, { preset:{ title: `${t('wagesTitle')} · ${fmtDate(weekStartISO(todayISO()))} – ${fmtDate(todayISO())}`, amount: owed || '', kind:'wages', category:'labour', mode:'cash' } });
}
function diaryForm(date){
  const d = S.diary.find(x=>x.id===date); const edit = !!d; const v = d || {};
  const r = rates();
  openForm({ title: t('diaryFor',{d:fmtDate(date)}), edit, values:{...v, date},
    meta: edit && v.addedBy ? t('addedBy',{n:nameOf(v.addedBy)}) : '',
    fields: [
      {type:'row', fields:[{key:'date', type:'date', label:t('date')}, {key:'stageId', type:'select', label:t('stage'), default:currentStageId(), options:stageOptions()}]},
      {key:'labour', type:'labour', label:t('workers'), rates:r},
      {key:'note', type:'textarea', label:t('whatHappened'), ph:t('whatPh')},
      {key:'photos', type:'files', label:t('photos'), accept:'image/*', existing: v.photos || []}
    ],
    onSave: async (vals) => {
      const newDate = vals.date || date;
      const kept = (v.photos || []).filter(x => !sheet.removed.has(x.id));
      const added = await uploadFiles($('#f_photos'));
      const data = {date:newDate, stageId:vals.stageId, note:(vals.note||'').trim(), photos:[...kept, ...added], updatedAt:Date.now(),
        addedBy: v.addedBy || S.myId || ''};
      WORKERS.forEach(k => { data['c_'+k] = num(vals['c_'+k]); data['r_'+k] = num(vals['r_'+k]); });
      const existingTarget = S.diary.find(x=>x.id===newDate);
      if (newDate !== date && existingTarget) throw new Error('exists');
      await S.db.doc('diary/'+newDate).set(data);
      if (edit && newDate !== date) await S.db.doc('diary/'+date).delete();
      const newRates = {}; WORKERS.forEach(k => { if (data['r_'+k]) newRates[k] = data['r_'+k]; });
      if (WORKERS.some(k => newRates[k] && newRates[k] !== r[k])) await S.db.doc('settings/project').set(clean({...S.settings, rates:{...r, ...newRates}}));
    },
    onDelete: edit ? () => S.db.doc('diary/'+date).delete() : null });
}
function docForm(dc){
  const edit = !!dc; dc = dc || {};
  openForm({ title: edit?t('editDoc'):t('newDoc'), edit, values:{...dc},
    fields: [
      {key:'title', label:t('docTitle'), ph:t('docPh')},
      {key:'kind', type:'select', label:t('docKind'), default:'permit', options:Object.keys(DOC_KINDS).map(k=>({v:k,l:pick(DOC_KINDS,k)}))},
      {key:'file', type:'file', label:t('file'), accept:'image/*,application/pdf', existing: dc.fileId ? [{id:dc.fileId, type:dc.fileType}] : []},
      {type:'row', fields:[{key:'date', type:'date', label:t('docDate')}, {key:'expiry', type:'date', label:t('expiry')}]},
      {key:'kept', label:t('kept'), ph:t('keptPh')},
      {key:'notes', type:'textarea', label:t('notes'), ph:t('notesPh')}
    ],
    validate: v => !v.title.trim() ? t('needName') : '',
    onSave: async v => {
      const [up] = await uploadFiles($('#f_file'));
      await saveDoc('docs', dc.id, {title:v.title.trim(), kind:v.kind, date:v.date, expiry:v.expiry, kept:v.kept.trim(), notes:v.notes.trim(),
        ...(up ? {fileId:up.id, fileType:up.type} : {})});
    },
    onDelete: edit ? () => S.db.doc('docs/'+dc.id).delete() : null });
}
function decisionForm(d){
  const edit = !!d; d = d || {};
  openForm({ title: edit?t('editDecision'):t('newDecision'), edit, values:{...d},
    fields: [
      {key:'title', label:t('decTitle'), ph:t('decPh')},
      {type:'row', fields:[{key:'room', label:t('room'), ph:t('roomPh')}, {key:'needBy', type:'date', label:t('needBy')}]},
      {key:'notes', type:'textarea', label:t('notes'), ph:t('notesPh')}
    ],
    validate: v => !v.title.trim() ? t('needTitle') : '',
    onSave: async v => {
      const id = await saveDoc('decisions', d.id, {title:v.title.trim(), room:v.room.trim(), needBy:v.needBy, notes:v.notes.trim(),
        ...(edit ? {} : {status:'open', options:[], chosenId:''})});
      if (!edit){ S.decisionId = id; if (location.hash !== '#decisions'){ S.keepDetail = true; location.hash = 'decisions'; } }
    },
    onDelete: edit ? async () => { await S.db.doc('decisions/'+d.id).delete(); S.decisionId = null; } : null });
}
function optionForm(d, o){
  const edit = !!o; o = o || {};
  openForm({ title: edit?t('editOption'):t('newOption'), edit, values:{...o}, meta:d.title,
    fields: [
      {key:'name', label:t('optName'), ph:t('optPh')},
      {key:'price', type:'amount', label:t('price')},
      {key:'photo', type:'file', label:t('photo'), accept:'image/*', existing: o.photoId ? [{id:o.photoId, type:o.photoType||'image/jpeg'}] : []},
      {key:'note', type:'textarea', label:t('notes'), ph:t('notesPh')}
    ],
    validate: v => !v.name.trim() ? t('needName') : '',
    onSave: async v => {
      const [up] = await uploadFiles($('#f_photo'));
      const fresh = S.decisions.find(x=>x.id===d.id) || d;
      const next = {...o, id:o.id || newId(), name:v.name.trim(), price:num(v.price), note:(v.note||'').trim(), votes:o.votes||[], ...(up ? {photoId:up.id, photoType:up.type} : {})};
      const options = edit ? (fresh.options||[]).map(x=>x.id===o.id?next:x) : [...(fresh.options||[]), next];
      await S.db.doc('decisions/'+d.id).update({options, updatedAt:Date.now()});
    },
    onDelete: edit ? async () => {
      const fresh = S.decisions.find(x=>x.id===d.id) || d;
      await S.db.doc('decisions/'+d.id).update({options:(fresh.options||[]).filter(x=>x.id!==o.id), ...(fresh.chosenId===o.id?{chosenId:'',status:'open'}:{}), updatedAt:Date.now()});
    } : null });
}
function projectForm(){
  const st = S.settings;
  openForm({ title:t('editProject'), edit:true, values:{...st, name: (!st.name || DEFAULT_NAMES.includes(st.name)) ? t('defaultName') : st.name},
    fields: [
      {key:'name', label:t('projectName')},
      {type:'row', fields:[{key:'budget', type:'amount', label:t('budget')}, {key:'currency', type:'select', label:t('currency'), default:'INR', options:CURRENCIES.map(c=>({v:c,l:c}))}]},
      {type:'row', fields:[{key:'startDate', type:'date', label:t('startDate')}, {key:'moveIn', type:'date', label:t('moveDate')}]},
      {key:'address', label:t('address')}
    ],
    validate: v => !v.name.trim() ? t('needName') : '',
    onSave: v => S.db.doc('settings/project').set(clean({...S.settings, name:v.name.trim(), budget:num(v.budget), currency:v.currency||'INR', startDate:v.startDate, moveIn:v.moveIn, address:v.address.trim(), updatedAt:Date.now()})) });
}

/* ---------- events ---------- */
let armedDelete = null;
async function quickWrite(fn){ try { await fn(); } catch { toast(t('saveFail')); } }
document.addEventListener('click', async ev => {
  const el = ev.target.closest('[data-act]'); if (!el) return;
  const act = el.dataset.act, id = el.dataset.id;
  if (act==='scrim' && ev.target!==el) return;
  switch (act){
    case 'lang': lang = lang==='hi'?'en':'hi'; langChosen = true; pref.set('lang', lang); render(); break;
    case 'set-lang': lang = el.dataset.v==='hi'?'hi':'en'; langChosen = true; pref.set('lang', lang); render(); break;
    case 'scrim': case 'close': closeForm(); break;
    case 'go-more': go('more'); break;
    case 'sign-out': Backend.auth.signOut(); break;
    case 'google': Backend.auth.google().catch(()=>{ S.auth.err = t('sendFail'); render(); }); break;
    case 'auth-back': S.auth = {step:'email', email:S.auth.email, busy:false, err:''}; render(); break;
    case 'remove-member': {
      if (armedDelete !== el){ armedDelete = el; el.classList.add('armed'); el.textContent = t('removeSure'); setTimeout(()=>{ if (armedDelete===el){ armedDelete=null; el.classList.remove('armed'); el.textContent=t('remove'); } }, 4000); break; }
      armedDelete = null; el.disabled = true;
      try { await Backend.members.remove(el.dataset.email); toast(t('removed')); await loadMembers(); } catch { toast(t('saveFail')); el.disabled = false; }
      break; }
    case 'edit-project': if (canWrite()) projectForm(); break;
    case 'add-expense': expenseForm(); break;
    case 'edit-expense': expenseForm(S.expenses.find(x=>x.id===id)); break;
    case 'mark-adjusted': quickWrite(()=>S.db.doc('expenses/'+id).update({adjusted:true, updatedAt:Date.now()})); break;
    case 'add-task': taskForm(); break;
    case 'edit-task': taskForm(S.tasks.find(x=>x.id===id)); break;
    case 'add-person': personForm(); break;
    case 'edit-person': personForm(personById(id)); break;
    case 'open-person': go('people', {personId:id}); break;
    case 'close-person': S.personId = null; render(); window.scrollTo(0,0); break;
    case 'pay-person': expenseForm(null, {preset:{paidTo:id, category: personById(id)?.role==='architect'?'design':'labour'}}); break;
    case 'add-milestone': milestoneForm(id); break;
    case 'edit-milestone': { const m = S.milestones.find(x=>x.id===id); if (m && canWrite()) milestoneForm(m.personId, m); break; }
    case 'pay-milestone': { const m = S.milestones.find(x=>x.id===id); if (m && canWrite()) payMilestone(m); break; }
    case 'pay-wages': if (canWrite()) payWages(); break;
    case 'diary-today': if (canWrite()) diaryForm(todayISO()); break;
    case 'edit-diary': diaryForm(id); break;
    case 'add-doc': docForm(); break;
    case 'edit-doc': docForm(S.docs.find(x=>x.id===id)); break;
    case 'add-decision': decisionForm(); break;
    case 'open-decision': go('decisions', {decisionId:id}); break;
    case 'close-decision': S.decisionId = null; render(); window.scrollTo(0,0); break;
    case 'edit-decision': decisionForm(S.decisions.find(x=>x.id===id)); break;
    case 'add-option': { const d = S.decisions.find(x=>x.id===id); if (d) optionForm(d); break; }
    case 'edit-option': { const d = S.decisions.find(x=>x.id===id); const o = d?.options?.find(x=>x.id===el.dataset.opt); if (o) optionForm(d, o); break; }
    case 'vote': {
      const d = S.decisions.find(x=>x.id===id); if (!d || !S.myId) break;
      const options = (d.options||[]).map(o => o.id!==el.dataset.opt ? o : {...o, votes: (o.votes||[]).includes(S.myId) ? o.votes.filter(v=>v!==S.myId) : [...(o.votes||[]), S.myId]});
      d.options = options; render();
      quickWrite(()=>S.db.doc('decisions/'+id).update({options, updatedAt:Date.now()})); break; }
    case 'choose-option': {
      const d = S.decisions.find(x=>x.id===id); if (!d) break;
      Object.assign(d, {status:'decided', chosenId:el.dataset.opt, decidedBy:S.myId||'', decidedAt:todayISO()}); render();
      quickWrite(()=>S.db.doc('decisions/'+id).update({status:'decided', chosenId:el.dataset.opt, decidedBy:S.myId||'', decidedAt:todayISO(), updatedAt:Date.now()})); break; }
    case 'reopen-decision': { const d = S.decisions.find(x=>x.id===id); if (!d) break; d.status='open'; d.chosenId=''; render();
      quickWrite(()=>S.db.doc('decisions/'+id).update({status:'open', chosenId:'', updatedAt:Date.now()})); break; }
    case 'add-stage': stageForm(); break;
    case 'edit-stage': stageForm(stageById(id)); break;
    case 'task-filter': S.f.task = el.dataset.v; render(); break;
    case 'toggle-task': {
      const tk = S.tasks.find(x=>x.id===id); if (!tk || !canWrite()) break;
      const next = tk.status==='done' ? 'todo' : 'done'; tk.status = next; render();
      quickWrite(()=>S.db.doc('tasks/'+id).update({status:next, doneAt: next==='done'?todayISO():'', updatedAt:Date.now()})); break; }
    case 'stage-status': {
      const s = stageById(id); if (!s || s.status===el.dataset.v) break;
      s.status = el.dataset.v; render();
      quickWrite(()=>S.db.doc('stages/'+id).update({status:el.dataset.v, updatedAt:Date.now()})); break; }
    case 'move-stage': {
      const list = sortedStages(); const i = list.findIndex(s=>s.id===id); const j = i + Number(el.dataset.dir);
      if (i<0 || j<0 || j>=list.length) break;
      [list[i], list[j]] = [list[j], list[i]];
      const changed = list.map((s,k)=>({s, order:k+1})).filter(x=>x.s.order!==x.order);
      changed.forEach(x=>{ x.s.order = x.order; }); render();
      quickWrite(async()=>{ for (const x of changed) await S.db.doc('stages/'+x.s.id).update({order:x.order}); }); break; }
    case 'add-standard': {
      if (!canWrite()) break; el.disabled = true;
      try { for (let i=0;i<STANDARD_STAGES.length;i++) await S.db.collection('stages').add({name:STANDARD_STAGES[i], order:i+1, status:'todo', createdAt:Date.now()}); }
      catch { toast(t('saveFail')); el.disabled = false; }
      break; }
    case 'step': {
      const input = document.getElementById(el.dataset.for); if (!input) break;
      input.value = Math.max(0, num(input.value) + Number(el.dataset.d)); updateWageTotal(); break; }
    case 'toggle-file': {
      if (!sheet) break; const fid = el.dataset.file; const box = el.closest('.thumb');
      if (sheet.removed.has(fid)){ sheet.removed.delete(fid); box.classList.remove('removed'); } else { sheet.removed.add(fid); box.classList.add('removed'); }
      break; }
    case 'copy': {
      const txt = el.dataset.text;
      try { await navigator.clipboard.writeText(txt); toast(t('copied')); }
      catch { const sp = el.parentElement.querySelector('span'); const r = document.createRange(); r.selectNodeContents(sp); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); }
      break; }
    case 'form-delete': {
      if (!sheet?.onDelete) break;
      if (armedDelete !== el){ armedDelete = el; el.classList.add('armed'); el.textContent = t('delSure'); setTimeout(()=>{ if (armedDelete===el){ armedDelete=null; el.classList.remove('armed'); el.textContent=t('del'); } }, 4000); break; }
      armedDelete = null; el.disabled = true;
      try { await sheet.onDelete(); closeForm(); toast(t('deleted')); render(); } catch { toast(t('saveFail')); el.disabled = false; }
      break; }
  }
});
function stageForm(s){
  const edit = !!s; s = s || {};
  openForm({ title: edit?t('editStage'):t('newStage'), edit, values:{...s},
    fields: [
      {key:'name', label:t('stageName')},
      {key:'status', type:'seg', label:t('status'), default:'todo', options:[{v:'todo',l:t('notStarted')},{v:'doing',l:t('inProgress')},{v:'done',l:t('finished')}]},
      {type:'row', fields:[{key:'start', type:'date', label:t('start')}, {key:'end', type:'date', label:t('end')}]},
      {key:'budget', type:'amount', label:t('stageBudget')},
      {key:'notes', type:'textarea', label:t('notes'), ph:t('notesPh')}
    ],
    validate: v => !v.name.trim() ? t('needName') : '',
    onSave: v => saveDoc('stages', s.id, {name:v.name.trim(), status:v.status||'todo', start:v.start, end:v.end, budget:num(v.budget), notes:v.notes.trim(),
      ...(edit?{}:{order: (Math.max(0, ...S.stages.map(x=>x.order||0)))+1})}),
    onDelete: edit ? () => S.db.doc('stages/'+s.id).delete() : null });
}
document.addEventListener('input', ev => {
  const el = ev.target;
  if (el.matches('[data-amount]')){
    const h = document.querySelector(`[data-hint-for="${el.id}"]`); const n = num(el.value); const pctOf = num(h?.dataset.pctOf);
    if (h) h.textContent = n ? [money(n), shortMoney(n), pctOf ? t('pctOfAgreed',{p:Math.round(n/pctOf*100)}) : ''].filter(Boolean).join(' · ') : '';
  }
  if (el.matches('[data-labour]')) updateWageTotal();
  if (el.dataset.filter){ S.f[el.dataset.filter] = el.value; render(); }
});
document.addEventListener('change', async ev => {
  const el = ev.target;
  if (el.tagName==='SELECT' && el.dataset.filter){ S.f[el.dataset.filter] = el.value; render(); }
  if (el.dataset.memberRole){ try { await Backend.members.setRole(el.dataset.memberRole, el.value); toast(t('saved')); await loadMembers(); } catch { toast(t('saveFail')); } }
});
document.addEventListener('submit', ev => {
  if (ev.target.id==='authForm'){ ev.preventDefault(); handleAuthSubmit(); }
  if (ev.target.id==='memberForm'){ ev.preventDefault(); handleMemberSubmit(); }
});
document.addEventListener('keydown', ev => { if (ev.key==='Escape' && sheet) closeForm(); });
window.addEventListener('hashchange', () => {
  if (!S.keepDetail){ S.personId = null; S.decisionId = null; }
  S.keepDetail = false; window.scrollTo(0,0); render();
});

/* ---------- boot ---------- */
function markLoaded(k){
  S.loaded[k] = true;
  if (S.state!=='ready' && ['settings',...COLS].every(c=>S.loaded[c])){ S.state='ready'; clearTimeout(bootTimer); }
  if (['expenses','diary','decisions'].includes(k)) resolveNames();
  scheduleRender();
}
let bootTimer = null;
let subscribed = false;
function subscribeAll(){
  if (subscribed) return; subscribed = true;
  const db = S.db;
  const onErr = () => { if (S.state==='loading'){ clearTimeout(bootTimer); S.state='timeout'; render(); } };
  bootTimer = setTimeout(()=>{ if (S.state==='loading'){ S.state='timeout'; render(); } }, 15000);
  db.doc('settings/project').onSnapshot(s => { S.settings = (s.exists && s.data()) || {}; markLoaded('settings'); }, onErr);
  COLS.forEach(c => db.collection(c).onSnapshot(q => { S[c] = q.docs.map(d=>({id:d.id, ...d.data()})); markLoaded(c); }, onErr));
}
async function boot(){
  render();
  Backend.onFileUrls(scheduleRender);
  await Backend.start(async info => {
    S.email = info.email || '';
    if (info.state !== 'ready'){ S.state = info.state; render(); return; }
    S.role = info.role; S.canWrite = info.role==='owner' || info.role==='editor';
    S.db = Backend.db; S.user = Backend.user; S.assets = S.canWrite ? Backend.assets : null;
    try { S.myId = await Backend.user.id(); } catch {}
    S.state = 'loading'; render();
    subscribeAll(); loadMembers();
  });
}
boot();
