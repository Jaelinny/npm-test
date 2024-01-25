class Random {
  constructor(argv) {
    this.argv = argv;
    this.length = argv.length;
  }
}

class RandomPrint extends Random {
  constructor(argv) {
    super(argv);
  }

  print() {
    const list = this.argv.slice(2);

    if (list.length < 2) {
      console.log("발표자는 2명 이상이어야 합니다.");
      process.exit(1);
    } else {
      const randomIndex = Math.floor(Math.random() * list.length);
      const selectedPresenter = list[randomIndex];
      console.log(`발표자: ${selectedPresenter}`);
    }
  }
}

const argv = process.argv;

const listInstance = new RandomPrint(argv);
listInstance.print();



//const presenters = process.argv.slice(2);

//if (presenters.length < 2) {
//    console.log("발표자는 2명 이상이어야 합니다.");
//    process.exit(1);
//}

//const randomIndex = Math.floor(Math.random() * presenters.length);
//const selectedPresenter = presenters[randomIndex];
//console.log(`발표자: ${selectedPresenter}`);
