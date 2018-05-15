import React, {Component} from 'react';

class LandingPage extends Component {
  render() {
    return(
      <div className="lp">
        <div className="container-fluid">
          <h1 className="mx-auto text-center">Your Favorite Recipies</h1>
          <h3 className="mx-auto text-center">All in one place</h3>
        </div>

        <div class="input-group input-group-large">
          <input type="text" class="form-control" placeholder="What's for Dinner?" aria-label="Recipie" aria-describedby="basic-addon2" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
        </div>

      </div>
    )
  }
}

export default LandingPage;
