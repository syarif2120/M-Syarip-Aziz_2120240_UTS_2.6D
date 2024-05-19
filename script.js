function tambahBilangan() {
    // Mendapatkan nilai dari input
    const bilangan1 = parseInt(document.getElementById('bilangan1').value);
    const bilangan2 = parseInt(document.getElementById('bilangan2').value);

    // Memastikan input adalah bilangan bulat
    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        document.getElementById('hasil').textContent = 'Masukkan kedua bilangan bulat!';
        return;
    }

    // Menghitung hasil penjumlahan
    const hasil = bilangan1 + bilangan2;

    // Menampilkan hasil penjumlahan
    document.getElementById('hasil').textContent = `Hasil penjumlahan dari ${bilangan1} dan ${bilangan2} adalah ${hasil}`;
}
