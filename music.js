const musicFiles = [
    "music/Cheri Cheri Lady.mp3",
    "music/Freed from desire.mp3",
    "music/Happy Nation.mp3",
    "music/Lezginka.mp3",
    "music/Lirika.mp3",
    "music/my marmalade.mp3",
    "music/Nanana.mp3",
    "music/Never Gonna Give You Up.mp3",
    "music/Nostra.mp3",
    "music/Smells Like Teen Spirit.mp3",
    "music/Take on Me.mp3",
    "music/What Is Love.mp3",
    "music/Ай, лето, лето.mp3",
    "music/Белая ночь.mp3",
    "music/Белый мерин.mp3",
    "music/Бомж.mp3",
    "music/Бухгалтер.mp3",
    "music/Весь этот мир.mp3",
    "music/Вечно Молодой.mp3",
    "music/Видели ночь.mp3",
    "music/Все мои друзья.mp3",
    "music/Гагарин, я вас любила.mp3",
    "music/Глюк`ozа - Nostra.mp3",
    "music/Голубые глазки.mp3",
    "music/Город Сочи.mp3",
    "music/Девушки бывают разные.mp3",
    "music/Дядя Толик.mp3",
    "music/Её глаза.mp3",
    "music/Если в сердце живёт любовь.mp3",
    "music/Звенит январская вьюга.mp3",
    "music/Зима-холода.mp3",
    "music/Кажется.mp3",
    "music/Как на войне.mp3",
    "music/Калым.mp3",
    "music/Крошка моя.mp3",
    "music/Лада седан.mp3",
    "music/Лето это.mp3",
    "music/Люби меня люби.mp3",
    "music/Любите, девушки.mp3",
    "music/Малинки.mp3",
    "music/Михаил Круг - Фраер.mp3",
    "music/Моя любовь на пятом этаже.mp3",
    "music/Музыка нас связала.mp3",
    "music/На дискотеку.mp3",
    "music/Наступает ночь.mp3",
    "music/Не забывай.mp3",
    "music/Не отдам.mp3",
    "music/Ничего не говори.mp3",
    "music/Новый герой.mp3",
    "music/Ночь.mp3",
    "music/Позови меня с собой.mp3",
    "music/Половинка.mp3",
    "music/Привет с большого бодуна.mp3",
    "music/Просвистела.mp3",
    "music/Сан-Франциско.mp3",
    "music/Седая ночь.mp3",
    "music/Снег идет.mp3",
    "music/Тихий огонек.mp3",
    "music/Тополиный пух.mp3",
    "music/Ты не верь слезам.mp3",
    "music/Ты не мой.mp3",
    "music/Утекай.mp3",
    "music/Фаина.mp3",
    "music/Хали-гаги, паратрупер.mp3",
    "music/Ч.П.Х..mp3",
    "music/Чёрные глаза.mp3",
    "music/Черный Бумер.mp3",
    "music/Что бы солнце грело.mp3",
    "music/Чумачечая весна.mp3",
    "music/Шарик.mp3",
    "music/Юность В Сапогах Песня.mp3",
    "music/Я это Ты.mp3",
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