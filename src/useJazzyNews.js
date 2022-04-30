import { useState, useEffect, useMemo } from 'react';

let count = 0;
let timer = null;

const newsFeed = {
  subscribe : fn => {
    timer = setInterval(() => {
      if(Math.round(Math.random())) {
        console.log('追加無し');
        return;
      }
      fn(`記事-${count}`);
      count++;
    }, 5000);
  },
  unsubscribe : () => {
    clearInterval(timer);
  }
}

function useJazzyNews() {
  const [ _posts, setPosts ] = useState([]);
  const addPost = post => setPosts(allPosts => [post,...allPosts]);
  const posts = useMemo(() => _posts, [_posts]);

  useEffect(() => {
    newsFeed.subscribe(addPost);
    return () => newsFeed.unsubscribe();
  },[]);

  useEffect(() => {
    console.log('追加！！');
  },[ posts ]);
  
  return posts;
}

export default useJazzyNews;
