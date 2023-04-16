

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'ReactBlog';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ post }</h4>
      </div>
        <button onClick={ ()=>{
          let copy2 = [...글제목];
          copy2.sort();
          글제목변경(copy2)
        } }> 가나다순정렬 </button>

      {  
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(!modal)}}>{ 글제목[i] } <span onClick={ ()=>{
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)
                }}>👍</span> { 따봉[i] }</h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }


      {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경}></Modal> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
      <div className="modal">
        <h4>{props.글제목[0]}</h4>
        <p>날씨</p>
        <p>상세 내용</p>
        <button onClick={()=>{
          // 첫 글 제목이 여자 코트 추천으로 바뀌는 기능
          props.글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬독학'])
        }}>글수정</button>
      </div>
  );
}
export default App;
