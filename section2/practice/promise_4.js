function axiosGet() {
    console.log("click axiosGet btn!");

    // 폼 선택하기
    const form = document.forms["register"];

    // 서버로 보낼 데이터 양식 생성하기
    const data = {
        name: form.name.value,
        gender: form.gender.value,
    };

    // axios 비동기 통신 (get 방식)
    // 퀴즈. 동적폼전송 유효성 검사
    // 1. 이름 미입력; '이름을 입력해주세요!!'
    // 2. 성별 미입력; '성별을 선택해주세요!!'
    // 3. 이름과 성별이 모두 입력되었다면, 정상적으로 요청 날리기

    // Hint!
    console.dir(form.name);
    console.dir(form.gender);
    console.log("------");
    console.log(form.name.checkValidity());
    console.log(form.gender[0].checkValidity());
    console.log(form.gender[1].checkValidity());
    // radio type input은 둘 중 하나라도 check되면 전부 true 출력, 아니면 false가 출력

    if (!form.name.checkValidity()) {
        // !false => true
        resultBox.textContent = "이름을 입력해주세요!!";
    } else if (!form.gender[0].checkValidity()) {
        resultBox.textContent = "성별을 선택해주세요!!";
    } else {
        axios({
            method: "GET",
            // i) params 키를 이용하지 않는다면 요청 url에 query string을 작성
            url: `/axios?name=${form.name.value}&gender=${form.gender.value}`,
            // ii) params 키를 이용하는 경우
            // url: '/axios',
            // params: data,
        })
            .then(function (res) {
                console.log(res); // 서버의 응답 결과를 부가적인 정보와 함께 출력
                console.log(res.data); // index.js의 res.send(req.query) 그 데이터가 담김
                // console.log(res.status); // HTTP Status code (상태코드)
                // console.log(res.statusText);
                // console.log(res.headers)
                // console.log(res.config)

                const { name, gender } = res.data; // {name: '션', gender: '남자'}
                resultBox.textContent = `GET /axios 요청에 대한 응답 완료! ${name}님은 ${gender}이시죠?`;
                resultBox.style.color = "green";
            })
            .catch(function (err) {
                console.error("Error", err);
                resultBox.textContent = "앗! 알 수 없는 에러 발생.. 다시 시도해주세요..";
            });

        async function exec() {
            try {
                const res = await axios({
                    method: "GET",
                    url: `/axios?name=${form.name.value}&gender=${form.gender.value}`,
                });
                const { name, gender } = res.data;
                resultBox.textContent = `GET /axios 요청에 대한 응답 완료! ${name}님은 ${gender}이시죠?`;
                resultBox.style.color = "green";
            } catch (err) {
                console.error("Error", err);
                resultBox.textContent = "앗! 알 수 없는 에러 발생.. 다시 시도해주세요..";
            }
        }
    }
}
