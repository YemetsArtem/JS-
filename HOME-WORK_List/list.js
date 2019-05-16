var playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  }
];

var div = document.getElementById("container");
var h1 = document.createElement("h1");
var ol = document.createElement("ol");

div.appendChild(h1);
div.appendChild(ol);

h1.innerHTML = "List ";
h1.setAttribute("onclick", "changeDisplayStyle()");
ol.style.display = "none";
createList(playList);

// FUNCTIONS
function createList() {
  for (var i = 0; i < playList.length; i++) {
    var author = playList[i].author;
    var song = playList[i].song;
    var message = "Author: " + author + "; " + "Song: " + song;
    var li = document.createElement("li");
    li.innerHTML = message;
    ol.appendChild(li);
  }
}
function changeDisplayStyle() {
  if (ol.style.display === "block") {
    ol.style.display = "none";
    h1.style.color = "yellow";
  } else if (ol.style.display === "none") {
    ol.style.display = "block";
    h1.style.color = "white";
  }
}
