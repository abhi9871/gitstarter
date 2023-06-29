// Using async-await

const userActivityDetails = [{ name: 'Abhi', userLastActivityTime: new Date().getTime() }];

const posts = [{ title: 'Blog 1' },{ title: 'Blog 2' }];

const createPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: 'Blog 3' });
      console.log(`After creating the post... ${posts[posts.length - 1].title}`);
      userActivityDetails[0].userLastActivityTime = new Date().getTime();
      console.log(`User - ${userActivityDetails[0].name}, last activity time is ${userActivityDetails[0].userLastActivityTime}`);
      resolve();
    }, 1000);
  });
};


const deletePost = () => {
    return new Promise((resolve, reject) => {
      if (posts.length > 0) {
        posts.pop();
        if (posts.length > 0) {
            posts.pop();
            for(let post of posts){
                console.log(post.title);
            }
        }
        resolve();
      } else {
        let err = new Error('No posts are available');
        reject(err);
      }
    });
  };

  const performTask = async() => {
    try{
        await createPost();
        await deletePost();
    }
    catch(err){
        console.log(err);
    }
    
  }