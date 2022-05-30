import React from 'react';
import style from './SearchBar.module.css';
import axios from 'axios';

const SearchBar = (props) => {
  const input = React.useRef(null);
  const keyValue = '2c6a16d84bbb4f1387f78194e6f68f67'
  let keyWord;

  function inputCheck() {
    keyWord = input.current.value.trimStart();
    keyWord ? getNewsData() : alert("검색어를 입력하세요.")
    input.current.value = '';
  }
  
  function getNewsData() {
    axios.get(`https://newsapi.org/v2/everything?q=${keyWord}&sortBy=popularity&apiKey=${keyValue}`)
      .then((res)=>{
        if (res.status !== 200) {
          throw new Error("Can't Search News");
        }
        newsHandle(res.data.articles)
        
      })
  }
  function newsHandle(newsData) {
    if (newsData.length === 0){
        alert(`${keyWord}에 대한 검색결과가 없습니다.`)
    } else {
      props.setNews(newsData);
    }
  }

  return (
    <div className={style.searchBar}>
        <input type="text" placeholder="Enter the word" name="name" ref={input}/>
        <button>
            <span className={style.materialSymbolsOutlined} onClick={inputCheck}>
                search
            </span>
        </button>
    </div>
  )
}
export default SearchBar;