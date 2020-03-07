$(document).ready(function(){
  $("#carouText1").text("Some bunch of news to be added here later.");
  $("#carouText2").text("Another bunch of stuff to be added here later.");
  $("#carouText3").text("Lastly, news goes in here.");

  // dynamic manipulation of news items on news page
  // first news item
  const div1= $("<div></div>").attr("id", "first").attr("class", "mb-1");
  const div1Child1= $("<div></div>").attr("class", "d-flex collapsed").attr("data-toggle",
    "collapse").attr("data-target", "#itsBody1").attr("aria-expanded", "false");
  const div1Img= $("<img/>").attr("src", "images/img_forest.jpg").attr("alt",
    "some image").attr("class", "newsImg img-fluid");
  const div1Header= $("<div></div>").attr("class", "h5").text("First news");
  const div1Body= $("<div></div>").attr("id", "itsBody1").attr("class",
    "collapse text-muted").text("something is something and something is also something, yeah? yeah.");
  // first news appends
  div1Child1.append(div1Img, div1Header);
  div1.append(div1Child1, div1Body);

  // second news item
  const div2= $("<div></div>").attr("id", "second").attr("class", "mb-1");
  const div2Child1= $("<div></div>").attr("class", "d-flex collapsed").attr("data-toggle",
    "collapse").attr("data-target", "#itsBody2").attr("aria-expanded", "false");
  const div2Img= $("<img/>").attr("src", "images/img_forest.jpg").attr("alt",
    "some image").attr("class", "newsImg img-fluid");
  const div2Header= $("<div></div>").attr("class", "h5").text("Second news");
  const div2Body= $("<div></div>").attr("id", "itsBody2").attr("class",
    "collapse text-muted").text("something is something and something is also something, yeah? yeah.");
  // second news appends
  div2Child1.append(div2Img, div2Header);
  div2.append(div2Child1, div2Body);

  // third news item
  const div3= $("<div></div>").attr("id", "third").attr("class", "mb-1");
  const div3Child1= $("<div></div>").attr("class", "d-flex collapsed").attr("data-toggle",
    "collapse").attr("data-target", "#itsBody3").attr("aria-expanded", "false");
  const div3Img= $("<img/>").attr("src", "images/img_forest.jpg").attr("alt",
    "some image").attr("class", "newsImg img-fluid");
  const div3Header= $("<div></div>").attr("class", "h5").text("Third news");
  const div3Body= $("<div></div>").attr("id", "itsBody3").attr("class",
    "collapse text-muted").text("something is something and something is also something, yeah? yeah.");
  // third news appends
  div3Child1.append(div3Img, div3Header);
  div3.append(div3Child1, div3Body);

  // fourth news item
  const div4= $("<div></div>").attr("id", "fourth").attr("class", "mb-1");
  const div4Child1= $("<div></div>").attr("class", "d-flex collapsed").attr("data-toggle",
    "collapse").attr("data-target", "#itsBody4").attr("aria-expanded", "false");
  const div4Img= $("<img/>").attr("src", "images/img_forest.jpg").attr("alt",
    "some image").attr("class", "newsImg img-fluid");
  const div4Header= $("<div></div>").attr("class", "h5").text("Fourth news");
  const div4Body= $("<div></div>").attr("id", "itsBody4").attr("class",
    "collapse text-muted").text("something is something and something is also something, yeah? yeah.");
  // fourth news appends
  div4Child1.append(div4Img, div4Header);
  div4.append(div4Child1, div4Body);  

  // fifth news item
  const div5= $("<div></div>").attr("id", "fifth").attr("class", "mb-1");
  const div5Child1= $("<div></div>").attr("class", "d-flex collapsed").attr("data-toggle",
    "collapse").attr("data-target", "#itsBody5").attr("aria-expanded", "false");
  const div5Img= $("<img/>").attr("src", "images/img_forest.jpg").attr("alt",
    "some image").attr("class", "newsImg img-fluid");
  const div5Header= $("<div></div>").attr("class", "h5").text("Fifth news");
  const div5Body= $("<div></div>").attr("id", "itsBody5").attr("class",
    "collapse text-muted").text("something is something and something is also something, yeah? yeah.");
  // fifth news appends
  div5Child1.append(div5Img, div5Header);
  div5.append(div5Child1, div5Body);

  // overall appends
  $("#newsContent").prepend(div5, div4, div3, div2, div1);
});