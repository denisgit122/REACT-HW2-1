import  './User.css'

const User = ({user,setUseDetails}) => {
    const {id, userId, title,body}=user;

return (
  <div className={'box'}>
      <h1>{userId}. {id}</h1>
          <div className={'boxFlex'}>
             <div className={'border'}>
                 <p>{title}</p>
             </div>
              <div className={'border'}>
                  <p>{body}</p>
              </div>
          </div>
      <button onClick={()=>setUseDetails(user)} className={'button'}>learn more</button>

  </div>
);
};

export {User};