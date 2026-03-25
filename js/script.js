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

// data.jabatan.forEach((j, index) => {

// jabatanTable.innerHTML += `
// <tr>
// <td>${index + 1}</td> 
// <td>${j.nik}</td>
// <td>${j.nama}</td>
// <td>${j.jabatan}</td>
// <td>${j.level_sasaran}</td>
// </tr>
// `

// })

data.peserta.forEach((j, index) => {

jabatanTable.innerHTML += `
<tr>
<td>${index + 1}</td> 
<td>${j.nik}</td>
<td>${j.nama}</td>
<td>${j.jabatan_sasaran}</td>
<td>${j.level_sasaran}</td>
<td>${j.lokasi}</td>
</tr>
`

})

}

loadTender()


