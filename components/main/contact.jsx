{/* <div className="font-serif w-2/5 ">
  <p className="text-right my-4">(949) 280-8977 <i className="fas fa-phone inline-block ml-4"></i></p>
  <p className="text-right my-4"><a href="mailto:drush@nutheory.com" className="text-blue-dark no-underline">drush@nutheory.com</a> <i className="far fa-envelope inline-block ml-4"></i></p>
  <p className="text-right my-4"><a href="http://github.com/nutheory" className="text-blue-dark no-underline">nutheory</a> <i className="fab fa-github inline-block ml-4"></i></p>
</div> */}

// @flow
import React, { Component } from 'react'


const Contact = (props: Object) => {
  return(
    <div className="contact" ref={props.contactRef}>
      <div className="py-16 px-6 md:px-0 container mx-auto">
        <h2 className="title text-center mt-16 t-shadow">contact</h2>
        <h4 className="text-center t-shadow">name :: derek rush</h4>
        <div className="body mt-20 -mx-6 flex flex-wrap">
        </div>
      </div>
    </div>
  )
}

export default Contact
