import React, {useState} from 'react'


function SearchBox({searchTerm}) {

      const [text, setText] = useState('');

      const onSubmit = (e) => {
            e.preventDefault();
            searchTerm(text);
      }

      return (
            <div className=''>
                  <form onSubmit={onSubmit} className="">
                        <div className="">
                              <input onChange={e => setText(e.target.value)}
                              className=" " 
                              type="text" placeholder="Search Images e.g birds,flower etc" />

                              <button className="" 
                              type="submit">
                              Search
                              </button>
                        </div>
                  </form>
		</div>
      )
}

export default SearchBox;
