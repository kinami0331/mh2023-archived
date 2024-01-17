var Imported=Imported||{};Imported.YEP_MainMenuManager=true;var Yanfly=Yanfly||{};Yanfly.MMM=Yanfly.MMM||{};Yanfly.Parameters=PluginManager.parameters("YEP_MainMenuManager");Yanfly.Param=Yanfly.Param||{};Yanfly.Param.MMMCmdAlign=String(Yanfly.Parameters["Command Alignment"]);Yanfly.Param.MMMCmdPosition=String(Yanfly.Parameters["Command Position"]);Yanfly.Param.MMMCmdCols=String(Yanfly.Parameters["Command Columns"]);Yanfly.Param.MMMCmdRows=String(Yanfly.Parameters["Command Rows"]);Yanfly.Param.MMMCmdWidth=String(Yanfly.Parameters["Command Width"]);Yanfly.Param.MMMHideActorWin=String(Yanfly.Parameters["Hide Actor Window"]);Yanfly.Param.MMMHideGoldWin=String(Yanfly.Parameters["Hide Gold Window"]);Yanfly.Param.MMMBlurryBG=String(Yanfly.Parameters["Blurry Background"]);Yanfly.MMM.Name={};Yanfly.MMM.Symbol={};Yanfly.MMM.Show={};Yanfly.MMM.Enabled={};Yanfly.MMM.Ext={};Yanfly.MMM.MainBind={};Yanfly.MMM.ActorBind={};for(Yanfly.i=1;Yanfly.i<=100;++Yanfly.i){Yanfly.line="String(Yanfly.Parameters['Menu "+Yanfly.i+" Name'])";Yanfly.MMM.Name[Yanfly.i]=eval(Yanfly.line);Yanfly.line="String(Yanfly.Parameters['Menu "+Yanfly.i+" Symbol'])";Yanfly.MMM.Symbol[Yanfly.i]=eval(Yanfly.line);Yanfly.line="String(Yanfly.Parameters['Menu "+Yanfly.i+" Show'])";Yanfly.MMM.Show[Yanfly.i]=eval(Yanfly.line);Yanfly.line="String(Yanfly.Parameters['Menu "+Yanfly.i+" Enabled'])";Yanfly.MMM.Enabled[Yanfly.i]=eval(Yanfly.line);Yanfly.line="String(Yanfly.Parameters['Menu "+Yanfly.i+" Ext'])";Yanfly.MMM.Ext[Yanfly.i]=eval(Yanfly.line);Yanfly.line="String(Yanfly.Parameters['Menu "+Yanfly.i+" Main Bind'])";Yanfly.MMM.MainBind[Yanfly.i]=eval(Yanfly.line);Yanfly.line="String(Yanfly.Parameters['Menu "+Yanfly.i+" Actor Bind'])";Yanfly.MMM.ActorBind[Yanfly.i]=eval(Yanfly.line)}Yanfly.MMM.SceneManager_snapForBackground=SceneManager.snapForBackground;SceneManager.snapForBackground=function(){if(eval(Yanfly.Param.MMMBlurryBG)){Yanfly.MMM.SceneManager_snapForBackground.call(this)}else{this._backgroundBitmap=this.snap()}};Window_MenuCommand.prototype.makeCommandList=function(){for(var i=1;i<=100;++i){this.createCommand(i)}};Window_MenuCommand.prototype.addMainCommands=function(){};Window_MenuCommand.prototype.addFormationCommand=function(){};Window_MenuCommand.prototype.addOriginalCommands=function(){};Window_MenuCommand.prototype.addOptionsCommand=function(){};Window_MenuCommand.prototype.addSaveCommand=function(){};Window_MenuCommand.prototype.addGameEndCommand=function(){};Window_MenuCommand.prototype.createCommand=function(i){var show=Yanfly.MMM.Show[i];if(show==="")return;if(!eval(show))return;var name=Yanfly.MMM.Name[i];if(name==="")return;name=eval(name);var symbol=Yanfly.MMM.Symbol[i];if(symbol==="")return;var enabled=eval(Yanfly.MMM.Enabled[i]);if(enabled==="")enabled=true;var ext=eval(Yanfly.MMM.Ext[i]);this.addCommand(name,symbol,enabled,ext);this.addSymbolBridge(symbol)};Window_MenuCommand.prototype.addSymbolBridge=function(symbol){if(symbol==="item")this.addMainCommands();if(symbol==="formation")this.addFormationCommand();if(symbol==="formation")this.addOriginalCommands();if(symbol==="options")this.addOptionsCommand();if(symbol==="save")this.addSaveCommand();if(symbol==="gameEnd")this.addGameEndCommand()};Window_MenuCommand.prototype.itemTextAlign=function(){return Yanfly.Param.MMMCmdAlign};Window_MenuCommand.prototype.windowWidth=function(){return eval(Yanfly.Param.MMMCmdWidth)};Window_MenuCommand.prototype.maxCols=function(){return eval(Yanfly.Param.MMMCmdCols)};Window_MenuCommand.prototype.numVisibleRows=function(){return eval(Yanfly.Param.MMMCmdRows)};Yanfly.MMM.Window_MenuStatus_initialize=Window_MenuStatus.prototype.initialize;Window_MenuStatus.prototype.initialize=function(wx,wy){this._initX=wx;Yanfly.MMM.Window_MenuStatus_initialize.call(this,wx,wy)};Window_MenuStatus.prototype.windowWidth=function(){return Graphics.boxWidth-this._initX};Yanfly.MMM.Scene_Menu_create=Scene_Menu.prototype.create;Scene_Menu.prototype.create=function(){Yanfly.MMM.Scene_Menu_create.call(this);this.repositionWindows()};Scene_Menu.prototype.createCommandWindow=function(){this._commandWindow=new Window_MenuCommand(0,0);this.createCommandWindowBinds();this._commandWindow.setHandler("cancel",this.popScene.bind(this));this.addWindow(this._commandWindow)};Yanfly.MMM.Scene_Menu_createGoldWindow=Scene_Menu.prototype.createGoldWindow;Scene_Menu.prototype.createGoldWindow=function(){Yanfly.MMM.Scene_Menu_createGoldWindow.call(this);if(eval(Yanfly.Param.MMMHideGoldWin))this._goldWindow.hide()};Yanfly.MMM.Scene_Menu_createStatusWindow=Scene_Menu.prototype.createStatusWindow;Scene_Menu.prototype.createStatusWindow=function(){Yanfly.MMM.Scene_Menu_createStatusWindow.call(this);if(eval(Yanfly.Param.MMMHideActorWin))this._statusWindow.hide()};Scene_Menu.prototype.createCommandWindowBinds=function(){this._actorBinds={};for(var i=1;i<=100;++i){var symbol=Yanfly.MMM.Symbol[i];if(symbol==="")continue;var bind=Yanfly.MMM.MainBind[i];if(bind==="")continue;eval("this._commandWindow.setHandler('"+symbol+"', "+bind+")");var actorBind=Yanfly.MMM.ActorBind[i];if(actorBind==="")continue;this._actorBinds[symbol]=actorBind}};Scene_Menu.prototype.resizeGoldWindow=function(){this._goldWindow.width=this._commandWindow.width;this._goldWindow.createContents();this._goldWindow.refresh()};Scene_Menu.prototype.repositionWindows=function(){this.resizeGoldWindow();if(Yanfly.Param.MMMCmdPosition==="right"){this._commandWindow.x=Graphics.boxWidth-this._commandWindow.width;this._goldWindow.x=Graphics.boxWidth-this._goldWindow.width;this._statusWindow.x=0}else if(Yanfly.Param.MMMCmdPosition==="left"){this._commandWindow.x=0;this._goldWindow.x=0;this._statusWindow.x=this._commandWindow.width}};Yanfly.MMM.Scene_Menu_commandPersonal=Scene_Menu.prototype.commandPersonal;Scene_Menu.prototype.commandPersonal=function(){Yanfly.MMM.Scene_Menu_commandPersonal.call(this);this._statusWindow.show()};Scene_Menu.prototype.onPersonalOk=function(){var symbol=this._commandWindow.currentSymbol();var actorBind=this._actorBinds[symbol];if(!actorBind)return;eval(actorBind)};Yanfly.MMM.Scene_Menu_onPersonalCancel=Scene_Menu.prototype.onPersonalCancel;Scene_Menu.prototype.onPersonalCancel=function(){Yanfly.MMM.Scene_Menu_onPersonalCancel.call(this);if(eval(Yanfly.Param.MMMHideActorWin))this._statusWindow.hide()};Scene_Menu.prototype.callCommonEvent=function(){var ext=this._commandWindow.currentExt();$gameTemp.reserveCommonEvent(parseInt(ext));this.popScene()};Scene_Menu.prototype.commandDebug=function(){SceneManager.push(Scene_Debug)};