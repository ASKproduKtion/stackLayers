// studioASK
const numFrames = 600;
var askDoc1 = app.documents.add(2160, 2160);
for(var counter = 0; counter < numFrames; counter++) {
  var fileRef = File("~/ASKproduKtion Dropbox/Andrew Klug/studioASK/images/" + (counter+1) + ".png")
  var askDoc2 = app.open(fileRef);
  askDoc2.artLayers["Layer 1"].copy();
  askDoc2.close();
  askDoc1.paste();
};