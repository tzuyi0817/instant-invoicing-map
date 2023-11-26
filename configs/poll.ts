import ddpAvatar from '@/assets/images/avatar/ddp-avatar.png';
import kmtAvatar from '@/assets/images/avatar/kmt-avatar.png';
import pfpAvatar from '@/assets/images/avatar/pfp-avatar.png';

export const POLL_MAP = {
  '11/13-15': [
    { name: '蔡英文', value: 45, fill: '#25A55C', image: ddpAvatar.src },
    { name: '韓國瑜', value: 37, fill: '#4A8FE7', image: kmtAvatar.src },
    { name: '宋楚瑜', value: 8, fill: '#F88545', image: pfpAvatar.src },
  ],
  '11/27-29': [
    { name: '蔡英文', value: 46, fill: '#25A55C', image: ddpAvatar.src },
    { name: '韓國瑜', value: 31, fill: '#4A8FE7', image: kmtAvatar.src },
    { name: '宋楚瑜', value: 8, fill: '#F88545', image: pfpAvatar.src },
  ],
  '12/02-04': [
    { name: '蔡英文', value: 51, fill: '#25A55C', image: ddpAvatar.src },
    { name: '韓國瑜', value: 29, fill: '#4A8FE7', image: kmtAvatar.src },
    { name: '宋楚瑜', value: 7, fill: '#F88545', image: pfpAvatar.src },
  ],
  '12/12-14': [
    { name: '蔡英文', value: 50, fill: '#25A55C', image: ddpAvatar.src },
    { name: '韓國瑜', value: 31, fill: '#4A8FE7', image: kmtAvatar.src },
    { name: '宋楚瑜', value: 6, fill: '#F88545', image: pfpAvatar.src },
  ],
  '12/29': [
    { name: '蔡英文', value: 45, fill: '#25A55C', image: ddpAvatar.src },
    { name: '韓國瑜', value: 29, fill: '#4A8FE7', image: kmtAvatar.src },
    { name: '宋楚瑜', value: 7, fill: '#F88545', image: pfpAvatar.src },
  ],
};

export const POLL_DATE = ['11/13-15', '11/27-29', '12/02-04', '12/12-14', '12/29'] as const;
export const POLL_POLITICS = [
  { key: 'education', value: '教育' },
  { key: 'labour', value: '勞工' },
  { key: 'industrialEconomy', value: '產業經濟' },
  { key: 'socialWelfare', value: '社會福利' },
  { key: 'transportationAndTourism', value: '交通觀光' },
  { key: 'energyPolicy', value: '能源政策' },
  { key: 'diplomacyAndCrossStrait', value: '外交兩岸' },
  { key: 'sameMarriage', value: '同婚' },
  { key: 'newResidentPolicy', value: '新住民政策' },
  { key: 'nationalDefense', value: '國防' },
  { key: 'constitutionalReform', value: '憲改' },
] as const;

export const POLL_POLITICS_MAP = {
  pfp: {
    education: [
      { question: '對雙語教育的規劃為何？', answer: '培養台灣的老師雙語跟遠距教學。優先補助學生至鄰近國家學習英語。' },
      {
        question: '如何看待12年國教新課綱？',
        answer: '「學習歷程檔案」沒那麼重要。增加教育經費在偏鄉與師資訓練，鄉下小孩也能得到好發展。',
      },
      {
        question: '對於學生國際交流政策的看法為何？',
        answer: '英文很重要。把錢砸在學英文跟國際交流上才能培養學生多元的國際觀!',
      },
    ],
    labour: [
      { question: '對一例一休的看法為何？', answer: '不同產業能用不同標準，勞資相互和諧協調。' },
      { question: '如何解決台灣勞工低薪問題？', answer: '' },
      { question: '對青年就業問題有何規劃？', answer: '' },
    ],
    industrialEconomy: [
      { question: '對區域經濟整合有何主張？', answer: '持續用力推動簽署CPTPP、RCEP等區域經濟協議。' },
      { question: '如何鼓勵新創事業？', answer: '主張鼓勵新創研發，扶植新創產業。' },
    ],
    socialWelfare: [
      { question: '對長照的規劃為何？', answer: '想上班的老人可以繼續上班，並縮短上班時間。' },
      { question: '如何規劃育兒補助？', answer: '給公托公幼，0-6歲國家出錢養，讓年輕父母能好好賺錢上班跟陪小孩。' },
      { question: '如何照顧身心障礙者？', answer: '列出優先需求，用基金會的錢解決。' },
    ],
    transportationAndTourism: [
      { question: '如何規劃整體觀光政策？', answer: '我已經台灣走透透，規劃兩岸旅遊一定沒問題。' },
    ],
    energyPolicy: [
      { question: '對台灣能源發展的目標策略為何？', answer: '' },
      { question: '對核能的看法為何？', answer: '擔心怕怕。' },
    ],
    diplomacyAndCrossStrait: [
      { question: '如何面對台美關係？', answer: '我方必須謹慎拿捏與美方的互動，守住自己最高利益。' },
      {
        question: '如何看待兩岸關係？',
        answer:
          '兩岸爭議須堅持以和平、非武力、對等協商的方式解決，對台灣自由、民主、法治、多元的生活方式也絕不妥協退讓。',
      },
      { question: '如何因應斷交危機？', answer: '' },
      { question: '如何看待香港抗爭？', answer: '相互硬槓對撞，對香港一點好處都沒有。' },
    ],
    sameMarriage: [{ question: '對同婚的看法為何？', answer: '台灣多元有包容心，大家慢慢成長也ok。' }],
    newResidentPolicy: [{ question: '有何新住民政策？', answer: '主張設立新住民委員會，協助新住民融入台灣社會。' }],
    nationalDefense: [{ question: '整體國防政策為何？', answer: '加強軍隊跟武器製造能力，買外面的要小心。' }],
    constitutionalReform: [
      {
        question: '對憲改的看法為何？',
        answer:
          '若當選總統將讓政府體制轉為具總統制內涵的內閣制，並參考美國總統到國會咨文制度，每年至立法院做國情報告；同時主張民法成年下修到18歲。',
      },
    ],
  },
  kmt: {
    education: [
      { question: '對雙語教育的規劃為何？', answer: '英語很好用，但我們華語也超棒，所以中英文一起教學最好。' },
      {
        question: '如何看待12年國教新課綱？',
        answer: '恢復四書五經，中華文化變第一。',
      },
      {
        question: '對於學生國際交流政策的看法為何？',
        answer: '可挪用前瞻基礎建設經費500億元，讓學生出國交換不花錢!',
      },
    ],
    labour: [
      {
        question: '對一例一休的看法為何？',
        answer: '一例一休這幾年實施下來是「卡了老闆的喉嚨，餓了勞工的肚子」，當選後將重新調整。',
      },
      {
        question: '如何解決台灣勞工低薪問題？',
        answer:
          '調整基本工資是殺鵝拔毛，應先修改法令，打造友善的企業投資環境，加上人才培育，才能解決低薪。發放6成薪資給無薪假的勞工，並運用大數據，抓出獲利與員工薪資不成比例的企業由政府去關切。',
      },
      {
        question: '對青年就業問題有何規劃？',
        answer:
          '主張設立自立成家基金供青年申請，並表示若當選總統將成立中華民國主權基金，大量提供年輕人創業、就業、培訓的機會。',
      },
    ],
    industrialEconomy: [
      {
        question: '對區域經濟整合有何主張？',
        answer:
          '要多交朋友，全力推動洽簽雙邊自由貿易協定及加入CPTPP、RCEP（區域全面經濟夥伴關係協定）等區域經濟整合。並建立兩岸制度性的貿易機制。。',
      },
      {
        question: '如何鼓勵新創事業？',
        answer: '成立行政院數位創新委員會，輔導及協助企業研發可取代購自先進國家的產品，以強化台灣的供應鏈。',
      },
    ],
    socialWelfare: [
      {
        question: '對長照的規劃為何？',
        answer: '全民一個月繳便當的錢，協助政府發展全民長照保險。',
      },
      {
        question: '如何規劃育兒補助？',
        answer: '「育兒補助666」，第一胎補助3萬元，第二胎補助6萬元，並每年補助6萬元到滿6歲為止。',
      },
      {
        question: '如何照顧身心障礙者？',
        answer:
          '主張由行政院成立身心障礙權益發展專責單位，增設支持中心，並落實無障礙環境，確身心障礙者就醫就學就養就業的權益。',
      },
    ],
    transportationAndTourism: [{ question: '如何規劃整體觀光政策？', answer: '就...打造各種景點發大財。' }],
    energyPolicy: [
      {
        question: '對台灣能源發展的目標策略為何？',
        answer:
          '「2025非核家園」的目標期程延至2035年，屆時能源配比50%是沒有污染的能源、50%是燃煤與天然氣，並落實以核養綠策略。',
      },
      { question: '對核能的看法為何？', answer: '' },
    ],
    diplomacyAndCrossStrait: [
      {
        question: '如何面對台美關係？',
        answer: '台美好麻吉，繼續強化台美國防與安全關係。',
      },
      {
        question: '如何看待兩岸關係？',
        answer:
          '承認「九二共識」，但強調「一中各表」，不接受「一國兩制」，並呼籲中國大陸一定要正視中華民國存在的事實。',
      },
      {
        question: '如何因應斷交危機？',
        answer: '呼籲中國大陸別再挖中華民國的邦交國兩岸應以和為貴，相互展現彈性。',
      },
      {
        question: '如何看待香港抗爭？',
        answer: '呼籲港府傾聽人民心聲並對話，若香港能真正實施雙普選，香港問題會迅速降溫。',
      },
    ],
    sameMarriage: [
      {
        question: '對同婚的看法為何？',
        answer:
          '在參選高雄市長期間曾明確反對同婚入民法；在同婚專法三讀、台灣成為亞洲第一個同婚合法化國家時則表示，人都有追求幸福的權利，但法律問題由立法院決定。',
      },
    ],
    newResidentPolicy: [
      {
        question: '有何新住民政策？',
        answer: '主張未來將在行政院底下設立「新移民委員會」，照顧新移民族群，並建議將外配孕婦納入全民健保。',
      },
    ],
    nationalDefense: [{ question: '整體國防政策為何？', answer: '能防衛好自己就好，主動打打不贏。' }],
    constitutionalReform: [
      {
        question: '對憲改的看法為何？',
        answer:
          '尊重五權分治相維體制，奉行雙首長制與責任政治的憲法精神，總統每年應赴立法院進行國情報告；鼓勵青年關心國政，支持參政權下修至18歲。',
      },
    ],
  },
  ddp: {
    education: [
      { question: '對雙語教育的規劃為何？', answer: '' },
      {
        question: '如何看待12年國教新課綱？',
        answer: '',
      },
      {
        question: '對於學生國際交流政策的看法為何？',
        answer: '',
      },
    ],
    labour: [
      { question: '對一例一休的看法為何？', answer: '' },
      { question: '如何解決台灣勞工低薪問題？', answer: '' },
      { question: '對青年就業問題有何規劃？', answer: '' },
    ],
    industrialEconomy: [
      { question: '對區域經濟整合有何主張？', answer: '亞洲各國必須加速並確保區域經濟整合持續進行。' },
      {
        question: '如何鼓勵新創事業？',
        answer: '推動「青年科技創新創業基地（TTA）建置計畫」與提供「鳳凰小額貸款」幫助女性創業。',
      },
    ],
    socialWelfare: [
      {
        question: '對長照的規劃為何？',
        answer:
          '蔡政府「長照2.0」建置「1966長照服務專線」，提供長照單一窗口，未來也將再推出「長照3.0」，重點在於機構照顧，讓無法在家或在社區照護的長輩可以住進機構內接受照護。並調漲社工薪資。',
      },
      {
        question: '如何規劃育兒補助？',
        answer:
          '育兒津貼增加兩倍，一年有6萬元。0到2歲的孩童到托嬰中心或給保母帶，國家會補助6千元，準公共化、政府系統下的幼兒園，收費不會超過4千5百元，公立則不會超過2千5百元。',
      },
      {
        question: '如何照顧身心障礙者？',
        answer:
          '除「長照2.0」提供失能身障人士「個別化服務計畫」，蔡政府另修法，減輕重度以上身心障礙者分期繳內國民年金的經濟壓力。未來4年目標則包括整合身心障礙者福利服務與失能者長期照顧服務、減輕身心障礙機構經營壓力、增置人力，提升照顧品質等等。',
      },
    ],
    transportationAndTourism: [{ question: '如何規劃整體觀光政策？', answer: '' }],
    energyPolicy: [
      {
        question: '對台灣能源發展的目標策略為何？',
        answer:
          '目前是「非核家園」，下一步希望成為「亞洲綠能發展中心」，主推太陽能與離岸風電，同時，為因應氣候變遷帶來的挑戰，須努力建構下世代智慧電網，以提升電力品質，滿足大量綠能併網的需求。',
      },
      { question: '對核能的看法為何？', answer: '' },
    ],
    diplomacyAndCrossStrait: [
      {
        question: '如何面對台美關係？',
        answer:
          '加速國防投資，並持續強化與美國及理念相近國家的安全夥伴關係，共同捍衛區域中的安全與穩定，並守護台灣的自由民主價值。',
      },
      {
        question: '如何看待兩岸關係？',
        answer: '處理兩岸關係，台灣秉持不挑釁、不製造麻煩的態度，然而中國卻反其道而行，才是兩岸穩定的最大變數。',
      },
      {
        question: '如何因應斷交危機？',
        answer:
          '台灣不會和中國競逐金錢外交，更不會放棄提升台灣的國防戰力，以及對民主的堅持，「面對中國霸凌，台灣必須要勇敢團結，走向世界。」',
      },
      { question: '如何看待香港抗爭？', answer: '希望香港社會可以趕快回歸穩定狀態，呼籲對方政府傾聽人民要求。' },
    ],
    sameMarriage: [{ question: '對同婚的看法為何？', answer: '' }],
    newResidentPolicy: [{ question: '有何新住民政策？', answer: '' }],
    nationalDefense: [{ question: '整體國防政策為何？', answer: '' }],
    constitutionalReform: [
      {
        question: '對憲改的看法為何？',
        answer: '',
      },
    ],
  },
};
