const musicFiles = [
    "music/Bomzh.mp3",
    "music/Cheri Cheri Lady.mp3",
    "music/Happy Nation.mp3",
    "music/Lezginka.mp3",
    "music/my marmalade.mp3",
    "music/Nanana.mp3",
    "music/What Is Love.mp3",
    "music/Ай, лето, лето.mp3",
    "music/Белый мерин.mp3",
    "music/Вечно Молодой.mp3",
    "music/Видели ночь.mp3",
    "music/Все мои друзья.mp3",
    "music/Гагарин, я вас любила.mp3",
    "music/Глюк`ozа - Nostra.mp3",
    "music/Город Сочи.mp3",
    "music/Девушки бывают разные.mp3",
    "music/Дядя Толик.mp3",
    "music/Звенит январская вьюга.mp3",
    "music/Зима-холода.mp3",
    "music/Калым.mp3",
    "music/Крошка моя.mp3",
    "music/Лада седан.mp3",
    "music/Лето это.mp3",
    "music/Люби меня люби.mp3",
    "music/Любите, девушки.mp3",
    "music/Малинки.mp3",
    "music/Музыка нас связала.mp3",
    "music/На дискотеку.mp3",
    "music/Наступает ночь.mp3",
    "music/Привет с большого бодуна.mp3",
    "music/Просвистела.mp3",
    "music/Сан-Франциско.mp3",
    "music/Утекай.mp3",
    "music/Фаина.mp3",
    "music/Хали-гаги, паратрупер.mp3",
    "music/Чёрные глаза.mp3",
    "music/Черный Бумер.mp3",
    "music/Шарик.mp3",
    "music/Юность В Сапогах Песня.mp3",
    "music/Ясный мой свет.mp3",
];


const container = document.getElementById("tracks");

musicFiles.forEach(file => {
    const div = document.createElement("div");
    div.style.marginBottom = "15px";

    const name = file.split("/").pop();

    div.innerHTML = `
        <p>${name}</p>
        <audio controls>
            <source src="${file}" type="audio/mpeg">
            Your browser does not support audio.
        </audio>
    `;

    container.appendChild(div);
});