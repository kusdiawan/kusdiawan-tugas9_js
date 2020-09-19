function panggilObject(){
	var dataMobil = {
		merk: "Toyota",
		model: "Kijang Inova",
		kategori: "MPV",
		warna : "Silver",
		tahunPembuatan: 2020,
		harga: 350000000
	}

	for(var x in dataMobil){
		console.log(dataMobil[x]);	
	}
}

panggilObject();
