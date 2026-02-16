//DebugSys v1.26.8a
//Credits: mMeneske
//Requirements: ScatchGame v1.26.8a

class debugGroup {

    enableLightWarnings;
    enableHardWarnings;
    enableLightErrors;
    enable;

    constructor(everything = false, lightWarn = everything, hardWarn = everything, lightError = everything) {
            this.enable = everything;

            this.enableLightWarnings = lightWarn;
            this.enableHardWarnings = hardWarn;
            this.enableLightErrors = lightError;

    }

    log(){
        if(this.enable){
            let output = arguments[0];
            for(let i = 1; i < arguments.length; ++i){
                output += " " + arguments[i];
            }
        console.log(output);
        }
    }

    lightWarn(){
        if(this.enableLightWarnings){
            let output = arguments[0];
            for(let i = 1; i < arguments.length; ++i){
                output += " " + arguments[i];
            }
        console.warn(output);
        }
    }

    hardWarn(){
        if(this.enableHardWarnings){
            let output = arguments[0];
                for(let i = 1; i < arguments.length; ++i){
                    output += " " + arguments[i];
                }
            console.warn(output);
        }
    }

    lightError(){
        if(this.enableLightErrors){
            let output = arguments[0];
            for(let i = 1; i < arguments.length; ++i){
                output += " " + arguments[i];
            }
        console.error(output);
        }
    }

    hardError(){
        let output = arguments[0];
            for(let i = 1; i < arguments.length; ++i){
                output += " " + arguments[i];
            }
        console.error("Fatal: " + output);

        console.error(Crashed);
    }
}

function initDebug(everything, lightWarn, hardWarn, lightError){
    return new debugGroup(everything, lightWarn, hardWarn, lightError);
}