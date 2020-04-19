(() => {
  // variables at the top -> elements on the page we need to work with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightBox = document.querySelector(".lightBox"),
      gotImage = document.querySelector("images"),
      gotVideo = lightBox.querySelector("video"),
      closeLightBox = lightBox.querySelector(".lightbox-close"),
      houseName = document.querySelector("h1"),
      houseDescription = document.querySelector(".house-info");
//const gotImage = [
  //["stark.jpg"], ["baratheon.jpg"],["lannister.jpg"]
//];
//const arrayImagesElement = document.getElementbyId("houseImages");
const houseData = [
    ["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast
    region known as the North from their seat in Winterfell. It is one of the oldest lines of
     Westerosi nobility by far, claiming a line of descent stretching back over eight thousand
     years. Before the Targaryen conquest, as well as during the War of the Five Kings and
      Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the
       region as the Kings in the North.`],
    ["Baratheon",`House Baratheon of Storm's End is a legally extinct Great House of Westeros.
     A cadet branch was formerly the royal house, but House Lannister now controls the throne.
     House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly
     named for its frequent storms, from their seat of Storm's End. House Baratheon became the
     royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the
     Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as
     Robert I and married Cersei Lannister after the death of Lyanna Stark.`],
    ["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros,
     one of its richest and most powerful families and oldest dynasties. It is also the current
      royal house of the Seven Kingdoms following the extinction of House Baratheon of King's
      Landing, which had been their puppet house anyway. The Lannisters rule over the Westerlands.
      heir seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has
      had habitations and fortifications built into it over the millennia. They are the Lords
      Paramount of the Westerlands and Wardens of the West. As the new royal house, they also
      rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the
       traditional seat of the royal family.`],
    ["Greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands,
     a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke.
    The head of the house is the Lord Reaper of Pyke.

    House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are
    We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated
     with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.`],
    ["Tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member
    carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding.
    The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver
    rout on a red and blue background. Their house words are "Family, Duty, Honor."`],
    ["Arryn", `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over
    the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently
    as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister
    kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather
    Petyr Baelish acting as Lord Protector until he reaches the age of majority.`],
    ["Targaryen", `House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of
     the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during
    Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into
    exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of
    Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon
    as the royal House following the destruction of the Great Sept of Baelor.`],
    ["Frey", 'House Frey of the Twins was the Great House of the Riverlands, having gained their position for their treachery against their former liege lords, House Tully, who were stripped of all their lands and titles for their rebellion against the Iron Throne; House Tully had supported the independence movement for the Kingdom of the North. The current head of the house is unknown following the assassinations of Lord Walder Frey and two of his sons, Lothar Frey and Walder Rivers, by the vengeful Arya Stark. This is made more complex by the subsequent assassination of all the male Freys soon after.']
    ["Tyrell", 'House Tyrell of Highgarden is one of the Great Houses of the Seven Kingdoms, being Lords Paramount of the Mander and the liege lords of the Reach. A large, wealthy house, its wealth is only surpassed among the Great Houses by House Lannister, and the Tyrells can field the greatest armies. Additionally, if they call the ships of the Redwyne fleet, the lords of the Shield Islands, and the coastal lords, they can command a navy that equals if not surpasses the royal fleet of Kings Landing.']
  ];
  // events go in the middle
  function functionName() {

  }
  function showLightbox() {
    // pop open a lightbox here and show some content
    // start with a house name
    document.getElementById('houseImages').style.right = "targetValue" + 'px';
    houseName.textContent = `House ${houseData[this.dataset.offset][0]}`;
    houseDescription.textContent = `${houseData[this.dataset.offset][1]}`;
    // debugger;
    //
    // //need to get the class name from the element so we can match the video source
    let targetName = this.className.split(" ")[1]; //this will strip out the house name
    let targetSource = targetName.charAt(0).toUpperCase() + targetName.slice(1);
    //let newImageSource = `images/${targetSource}.jpg`;
    let newVideoSource = `video/House-${targetSource}.mp4`;

    //
lightBox.classList.add("show-lightbox");
    //gotImage.src = newImageSource;

    //gotImage.display();
    //gotImage.play();

    gotVideo.src = newVideoSource;

    gotVideo.load();
    gotVideo.play();
  }
//Test Animation

//Test end
  function hideLightBox() {
    lightBox.classList.remove("show-lightbox");

    gotVideo.pause();
    gotVideo.currentTime = 0;
  }
  function animateBanners() {
    //animate the banners across the page using some basic math and css
    let offsetValue = 600;
    debugger;
    let targetValue = offsetValue * this.dataset.offset;

    // figure out how to make the banners 'slide' using this new value
  }
  function showLightbox() {
    return animateBanners() + lightBox.classList.add("show-lightbox");
  }
//gotImage.classList.add(showImage);
//currentImage = showImage;
//function notifyEnd() {
  //gotImage.textContent = currentImage;
//}
//ightBox.addEventListener("transitionend", notifyEnd);
  // add a click event to the sigilButtons -> this changes data and video source
//  sigilButtons.forEach(button => button.addEventListener("click", showLightbox));

   // add another click event to the sigilButtons -> -> this will animate the banners across the top of the page
  sigilButtons.forEach(button => button.addEventListener("click", showLightbox));
  // add an event handler for the lightbox close button
  closeLightBox.addEventListener("click", hideLightBox);

})();
