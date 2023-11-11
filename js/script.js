// wow.js 애니메이션 함수
const animateCSS = (element, animation, delay, faster, repeat) => {
    const nodes = document.querySelectorAll(element);

    nodes.forEach((node, index) => {
        // 모든 클래스를 가져와서 "animate"를 포함한 클래스만 필터링합니다.
        const classesToRemove = Array.from(node.classList).filter(className => className.includes("animate"));

        // 필터링된 클래스를 모두 제거합니다.
        for (const classToRemove of classesToRemove) {
            node.classList.remove(classToRemove);
        }

        // 지정된 클래스 및 시간을 추가합니다.
        setTimeout(() => {
            node.classList.add("animate__animated", animation, delay, faster, repeat);
        }, 10 * (index + 1)); // 각 요소에 대해 지연을 조정하려면 인덱스를 사용합니다.
    });
};


// 별 애니메이션
$(".star img").each(function (index, item) {
    $(item).delay(index * 250).fadeIn()
})

// 타이밍애니메이션
function typeText(i, element) {
    var typingElement = $(element);
    var txt = typingElement.text();
    typingElement.text("");
    if (i < txt.length) {
        typingElement.append(txt[i]);
        setTimeout(function () {
            typeText(i + 1);
        }, 150);
    }
}

setTimeout(function () {
    typeText(0, ".txtwrite");
}, 1000)

var resultList = ["구글플레이스토어/20200618/이니홀릭(구글계정 ID)", "애플앱스토어/20200617/이니필(애플계정 ID)"]

$(".two .search_box input").on("keypress", function (e) {
    if (e.keyCode == 13) {
        console.log(1)
        var result = $(".two .search_box input").val()
        if (result.length > 0) {
            console.log(2)
            animateCSS('.two .search_box button', 'animate__rubberBand');
            animateCSS('.two .text', 'animate__rubberBand', "animate__delay-1s");
            resultList.unshift(result)
            resultList.pop()
            $(".two .text").each(function (index, item) {
                $(item).text(resultList[index])
            })
            $(".two .search_box input").val("")
        } else {
            alert("값을 입력해주세요!")
        }
    }
})

$(".two .search_box button").on("click", function () {
    var result = $(".two .search_box input").val()
    if (result.length > 0) {
        animateCSS('.two .search_box button', 'animate__rubberBand');
        animateCSS('.two .text', 'animate__rubberBand', "animate__delay-1s");
        resultList.unshift(result)
        resultList.pop()
        $(".two .text").each(function (index, item) {
            $(item).text(resultList[index])
        })
        $(".two .search_box input").val("")
    } else {
        alert("값을 입력해주세요!")
    }
})

