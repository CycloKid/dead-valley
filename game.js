define(['assetmanager', 'controls'], function (AssetManager, controls) {
  var canvas = $("#canvas");

  return {
    assetManager:  new AssetManager(),
    controls:      controls,
    gridSize:      60,
    canvasWidth:   canvas.width(),
    canvasHeight:  canvas.height(),
    spriteContext: canvas[0].getContext("2d"),
    currentLevel:  null,
    sprites:       [],
    runLevel: function (delta) {
      if (this.currentLevel) this.currentLevel.run(delta);
    },
    runSprites: function (delta) {
      for (i = 0; i < this.sprites.length; i++) {

        this.sprites[i].run(delta);

        if (this.sprites[i].reap) {
          this.sprites[i].reap = false;
          this.sprites.splice(i, 1);
          i--;
        }
      }
    }
  };

  return game;
});