import React from "react"

class Home extends React.Component {
    render() {
        return(
            <>
              <div id="top">
                <div id="header">
                  <h1>Wynder</h1>
                </div>
                  <div id="controls">
                    <div>
                      <label htmlfor="gender">Gender</label>
                      <select id="gender">
                          <option value="all">All</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                      </select>
                    </div>  
                    <div>
                        <input
                          type="number"
                          min="18"
                          max="100"
                        />
                        <label>to</label>
                        <input
                          type="number"
                          min="18"
                          max="100"
                        />
                    </div>
                    <div>
                        <label>Radius</label>
                        <input
                          id="radius"
                          type="range"
                          min="0"
                          max="5000"
                        />
                    </div>
                  </div>  
              </div>
              <div id="people">
                  <div className="person male">
                      <div>Some guy or gal</div>
                      <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="profile-pic"/>
                      <div>33</div>
                  </div>
                  <div className="person female">
                      <div>Some guy or gal</div>
                      <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="profile-pic"/>
                      <div>33</div>
                  </div>
                  <div className="person male">
                      <div>Some guy or gal</div>
                      <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="profile-pic"/>
                      <div>33</div>
                  </div>
                  <div className="person female">
                      <div>Some guy or gal</div>
                      <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="profile-pic"/>
                      <div>33</div>
                  </div>
                  <div className="person male">
                      <div>Some guy or gal</div>
                      <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="profile-pic"/>
                      <div>33</div>
                  </div>
                  <div className="person female">
                      <div>Some guy or gal</div>
                      <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="profile-pic"/>
                      <div>33</div>
                  </div>
                  <div className="person male">
                      <div>Some guy or gal</div>
                      <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="profile-pic"/>
                      <div>33</div>
                  </div>
                  <div className="person female">
                      <div>Some guy or gal</div>
                      <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="profile-pic"/>
                      <div>33</div>
                  </div>
              </div>

            </>
        )
    }
}

export default Home