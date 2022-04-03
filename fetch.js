function get_data() {
    const url = "https://sayyyyyy.pythonanywhere.com/";
    fetch(url)
        //取得に成功した場合
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        })
        //取得に失敗した場合
        .catch((error) => {
            console.log(error);
        });
}