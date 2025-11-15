/**
 * 2025년 ㈜ IFC 북해도 여행 데이터
 *
 * 주의: 이미지 경로는 원본 PPT를 확인하여 수동으로 매핑 필요
 * 참고: docs/IMAGE_MAPPING.md
 */

// ============================================
// 항공편 정보
// ============================================

interface FlightRoute {
  date: string;
  departure: string;
  arrival: string;
  time: string;
  flightNumber: string;
}

interface FlightInfo {
  origin: string;
  airline: string;
  logo: string;
  outbound: FlightRoute;
  inbound: FlightRoute;
}

export const flights: FlightInfo[] = [
  {
    origin: "부산",
    airline: "에어부산",
    logo: "/revised/airbusan.png",
    outbound: {
      date: "11.19 (수)",
      departure: "김해",
      arrival: "삿포로",
      time: "08:50 → 11:30",
      flightNumber: "BX182",
    },
    inbound: {
      date: "11.22 (토)",
      departure: "삿포로",
      arrival: "김해",
      time: "12:30 → 15:25",
      flightNumber: "BX181",
    },
  },
  {
    origin: "인천",
    airline: "진에어",
    logo: "/revised/jinair.png",
    outbound: {
      date: "11.19 (수)",
      departure: "인천",
      arrival: "삿포로",
      time: "08:35 → 11:15",
      flightNumber: "LJ301",
    },
    inbound: {
      date: "11.22 (토)",
      departure: "삿포로",
      arrival: "인천",
      time: "12:25 → 15:45",
      flightNumber: "LJ302",
    },
  },
];

// ============================================
// 일정표 데이터
// ============================================

interface TimelineItem {
  time: string;
  activity: string;
}

interface ScheduleDay {
  day: number;
  date: string;
  route: string;
  timeline: TimelineItem[];
  accommodation: string;
  meals: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
}

export const schedules: ScheduleDay[] = [
  {
    day: 1,
    date: "11/19(수)",
    route: "부산/인천 → 치토세 → 시코츠 → 도야",
    timeline: [
      { time: "06:00", activity: "김해/인천공항 집결-수속" },
      { time: "08:35", activity: "인천공항 출발 (2시간30분소요)" },
      { time: "08:50", activity: "김해공항 출발 (2시간30분소요)" },
      { time: "11:20", activity: "신치토세공항 도착/입국수속" },
      { time: "13:00", activity: "시코츠 이동 (1시간)\n- 시코츠 호수 관광" },
      {
        time: "15:00",
        activity: "도야 이동 (1시간)\n- 호텔 체크인 / 휴식 / 석식 / ♨온천욕",
      },
    ],
    accommodation: "도야만세각 온천호텔",
    meals: {
      breakfast: "공항식",
      lunch: "소토반야키정식",
      dinner: "호텔뷔페",
    },
  },
  {
    day: 2,
    date: "11/20(목)",
    route: "도야 → 노보리베츠 → 삿포로",
    timeline: [
      {
        time: "10:00",
        activity:
          "조식 후 가이드미팅/체크아웃\n* 골프팀 : 무로란CC급 18홀 라운딩",
      },
      {
        time: "10:30",
        activity: "도야관광\n- 쇼와신잔, 사이로전망대, 도야호유람선",
      },
      {
        time: "12:00",
        activity: "노보리베츠 이동 (1시간)\n- 지옥계곡, 시대촌",
      },
      {
        time: "14:00",
        activity: "삿포로 이동 (2시간)\n- 호텔 체크인 / 휴식",
      },
      {
        time: "18:00",
        activity: "만찬행사\n- 다쿠모리뷔페+노미호다이",
      },
    ],
    accommodation: "그랜드 머큐어 삿포로",
    meals: {
      breakfast: "호텔식",
      lunch: "가리비밥정식",
      dinner: "단독만찬",
    },
  },
  {
    day: 3,
    date: "11/21(금)",
    route: "삿포로(시내관광)",
    timeline: [
      {
        time: "10:00",
        activity: "조식 후 가이드미팅\n* 골프팀 : 북해도CC급 18홀 라운딩",
      },
      {
        time: "10:30",
        activity: "오타루 이동 (1시간)\n- 오르골당, 유리공방, 운하",
      },
      {
        time: "13:00",
        activity:
          "삿포로 이동 (1시간)\n- 시로이코이비토파크, 오오도리공원, 삿포로맥주박물관\n\n** 자유일정 진행가능 (중식비용 3,000엔 현금지급) **",
      },
      { time: "17:30", activity: "자유일정 및 호텔휴식" },
    ],
    accommodation: "그랜드 머큐어 삿포로",
    meals: {
      breakfast: "호텔식",
      lunch: "초밥정식",
      dinner: "게요리무제한+야끼니꾸",
    },
  },
  {
    day: 4,
    date: "11/22(토)",
    route: "삿포로 → 치토세 → 부산/인천",
    timeline: [
      { time: "08:00", activity: "조식 후 가이드미팅/체크아웃" },
      {
        time: "09:00",
        activity: "삿포로 이동\n- 시계탑 관광(차장), 면세점 방문",
      },
      {
        time: "10:00",
        activity: "공항으로 이동 / 출국수속",
      },
      { time: "12:30", activity: "신치토세공항 출발 (3시간소요)" },
      { time: "15:25", activity: "김해공항 도착" },
      { time: "15:45", activity: "인천공항 도착" },
    ],
    accommodation: "-",
    meals: {
      breakfast: "호텔식",
      lunch: "기내식",
      dinner: "-",
    },
  },
];

// ============================================
// 호텔 데이터
// ============================================

interface Hotel {
  id: number;
  name: string;
  nights: string;
  image: string;
  description: string;
  fullDescription: string;
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "도야 만세각",
    nights: "1박",
    image: "/images/image11.JPEG", // Slide 8 - 도야 만세각 (5.99cm x 2.33cm)
    description:
      "도야호 온천마을에 위치한 도야 만세각 호텔은 탁월한 호수전망과 자연과의 조화를 이루고 있으며 다양한 온천시설, 고품질 뷔페식 식사를 제공합니다.",
    fullDescription: `도야호 온천마을에 위치한 도야 만세각 호텔은 탁월한 호수전망과 자연과의 조화를 이루고 있으며 다양한 온천시설, 고품질 뷔페식 식사, 직원들의 친절한 서비스와 다양한 편의성을 갖춘 장점이 있습니다.

호텔에서는 도야호의 아름다운 풍경을 감상하며 온천욕을 즐길 수 있으며, 객실에서도 호수 전망을 만끽할 수 있습니다. 뷔페식 식사는 현지 신선한 식재료로 준비되며, 다양한 일본 요리와 국제 요리를 맛볼 수 있습니다.`,
  },
  {
    id: 2,
    name: "그랜드 머큐어 삿포로 호텔",
    nights: "2박",
    image: "/images/image16.jpeg", // Slide 10 - 그랜드 메르큐르 (3.81cm x 2.54cm)
    description:
      "삿포로 중심의 오오도리공원 바로 옆에 위치해 뛰어난 접근성과 높은 숙박 품질을 동시에 갖춘 호텔입니다.",
    fullDescription: `그랜드 메르큐르 삿포로 오오도리공원 호텔은 아코르(Accor) 그룹 산하의 '그랜드 메르큐르(Grand Mercure)' 브랜드로 삿포로 중심의 오오도리공원(大通公園) 바로 옆에 위치해 뛰어난 접근성과 높은 숙박 품질을 동시에 갖춘 것이 큰 강점입니다.

호텔은 삿포로 시내 중심부에 위치해 있어 주요 관광지, 쇼핑 지역, 레스토랑 등에 쉽게 접근할 수 있습니다. 현대적이고 세련된 객실 디자인과 편안한 침구, 각종 편의시설을 갖추고 있어 비즈니스 및 레저 여행객 모두에게 적합합니다.`,
  },
];

// ============================================
// 식사 데이터
// ============================================

interface Meal {
  id: number;
  name: string;
  image: string;
  description: string;
  note?: string;
}

export const meals: Meal[] = [
  {
    id: 1,
    name: "소토반야키정식",
    image: "/revised/hotel/sotobanyaki-set.jpg",
    description:
      "갓 구운 요리를 바로 상 위의 소토반(도자기그릇) 위에서 제공하는 일본식 세트 메뉴입니다. 돌판, 도자기판과 달리 세련된 외형과 동시에 열 보존이 잘되어 끝까지 따뜻하게 즐길 수 있습니다.",
  },
  {
    id: 2,
    name: "호텔뷔페 (온천호텔)",
    image: "/images/image25.JPEG",
    description:
      "튀김, 직접 만드는 해물 덮밥, 쇠고기 등은 셰프가 눈앞에서 만들어주는 라이브 키친으로 즐기실 수 있습니다. 널찍한 가게 안에서 도야코를 바라볼 수 있습니다.",
  },
  {
    id: 3,
    name: "가리비밥 정식",
    image: "/revised/hotel/scallop-rice-set.jpg",
    description:
      "가리비밥은 가리비와 건표고, 다시마 육수로 밥을 지은 요리입니다. 밥알이 육수를 흡수해 감칠맛이 진국입니다. 재료부터 우마미를 끌어내는 방식이 특징이며, 훗카이도산 가리비로 만들면 더욱 깊은 풍미가 납니다.",
  },
  {
    id: 4,
    name: "타쿠모리뷔페(단독만찬)",
    image: "/revised/hotel/takumori-buffet.jpg",
    description:
      "양식, 중식, 일식을 모두 즐길 수 있는 뷔페입니다. 노미호다이(각종 주류 무제한)로 제공됩니다.",
    note: "단독룸 3시간 진행, MC진행 및 경품행사, 노래방기기 설치",
  },
  {
    id: 5,
    name: "초밥정식",
    image: "/revised/hotel/sushi-set.jpg",
    description:
      "스시+우동 정식은 일본식 밥상의 균형과 만족감을 동시에 누릴 수 있는 대표적인 정식 메뉴입니다. 부담없는 구성으로, 훗카이도 전역에서 만나볼 수 있습니다.",
  },
  {
    id: 6,
    name: "게요리무제한+야끼니꾸",
    image: "/revised/hotel/crab-yakiniku.jpg",
    description:
      "훗카이도산 3대 게 무제한 제공 (킹크랩, 털게, 흰게 등). 뷔페 형식의 신선한 해산물, 샐러드바, 기타 다양한 반찬 섹션도 포함되어 있습니다. 야끼니꾸와 주류도 무제한으로 제공됩니다.",
  },
];

// ============================================
// 관광지 데이터
// ============================================

interface Attraction {
  id: number;
  name: string;
  type: "attraction" | "golf";
  image: string;
  description: string;
  fullDescription: string;
}

export const attractions: Attraction[] = [
  {
    id: 1,
    name: "시코츠 호수",
    type: "attraction",
    image: "/images/image38.jpeg", // Slide 19 - 시코츠 호수 (6.07cm x 4.04cm)
    description:
      "홋카이도 지토세시 남서부에 위치한 칼데라 호수로, 맑고 푸른 물빛이 특징입니다.",
    fullDescription: `홋카이도 지토세시 남서부에 위치한 칼데라 호수로, 약 3만2천 년 전 화산 폭발로 형성되었습니다. 면적은 78.4 km², 평균 수심은 265m, 최대 수심은 363m로 일본 내 2번째 깊은 호수입니다.

호수의 수질은 매우 높은 투명도를 자랑하여, '시코츠 블루'라 불리는 맑고 푸른 물빛을 연출합니다. 이는 침전물이 적고 생물플랑크톤이 적어 평균적으로 15~20m의 시야 투명도를 보입니다.

북쪽의 에니와산, 남쪽의 후푸시산 및 타루마에산 등 칼데라를 감싼 화산들이 장관을 이루며, 그중 타루마에산과 에니와산은 여전히 활동하는 활화산입니다. 이 호수는 겨울철에도 잘 어는 일이 없는 일본 북부에서 몇 안 되는 호수로, 주변의 지열 활동 덕분에 수온이 안정적입니다.`,
  },
  {
    id: 2,
    name: "지옥계곡",
    type: "attraction",
    image: "/images/image39.jpeg", // Slide 20 - 지옥계곡 (3.21cm x 2.14cm)
    description:
      "약 1만 년 전 화산 폭발로 형성된 폭렬화구. 지금도 온천과 증기공에서 유황 냄새가 풍깁니다.",
    fullDescription: `약 1만 년 전 히요리산(火寄山)의 격렬한 화산 폭발에 의해 형성된 폭렬화구입니다. 지름 약 450미터, 면적 약 11헥타르에 달하는 이 계곡에서는 지금도 다수의 온천과 증기공, 유황 냄새를 풍기는 온천수가 분출되고 있습니다.

계곡 일대에서는 하얀 수증기와 유황 가스가 뿜어져 나오며, 부글부글 끓어오르는 용천과 붉은빛과 흑빛이 혼재한 바위들이 뒤섞여 마치 지옥을 방불케 하는 광경을 연출합니다. 이러한 음산하면서도 신비로운 풍경으로 인해 '지옥계곡'이라 불리게 되었습니다.`,
  },
  {
    id: 3,
    name: "노보리베츠   다테 지다이무라[시대촌]",
    type: "attraction",
    image: "/images/image40.jpeg", // Slide 20 - 에도마을 (3.21cm x 2.14cm)
    description:
      "에도 시대를 무대로 한 테마형 문화 공원. 닌자 쇼, 시대극 등 다양한 체험이 가능합니다.",
    fullDescription: `노보리베츠시에 위치한 에도 시대(1603~1868년)를 무대로 한 테마형 문화 공원입니다. 이곳에는 쇼군과 다이묘 시대의 건축 양식을 본뜬 목조 건물 90여 채가 재현되어 있으며, 상인 가옥·사무라이 저택·닌자 저택 등 역사적 배경을 충실히 복원하고 있습니다.

공원을 방문하는 이들은 닌자 쇼, 오이란(기생) 쇼, 시대극 코미디 등 다채로운 공연을 관람할 수 있으며, 닌자 미로인 '닌자 메이즈', 활 쏘기·수리검 던지기 체험, 코케시 인형 만들기 등 다양한 체험 활동에도 참여할 수 있습니다.

또한 에도 시대 복장을 대여하여 닌자, 사무라이, 기생 등으로 분장한 채 거리 곳곳을 누비며 사진 촬영을 즐길 수도 있습니다. 역사적 요소를 강화하기 위해 카타쿠라 코주로 저택, 검박물관, 닌자 박물관 등도 공원 내에 갖추어져 있어 에도 시대 문화와 관련된 심층 학습도 가능합니다.`,
  },
  {
    id: 4,
    name: "도야호 유람선",
    type: "attraction",
    image: "/images/image41.png", // Slide 21 - 도야호 유람선 (3.31cm x 2.24cm)
    description:
      "화산 칼데라 호수인 도야호수를 약 50분간 순환하며 주변 풍광을 감상할 수 있는 관광선입니다.",
    fullDescription: `화산 칼데라 호수인 도야호수를 약 50분간 순환하며 주변 풍광을 감상할 수 있는 관광선입니다. 유람선은 도야코 온천 마을 인근 선착장에서 출발하며, 여름철(4월 말~10월)에는 나카지마(中島) 섬에 기항하여 약 80분 코스로 운행되기도 합니다.

운항 시간은 계절마다 다르며, 보통 매 30분 또는 60분마다 출발합니다. 유람선에서는 도야호의 맑은 물과 주변의 아름다운 산세를 감상할 수 있으며, 날씨가 좋은 날에는 요테이산의 웅장한 모습도 볼 수 있습니다.`,
  },
  {
    id: 5,
    name: "오타루 운하",
    type: "attraction",
    image: "/revised/attr/otaru-canal.jpg",
    description:
      "1923년 완공된 역사적 수로. 현재는 보존되어 보행자 공간과 공원으로 활용됩니다.",
    fullDescription: `1923년 완공된 역사적 수로로, 초기에는 선박에서 창고로 화물 운송을 위한 물길로 사용되었습니다. 이후 1960년대 항만 시설이 현대화되며 물류 기능이 중단되었지만, 시민 보존 운동으로 일부 구간이 원형대로 보존되어 보행자 공간과 공원으로 탈바꿈되었습니다.

운하를 따라 늘어선 석조 창고들은 레스토랑, 상점, 박물관으로 재활용되어 오타루의 대표적인 관광 명소가 되었습니다. 특히 저녁이 되면 가스등이 켜지며 운하에 반사되는 빛이 낭만적인 분위기를 연출합니다.`,
  },
  {
    id: 6,
    name: "오오도리 공원",
    type: "attraction",
    image: "/images/image47.jpeg", // Slide 23 - 오오도리 공원 (2.33cm x 1.75cm)
    description:
      "삿포로 시 중심부를 동서로 가로지르는 약 1.5km 길이의 도심 공원입니다.",
    fullDescription: `삿포로 시 중심부를 동서로 가로지르는 약 1.5km 길이의 도심 공원으로, 삿포로 TV타워에서부터 서쪽으로 이어집니다. 원래는 도시의 방화선을 겸한 도로였으나, 현재는 약 90여 종의 수목과 화단, 분수, 조형물이 배치된 시민 휴식처로 활용됩니다.

매년 삿포로 눈축제, 여름 맥주 가든, 가을 오단고 축제 등 계절별 이벤트가 개최되는 관광 중심지입니다. 공원 주변에는 다양한 상점, 레스토랑, 카페가 즐비하여 쇼핑과 식사를 즐기기에도 편리합니다.`,
  },
  {
    id: 7,
    name: "삿포로 시계대",
    type: "attraction",
    image: "/images/image50.jpeg", // Slide 24 - 삿포로 시계대 (6.06cm x 4.04cm)
    description:
      "1878년 메이지 정부에 의해 설립된 목조 건축물. 홋카이도의 개척 역사를 상징합니다.",
    fullDescription: `삿포로 시계대(札幌時計台)는 일본 홋카이도 삿포로시에 위치한 목조 건축물로, 1878년 메이지 정부에 의해 설립된 삿포로 농학교(현 홋카이도 대학)의 부속 연무장으로 건립되었습니다.

이 건물은 홋카이도의 개척과 함께 서구식 교육 및 문물을 도입하려는 당시 시대적 배경을 반영하는 상징적인 유산으로 평가됩니다. 건물 내부에는 시계대의 역사와 삿포로의 발전 과정을 소개하는 전시관이 있으며, 현재도 정확하게 작동하는 시계탑이 삿포로의 랜드마크 역할을 하고 있습니다.`,
  },
  {
    id: 8,
    name: "무로란CC (Muroran Golf Club)",
    type: "golf",
    image: "/revised/attr/muroran-golf-club.jpg",
    description:
      "일본 홋카이도 무로란시에 위치한 18홀 회원제 골프장. 고도의 전략성과 아름다운 조형미가 특징입니다.",
    fullDescription: `무로란CC는 일본 홋카이도 무로란시에 위치한 18홀 회원제 골프장으로, 일본의 유명 골프 코스 설계가 이노우에 세이이치가 설계했습니다.

이곳은 고도의 전략성과 아름다운 조형미가 특징이며, 완만한 경사를 이용한 전략적인 코스와 언덕에 위치하여 섬세한 샷과 기술이 요구되는 곳입니다. 2001년에는 JLPGA 일본 여자 오픈 대회가 열리기도 했습니다.`,
  },
  {
    id: 9,
    name: "북해도CC (Hokkaido Country Club)",
    type: "golf",
    image: "/images/image51.JPEG",
    description: "하코다테 인근 (오누마 준국립공원)\n자연경관이 빼어난 골프장.",
    fullDescription: `하코다테 인근 오누마 준국립공원에 위치한 골프장으로, 빼어난 자연경관을 자랑합니다. 코스는 산세를 활용한 전략적인 레이아웃으로 구성되어 있으며, 아름다운 풍경과 함께 도전적인 라운드를 즐길 수 있습니다.

클럽하우스는 현대적인 시설을 갖추고 있으며, 라운드 후에는 편안한 휴식과 함께 맛있는 식사를 즐길 수 있습니다. 특히 홋카이도의 신선한 식재료로 준비된 클럽 중식은 골퍼들에게 인기가 높습니다.`,
  },
];

// ============================================
// 차량 정보
// ============================================

export const vehicleInfo = {
  type: "45인승 전용 차량",
  quantity: "120명 기준 총 4대 운행",
  features: "편안한 좌석과 넓은 공간",
  image: "/images/image37.jpeg", // Slide 18 - 대형버스 (추정)
  details: [
    "45인승 대형 전용 차량",
    "총 4대 운행 (관광 100명 + 골프 20명)",
    "에어컨 및 난방 시설 완비",
    "편안한 리클라이닝 시트",
    "넓은 트렁크 공간 (골프백 수납 가능)",
  ],
};

// ============================================
// 준비물 안내
// ============================================

interface ChecklistItem {
  title: string;
  description: string;
  important?: boolean;
  image?: string; // 선택적 이미지 경로
}

export const checklistItems: ChecklistItem[] = [
  {
    title: "여권",
    description: "해외여행의 필수품!! 미지참시 출발이 불가능 합니다.",
    important: true,
  },
  {
    title: "환전",
    description:
      "팁, 쇼핑, 선택 관광, 개인적인 경비 등에 필요한 돈\n• 엔화(¥) (개인 경비 및 주로 쓰게 되는 화폐입니다)\n• 일본은 팁 문화가 없습니다. 팁을 따로 준비하지 않으셔도 됩니다.",
  },
  {
    title: "신용카드",
    description:
      "해외에서 사용가능한 카드로 만일의 경우를 대비해 1장정도 준비 [VISA, MASTER 등]\n• 일정중 면세점 1곳을 방문합니다. 신용카드로 물건을 구매하시면 저렴하게 구매 가능합니다.",
  },
  {
    title: "세면도구",
    description:
      "호텔에 구비되어 있으나, 제품의 질이 좋지 못합니다. 개별로 준비하시는게 좋습니다.\n• 샴푸, 린스, 칫솔, 치약, 면도기, 화장품, 비누, 썬크림 등\n• 온천 호텔 내 대욕장 이용이 가능합니다 [수영복은 준비하지 않으셔도 됩니다]",
  },
  {
    title: "자외선 차단크림",
    description:
      "피부 보호를 위해 자외선 차단 크림 (선크림 등)을 준비하시면 좋습니다.",
  },
  {
    title: "휴대용 우산",
    description:
      "비가 올 경우를 대비하여 휴대가 편리한 접이식 우산을 준비합니다.\n• 야외 관광은 비가 올 경우 관광이 불가능 합니다. 우산을 꼭! 챙겨주셔야 합니다.",
    important: true,
  },
  {
    title: "화장품",
    description: "여행용이나 소포장용을 가져가는 것이 좋습니다.",
  },
  {
    title: "빗/드라이어/면도기",
    description:
      "호텔에 준비가 되어 있습니다. 고성능의 제품을 원하시는 분들은 개별로 준비바랍니다.\n• 다이슨 드라이기의 경우, 사용이 불가합니다.",
  },
  {
    title: "재킷/가디건",
    description:
      "비행기, 비올 때, 밤에는 기온차가 생기므로 점퍼 및 재킷을 준비합니다.",
  },
  {
    title: "편한 신발",
    description:
      "여행에는 걷는 시간이 많으므로 편한 신발이나 운동화를 준비합니다.",
  },
  {
    title: "비상약",
    description:
      "평소에 복용하는 약, 소화제, 신경안정제, 진통제, 멀미약, 감기약, 피로회복제, 1회용 밴드 등",
  },
  {
    title: "비닐봉투",
    description: "빨래할 옷, 젖은 옷, 잡동사니를 넣기에 편리합니다.",
  },
  {
    title: "한국음식",
    description:
      "이국음식에 잘 적응하지 못하는 분들은 튜브 포장된 고추장, 김 정도를 가져갑니다.",
  },
  {
    title: "큰가방",
    description:
      "끌고 다니는 큰 가방으로 짐을 붙이는 데 사용\n• 위탁수화물 1인 15kg × 1개 까지 가능합니다 [수하물무게 꼭! 준수 바랍니다]\n• 위탁수화물로는 라이터 및 밧데리를 보내실 수 없습니다. 기내반입 하셔야 합니다.\n• 초과되는 무게에 대한 수수료가 엄격합니다. 짐준비 하실 때, 꼼꼼히 체크하셔야 합니다.",
    important: true,
  },
  {
    title: "작은가방",
    description:
      "항상 들고 다닐 정도로 어깨에 걸쳐 메는 것이 좋습니다. 돈과 여권, 카메라 등 귀중품을 넣어 다니는데 필수입니다.\n• 기내수화물 1인 10kg × 1개 까지 가능합니다 [수하물무게 꼭! 준수 바랍니다]",
  },
  {
    title: "의류",
    description:
      "계절에 맞는 복장, 보온성 높은 바지와 티셔츠, 자켓, 내의, 속옷, 모자 등",
    image: "/images/weather.png", // 593x194
  },
  {
    title: "기타",
    description:
      "충전기, 메모리칩, E-SIM 혹은 해외로밍\n• 일본은 110V를 사용합니다. 11자형 콘센트(돼지코)를 준비하셔야 합니다.\n• 일체형 충전고데기(리튬배터리)는 일본 반입 금지입니다.",
  },
];

export const additionalNotice = {
  title: "기타 안내사항",
  sections: [
    {
      title: "면세점 이용",
      content: [
        "김해 - 삿포로 2025년 11월 19일 출발 / 에어부산 : BX182 오전 08시 50분 출발",
        "인천 - 삿포로 2025년 11월 19일 출발 / 진에어 : LJ301 오전 08시 35분 출발",
        "",
        "※ 면세점은 출발 한달전부터 이용가능 합니다.",
      ],
    },
  ],
};

// ============================================
// 프로젝트 메타 정보
// ============================================

export const tripInfo = {
  title: "2025년 ㈜ IFC 북해도 여행",
  period: "2025년 11월 19일 ~ 11월 22일 (3박4일)",
  participants: {
    tour: 100,
    golf: 20,
    total: 120,
  },
  price: {
    perPerson: 1600000,
    currency: "KRW",
  },
  agency: {
    name: "드림월드 여행사",
    slogan: "기업/단체 여행 전문",
    features: ["프리미엄 구성", "맞춤형 프로그램", "철저한 안전관리"],
  },
};
