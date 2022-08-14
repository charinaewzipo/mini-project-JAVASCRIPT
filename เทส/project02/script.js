const btnganglist = document.getElementById('ganglist');
const btnmygang = document.getElementById('mygang');
const mygangEl = document.getElementById('main-mygang')
const ganglistEl = document.getElementById('main-ganglist')
const create_gang = document.getElementById('create-gang')

const xbtn = document.getElementById('x')
const btncreategang = document.getElementById('btncreategang')
const showcreategang = document.getElementById('showcreategang')


const createnamegang = document.getElementById('createnamegang')
const createurlgang = document.getElementById('urlgang')

const persons = [{
  id: 1,
  name: 'Koke',
  position: 'CM'
}, {
  id: 2,
  name: 'Diego Godin',
  position: 'CB'
}, {
  id: 3,
  name: 'Lodi',
  position: 'LB'
}, {
  id: 4,
  name: 'Saul Niguez',
  position: 'CM'
}, {
  id: 5,
  name: 'Luis Suarez',
  position: 'ST'
}, {
  id: 6,
  name: 'C.Ronaldo',
  position: 'ST'
}, {
  id: 7,
  name: 'Yannick F. Carrasco',
  position: 'LM'
}, {
  id: 8,
  name: 'Angle Correa',
  position: 'RM'
}, {
  id: 9,
  name: 'Y.Oblak',
  position: 'GK'
}, {
  id: 10,
  name: 'Miranda',
  position: 'CB'
}, {
  id: 11,
  name: 'Jao Felix',
  position: 'ST'
}, {
  id: 12,
  name: 'Gabi',
  position: 'CM'
}, {
  id: 13,
  name: 'Tiago',
  position: 'CM'
}
  , {
  id: 14,
  name: 'Saul Niguez',
  position: 'CM'
}, {
  id: 15,
  name: 'Luis Suarez',
  position: 'ST'
}, {
  id: 16,
  name: 'C.Ronaldo',
  position: 'ST'
}, {
  id: 17,
  name: 'Yannick F. Carrasco',
  position: 'LM'
}, {
  id: 18,
  name: 'Angle Correa',
  position: 'RM'
}, {
  id: 19,
  name: 'Y.Oblak',
  position: 'GK'
}, {
  id: 20,
  name: 'Miranda',
  position: 'CB'
},
{
  id: 21,
  name: 'Koke',
  position: 'CM'
}, {
  id: 22,
  name: 'Diego Godin',
  position: 'CB'
}, {
  id: 23,
  name: 'Lodi',
  position: 'LB'
}, {
  id: 24,
  name: 'Saul Niguez',
  position: 'CM'
}, {
  id: 25,
  name: 'Luis Suarez',
  position: 'ST'
}
];
const gangs = [
  {
    id: 1,
    name: "กูซ่า",
    group: persons.length,
    level: 1,
    logo: "./img/2022-07-08_14-26-15.png",
    persons:persons,
    max_group:5
  },
  {
    id: 2,
    name: "น้องเตยเด็กเสี่ย",
    group: "2/10",
    level: 2,
    logo: "./img/logo.png"
  },
  {
    id: 3,
    name: "น้องเตยเด็กเสี่ย",
    group: "2/10",
    level: 2,
    logo: " "
  },
  {
    id: 4,
    name: "น้องเตยเด็กเสี่ย",
    group: "2/10",
    level: 2,
    logo: " "
  }
]



$(document).ready(() => {
  showganglist()
})


function showganglist() {
  render_listGange();
  $(".number-pagination").removeClass("active")
  $("#page_list1").addClass("active")
  ganglistEl.classList.add('active')
  ganglistEl.classList.remove('hidden')
  mygangEl.classList.remove('active')
  mygangEl.classList.add('hidden')
}
function showmygang() {
  render_mygang(gang);
  $(".number-pagination").removeClass("active")
  $("#page1").addClass("active")
  mygangEl.classList.add('active')
  mygangEl.classList.remove('hidden')
  ganglistEl.classList.remove('active')
  ganglistEl.classList.add('hidden')
}
btnganglist.addEventListener('click', showganglist)
btnmygang.addEventListener('click', showmygang)


let page_list = 1;
let totalpage_list = 0;

function render_listGange(){
  let index = 0;
  let html = ''
  let button =`
      <div class="menu-button">
        <button id="showcreategang" onclick="showCreate()">CREATE GANG</button>
      </div>
  `
  let pagination_a = '<div class="pagination"> <a href="#" onclick="backPage_list()">&laquo;</a>'
  for (i = (page_list - 1) * 5; i < page_list * 5; i++) {
    index++
    if (i < gangs.length) {
      html +=
        `
        <div class="info-gang">
             <p class="namegang">${index}. ${gangs[i].name}</p>
             <p class="numgroup">${gangs[i].group}</p>
             <p class="levelgroup">LEVEL ${gangs[i].level}</p>
             <img src="${gangs[i].logo}" alt="" class="logo-small">
        </div>
      
      `
    }
  }
  ganglistEl.innerHTML = html
  ganglistEl.innerHTML += button
  totalpage_list = Math.ceil(gangs.length / 5);

  for (i = 1; i <= totalpage_list; i++) {
    pagination_a += `<a href="#" id=page_list${i} class="number-pagination" onclick="currentPage_list(${i})">${i}</a>`
  }
  pagination_a += `<a href="#" onclick="nextPage_list()">&raquo;</a>`
  ganglistEl.innerHTML += pagination_a

}

let page=1;
let totalpage=0;

let gang=gangs[0]
function render_mygang(gang) {
  let maxgroup=gang.max_group
  let numbergroup=gang.group
  console.log(gang)
  console.log(maxgroup)   //5 
  console.log(numbergroup)  //25
  let html = `<div class="group-list">`
  let button = `
<div class="group">
<img src="./img/group.png" alt="">
<p>1/${numbergroup}</p>
<button onclick="addnumbergroup()">+</button>
</div>`
  let pagination_a = `<div class="pagination"> <a href="#"  onclick="backPage()">&laquo;</a>`
  let menu_button = ` <div class="menu-button">
<button id="authorise" onclick="showselectposition()">AUTHORISE</button>
<button>INVITE</button>
<button>EXIT GANG</button>
</div>`

  let index = 0;
  for (i = (page - 1) * 7; i < page * 7; i++) {

    if (i < numbergroup) {
      index++
      html +=
        `
    <div class="person">
      <p class="nameperson" value="${gang.persons[i].name}">${index}. ${gang.persons[i].name}</p>
      <select class="position disableselect">
        <option value="leader">${gang.persons[i].position}</option>
        <option value="master">MASTER</option>
        <option value="member">MEMBER</option>
      </select>
    </div>
      
      `
    }
  }
  mygangEl.innerHTML = html
  mygangEl.innerHTML += button
  mygangEl.innerHTML += menu_button
  totalpage = Math.ceil(numbergroup / 7);

  for (i = 1; i <= totalpage; i++) {
    pagination_a += `<a href="#" id=page${i} class="number-pagination" onclick="currentPage(${i})">${i}</a>`
  }
  pagination_a += `<a href="#" onclick="nextPage()">&raquo;</a>`
  mygangEl.innerHTML += pagination_a

}

function nextPage() {
  if (page != totalpage) {
    page++;
    render_mygang(gang)
    $("#page" + page).addClass("active")
  }
}
function backPage() {
  if (page != 1) {
    page--;
    render_mygang(gang)
    $("#page" + page).addClass("active")
  }
}

function currentPage(cur_page) {
  page = cur_page;
  render_mygang(gang)
  $("#page" + page).addClass("active")
}


function nextPage_list() {
  if (page_list != totalpage_list) {
    page_list++;
    render_listGange()
    $("#page_list" + page_list).addClass("active")
  }
}
function backPage_list() {
  if (page_list != 1) {
    page_list--;
    render_listGange()
    $("#page_list" + page_list).addClass("active")
  }
}

function currentPage_list(cur_page) {
  page_list = cur_page;
  render_listGange()
  $("#page_list" + page_list).addClass("active")
}


function showCreate() {
  create_gang.classList.toggle("hidden");
}


let gang_info = {}
function createGang(e) {
  e.preventDefault();
  gang_info = {
    name: createnamegang.value,
    logo: createurlgang.value,
    group: "1/10",
    level: 1,
    id: Math.floor(Math.random() * 100)
  }
  gangs.push(gang_info)
  listGang()
  showCreate()
  createnamegang.value = ''
  createurlgang.value = ''
}

function showselectposition() {

  const positions = document.querySelectorAll('.person')
  const div_array = [...positions];
  // console.log(div_array)
  div_array.forEach((div) => {
    div.childNodes[3].classList.toggle("disableselect")
    // console.log(div.childNodes[1].attributes.value.value)
    div.childNodes[3].addEventListener('change', (e) => {
      persons.forEach((data) => {
        if (data.name === (div.childNodes[1].attributes.value.value)) {
          data.position = e.target.value
          console.log(data)
        }
      })

    })
  })
}

function addnumbergroup(e){
 console.log("hello") 
}

btncreategang.addEventListener('click', createGang)
xbtn.addEventListener('click', showCreate)

