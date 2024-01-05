// https://ASKproduKtion.com
// Copyright (c) 2023 >> Andrew S Klug // ASKproduKtion
// Licensed under the Apache License, Version 2.0 (the "License"); this file may not be used except in compliance with the License, a copy of which is available at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

const numFrames = 48;
var askDoc1 = app.documents.add(2160, 2160);
for(var counter = 0; counter < numFrames; counter++) {
  var fileRef = File("~/ASKproduKtion Dropbox/Andrew Klug/scripting ops/_images/" + (counter+1) + ".png")
  var askDoc2 = app.open(fileRef);
  askDoc2.artLayers["Layer 1"].copy();
  askDoc2.close();
  askDoc1.paste();
};
