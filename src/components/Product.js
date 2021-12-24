import * as React from 'react';

function FeaturedPost(product) {
  console.log(product.product.title);
  return (
    <div class="col-lg-3 col-sm-6">
      <div class="accomodation_item text-center">
        <div class="hotel_img">
          <img src={product.product.photos[0].uri_full} alt="" />
          <a href="/" class="btn theme_btn button_hover">Book Now</a>
        </div>
        <a href="/"><h4 class="sec_h4">{product.product.title}</h4></a>
        <h5>{product.product.price}<small>/night</small></h5>
      </div>
    </div>
  );
}

// FeaturedPost.propTypes = {
//   post: PropTypes.shape({
//     date: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageLabel: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default FeaturedPost;