function updateResult(){
   let weightValue = document.querySelector('#input-bb').value;
   let HeightValue = document.querySelector('#input-tb').value;
   const ketBmi = document.getElementById('ket-bmi');
   const penjBmi = document.getElementById('penjelasan-bmi');
   const articleResult = document.getElementById('article-result');
   const penjelasanArticle = document.getElementById('penjelasan-article');
   const sectResult = document.getElementById('section-result');
   const genInformation = document.getElementById('general-information');
   
   console.log(parseInt(weightValue));
   let heightM = HeightValue / 100;
   let bmi = weightValue / (heightM ** 2);
   console.log(bmi.toFixed(2))
   document.querySelector('#bmi-result').innerHTML = bmi.toFixed(2);
   
   if(bmi < 18.5){
    ketBmi.innerHTML = 'Kekurangan Berat Badan'
    penjBmi.innerHTML = 'Anda Memiliki Kekurangan Berat Badan'
    articleResult = 'Hasil BMI dibawah 18.5'
    penjelasanArticle = 'Anda berada dalam kategori Underweight'
    sectResult = 'Cara terbaik untuk menaikan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.'
    genInformation = 'Jika BMI Anda berada di kategori ini maka Anda dianjurkan untuk menaikan berat badan hingga batas normal'
   } else if (bmi >= 18.5 && bmi <= 24.9){
    ketBmi.innerHTML = 'Normal (Ideal) '
    penjBmi.innerHTML = 'Anda Memiliki Berat Badan Normal'
    articleResult = 'Hasil BMI diantara 18.5 dan 24.9'
    penjelasanArticle = 'Anda berada dalam kategori ideal'
    sectResult = 'Cara terbaik untuk menjaga berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.'
    genInformation = 'Jika BMI Anda berada di kategori ini maka Anda berada dalam kategori normal, pastikan Anda menjaga pola makan.'
   } else if (bmi >= 25.0 && bmi <= 29.9){
    ketBmi.innerHTML = 'Kelebihan Berat Badan'
    penjBmi.innerHTML = 'Anda Memiliki Kelebihan Berat Badan'
    articleResult = 'Hasil BMI diantara 25.0 dan 29.9'
    penjelasanArticle = 'nda berada dalam kategori Kelebihan Berat Badan'
    sectResult = 'Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.'
    genInformation = 'Jika BMI Anda berada di kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal'
   } else if (bmi >= 30.0){
    ketBmi.innerHTML = 'Kegemukan (Obesitas)'
    penjBmi.innerHTML = 'Anda Memiliki Obesitas'
    articleResult = 'Hasil BMI lebih dari 20.0'
    penjelasanArticle = 'Anda berada dalam kategori Obesitas'
    sectResult = 'Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.'
    genInformation = 'Jika BMI Anda berada di kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal'
   }
} 

