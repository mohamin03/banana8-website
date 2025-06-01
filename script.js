const staffData = [
  // ▼▼▼ ここからスタッフ情報を追加 ▼▼▼
 {
  name: "AREK",
  images: ["images/AREK.png"],
  height: "180cm",
  weight: "75kg",
  age: "28",
  sports: "10 years of soccer",
  hobby: "Weight training, traveling",
  intro: "He’s known for his warm, sincere personality and provides well-balanced, full-body care with attention to detail.",
  english: "Yes"
},
{
  name: "KEN",
  images: ["images/KEN.png"],
  height: "175cm",
  weight: "72kg",
  age: "30",
  sports: "8 years of rugby",
  hobby: "Cooking, driving",
  intro: "With an athletic build, he specializes in treatments that are both powerful and precise.",
  english: "Basic"
},
{
  name: "COMING SOON",
  images: [
    "images/NOIMAGE.png",
    "images/NOIMAGE.png",
    "images/NOIMAGE.png"
  ],
  height: "???",
  weight: "???",
  age: "???",
  sports: "???",
  hobby: "???",
  intro: "This staff profile is coming soon. Thank you for your patience.",
  english: "???"
},
{
  name: "COMING SOON",
  images: [
    "images/NOIMAGE.png",
    "images/NOIMAGE.png",
    "images/NOIMAGE.png"
  ],
  height: "???",
  weight: "???",
  age: "???",
  sports: "???",
  hobby: "???",
  intro: "This staff profile is coming soon. Thank you for your patience.",
  english: "???"
},
{
  name: "COMING SOON",
  images: [
    "images/NOIMAGE.png",
    "images/NOIMAGE.png",
    "images/NOIMAGE.png"
  ],
  height: "???",
  weight: "???",
  age: "???",
  sports: "???",
  hobby: "???",
  intro: "This staff profile is coming soon. Thank you for your patience.",
  english: "???"
}

  // ▲▲▲ ここまでにスタッフを追加 ▲▲▲
];

let currentStaff = 0;
let currentImage = 0;

function openModal(index) {
  document.body.style.overflow = 'hidden'; // モーダル開いたとき

  currentStaff = index;
  currentImage = 0;

  const modal = document.getElementById("staffModal");
  const data = staffData[index];

  // 元の配列を壊さないようにコピー
  const images = [...data.images];
  while (images.length < 3) {
    images.push("images/NOIMAGE.png");
  }

  // 表示更新
  document.getElementById("modalImage").src = images[currentImage];
  document.getElementById("modalName").textContent = data.name;
  document.getElementById("height").textContent = data.height;
  document.getElementById("weight").textContent = data.weight;
  document.getElementById("age").textContent = data.age;
  document.getElementById("sports").textContent = data.sports;
  document.getElementById("hobby").textContent = data.hobby;
　document.getElementById("english").textContent = data.english;
  document.getElementById("intro").textContent = data.intro;

  // 一時保存して使いまわす
  openModal.images = images;

  const reserveLink = document.getElementById("reserveButton");
// scrollTo=contact を追加したバージョン（予約フォームまでスクロールさせる）
reserveLink.href = `index.html?staff=${encodeURIComponent(data.name)}&scrollTo=contact`;


  modal.style.display = "flex";
}

function closeModal() {
  document.body.style.overflow = ''; // 閉じたら元に戻す
  document.getElementById("staffModal").style.display = "none";
}

function prevImage() {
  const images = openModal.images;
  currentImage = (currentImage - 1 + images.length) % images.length;
  document.getElementById("modalImage").src = images[currentImage];
}

function nextImage() {
  const images = openModal.images;
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("modalImage").src = images[currentImage];
}
