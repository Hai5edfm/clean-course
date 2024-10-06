
interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}


class Tucan implements Bird, FlyingBird {
  fly() {
    console.log('Tucan is flying');
  }

  eat() {
    console.log('Tucan is eat');
  }
}

class Hummingbird implements Bird, FlyingBird {
  fly() {
    console.log('Hummingbird is flying');
  }

  eat() {
    console.log('Hummingbird is eat');
  }
}


class Ostrich implements Bird, RunningBird {
  eat() {
    console.log('Ostrich is eat');
  }

  run() {
    console.log('Ostrich is running');
  }
}

class Penguin implements Bird, SwimmerBird {
  eat() {
    console.log('Penguin is eat');
  }

  swim() {
    console.log('Penguin is swimming');
  }
}


