//defining js variables for the most used symbols;
var X = `<img class="mysym" src="https://media.istockphoto.com/vectors/black-x-mark-icon-cross-symbol-vector-id688548038?k=6&m=688548038&s=170667a&w=0&h=6_K3sPmB3BxPWzgD5zyaIxL4HzXRzJ67mRTyuv2JJUk=" alt="Image not found!">`
var O = `<img class="mysym" src="https://cdn-images-1.medium.com/max/1200/1*gPEf4VYYLot0JvGhyXqxwQ.jpeg" alt="Image not found!">`
//defining a javascript variable that hold the 3*3 grid;
var playgrid = `
    <div class="js_play_grid" id="nine_box_container">
        <div class="play_grid_div" id="one_one"></div>
        <div class="play_grid_div" id="one_two"></div>
        <div class="play_grid_div" id="one_three"></div>
        <div class="play_grid_div" id="two_one"></div>
        <div class="play_grid_div" id="two_two"></div>
        <div class="play_grid_div" id="two_three"></div>
        <div class="play_grid_div" id="three_one"></div>
        <div class="play_grid_div" id="three_two"></div>
        <div class="play_grid_div" id="three_three"></div>
    </div>
`
//defining the winning condition;
function isWin () {
  var box1 = document
    .getElementById('one_one')
    .innerHTML.toString()
    .trim()
  var box2 = document
    .getElementById('one_two')
    .innerHTML.toString()
    .trim()
  var box3 = document
    .getElementById('one_three')
    .innerHTML.toString()
    .trim()
  var box4 = document
    .getElementById('two_one')
    .innerHTML.toString()
    .trim()
  var box5 = document
    .getElementById('two_two')
    .innerHTML.toString()
    .trim()
  var box6 = document
    .getElementById('two_three')
    .innerHTML.toString()
    .trim()
  var box7 = document
    .getElementById('three_one')
    .innerHTML.toString()
    .trim()
  var box8 = document
    .getElementById('three_two')
    .innerHTML.toString()
    .trim()
  var box9 = document
    .getElementById('three_three')
    .innerHTML.toString()
    .trim()
  if (box1 == box2 && box2 == box3 && box1 == box3 && box1 != '') {
    if (box1 == X) {
      return 'Player1'
    } else {
      return 'Player2'
    }
  } else if (box4 == box5 && box5 == box6 && box4 == box6 && box4 != '') {
    if (box4 == X) return 'Player1'
    else {
      return 'Player2'
    }
  } else if (box7 == box8 && box8 == box9 && box7 == box9 && box7 != '') {
    if (box7 == X) return 'Player1'
    else {
      return 'Player2'
    }
  } else if (box1 == box7 && box4 == box7 && box1 == box4 && box1 != '') {
    if (box1 == X) return 'Player1'
    else {
      return 'Player2'
    }
  } else if (box2 == box8 && box5 == box8 && box2 == box5 && box2 != '') {
    if (box2 == X) return 'Player1'
    else {
      return 'Player2'
    }
  } else if (box3 == box9 && box3 == box6 && box9 == box6 && box3 != '') {
    if (box3 == X) return 'Player1'
    else {
      return 'Player2'
    }
  } else if (box1 == box5 && box5 == box9 && box1 == box9 && box1 != '') {
    if (box1 == X) return 'Player1'
    else {
      return 'Player2'
    }
  } else if (box3 == box5 && box5 == box7 && box7 == box3 && box3 != '') {
    if (box3 == X) return 'Player1'
    else {
      return 'Player2'
    }
  } else {
    return 'noWin'
  }
}
//defining of winning condition ended here;
var count = 0
//implementing a gameStartHandler for a multiplayer game;
const gameStartHandler = () => {
  count = 0
  document.getElementById(
    'play_container'
  ).innerHTML = `<div id="game_container">
  <div id="status"></div>
  ${playgrid}
  </div>`
  if (name1 == '') name1 = 'Anonymous-1'
  document.getElementById('status').innerHTML = `
  <h3>${name1}'s turn!</h3>
  `
  document
    .getElementById('nine_box_container')
    .addEventListener('click', function myfun (event) {
      if (
        event.target.id == 'one_one' ||
        event.target.id == 'one_two' ||
        event.target.id == 'one_three' ||
        event.target.id == 'two_one' ||
        event.target.id == 'two_two' ||
        event.target.id == 'two_three' ||
        event.target.id == 'three_one' ||
        event.target.id == 'three_two' ||
        event.target.id == 'three_three'
      ) {
        if (name2 == '') name2 = 'Anonymous-2'
        if (count % 2 == 1) {
          document.getElementById('status').innerHTML = `
            <h3>${name1}'s turn!</h3>
            <button onclick="gameStartHandler()" class="btn2">Restart</button>
            `
        } else {
          document.getElementById('status').innerHTML = `
            <h3>${name2}'s turn!</h3>
            <button onclick="gameStartHandler()" class="btn2">Restart</button>
            `
        }
        if (
          document.getElementById(`${event.target.id}`).innerHTML != X &&
          document.getElementById(`${event.target.id}`).innerHTML != O
        ) {
          var sym = count % 2 == 0 ? X : O
          document.getElementById(`${event.target.id}`).innerHTML = sym
          if (count % 2 == 0) {
            X = document.getElementById(`${event.target.id}`).innerHTML
          } else {
            O = document.getElementById(`${event.target.id}`).innerHTML
          }
          count++
          if (isWin() != 'noWin' || count == 9) {
            document
              .getElementById('nine_box_container')
              .removeEventListener('click', myfun)
            var toOutput = null
            if (isWin() == 'noWin') {
              toOutput = 'Its a tie!'
            } else if (isWin() == 'Player1') {
              toOutput = `${name1} is the Winner`
            } else {
              toOutput = `${name2} is the Winner`
            }
            alert(toOutput)
            document.getElementById(
              'play_container'
            ).innerHTML = `<div class="newGame_container">
            <h3>${toOutput}</h3>
            <button type="button" class="btn2" onclick="modeToggleHandler(1)">Try Again</button>
            </div>`
          }
        }
      }
    })
}
// implementing versesPage for multiplayer game;
const versesPage = (name1, name2) => {
  if (name1 == '') name1 = 'Anonymous-1'
  if (name2 == '') name2 = 'Anonymous-2'
  document.getElementById('play_container').innerHTML = `
    <div class="verses_div">
    <div style="font-size:1rem">${name1} vs ${name2}</div>
    <button class="btn2" onclick="gameStartHandler()">Start!</button>
    </div>
  `
}
//implementing versesPageSinglePlayer for single player game;
const versesPageSinglePlayer = (name1, name2) => {
  if (name1 == '') name1 = 'Anonymous-1'
  if (name2 == '') name2 = 'Anonymous-2'
  document.getElementById('play_container').innerHTML = `
    <div class="verses_div">
    <div style="font-size:1rem">${name1} vs ${name2}</div>
    <button class="btn2" onclick="gameStartHandlerSinglePlayer()">Start!</button>
    </div>
  `
}
// defining formSubmitHandler
var name1 = null,
  name2 = null
const formSubmitHandler = () => {
  name1 = document.getElementById('playerx').value
  name2 = document.getElementById('playery').value
  setTimeout(versesPage(name1, name2), 1000)
}
//the names asking form;
const playerNamesform = `
  <div class="form_container">
    <p>Note:Player choosing 'X' playes first</p>
    <div class="name_form">
      <input type="text" autocomplete="false" placeholder="Player-X Name" id="playerx"></input>
      <input type="text" autocomplete="false" placeholder="Player-Y Name" id="playery"></input>
      <button class="btn2" type="submit" onclick="formSubmitHandler()">Submit</button> 
    </div>
  </div>
`
var PlayerName = null
var firstPlayer = null
const singlePlayerGameHandler = () => {
  var choice = document.getElementById('mychoiceX').checked
  PlayerName = document.getElementById('singleplayer_name').value
  if (PlayerName == '') {
    PlayerName = 'Anonymous'
  }
  if (choice) {
    versesPageSinglePlayer(PlayerName, 'Computer')
    firstPlayer = 'Player'
  } else {
    versesPageSinglePlayer('Computer', PlayerName)
    firstPlayer = 'Computer'
  }
}
//building the toggling stuff;
const modeToggleHandler = mode_id => {
  if (mode_id == 1) {
    //coading the multiplayer part;
    document.getElementById('multi_btn').style.backgroundColor = 'green'
    document.getElementById('single_btn').style.backgroundColor = 'white'
    document.getElementById('multi_btn').style.pointerEvents = 'none'
    document.getElementById('single_btn').style.pointerEvents = 'unset'
    document.getElementById('play_container').innerHTML = ''
    document.getElementById('play_container').innerHTML += playerNamesform
  } else {
    //coading the singleplayer part;
    document.getElementById('multi_btn').style.backgroundColor = 'white'
    document.getElementById('single_btn').style.backgroundColor = 'green'
    document.getElementById('single_btn').style.pointerEvents = 'none'
    document.getElementById('multi_btn').style.pointerEvents = 'unset'
    document.getElementById('play_container').innerHTML = `
    <div class="singleplayer_options_div">
    <div class="form_container">
      <p>Note:Player choosing 'X' playes first</p>
        <input type="text" placeholder="Player Name" id="singleplayer_name">
        <form style="font-size:1rem;font-weight:bold">
          X:<input type="radio" id="mychoiceX" name="sym" value="X" checked="checked">
          O:<input type="radio" id="mychoiceO" name="sym" value="O">
        </form>
        <div>
        <button class="btn2" type="submit" onclick="singlePlayerGameHandler()">Submit</button>
        <button class="btn2" type="reset" onclick="modeToggleHandler(${2})">Reset</button>
        </div>
      </div> 
    </div>
    `
  }
}
var arr1 = [
  'one_one',
  'one_two',
  'one_three',
  'two_one',
  'two_two',
  'two_three',
  'three_one',
  'three_two',
  'three_three'
]
const gameStartHandlerSinglePlayer = () => {
  document.getElementById('play_container').innerHTML = playgrid
  var modularValueNeeded = null
  if (firstPlayer == 'Player') modularValueNeeded = 1
  else {
    modularValueNeeded = 0
  }
  count = 0
  if (modularValueNeeded == 1) {
    //here the player plays first;
    document
      .getElementById('play_container')
      .addEventListener('click', function singlePlayer (event) {
        if (
          event.target.id == 'one_one' ||
          event.target.id == 'one_two' ||
          event.target.id == 'one_three' ||
          event.target.id == 'two_one' ||
          event.target.id == 'two_two' ||
          event.target.id == 'two_three' ||
          event.target.id == 'three_one' ||
          event.target.id == 'three_two' ||
          event.target.id == 'three_three'
        ) {
          if (
            document.getElementById(`${event.target.id}`).innerHTML != X &&
            document.getElementById(`${event.target.id}`).innerHTML != O
          ) {
            var index = 0
            while (arr1[index] != event.target.id) {
              index++
            }
            document.getElementById(`${arr1[index]}`).innerHTML = X
            X = document.getElementById(`${arr1[index]}`).innerHTML
            count++
            if (isWin() != 'noWin' || count == 9) {
              var toOutput = null
              if (isWin() == 'noWin') {
                toOutput = 'Its a tie!'
              } else if (isWin() == 'Player1') {
                toOutput = `${PlayerName} is the Winner!`
              } else {
                toOutput = `Computer is the Winner!`
              }
              alert(toOutput)
              document.getElementById(
                'play_container'
              ).innerHTML = `<div class="newGame_container">
              <h3>${toOutput}</h3>
              <button type="button" class="btn2" onclick="modeToggleHandler(${2})">Try Again</button>
              </div>`
            }
            setTimeout(() => {
              var random = Math.floor(Math.random() * 9)
              while (
                document.getElementById(arr1[random]).innerHTML == X ||
                document.getElementById(arr1[random]).innerHTML == O
              ) {
                random = Math.floor(Math.random() * 9)
              }
              count++
              document.getElementById(arr1[random]).innerHTML = O
              O = document.getElementById(arr1[random]).innerHTML
              if (isWin() != 'noWin' || count == 9) {
                var toOutput = null
                if (isWin() == 'noWin') {
                  toOutput = 'Its a tie!'
                } else if (isWin() == 'Player1') {
                  toOutput = `${PlayerName} is the Winner!`
                } else {
                  toOutput = `Computer is the Winner!`
                }
                alert(toOutput)
                document.getElementById(
                  'play_container'
                ).innerHTML = `<div class="newGame_container">
                <h3>${toOutput}</h3>
                <button type="button" class="btn2" onclick="modeToggleHandler(${2})">Try Again</button>
                </div>`
              }
            }, 1000)
          }
        }
      })
  } else {
    //here the computer plays first;
    var random = Math.floor(Math.random() * 9)
    document.getElementById(arr1[random]).innerHTML = X
    X = document.getElementById(arr1[random]).innerHTML
    count++
    document
      .getElementById('play_container')
      .addEventListener('click', function singlePlayer (event) {
        if (
          event.target.id == 'one_one' ||
          event.target.id == 'one_two' ||
          event.target.id == 'one_three' ||
          event.target.id == 'two_one' ||
          event.target.id == 'two_two' ||
          event.target.id == 'two_three' ||
          event.target.id == 'three_one' ||
          event.target.id == 'three_two' ||
          event.target.id == 'three_three'
        ) {
          if (
            document.getElementById(`${event.target.id}`).innerHTML != X &&
            document.getElementById(`${event.target.id}`).innerHTML != O
          ) {
            var index = 0
            while (arr1[index] != event.target.id) {
              index++
            }
            document.getElementById(`${arr1[index]}`).innerHTML = O
            O = document.getElementById(`${arr1[index]}`).innerHTML
            count++
            if (isWin() != 'noWin' || count == 9) {
              var toOutput = null
              if (isWin() == 'noWin') {
                toOutput = 'Its a tie!'
              } else if (isWin() == 'Player2') {
                toOutput = `${PlayerName} is the Winner!`
              } else {
                toOutput = `Computer is the Winner!`
              }
              alert(toOutput)
              document.getElementById(
                'play_container'
              ).innerHTML = `<div class="newGame_container">
              <h3>${toOutput}</h3>
              <button type="button" class="btn2" onclick="modeToggleHandler(${2})">Try Again</button>
              </div>`
            }
            setTimeout(() => {
              var random = Math.floor(Math.random() * 9)
              if (document.getElementById(`${arr1[random]}`).innerHTML == '') {
                count++
                document.getElementById(arr1[random]).innerHTML = X
                X = document.getElementById(arr1[random]).innerHTML
                if (isWin() != 'noWin' || count == 9) {
                  var toOutput = null
                  if (isWin() == 'noWin') {
                    toOutput = 'Its a tie!'
                  } else if (isWin() == 'Player2') {
                    toOutput = `${PlayerName} is the Winner!`
                  } else {
                    toOutput = `Computer is the Winner!`
                  }
                  alert(toOutput)
                  document.getElementById(
                    'play_container'
                  ).innerHTML = `<div class="newGame_container">
                <h3>${toOutput}</h3>
                <button type="button" class="btn2" onclick="modeToggleHandler(${2})">Try Again</button>
                </div>`
                }
              } else {
                while (
                  document.getElementById(`${arr1[random]}`).innerHTML == X ||
                  document.getElementById(`${arr1[random]}`).innerHTML == O
                ) {
                  random = Math.floor(Math.random() * 9)
                }
                count++
                document.getElementById(arr1[random]).innerHTML = X
                X = document.getElementById(arr1[random]).innerHTML
                if (isWin() != 'noWin' || count == 9) {
                  var toOutput = null
                  if (isWin() == 'noWin') {
                    toOutput = 'Its a tie!'
                  } else if (isWin() == 'Player2') {
                    toOutput = `${PlayerName} is the Winner!`
                  } else {
                    toOutput = `Computer is the Winner!`
                  }
                  alert(toOutput)
                  document.getElementById(
                    'play_container'
                  ).innerHTML = `<div class="newGame_container">
                <h3>${toOutput}</h3>
                <button type="button" class="btn2" onclick="modeToggleHandler(${2})">Try Again</button>
                </div>`
                }
              }
            }, 1000)
          }
        }
      })
  }
}
modeToggleHandler(1)
//end of js:)
