//! 영화 데이터 가져오기

//? API 설명 첨부
// : 각각의 API는 Promise 객체를 반환

// fetchMovie(id) : 주어진 id에 대한 영화 정보를 가져오는 함수
// fetchReviews(movieId) : 주어진 영화 id에 대한 리뷰 정보를 가져오는 함수
// fetchActors(movieId) : 주어진 영화 id에 대한 출연진 정보를 가져오는 함수

function fetchMovie(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        title: `Movie ${id}`,
        year: 2024
      })
    }, 1000);
  })

}

function fetchReviews(movieId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {movieId, review: '너무 재밌는 영화예요!', rating: 5},
        {movieId, review: '볼만했어요', rating: 3}
      ])
    }, 1000);
  })



}

function fetchActors(movieId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {movieId, actor: '고윤정'},
        {movieId, actor: '박은빈'}
      ])
    }, 1000);
  })
}

//! API 함수를 활용한 콜백함수 구현

function getMovieData(number, callback) {
  fetchMovie(number, (movie) => {
    console.log('MOVIE', movie);

    fetchReviews(movie.id, (reviews) => {
      console.log('REVIEWS', reviews);

      fetchActors(movie.id, (actors) => {
        console.log('ACTORS', actors);

        console.log('데이터 요청이 완료되었습니다.');
      })
    })
  })
}

getMovieData(1, () => {
  console.log('모든 데이터가');
});