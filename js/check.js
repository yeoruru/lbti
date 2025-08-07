var qList = [
    '오랜만에 즐기는 휴식,<br>나는 오늘 ‘집콕’을 하려고 한다.<br> 눈을 뜨자마자 하는 행동은?',
    '친구가 집에 놀러 오기로 했는데,<br>갑자기 약속을 취소 하자고<br> 연락이 왔다면?',
    '단톡방에 다른 친구가 <br>접촉사고가 났다고 한다.<br> 나의 반응은?',
    '오늘 아점은 라면으로 해결!<br> 라면을 사러 편의점 갈 때 <br>나의 옷차림은?',
    '편의점에서 라면을 사려고 한다.<br> 나는 어떤 라면을 살까?',
    '배가 불러 잠깐 쉬기로 했다.<br> 핸드폰을 하던 중 평소에 사고 싶던<br> 신발이 초특가 세일을 하고 있다.',
    '유튜브에서 우연히<br>귀신에 관한 영상을 보게 된다.<br> 당신의 반응은?',
    '갑자기 모르는<br> 번호로 전화가 왔다.<br> 나는?',
    '이 날만을 기다린 당신!<br> 집에서 꼭 해보고 싶은 취미는?',
    '“드라마 정주행이나 해볼까?”<br> 넷플릭스를 켠 당신!',
    '“오늘 저녁은 직접 만들어 먹어야지”<br> 주방으로 간 나는?',
    '내일부터 휴일 끝인<br>나는?',
];

var a1List = [
    {str : '<b>“아직 10시네”</b> 침대에서 각도만 바꿔 더 안정적으로 눕는다.', evt : "checkObj.clickAnswer('P')"},
    {str : '<b>“뭐야.. 다음에 꼭 놀러와ㅠ”</b>라며 웃는 얼굴로 맘에 없는 답장을 한다.', evt : "checkObj.clickAnswer('I')"},
    {str : '<b>“벤츠야? 보험은?”</b> 사고 현황을 먼저 물어본다.', evt : "checkObj.clickAnswer('T')"},
    {str : '<b>“아우 귀찮아..”</b> 중요 부위를 가릴 정도만 입고 나간다.', evt : "checkObj.clickAnswer('I')"},
    {str : '<b>“오~ 신상 라면 나왔네”</b>라며 신제품과 함께 계획에 없던 삼각김밥도 산다.', evt : "checkObj.clickAnswer('N')"},
    {str : '<b>“대박! 바로 질러!”</b> 미래에 내가 해결해 줄거라며 결제한다.', evt : "checkObj.clickAnswer('F')"},
    {str : '<b>“아 무서워.. 오늘 엄마랑 자고 싶다..”</b>벌써 닭살이 오만개쯤 났다.', evt : "checkObj.clickAnswer('N')"},
    {str : '<b>“이 번호 아는 사람?”</b>여기저기 아는 번호냐고 물어본다.', evt : "checkObj.clickAnswer('T')"},
    {str : '<b>“마음의 안정이..”</b>10,000 피스 퍼즐을 시작한다.', evt : "checkObj.clickAnswer('I')"},
    {str : '<b>“좀비물은 무조건 재밌어”</b>재미있었던 장르만 보고 선택.', evt : "checkObj.clickAnswer('S')"},
    {str : '<b>“검증된 레시피로 먹어야지”</b>바로 황금레시피를 검색한다.', evt : "checkObj.clickAnswer('J')"},
    {str : '<b>“까먹지 말고 챙겨야지”</b>미리 내일 외출 준비를 해둔다.', evt : "checkObj.clickAnswer('J')"},
];

var a2List = [
    {str : '<b>“벌써 10시네”</b>침대에서 일어나 칼 같이 이불정리를 한다.', evt : "checkObj.clickAnswer('J')"},
    {str : '<b>“내가 오늘을 얼마나 기다렸는데…..”</b>아쉬운 마음에 다른 친구를 찾아본다.', evt : "checkObj.clickAnswer('E')"},
    {str : '<b>“어떡해.. 안 다쳤어?”</b>친구의 생사를 먼저 걱정한다.', evt : "checkObj.clickAnswer('F')"},
    {str : '<b>“그래도 밖에 나가는데…”</b>꾸민듯 안꾸민 옷으로 갈아입고 나간다.', evt : "checkObj.clickAnswer('E')"},
    {str : '<b>최적화된 동선으로<br> 항상 먹던 라면만 사고 나온다.</b>', evt : "checkObj.clickAnswer('S')"},
    {str : '<b>“아.. 지금 텅장이야..”</b>공과금 납기일과 잔고를 보고 구매를 할지 말지 따져본다.', evt : "checkObj.clickAnswer('T')"},
    {str : '<b>“주작이네. 옆집 아저씨가 더 무서움”</b>콧방귀를 끼며 넘긴다.', evt : "checkObj.clickAnswer('S')"},
    {str : '<b>“Hoxy… 해킹?”</b>불안한 마음에 바로 차단한다.', evt : "checkObj.clickAnswer('F')"},
    {str : '<b>“한번 움직여 볼까”</b>콘솔 게임 전원을 켠다.', evt : "checkObj.clickAnswer('E')"},
    {str : '<b>“포스터 대박인데?”</b>묻지도 따지지도 않고 포스터 보고 선택.', evt : "checkObj.clickAnswer('N')"},
    {str : '<b>“대충 하면 되지, 나를 믿어”</b>손이 가는대로 만든다.', evt : "checkObj.clickAnswer('P')"},
    {str : '<b>“내일 아침에 생각하자”</b>지금 당장이 중요하다. 내일은 내일.', evt : "checkObj.clickAnswer('P')"},
];


var checkObj = {
    name : null,
    mbti : null,
    mbtiList : null,
    num : 1,
    onSelectState : true,

    init : function( name ){
        this.mbtiList = {
            'E' : {count : 0},
            'I' : {count : 0},
            'S' : {count : 0},
            'N' : {count : 0},
            'T' : {count : 0},
            'F' : {count : 0},
            'J' : {count : 0},
            'P' : {count : 0}
        }

        this.setName(name);
        this.setQuestion();
    },

    start : function(){
        var name = $('#startCon input[name=userName]').val();
        if( name==='' ){
            alert('이름을 입력해주세요.');
            $('#startCon input[name=userName]').focus();
        } else {
            this.init( name );
        }

    },

    setName : function (name) {
        this.name = name;
        sessionStorage.removeItem("hdlName");
        sessionStorage.removeItem("hdlMbti");
    },

    setQuestion : function(){
        if(this.onSelectState){
            this.onSelectState = false;

            if( this.num===13 ){
                this.getResult();
                this.saveResult();
                location.replace('result_'+this.mbti+'.html');
                return;
            }

            var numStr = this.num > 9 ? this.num : '0'+this.num;
            var p = 100/12*this.num;
            $('#questionCon #questionTitle').html(qList[this.num-1]);
            $('#questionCon #questionImage img').attr('src','image/sub/question/question_img_'+numStr+'.png' )
            $('#questionCon #questionAnswer #a1').html(a1List[this.num-1].str);
            $('#questionCon #questionAnswer #a1').attr('onclick',a1List[this.num-1].evt);
            $('#questionCon #questionAnswer #a1').blur();
            $('#questionCon #questionAnswer #a2').html(a2List[this.num-1].str);
            $('#questionCon #questionAnswer #a2').attr('onclick',a2List[this.num-1].evt);
            $('#questionCon #questionAnswer #a2').blur();
            $('.progress').css('background-size',p+'% 100%');

            if(this.num===1){
                $('#startCon').hide();
                $('#questionCon').show();
            }

            this.num++;
            this.onSelectState = true;
        }
    },

    clickAnswer : function ( type ) {
        if( type !== '' ){
            this.mbtiList[type].count++;
            this.setQuestion();
        }
    },

    getResult : function(){
        var r = '';
        r += this.mbtiList['E'].count > this.mbtiList['I'].count ? 'E' : 'I';
        r += this.mbtiList['S'].count > this.mbtiList['N'].count ? 'S' : 'N';
        r += this.mbtiList['T'].count > this.mbtiList['F'].count ? 'T' : 'F';
        r += this.mbtiList['J'].count > this.mbtiList['P'].count ? 'J' : 'P';

        this.mbti = r;
    },

    saveResult : function () {
        sessionStorage.setItem('hdlName', this.name);
        gtag('event', 'result_'+this.mbti);
    },

    onlyNumAndChar : function (el) {
        $(el).keyup(function () {
            $(this).val($(this).val().replace(/[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi, ""));
        });
    }

}
