export function oneMovie(fakeAPI) {

  onload = function(){
    const LeftBtn = document.querySelector('#LeftBtn');
    const RightBtn = document.querySelector('#RightBtn');
    const TabDopInfoLeftSide = document.querySelector('.TabDopInfoLeftSide');
    const TabDopInfoRightSide = document.querySelector('.TabDopInfoRightSide')
    LeftBtn.addEventListener('click', () => {
      TabDopInfoLeftSide.classList.remove('hide')
      TabDopInfoRightSide.classList.add('hide')
    })
    RightBtn.addEventListener('click', () => {
      TabDopInfoLeftSide.classList.add('hide')
      TabDopInfoRightSide.classList.remove('hide')
    })
  };

  return `
    <div class="CenterBlockExForm">
      <div class="CenterBlock ContentShowfull">
        <div id="dle-content">
          <div class="contain">
            <h1 class="view-caption">${fakeAPI.movieName}</h1>
            <h2 class="view-caption2">${fakeAPI.movieSub}</h2>
            <div class="view-group">
              <button>
                  Мои фильмы
              </button>
            </div>
          </div>
          <div class="FullstoryForm">
            <div class="FullstoryFormLeft">
                <img src="${fakeAPI.movieImg}" />
                <div class="FormLeftRating">
                  <div class="rating-mg view-ratings ignore-select">
                    <div id="mratesb-106312" class="btn-group vote-buttons">
                      <button class="btn btn-like">
                        <span class="glyphicon glyphicon-thumbs-up">
                          <img src="../images/like.png">
                          <span class="count">${fakeAPI.like}</span>
                        </span>
                      </button>
                      <button class="btn btn-dislike">
                        <span class="glyphicon glyphicon-thumbs-down">
                          <img src="./images/dislike.png">
                          <span class="count">${fakeAPI.dislike}</span>
                        </span>
                      </button>
                    </div>
                  </div>
                  <h4 class="FullstoryInfoTitle">Рейтинг</h4>
                  <div class="kp_imdb_full">
                    <div class="in_kp_imdb">
                      <div class="in_nad" title="Рейтинг по версии Кинопоиск"></div>
                      <div class="in_name_kp">6.264</div>
                    </div>
                    <div class="in_kp_imdb">
                      <div class="in_pod" title="Рейтинг по версии IMDB"></div>
                      <div class="in_name_imdb">${fakeAPI.rating}</div>
                    </div>
                  </div>
                </div>
                <div class="b-view_dotted"></div>
                <hr>
                <div class="FullstoryInfo">
                  <h4 class="FullstoryInfoTitle">Год:</h4>
                  <p class="FullstoryInfoin"><a href="/year/2021" title="2021">2021</a></p>
                  <h4 class="FullstoryInfoTitle">Страна:</h4>
                  <p class="FullstoryInfoin"><a href="/country/%D0%A1%D0%A8%D0%90" title="США">США</a></p>
                  <h4 class="FullstoryInfoTitle">Жанр:</h4>
                  <p class="FullstoryInfoin"><a href="/genre/%D1%84%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0" title="фантастика">фантастика</a>, <a href="/genre/%D0%B1%D0%BE%D0%B5%D0%B2%D0%B8%D0%BA" title="боевик">боевик</a>, <a href="/genre/%D1%82%D1%80%D0%B8%D0%BB%D0%BB%D0%B5%D1%80" title="триллер">триллер</a></p>
                  <h4 class="FullstoryInfoTitle">Перевод:</h4>
                  <p class="FullstoryInfoin">Дублированный</p>
                  <h4 class="FullstoryInfoTitle">Качество:</h4>
                  <p class="FullstoryInfoin">SuperTS</p>
                  <h4 class="FullstoryInfoTitle">Время:</h4>
                  <p class="FullstoryInfoin">90 мин. / 01:30</p>
                  <h4 class="FullstoryInfoTitle">Возраст:</h4>
                  <p class="FullstoryInfoAge infoi_age">16+</p>
                </div>
            </div>
          </div>


        <div class="FullstoryFormRight">

          <iframe src="//4432.svetacdn.in/b83GadSWdvez?kp_id=1227967&amp;block=GH" width="680" height="423" frameborder="0" allowfullscreen=""></iframe>
          <div class="FullstorySubForm">
            <div class="FullstorySubFormTitle">Сюжет:</div>
            <div class="FullstorySubFormText">${fakeAPI.plot}</div>

          <hr>

          <div class="FullstoryKadrForm">
            <div class="FullstoryKadrFormTitle">Кадры из фильма:</div>
            <div class="FullstoryKadrFormImg">
              ${
                fakeAPI.personnelMovie.map((item) => {
                  return `
                  <a href="${item.href}" class="lightbox" rel="group1" title="">
                    <img src="${item.imgUrl}" alt="Веном 2" title="Веном 2">
                  </a>
                  `
                })
              }
            </div>
          </div>

          <hr>

          <div class="FullstoryKadrFormAc">
            <div class="FullstoryKadrFormTitle">В главных ролях:</div>
            <div class="FullstoryKadrFormImgAc">
            ${
              fakeAPI.mainRolls.map(item => {
                return `
                <div class="FullstoryKadrFormWrapper">
                  <a href="#">
                    <img src="${item.imgUrl}" />
                    <a href=""#>${item.name}</a>
                  </a>
                </div>
                `
              })
            }
            </div>
          </div>

          <div class="TabDopInfoLeft">
            <button id="LeftBtn" class="btn2">Информация о фильме</button>
            <button id="RightBtn" class="btn2">Отзывы <span>1</span></button>
            <div class="TabDopInfoLeftSide">
              <div class="TabDopInfoBlockOne">
              <div class="TabDopInfoBlockOneTitle">Продюсер:</div>
              ${
                fakeAPI.produsers.map(item => {
                  return `
                  <a href="#" title="${item}">${item}</a>,
                  `
                })
              }
              </div>
              <div class="TabDopInfoBlockOne">
                <div class="TabDopInfoBlockOneTitle">Режиссер:</div>
                <a href="#" title="${fakeAPI.director}">${fakeAPI.director}</a>
              </div>

              <div class="TabDopInfoBlockOne">
                <div class="TabDopInfoBlockOneTitle">Сценарист:</div>
                ${
                  fakeAPI.screenwriter.map(item => {
                    return `
                    <a href="#">${item}</a>,
                    `
                  })
                }
              </div>

              <div class="TabDopInfoBlockOne">
                <div class="TabDopInfoBlockOneTitle">Оператор:</div>
                <a href="#">${fakeAPI.operator}</a>
              </div>

              <div class="TabDopInfoBlockOne">
                <div class="TabDopInfoBlockOneTitle">Композитор:</div>
                <a href="#">${fakeAPI.compositor}</a>
              </div>
            </div>
            <div class="TabDopInfoRightSide hide">
                <div class="CommentsItem">
                  <div class="CommentsImg">
                    <img src="data:image/png;base64,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" >
                  </div>
                  <div>
                    <div class="CommentsName">
                      <span>Люся,</span> Сегодня, 14:05
                    </div>
                    <p class="CommentsText">
                      Беда нетфликса - что у них сразу легко вычислить главного злодея - это блондин или блондинка всегда.
                      Кинцо никакое. Уровень одной серии вторичного сериала
                    </p>
                  </div>
                </div>
            </div>
          </div>

          <hr>

          <div class="FullstoryKadrFormTitle">Похожие материалы:</div>
          <div class="PostWrapper">
            ${
              fakeAPI.similar.map(item => {
                return `
                <div class="MiniPostAllFormRelated">
                  <div class="MiniPostRelated">
                  <a href="#" class="MiniPostPosterRelated" title="">
                    <img src="${item.imgUrl}" />
                  </a>
                  </div>
                  <a href="#">${item.name}</a>
                </div>
                `
              })
            }
          </div>

        </div>
      </div>
    </div>
  `
}


