const criarCard = (filme) => {
    const card = document.createElement('div')
    card.className =  'flex items-center justify-center gap-2'

    card.innerHTML = `
        <a class="flex items-center justify-center flex-col" href="../pages/filme.html">
            <div class="w-40 h-56 flex items-center justify-center">
                <img class="w-[120px]" src="${filme.foto_capa}" alt="O profissional">
            </div>
        </a>
    `

    card.addEventListener('click', () => {
        localStorage.setItem('filmeId', filme.id)
    })
    return card
}





{/* <div class="cursor-pointer m-5 flex gap-5 overflow-x-auto scrollbar-hide hover:outline-none">
<img src="./src/img//Rectangle 10.png" alt="">
<a href="./src/movie.html">
  <img src="./img/Rectangle 14.png" alt="" class="max-w-[17.5rem] rounded-xl">
</a>
<img src="./src/img/Rectangle 10.png" alt="">
<img src="./src/img/Rectangle 14.png" alt="">
<img src="./src/img/Rectangle 10.png" alt="">
<img src="./src/img/Rectangle 14.png" alt="">
<a href="./src/movie.html">
  <img src="./src/img/Rectangle 14.png" alt="" class="max-w-[17.5rem] rounded-xl">
</a>
<img src="./src/img/Rectangle 14.png" alt="">
<img src="./src/img/Rectangle 10.png" alt="">
</div> */}