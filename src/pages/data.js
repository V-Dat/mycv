
const data = { 
  day:['Day1','Day2','Day3','Day4','Day5,Day6','Day7','Day8','Day9','Day10','Day11'],
  productList: [
    {
      name: "Nike",
      price: "2299$",
      image: './img/day1/nike.png',
      size: [6, 7, 8, 9],
      color: ["#ff0000", "#009933", "#0000ff"],
    },
    {
      name: "Nike Air-max",
      price: "2299$",
      image: './img/day1/nikeairmax.png',
      size: [6, 7, 8, 9],
      color: ["#ff0000", "#009933", "#0000ff"],
    },
    {
      name: "Nike Air",
      price: "299$",
      image: './img/day1/nikeair.png',
      size: [6, 7, 8, 9],
      color: ["#ff0000", "#009933", "#0000ff"],
    },
    {
      name: "Converse Shoes",
      price: "299$",
      image: './img/day1/converseshoe.png',
      size: [6, 7, 8, 9],
      color: ["#ff0000", "#009933", "#0000ff"],
    }, 
    {
      name: "Nike Air",
      price: "299$",
      image: './img/day1/nikeair.png',
      size: [6, 7, 8, 9],
      color: ["#ff0000", "#009933", "#0000ff"],
    },
    {
      name: "Converse Shoes",
      price: "299$",
      image: './img/day1/converseshoe.png',
      size: [6, 7, 8, 9],
      color: ["#ff0000", "#009933", "#0000ff"],
    },
    {
      name: "Nike Air-max",
      price: "299$",
      image: './img/day1/nikeairmax.png',
      size: [6, 7, 8, 9],
      color: ["#ff0000", "#009933", "#0000ff"],
    },
    {
      name: "Nike",
      price: "299$",
      image: './img/day1/nike.png',
      size: [6, 7, 8, 9],
      color: ["#ff0000", "#009933", "#0000ff"],
    },
    {
      name: "Nike Air",
      price: "299$",
      image: './img/day1/nikeair.png',
      size: [6, 7, 8, 9],
      color: ["#ff0000", "#009933", "#0000ff"],
    },
    {
      name: "Converse Shoes",
      price: "299$",
      image: './img/day1/converseshoe.png',
      size: [6, 7, 8, 9],
      color: ["#ff0000", "#009933", "#0000ff"],
    },
    {
      name: "Nike Air-max",
      price: "299$",
      image: './img/day1/nikeairmax.png',
      size: [6, 7, 8, 9],
      color: ["#ff0000", "#009933", "#0000ff"],
    },
    {
      name: "Nike",
      price: "299$",
      image: './img/day1/nike.png',
      size: [6, 7, 8, 9],
      color: ["#ff0000", "#009933", "#0000ff"],
    },
  
  ],
  about: {
    name: 'ĐOÀN VĂN ĐẠT',
    dayOfBirth: '19/03/1998',
    description: 'Tôi tên là Đoàn Văn Đạt - tôi sao sao sao ',
    tdtu_icon: './img/about/tdtu_icon.jpg',
    github: 'https://github.com/V-Dat',
    avatar:'./img/about/avatar.png',
    age:24,
    email: 'Vandat.k21@gmail.com',
    phone: '0399 179 067',
    location: 'TP HCM',
    education: [ {school: 'TON DUC THANG UNIVERSITY', time: '2017 - 2021', gpa: 'GPA: 2.8/4.0',major: 'International Business'}, ],
    ceritficate: ['Toeic: 615', 'Microsoft Office Specialist - Word','Microsoft Office Specialist - Excel'],
    work: [ {company: 'NPV EXPRESS & LOGISTIC CO., LTD', time: '9/2019 - 6/2021', 
            task :[ 
                    'Quản lý & thiết lập database',
                    'Theo dõi & khai báo cáo hóa chất MSDS',
                    'Theo dõi trừ lùi, chi tiết hàng hóa xuất nhập khẩu',
                    'Lên tờ khai xuất nhập khẩu',
                   ]}],


    love: 'du lịch!',
    skill: [
      {title: 'Ngôn Ngữ Lập Trình / Framework / Library' , icon:''},
      {key:'HTML' , value: 'HTML DOM , HTML Event, HTTP Methods',icon:'<i class="fab fa-html5 html" ></i>'},
      {key:'CSS' , value: 'Flex Box, Grid System, Reponsive, BEM',icon:'<i class="fab fa-css3-alt css" ></i>'},
      {key:'JavaScript' , value: 'Javascript cơ bản, ES6, ...',icon:'<i class="fab fa-js-square js" ></i>'},
      {key:'ReactJS' , value: 'JSX, Function Components, Hooks',icon:'<i class="fab fa-react react" ></i>'},
      {key:'My SQL' , value: 'CRUD, Query',icon:'<i class="fas fa-database sql" ></i>'},
      {key:'Microsoft Office' , value: 'Sử dụng thành thạo',icon:'<i class="fab fa-microsoft microsoft" ></i>'},
      {key:'Tiếng Anh' , value: 'Có khả năng đọc và hiểu tài liệu tiếng Anh',icon:''},
      {key:'Kỹ Năng Mềm' , value: 'Có khả năng làm việc nhóm, làm việc dưới áp lực',icon:''},
  ],
  objective:[
    {key:'Ngắn Hạn', value: ['- Tìm kiếm một vị trí trong một môi trường làm việc chuyên nghiệp, năng động và thử thách.',
    '- Đóng góp những kiến thức, kinh nghiệm và kỹ năng tốt nhất của tôi cho sự phát triển của công ty.',
    '- Luôn luôn phát triển khả năng bản thân, tích lũy thêm nhiều kinh nghiệm để hoàn thành tốt các nhiệm vụ được giao và cống hiến tối đa cho công ty. ']},
    {key:'Dài Hạn', value: ['- Gắn bó lâu dài với công ty, trở thành nhân viên nòng cốt, tạo nhiều giá trị cho công ty.']},
  ],

  objectiveSkill: [
      {title: 'Muốn Học Trong Năm 2022' , icon:''},
      {key:'NextJS' , value: 'Framework của React',icon:'<i class="fa-solid fa-n nextjs"></i>'},
      {key:'React Native' , value: 'Framework của React',icon:'<i class="fab fa-react react"></i>'},
      {key:'React Redux' , value: 'Library của React',icon:'<i class="fas fa-check-double redux"></i>'},
      {key:'SCSS, SASS' , value: 'Chương trình tiền xử lý CSS (CSS preprocessor).',icon:'<i class="fab fa-sass scss" ></i>'},
      {key:'MongoDB' , value: 'Quản lý Database',icon:'<i class="fas fa-database mongodb" ></i>'},
      {key:'Figma' , value: 'Thiết kế UI web',icon:'<i class="fa-brands fa-figma figma"></i>'},
  ],

  project :[

    {title: '30 Days Practice' , show:true , 
    link:'null',
    listImage:['./img/about/day1.png'
              ,'./img/about/day2.png'
              ,'./img/about/day3.png'
              ,'./img/about/day4.png'
              ,'./img/about/day5.png'
              ,'./img/about/day6.png'
              ,'./img/about/day7.png'
              ,'./img/about/day8.png',],
    leftDescription: ['Tạo HTML CSS từ design' ,'Responsive cho cả mobile và tablet',], 
    rightDescription: ['Style: CSS','Library ReactJS' ,'React Router V6' , 'Xử lý logics: JS, Hooks']}, 

    {title: 'TheBand - HTML/CSS' , show:true , 
    link:'https://v-dat.github.io/w3-theband',
    listImage:['./img/about/theband1.png','./img/about/theband2.png','./img/about/theband3.png','./img/about/theband4.png',],
    leftDescription: ['Tạo HTML CSS từ design' ,'Responsive cho cả mobile và tablet',], 
    rightDescription: ['Style: CSS' ,'Cấu trúc web: HTML'  , 'Xử lý logics: JS (rất ít)']}, 
  ],

},

  dayList: [
    { day:'Day1',
      name:'product card',
      url:'Day1',
      imageUrl:'./img/listimage/product_card.png',
    },
    {day:'Day2',
      name:'profile card',
      url:'Day2',
      imageUrl:'./img/listimage/profile_card.png',
    },
    {day:'Day3',
      name:'create modal',
      url:'Day3',
      imageUrl:'./img/listimage/create_modal.png',
    },
    {day:'Day4',
      name:'image gallery',
      url:'Day4',
      imageUrl:'./img/listimage/image_gallery.png',
    },
    {day:'Day5',
    name:'Login Form',
    url:'Day5',
    imageUrl:'./img/listimage/login.png',
    },
    {day:'Day6',
    name:'Date Time',
    url:'Day6',
    imageUrl:'./img/listimage/time.png',
    },    
    {day:'Day7',
    name:'ToDo App',
    url:'Day7',
    imageUrl:'./img/listimage/todo.png',
    },
    {day:'Day8',
    name:'Music Player',
    url:'Day8',
    imageUrl:'./img/listimage/mp3_player.png',
    },
    {day:'Day9',
    name:'Image Picker',
    url:'Day9',
    imageUrl:'./img/listimage/mp3_player.png',
    },
    {day:'Day10',
    name:'Call API - Fetch',
    url:'Day10',
    imageUrl:'./img/listimage/mp3_player.png',
    },
    {day:'Day11',
    name:'Null',
    url:'Day11',
    imageUrl:'./img/listimage/mp3_player.png',
    },
  ],
  profile: [
  {name: 'Christina', 
    avatar: './img/day2/Christina.png',
    job: 'FrontEnd Developer',
    social: ['facebook',
            'youtube',
            'github',
            'tiktok']
  },
  {name: 'David', 
  avatar: './img/day2/David.png',
  job: 'FrontEnd Developer',
  social: ['facebook',
          'youtube',
          'github',
          'tiktok']
},
{name: 'Matheo Mardaye', 
avatar: './img/day2/Matheo_Mardaye.png',
job: 'FrontEnd Developer',
social:  ['facebook',
          'youtube',
          'github',
          'tiktok']
},
{name: 'Nice', 
avatar: './img/day2/Nice.png',
job: 'FrontEnd Developer',
social:  ['facebook',
          'youtube',
          'github',
          'tiktok']
},
{name: 'Olivia', 
avatar: './img/day2/Olivia.png',
job: 'FrontEnd Developer',
social:  ['facebook',
          'youtube',
          'github',
          'tiktok']
},
{name: 'Vladimir', 
avatar: './img/day2/Vladimir.png',
job: 'FrontEnd Developer',
social:  ['facebook',
          'youtube',
          'github',
          'tiktok']
},
  ],
  galary: [{
    name: "img1",
    url: './img/day4/img1.png',
  },
  {
    name: "img2",
    url: './img/day4/img2.png',
  },
  {
    name: "img3",
    url: './img/day4/img3.png',
  },
  {
    name: "img4",
    url: './img/day4/img4.png',
  },
  {
    name: "img5",
    url: './img/day4/img5.png',
  },
  {
    name: "img6",
    url: './img/day4/img6.png',
  },
  {
    name: "img7",
    url: './img/day4/img7.png',
  },
  {
    name: "img8",
    url: './img/day4/img8.png',
  },],
  musics: [
  {
    name: "Chạy Về Nơi Phía Anh",
    author: "Khắc Việt",
    image: './music/Chay-Ve-Noi-Phia-Anh.png',
    mp3: './music/Chay-Ve-Noi-Phia-Anh.mp3',
  },
  {
    name: "Không Trọn Vẹn Nữa",
    author: "Châu Khải Phong",
    image: './music/Khong-Tron-Ven-Nua.png',
    mp3: './music/Khong-Tron-Ven-Nua.mp3',
  },
  {
    name: "Người Yêu Tôi Lạnh Lùng Sắt Đá",
    author: "Mr. Siro",
    image: './music/Nguoi-Yeu-Toi-Lanh-Lung-Sat-Da.png',
    mp3: './music/Nguoi-Yeu-Toi-Lanh-Lung-Sat-Da.mp3',
  },
  {
    name: "Thay Mọi Cô Gái Để Yêu Anh",
    author: "AMEE",
    image: './music/Thay-Moi-Co-Gai-Yeu-Anh.png',
    mp3: './music/Thay-Moi-Co-Gai-Yeu-Anh.mp3',
  },
  {
    name: "Chạy Về Khóc Với Anh",
    author: "ERIK",
    image: './music/Chay-Ve-Khoc-Voi-Anh.png',
    mp3: './music/Chay-Ve-Khoc-Voi-Anh.mp3',
  },
  {
    name: "Ái Nộ",
    author: "Masew x Khoi Vu",
    image: './music/Ai-No.png',
    mp3: './music/Ai-No.mp3',
  },
  {
    name: "Câu Hẹn Câu Thề",
    author: "Đình Dũng",
    image: './music/Cau-Hen-Cau-The.png',
    mp3: './music/Cau-Hen-Cau-The.mp3',
  },
  {
    name: "Câu Hứa Chưa Trọn Vẹn",
    author: "Phát Huy x Hoàng Green",
    image: './music/Cau-Hua-Chua-Tron-Ven.png',
    mp3: './music/Cau-Hua-Chua-Tron-Ven.mp3',
  },
  {
    name: "Đế Vương",
    author: "Đình Dũng",
    image: './music/De-Vuong.png',
    mp3: './music/De-Vuong.mp3',
  },
  {
    name: "Muộn Rồi Mà Sao Còn",
    author: "Sơn Tùng MTP",
    image: './music/Muon-Roi-Ma-Sao-Con.png',
    mp3: './music/Muon-Roi-Ma-Sao-Con.mp3',
  },
  {
    name: "Sài Gòn Đau Lòng Quá",
    author: "Hứa Kim Tuyền",
    image: './music/Sai-Gon-Dau-Long-Qua.png',
    mp3: './music/Sai-Gon-Dau-Long-Qua.mp3',
  },
  {
    name: "Thê Lương",
    author: "Phúc Trinh",
    image: './music/The-Luong.png',
    mp3: './music/The-Luong.mp3',
  },]
}
export default data;
