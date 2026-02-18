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

Debug Groups are gropus that can you can enable they will only write debug info when enabled.

```js
function create(){
    // testDebug(log, lightWarn, hardWarn, lightError) is the function for creating a new debug
    // group none of the argumets are actually required but they are recomended. 
    testDebug = initDebug();
}

function update(){
    // You can always change the initial arguments for initDebug, you can use true and false, 
    // or 0 and 1.
    testDebug.enableLog = true;
    testDebug.enableLightWarn = true;
    testDebug.enableHardWarn = true;
    testDebug.enableLightError = true;

    // testDebug.log() works just as console.log() with the only exeption that it will only work
    // if testDebug.enableLog == true.
    testDebug.log();
    // testDebug.lightWarn() is a warning that is not that important, it can be enabled via 
    // testDebug.enableLightWarn.
    testDebug.lightWarn();
    // testDebug.hardWarn() is a warning that is importaint and is close to causing a bug, it can
    // be enabled via testDebug.enableHardWarn.
    testDebug.hardWarn();
    // testDebug.lightError() is an error that won't crash the project, it can be enabled via
    // testDebug.enableLightError.
    testDebug.lightError();
    // testDebug.hardError() is an error that is catastrofical it is only meant to be used right
    // before a crash, since it will itslf crash the project. It can not be disabled.
}
```