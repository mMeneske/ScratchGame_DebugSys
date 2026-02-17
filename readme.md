# DebugSys v1.26.8a for ScratchGame v1.26.8a
## An expantion for ScratchGame

## Prior knowledge

Before you can use this libary you need to learn ScratchGame. You can read about ScratchGame on github:
https://github.com/Mperv/scratch-game/blob/main/readme.en.md

## Downloading Libaries

You can download Phaser 3 from:
https://phaser.io/download/phaser3

You can download ScratchGame from:
https://github.com/Mperv/scratch-game

## Starting Server

To run any game you need to run it on a server.

For Python you can use:
```bash
python -m http.server 8080
```

For NodeJS you can use:
```bash
npx http-server . -p 8080
```

## Connecting Libaries

First you will need to connnect Phaser, ScratchGame and DebugSyss.

```html
<head>
    <script src="lib/phaser.min.js"></script>
    <script src="lib/ScratchGame.js"></script>
    <script src="lib/DebugSys.js"></script>
</head>
```

## Debug Groups

Debug Groups are gropus that can you can toggle they will only write debug info when toggled.

```js
function create(){
    //testDebug(everything, lightWarn, hardWarn, lightError) is the function for creating a new debug group none of the argumets are actually required but they are recomended. 
    testDebug = initDebug();
}

function update(){
    //You can always change the initial arguments for initDebug.
    testDebug.everything = true;
    testDebug.lightWarn = true;
    testDebug.hardWarn = true;
    testDebug.lightError = true;

    //testDebug.log() works just as console.log() with the only exeption that it will only work if testDebug.everything == true.
    testDebug.log();
    //testDebug.lightWarn() is a warning that is not that important it 
}
```