import React from 'react';
import ErrorPage from "../../../images/errorpage.png"
const NotFoundPage = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <section className='notfound'>

       <img 
       src={ErrorPage}/>
      </section>
    </div>
  );
};

export default NotFoundPage;
