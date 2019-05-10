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
        game.load.image('bg', 'assets/images/bg.jpg');
        game.load.spritesheet('dog', 'assets/images/dog_run.png', 250, 180);
    }

    var dog;
    var upKey;
    var downKey;
    var leftKey;
    var rightKey;
    var speed = 7;
    var bg;

    function create() {

        bg = game.add.image(0, 0, 'bg');
        bg.scale.setTo(2.0,2.0);
        bg.anchor.x = 0;
        bg.anchor.y = 0;
        // Create a sprite at the center of the screen using the 'dog' image.
        dog = game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'dog');

        dog.animations.add('walk');
        dog.animations.play('walk', 10, true);

        //dog, centered
        dog.anchor.setTo(0.5, 0.5);

        //keyboard-input to move dog
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);


        //physics-enabled
        game.physics.enable(dog, Phaser.Physics.ARCADE);
    }

    function update() {
        //dog-movement
        if (upKey.isDown) {
            dog.y -= speed;
        } else if (downKey.isDown) {
            dog.y += speed;
        }

        if (leftKey.isDown) {
            dog.x -= speed;
        } else if (rightKey.isDown) {
            dog.x += speed;
        }
    }
};
