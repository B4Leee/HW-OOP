class RegistrasiForm {
  constructor() {
    this.form = document.getElementById("regisForm");
  }

  validasi() {
    const nama = document.getElementById("nama").value;
    const umur = parseInt(document.getElementById("umur").value);
    const uangSangu = parseInt(document.getElementById("uangSangu").value);

    // Mengecek kriteria
    if (nama.length <= 10) {
      alert("Nama minimal 10 karakter.");
      return false;
    }

    if (umur < 25) {
      alert("Umur minimal 25 tahun.");
      return false;
    }

    if (uangSangu < 100000 || uangSangu > 1000000) {
      alert("Uang sangu minimal 100 ribu dan maksimal 1 juta.");
      return false;
    }

    // Kriteria terpenuhi
    return true;
  }

  // Menyimpan data PENDAFTAR kedalam Local Storage
  simpanData() {
    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const uangSangu = document.getElementById("uangSangu").value;

    const data = { nama, umur, uangSangu };
    localStorage.setItem("pendaftar", JSON.stringify(data));
  }

  init() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault(); // Mencegah form dikirim secara default

      if (this.validasi()) {
        this.simpanData();
        window.location.href = "pendaftar.html";
      }
    });
  }
}

const regisForm = new RegistrasiForm();
regisForm.init();
