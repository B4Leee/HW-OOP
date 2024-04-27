class PendaftarPage {
  constructor() {
    this.table = document.getElementById("pendaftarTable");
    this.resume = document.getElementById("resume");
  }

  // Menampilkan data PENDAFTAR dari Local Storage ke dalam tabel
  tampilkanData() {
    const data = JSON.parse(localStorage.getItem("pendaftar"));
    if (data) {
      const { nama, umur, uangSangu } = data;
      const newRow = this.table.insertRow();
      newRow.innerHTML = `<td>${nama}</td><td>${umur}</td><td>${uangSangu}</td>`;
    }
  }

  // Menghitung rata-rata umur dan uang saku pendaftar
  hitungRataRata() {
    const data = JSON.parse(localStorage.getItem("pendaftar")); //Mengambil data dari Local Storage
    if (data) {
      const { umur, uangSangu } = data;
      let totalUmur = umur;
      let totalUangSangu = uangSangu;
      let jumlahPendaftar = 1;

      const rataRataUmur = totalUmur / jumlahPendaftar;
      const rataRataUangSangu = totalUangSangu / jumlahPendaftar;

      this.resume.innerHTML = `Rata-rata pendaftar memiliki uang sangu sebesar ${rataRataUangSangu} dan rata-rata umur ${rataRataUmur}`;
    }
  }

  init() {
    this.tampilkanData();
    this.hitungRataRata();
  }
}

const pendaftarPage = new PendaftarPage();
pendaftarPage.init();
