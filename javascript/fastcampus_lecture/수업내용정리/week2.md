# 20180119 (웹구조잡기 1. GNB작업 + 2. 로그인폼 작업) 

## 로그인폼 작업 
## 이미지 애니메이션 
## 텍스트 애니메이션   
## jQuery 메뉴탭 작업

**엘리먼트 어트리뷰트 속성 정리 필요**

# 20180118 (웹구조잡기 1. GNB작업(이어서) )

## GNB 나열하기, 꾸미는 작업 
   - [float을 clear하는 방법](http://naradesign.net/wp/2008/05/27/144/) 

## sub메뉴 나열하기, 이벤트 작업  
   - 그라디언트, :hover, ::after, ::before  
   - 'fontello'에서 svg 가져와서 반영하는 작업  
   - class + jQuery를 이용하여 탭메뉴 만들기 
   - 마진상쇄. 
   - viewport, pixel-ratio, z-index


# 20180117 (웹구조잡기 1. GNB작업)  

## CSS 작업순서
   * [20180116 수업내용 참고](#CSS-작업순서) 

## 웹표준 > 웹접근성가이드라인(WCAG) 
   - [WCAG2.0](https://www.w3.org/TR/WCAG20/)   
   - [KWCAG2.1](http://www.wah.or.kr/board/boardView.asp?page=1&brd_sn=4&brd_idx=975)  

## 레이아웃 구성요소   
   * [바로가기](#레이아웃-구성-요소) 

## 선택자 우선순위
   * [바로가기](#선택자-우선순위) 

## 작성시 고려 사항 리스트
   * [바로가기](#작성시-고려-사항-리스트) 

#### 세부 BOX모델 TAG구조 작업  
   1. 디자인의 각 요소별 성격 파악 : 단순 텍스트, 로고+링크, 메뉴리스트+링크 등   
   2. 나열순서 설계  (디자인 순서 X) 


#### 작성시 고려 사항 리스트  
   1. tab을 눌렀을시 어떻게 동작을 하는가?   
   2. nav를 많이 사용하지 않았는가?   
   3. 이미지는 벡터 이미지를 사용 하였는가?   
   4. 이미지 대체 텍스트는 입력을 하였는가? 
   5. 동영상 대체 자막은 입력을 하였는가?  
   6. "role=''"과 NativeTAG를 혼용하지 않았는가?   
   7. 반복되는 메뉴를 건너뛸 수 있도록 설계를 하였는가?  

#### 레이아웃 구성 요소  
   1. 위치를 결정하는 position (static, relative, absolute, fixed, sticky)  
   2. 표시 성격을 결정하는 display (block, inline, line-block) 

#### 선택자 우선순위   
 CSS 선택자에서 다음의 요소값이 많으면 높은 우선순위 유지

| 예시            | id   | class | element(pseudocode포함) | 결과 | 
| ----           | ---- | ---- |---- | --- |  
| a              |     0 |    0 |   1 |   1 |
| a .member      |     0 |    1 |   1 |  11 |
| a .member #100 |     1 |    1 |   1 | 111 |

# 20180116 (웹구조잡기) 

## CSS 역사와 이슈사항  
   1. CSS level 3 부터는 모듈별 표준화(recommandation) 작업 진행중  
   2. 표준안이 아닌경우 브라우저별 접두사를 붙여서 기능을 제공하는 경우 있음. (제공하지 않는 경우도 있음)  

## CSS 작업순서 
   1. HTML 사전작업
   2. TAG구조 + 네이밍 작업
   3. CSS 사전작업  
   4. BOX모델 작업(layout) 
   5. 세부 BOX모델 TAG구조 작업
   6. 세부 BOX모델 CSS 작업

#### HTML 사전작업
   * [20180115 수업내용 참고](#구조만드는 순서)  

#### TAG 구조 + 네이밍 작업 
   * [20180115 수업내용 참고](#구조만드는 순서)

#### CSS 사전작업 
   1. CSS 캐릭터 인코딩 설정 
   2. 폰트설정 및 import  
      - serif 문자셋, sans-serif 문자셋, 웹폰트 경로 설정   
      - CDN에서의 'min'의미는 최소화 작업을 한 결과물 의미.
   3. 노말라이즈 import 
      - 브라우저별 기본스타일 동일하게 잡는 역할
   4. (option) reset 설정작업  

#### BOX모델 작업 (레이아웃작업)
   1. 고정형, 유동형, 반응형, 적응형 모델 중 결정 (고정형으로 작업진행)
   2. 제일 바깥의 BOX부터 크기 설정  
      - box모델 : 기본값 content-box / 작업내용 border-box  
      - 가로구조 잡기 : flexbox이용 (해당부분 별도 공부 필요)  

#### flexbox 
   1. 선언한 1단계 아래의 자식에게 적용 (연쇄 상속 되지 않음)   
   2. ie브라우저 미지원으로 문제 있음 (flex polymorphism으로 상쇄)
   3. 기본적인 컨셉은 축방향 연산이며, row이면 x축 column이면 y축 연산을 한다  

#20180115 (웹개론 + HTML)
## 웹개론 
### 역사 
   - 팀 버너스리에 의해 창안이 되었으며 W3C, WHATWG 등에 의해 현재도 발전되고 있다.  

### 웹
   - 지향점 : 웹의 힘은 보편성을 지니고 있으며, 장애에 관계없이 모든 사람이 접근 할 수있는 것은 필수적인 요소입니다.  
   - 구성요소 : HTML + CSS + Jabascript  
   - 고려요소 : 
      1. WEB Accessibility : 웹접근성  
      2. Flatform (Angular, React, Vue ... ) 
      3. CrossBrowser (ie, safari, chrome, firefox ... ) : 웹호환성  
      4. SEO  
      5. 저사양, 저속회선   


## HTML코드  
### HTML역사와 초기설정 
   - HTML4 > XHTML > HTML5 발전 
   - 초기설정 사항 
      1. <DOCTYPE> : 이것을 통해서 HTML버젼을 결정한다. (미사용시 비정상적 작동 가능) 
      2. <html lang="ko"> : 웹피이지 사용 언어 설정값.   
      3. <meta charset="UTF-8"> : 웹페이지 캐릭터 설정값. 
      4. <link> : CSS 및 이미지 파일 연결 
      5. <title> : 웹페이지 타이틀. 위의것들 보다 먼저 오면 안된다.  

### 구조만드는 순서  
   1. outline 설계 (웹페이지, 애플리케이션따라 다름) : 3단, 4단 등... 
   2. TAG구조 잡기 : semantic하게 설계
   3. TAG네이밍 잡기 : 네이밍인벤션을 통일하여 사용 (수업에서는 KebabCase 사용)