var _miao_pluginCommand=Game_Interpreter.prototype.pluginCommand;Game_Interpreter.prototype.pluginCommand=function(command,args){_miao_pluginCommand.call(this,command,args);if(command==="miao"){$gameVariables.setValue(220,"发生了未知的错误！");API_URL="";var inputId=parseInt(args[0]);var outputId=parseInt(args[1]);var puzzleId=parseInt(args[2]);var content=$gameVariables.value(inputId);$gameVariables.setValue(outputId,"T");window.waitingForAnswerCheck=true;new Promise((resolve=>{fetch(API_URL+"/service/wish/special/mota_check",{method:"POST",credentials:"include",headers:{"X-Wish-Version":"wish.sp.2023.v1","Content-Type":"application/json"},body:JSON.stringify({puzzle_id:puzzleId,content:content})}).then((res=>{if(res.status!==200)return{status:"error",title:"HTTP_ERROR",message:`HTTP 错误 ${res.status}，请稍后重试`};else return res.json()})).then((json=>{resolve(json)})).catch((e=>{resolve({status:"error",title:"HTTP_REQ_FAILED",message:`网络错误 ${e}，请稍后重试`})}))})).then((res=>{if(res.status!=="error"){$gameVariables.setValue(inputId,res.data);if(res.data==="F")$gameVariables.setValue(220,"密码错误！请60秒后重试。")}else{$gameVariables.setValue(220,res.message);$gameVariables.setValue(inputId,"F")}})).then((()=>{window.waitingForAnswerCheck=false}))}};Game_Interpreter.prototype.command700=function(){if(window.waitingForAnswerCheck){return false}console.log("answer check done!");return true};Game_Interpreter.prototype.command701=function(){if(!$gameMessage.isBusy()){$gameMessage.add($gameVariables.value(parseInt(this.currentCommand().parameters[0])));this._index++;this.setWaitMode("message");return true}return false};