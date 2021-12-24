
import { Component } from "react";


class Products extends Component {
  render() {
    return (
      <section class="accomodation_area section_gap">
        <div class="container">
          <div class="section_title text-center">
            <h2 class="title_color">Hotel Accomodation</h2>
            <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, </p>
          </div>
          <div class="row mb_30">
            {this.props.children}

          </div>
        </div>
      </section>
    );
  }

}



export default Products;
