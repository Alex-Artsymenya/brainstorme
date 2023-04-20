document.getElementById('tg').addEventListener('submit', function (e) {
    e.preventDefault();

    const TOKEN = "6267746598:AAH3L6poJWNAatQlL874fw4HxvbW268Dav0";
    const CHAT_ID = "-1001970695311";
    let URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}`;
    const success = document.getElementById('success');
    const checkbox = document.getElementById('checkbox');

    var message = `Отклик на вакансию!\n`;
    message += `ФИО: ${this.name.value}\n`;
    message += `Email: ${this.email.value}\n`;
    message += `Номер телефона: ${this.phone.value}\n`;
    message += `Резюме: ${this.resume.value}\n`;
    message += `Что хотели узнать: ${this.info.value}\n`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'HTML',
        text: message
    })

        .then((res) => {
            this.name.value = "";
            this.email.value = "";
            this.phone.value = "";
            this.resume.value = "";
            this.info.value = "";
            checkbox.checked = false;
            success.style.display = "flex"
        })
})