define(function () {

  return {
    Dude: {
      img: 'dude',
      width: 20,
      height: 20,
      imageOffset: {
        x: 0,
        y: 0
      },
      center: {
        x: 10,
        y: 11
      },
      collidableOffset: {
        x: 5,
        y: 8
      },
      z: 100
    },
    Zombie: {
      img: 'zombie',
      width: 20,
      height: 20,
      imageOffset: {
        x: 0,
        y: 0
      },
      center: {
        x: 10,
        y: 11
      },
      collidableOffset: {
        x: 5,
        y: 8
      },
      z: 90
    },
    Honda: {
      img: 'car1',
      width: 24,
      height: 40,
      imageOffset: {
        x: 0,
        y: 0
      },
      center: {
        x: 12,
        y: 20
      },
      z: 80
    },
    Barrel: {
      img: 'objects',
      width: 16,
      height: 16,
      imageOffset: {
        x: 60,
        y: 0
      },
      center: {
        x: 8,
        y: 8
      },
      z: 50
    },
    GasPump1: {
      img: 'objects',
      width: 28,
      height: 16,
      imageOffset: {
        x: 0,
        y: 0
      },
      center: {
        x: 18,
        y: 5
      },
      collidableOffset: {
        x: 10.5,
        y: 5
      },
      z: 40
    },
    GasPump2: {
      img: 'objects',
      width: 32,
      height: 17,
      imageOffset: {
        x: 28,
        y: 0
      },
      center: {
        x: 11,
        y: 9
      },
      collidableOffset: {
        x: 10.5,
        y: 5
      },
      z: 40
    }
  };

});