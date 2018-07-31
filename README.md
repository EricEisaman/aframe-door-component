A-Frame Door Component
=========================

**API**

|Property|Type|Description|Default Value| 
|---|---|---|---|
|type|string|animation type: translate/rotate|translate|
|openPos|string|open position (for translate type)|0  3  0|
|closePos|string|closed position (for translate type)|0  1  0|
|openRot|string|open rotation (for rotate type)|0  90  0|
|closeRot|string|closed rotation (for rotate type)|0  0  0|
|startsOpen|boolean|whether door is initially open|false|
|trigger|string|how door is opened/closed (keyboard/voice/proximity)|keyboard|
|threshold|int|minimum player distance to open/close|6|
|openCommand|string|voice command to open (for voice trigger)|open|
|closeCommand|string|voice command to close (for voice trigger)|close|
|openKeyCode|int|keyCode to open (for keyboard trigger)|32|
|closeKeyCode|int|keyCode to close (for keyboard trigger)|32|
|dur|int|milliseconds to animate|800|
|player|selector|id of player/camera component|#player|

___

**Important Notes**

**Note:**

Voice triggering:

- requires <a href="https://www.google.com/chrome/browser/desktop/index.html" rel="noopener noreferrer">Chrome</a> or <a href="https://www.chromium.org/getting-involved/download-chromium" rel="noopener noreferrer">Chromium</a> browser.

- requires use of <a href="https://www.npmjs.com/package/aframe-speech-command-component" rel="noopener noreferrer">aframe-speech-command-component</a> and web speech recognition library such as <a href="https://github.com/TalAter/annyang" rel="noopener noreferrer">annyang</a>.  
- include the following in your html head:
```
<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.5.0/annyang.min.js"></script>
<script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
<script src="//cdn.rawgit.com/lmalave/aframe-speech-command-component/master/examples/build.js"></script>
<script src="aframe-door-component.js"></script>

```
Otherwise, if you don't require voice triggering, all you need in your html head is:
```
<script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
<script src="aframe-door-component.js"></script>
```
**Note:** My examples also use <a href="https://github.com/donmccurdy/aframe-extras" rel="noopener noreferrer">aframe-extras</a> and <a href="https://feiss.github.io/aframe-environment-component/" rel="noopener noreferrer">aframe-environment</a> components:
```
<script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
<script src="https://cdn.rawgit.com/feiss/aframe-environment-component/ad57b15d/dist/aframe-environment-component.min.js"></script>
<script src="//cdn.rawgit.com/donmccurdy/aframe-extras/v3.12.4/dist/aframe-extras.min.js"></script>
<script src="aframe-door-component.js"></script>
```
**Note:** For rotating doors, it is left up to you to use element parenting with a proper position offset so your door rotates along the expected axis.

**Note:** Being within line of sight (LOS) of the player camera may be a useful and meaningful constraint beyond or in lieu of proximity. If you would like me to add an LOS constraint, let me know at <a href="https://twitter.com/@SirFizX_ELHS" rel="noopener noreferrer">@SirFizX_ELHS</a>.
____
EXAMPLES
========
____
**Keep in mind that the player must be within the threshold to open the door.**
- <a href="https://aframe-door-component.glitch.me/keyboard-control-door" rel="noopener noreferrer">Keyboard Control Door (SPACE KEY)</a>
- <a href="https://aframe-door-component.glitch.me/proximity-control-door" rel="noopener noreferrer">Proximity Control Door</a>
- <a href="https://elhs.glitch.me/" rel="noopener noreferrer">Proximity Control Door Used in IoT Flow Demo</a>

  -Tweet with **#elhsgamedev**
  
  -**To change sign :**    include the word sign
  
  -**To change sky color :**  include the word sky and either blue , gray , or orange
  
  -**To change the music :** include the word music and either DJ , birds , magical , EDM , or Solstice Coil 
- <a href="https://aframe-door-component.glitch.me/voice-control-door" rel="noopener noreferrer">Voice Control Door (Say "Open" and "Close")</a>
- <a href="https://aframe-door-component.glitch.me/map" rel="noopener noreferrer">Game Map Example</a>
  - Open with answers. Close with "Close front door" and "Close elevator door. Press "R" to Reset.
<img src="https://cdn.glitch.com/46a82737-5997-41dc-96e6-2074eba7fa69%2FGameMapFrontDoor.png?1511176262655" />
