import db from "./posts.js";

// INSERT ELEMENTS TO EACH OTHER
function inserElementTo(selector, content) {
  $(selector).append(content);
}

// CREATE ONE CARD
function createCard(array) {
  // Create elements
  const containerCard = $("<div>");
  const title = $("<h1>");
  const image = $("<img>");
  const description = $("<p>");
  const authorContainer = $("<div>");
  const author = $("<p>");
  const toPlaylist = $("<button>");
  const remove = $("<button>");

  // Add class to elements
  containerCard.addClass("card");
  title.addClass("card_title");
  image.addClass("card_image");
  description.addClass("card_description");
  authorContainer.addClass("card_author-container");
  author.addClass("author");
  toPlaylist.addClass("toPlaylist-button");
  remove.addClass("delete-button");

  // Add content to elements
  title.html(array.title);
  image.attr("src", array.imgUrl);
  image.attr("alt", array.title);
  description.html(array.description);
  author.html(array.author);
  toPlaylist.html("To Playlist");
  remove.html("Delete");

  // Insert elements
  inserElementTo(containerCard, title);
  inserElementTo(containerCard, image);
  inserElementTo(containerCard, description);
  inserElementTo(containerCard, authorContainer);
  inserElementTo(authorContainer, author);
  inserElementTo(authorContainer, toPlaylist);

  // Add function to playlist button and delete it
  $(toPlaylist).on("click", function() {
    $(toPlaylist).remove();
    inserElementTo(authorContainer, remove);
    inserElementTo(containerPlayList, containerCard);
    $(remove).on("click", function() {
      $(containerCard).remove();
    });
  });

  // Add function that provide showing of one card
  $(image).on("click", function() {
    containerMain.html(" ");
    $(toPlaylist).remove();
    inserElementTo(containerMain, containerCard.clone());
  });

  return containerCard;
}

// Hide and show playlist and main containers correspondingly
function HideAndSHow() {
  containerMain.html(" ");
  containerPlayList.hide();
  containerMain.show();
}

// PUT ALL CARDS IN CONTAINERS
function createAllCard(event) {
  if (event.currentTarget.id === "hotlist") {
    HideAndSHow();
    if (db.hotlist) {
      var arr = db.hotlist;
      for (var j = 0; j < arr.length; j++) {
        inserElementTo(containerMain, createCard(arr[j]));
      }
    }
  } else if (event.currentTarget.id === "homePage") {
    HideAndSHow();
    for (var keys in db) {
      for (var j = 0; j < db[keys].length; j++) {
        inserElementTo(containerMain, createCard(db[keys][j]));
      }
    }
  } else if (event.currentTarget.id === "myPlaylist") {
    containerMain.hide();
    containerPlayList.show();
  }
}

// CREATE MAIN CONTAINERS
const containerMain = $("<div>");
const containerPlayList = $("<div>");
containerMain.addClass("cards_container");
containerPlayList.addClass("cards_container-playlist");
inserElementTo("body", containerMain);
inserElementTo("body", containerPlayList);

// BIND BUTTONS
$("#homePage").on("click", createAllCard);
$("#hotlist").on("click", createAllCard);
$("#myPlaylist").on("click", createAllCard);
