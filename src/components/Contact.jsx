import React from 'react'

const Contact = () => {
  // const show = () => {
  //   alert("Currently this is not completed")
  // }
  return (
    <div className='container'>
      <div className="mb-3 ">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div >

        <button type="button" className="btn btn-success" onClick={()=>{alert("currently this is not completed")}}>Submit</button>
      </div>
    </div>
  )
}

export default Contact