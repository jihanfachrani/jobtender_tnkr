async function loadTender(){

const response = await fetch("data/tender.json")
const data = await response.json()

/* =========================
   INFORMASI TENDER
========================= */

document.getElementById("judulTender").innerText = data.informasi_tender.judul
document.getElementById("periodeTender").innerText = data.informasi_tender.periode

/* =========================
   TAMPILKAN JABATAN
========================= */

const jabatanTable = document.getElementById("jabatanTable")

// data.peserta.sort((a, b) => a.jabatan_sasaran.localeCompare(b.jabatan_sasaran))

data.peserta.forEach(p => {

  jabatanTable.innerHTML += `
  <tr>
    <td>${p.nik}</td>
    <td>${p.nama}</td>
    <td>${p.jabatan_sasaran}</td>
    <td>${p.level_sasaran}</td>
  </tr>
  `

})

}

loadTender()


