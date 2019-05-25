"use strict";

window.onload = function () {
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".

    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game', {
        preload: preload,
        create: create,
        update: update
    });

    function preload() {
        // Load an image and call it 'logo'.
        game.load.spritesheet('background', 'assets/images/background.png', 1200, 894);
        game.load.spritesheet('dog', 'assets/images/dog_run.png', 250, 180);
    }

    var dog;
    // var upKey;
    var leftKey;
    var rightKey;
    var speed = 7;
    var background;

    function create() {

        background = game.add.sprite(0, 0, 'background');
        background.width = game.width;
        background.height = game.height;
        // Create a sprite at the center of the screen using the 'dog' image.
        dog = game.add.sprite(200, window.innerHeight - 250, 'dog');
        
        dog.animations.add('walk');
        background.animations.add('static');
        
        dog.animations.play('walk', 10, true);
        background.animations.play('static', 8, true);

        //background set to align to top of window
        background.anchor.setTo(0, .2);
        //dog, centered
        dog.anchor.setTo(0.5, 0.5);

        //keyboard-input to move dog
        // upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);


        //physics-enabled
        game.physics.enable(dog, Phaser.Physics.ARCADE);
    }

    function update() {
        //dog-movement
        // if (upKey.isDown) {
        //     dog.y -= speed;
        // }
        if (leftKey.isDown) {
            dog.x -= speed;
        } else if (rightKey.isDown) {
            dog.x += speed;
        }
    }
};
