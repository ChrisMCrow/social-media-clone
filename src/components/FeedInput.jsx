import React from 'react';

function FeedInput() {
  const styles = {
    backgroundColor: 'lightblue',
    paddingBottom: '20px'
  };
  const spanStyle = {
    backgroundColor: 'brown', 
    height: '28px',
    width: '28px',
    display: 'inline-block',
    margin: '20px 10px 0px 30px'
  };
  const inputStyle = {
    width: '70%',
    color: '#3cbbde',
    padding: '5px 5px',
    border: '2px solid #3cbbde'
  };

  const hide = {
    display: 'none'
  }

  function handleFocusOff() {
    console.log('off');
    let tweetButton = document.getElementById('tweetButton');
    tweetButton.classList.add('hide');
  }

  function handleFocusOn() {
    console.log('on');
    let tweetButton = document.getElementById('tweetButton');
    tweetButton.classList.remove('hide');
  }

  return (
    <div style={styles}>
      <style jsx>{`
        .hide {
          display: none;
        }
      `}</style>
      <span style={spanStyle}></span>
      <input style={inputStyle} type="text" placeholder="What's happening?" onBlur={handleFocusOff} onFocus={handleFocusOn}/>
      <button id='tweetButton' className='btn btn-info hide'>Tweet</button>
    </div>
  );
}

export default FeedInput;