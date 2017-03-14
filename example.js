function create() {
   game.physics.startSystem(Phaser.Physics.ARCADE);
       game.add.sprite(0, 0, 'background');    //Vehicles group hold all cars
        vehicles = game.add.group();
          var policecar = vehicles.create(700, streetHeight, 'policecar');
           vehicles.setAll('anchor.x', 0);
              vehicles.setAll('anchor.y', 1);
               game.physics.arcade.enable(policecar);
                   policecar.animations.add('run');
                   policecar.animations.play('run', 15, true);
                  policecar.inputEnabled = true;
                  policecar.events.onInputDown.add(ItemClicked, this);
                 game.physics.arcade.moveToXY(reddot, 100, streetHeight);}
                 function ItemClicked (sprite) {
                       //gets the sprite of the item clicked    counter++;    console.log(counter);
                          sprite.body.acceleration.x = -1000; }
