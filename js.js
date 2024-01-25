const presenters = process.argv.slice(2);

if (presenters.length < 2) {
    console.log("발표자는 2명 이상이어야 합니다.");
    process.exit(1);
}

const randomIndex = Math.floor(Math.random() * presenters.length);
const selectedPresenter = presenters[randomIndex];

console.log(`선택된 발표자: ${selectedPresenter}`);
