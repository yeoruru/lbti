/*var mbtiResultList = {
    'ENFJ' : { nickName:'오래가는 건전지 에너집콕러', url:'', partner:['ISFP','ISTP'] },
    'ENFP' : { nickName:'쉐어하우스 호스트', url:'', partner:['INFJ','ISFP'] },
    'ENTJ' : { nickName:'인간 돌돌이', url:'', partner:['INFP','ISFP'] },
    'ENTP' : { nickName:'아무튼 십잡스', url:'', partner:['INTJ','ISFJ'] },
    'ESFJ' : { nickName:'이구역 개츠비', url:'', partner:['ISTP','INTP'] },
    'ESFP' : { nickName:'인간 템버린 홈욘세', url:'', partner:['ISTJ','INFJ'] },
    'ESTJ' : { nickName:'알잘딱깔센 김선비', url:'', partner:['INTP','INTJ'] },
    'ESTP' : { nickName:'겨울 잠자는 지리산 반달곰', url:'', partner:['ISFJ','INFP'] },
    'INFJ' : { nickName:'집콕 플래너', url:'', partner:['ENFP','ESFP'] },
    'INFP' : { nickName:'집콕 만점자', url:'', partner:['ENTJ','ISFJ'] },
    'INTJ' : { nickName:'휴식학과 교수님', url:'', partner:['ENTP','ESTJ'] },
    'INTP' : { nickName:'재능 금수저', url:'', partner:['ESTJ','ESFJ'] },
    'ISFJ' : { nickName:'고독한 \'그 펭귄\'', url:'', partner:['ESTP','INFP'] },
    'ISFP' : { nickName:'망부석 베짱이', url:'', partner:['ENFJ','ENFP'] },
    'ISTJ' : { nickName:'열정 만수르', url:'', partner:['ESFP','INFJ'] },
    'ISTP' : { nickName:'침대 속 뉴요커', url:'', partner:['ESFJ','ENFJ'] }
};*/


var resultObj = {
    mbti : null,
    name : null,

    init : function () {
        this.getItem();
        this.setContent();
    },

    setContent : function(){
        $('#hdlName').text(this.name); // 이름
    },

    getItem : function () {
        var hdlMbti = $('#mbti').val();
        var hdlName = sessionStorage.getItem("hdlName");

        /*if(!hdlMbti || hdlMbti === undefined || hdlMbti.length != 4 || !hdlName || hdlName === undefined) {
            hdlMbti = this.getParam('hdlmbti');
            hdlName = decodeURI(this.getParam('hdlname'));
            if (hdlMbti === '' || hdlName === '' || mbtiResultList[hdlMbti] === undefined){
                window.location.href = "/";
            }
        }*/

        if(!hdlName || hdlName === undefined){
            hdlName = decodeURI(this.getParam('hdlname'));
            if(hdlName === ''){ // 페이스북
                $('#hdlNameBox').html('<b>집콕 루틴 결과는?</b>');
            }
        }

        this.mbti = hdlMbti;
        this.name = hdlName;

        sessionStorage.removeItem("hdlName");
    },

    shareResult : function ( type ) {
        var domain = window.location.origin+'/lbti';
        var snsTitle = $('#snsTitle').val();
        var snsUrl = domain+$('#snsUrl').val();
        var snsImageKakao = domain+$('#snsImg').val();

        if(type == "facebook"){
            this.shareFaceBook(snsTitle, snsUrl);
        }else if(type == "kakaotalk"){
            this.shareKakaoTalk(snsTitle, snsImageKakao, snsUrl);
        }else if(type == "url"){
            this.shareUrl(snsUrl);
        }

    },

    shareFaceBook : function (title, shareUrl) {
        // var title = encodeURIComponent(title.replace(/#/gi,"") + '#집콕루틴 테스트, LBTI');
        var url = encodeURIComponent(shareUrl);
        var href = "http://www.facebook.com/sharer.php?u="+ url;
        var a = window.open(href, "facebook", "width=800, height=500");
        if( a ) {
            a.focus();
        }

    },

    shareKakaoTalk : function (title, imgUrl, shareUrl) {
        if(this.name!=='') shareUrl = shareUrl+'?hdlname='+this.name;
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: title,
                description : '#집콕루틴 테스트, LBTI',
                imageUrl: imgUrl,
                link: {
                    mobileWebUrl: shareUrl,
                    webUrl: shareUrl,
                },
            },
            buttonTitle : '바로가기'
        });
    },

    shareUrl : function (shareUrl) {
        if(this.name!=='') shareUrl = shareUrl+'?hdlname='+this.name;
        var agent = navigator.userAgent.toLocaleLowerCase();
        var isIOS = /iphone|ipad/.test(agent);
        var copyEl = document.getElementById("snsCopy");
        $(copyEl).val(shareUrl);

        // 링크복사 시 화면 크기 고정
        $('html').find('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=1.0');

        if(isIOS){
            var editable = copyEl.contentEditable;
            var readOnly = copyEl.readOnly;
            copyEl.contentEditable = true;
            copyEl.readOnly = false;
            var range = document.createRange();
            range.selectNodeContents(copyEl);
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            copyEl.setSelectionRange(0, 999999);
            copyEl.contentEditable = editable;
            copyEl.readOnly = readOnly;
        } else {
            copyEl.select();
        }

        try {
            var successful = document.execCommand('copy');
            copyEl.blur();
            if (successful) {
                alert("URL이 복사 되었습니다.");
                $('html').find('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=1.0');
            } else {
                alert('이 브라우저는 지원하지 않습니다.');
            }
        } catch (err) {
            alert('이 브라우저는 지원하지 않습니다.');
        }

    },

    getParam : function (sname) {
        var params = location.search.substr(location.search.indexOf("?") + 1);
        var sval = "";
        params = params.split("&");
        for (var i = 0; i < params.length; i++) {
            temp = params[i].split("=");
            if ([temp[0]] == sname) { sval = temp[1]; }
        }
        return sval;
    }

}

$(function () {
    resultObj.init();
})
