(function(){var parameters=PluginManager.parameters("TitleCommandPosition");var offsetX=Number(parameters["Offset X"]||0);var offsetY=Number(parameters["Offset Y"]||0);var width=Number(parameters["Width"]||240);var background=Number(parameters["Background"]||0);var _Window_TitleCommand_updatePlacement=Window_TitleCommand.prototype.updatePlacement;Window_TitleCommand.prototype.updatePlacement=function(){_Window_TitleCommand_updatePlacement.call(this);this.x+=offsetX;this.y+=offsetY;this.setBackgroundType(background)};Window_TitleCommand.prototype.windowWidth=function(){return width}})();