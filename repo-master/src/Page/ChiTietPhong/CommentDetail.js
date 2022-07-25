import React from 'react'

export default function CommentDetail({data}) {
  return (
    <div style={{width:"300px"}} className="px-4 py-2 mt-5 mr-14">
              <div className="flex flex-warp">
                  <div className="mr-2">
                  <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=402" layout="fill" className="w-12 h-12 rounded-full" />
                  </div>
                  <div className="pb-2">
                      <h1>My name</h1>
                      <p className="text-gray-400">{data.created_at}</p>
                  </div>
              </div>
              <div>
                  <p className="text-base text-gray-600">{data.content}.</p>
              </div>
          </div>
  )
}
