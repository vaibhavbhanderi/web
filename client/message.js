const messageData = () => {
  fetch('http:/userget')
    .then((response) => response.json())
    .then((data) => {
      let data1 = `<li class="active">
          <div class="d-flex bd-highlight">
              <div class="img_cont">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                      class="rounded-circle user_img">
                  <span class="online_icon"></span>
              </div>

              <div class="user_info">
                  <span >Me</span>
                  <p>Kalid is online</p>
              </div>
          </div>
      </li>`;

      // Loop to access all rows
      data[0].Members.map((el) => {
        data1 += `<li class="active" >
            <div class="d-flex bd-highlight" >
                <div class="img_cont">
                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        class="rounded-circle user_img">
                    <span class="online_icon"></span>
                </div>

                <div class="user_info">
                    <span class="list-name" onclick="myfunction(${el.id})" id=${el.id}>${el.name}</span>
                    <p>Kalid is online</p>
                </div>
            </div>
        </li>`;
      });
      document.getElementById('employees').innerHTML = data1;
    });

  //   showdata(data);
};

// console.log(data);
// data[0].Members.map((el) => {
//   console.log(el.id);
//   console.log(el.name);
// }),
//   show(data);
// ${el.name}

const socket = io('http://localhost:3000');
const messageinput = document.getElementById('exampleFormControlTextarea1');
const msgCont = document.getElementById('data-container');
const email = document.getElementById('email');
const form = document.getElementById('sendcontainer');

var receiver = '';
var sender = '';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageinput.value;
  // append(`You: ${message}`,"right")
  // socket.emit("send",message)
  console.log(`message`, message);
  messageinput.value = ' ';
});

function myfunction(id) {
  const name = document.getElementById(id).innerText;
  // console.log(name);
  const newuser = socket.emit('newuserjoin', name);
}
socket.on('userjoinevent', (name) => {
  console.log(`name`, name);
});

