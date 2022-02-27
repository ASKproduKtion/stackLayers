// studioASK
var askDoc1 = app.documents.add(2160, 2160);
for(var counter = 1; counter < (300+1); counter++) {
  var askDoc2 = app.open(File("~/ASKproduKtion Dropbox/Andrew Klug/studioASK/images/" + counter + ".png"));
  askDoc2.artLayers["Layer 1"].copy();
  askDoc2.close();
  askDoc1.paste();
};
