import React from 'react'

function ImgCard(props) {
      const {image} =props;
      const tags = image.tags.split(",");
      return (
            <div className="">
                        <img src={image.webformatURL} alt="" className=""/>     

                        <div className="">
                              <div className="">
                                    Photo by:-{image.user}
                              </div>
                              <ul className="" >
                                    <li><strong>Views:</strong>{image.views}</li>
                                    <li><strong>Downloads:</strong>{image.downloads}</li>
                                    <li><strong>Likes:</strong>{image.likes}</li>
                              </ul>
                        </div>
                        
                        <div className="">
                              {tags.map((tag,index)=>
                              <span key={index} className="">
                              #{tag}
                              </span>)}
                        </div>
                  </div>
      );
}

export default ImgCard;