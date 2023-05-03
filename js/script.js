// ok take two, i refreshed without saving and lost it all. rip.

var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var results = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

//ok i did a better job, corrected a mistake i didnt notice, and copied out to vs code!

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  console.log(subType);
});