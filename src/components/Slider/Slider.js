import React from "react";
import { connect } from "react-redux";
import ReactSlider from "react-slick";
import SliderCard from "./SliderCard";

import "./Slider.scss";

import { settings } from "./SliderSettings";
import { getArticles } from "actions/actions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Slider extends React.Component {
  componentDidMount() {
    if (this.props.type === "Articles") {
      // this.props.getArticles({
      //   limit: 5,
      //   keywords: "cryptocurrency",
      // });
    }
  }

  render() {
    const items = [
      {
        author: "TMZ Staff",
        title: "Rafael Nadal Pulls Out Of U.S. Open Over COVID-19 Concerns",
        description:
          'Rafael Nadal is officially OUT of the U.S. Open ... the tennis legend said Tuesday it\'s just too damn unsafe for him to travel to America during the COVID-19 pandemic. "The situation is very complicated worldwide," Nadal wrote in a statement. "The…',
        url:
          "https://www.tmz.com/2020/08/04/rafael-nadal-us-open-tennis-covid-19-concerns/",
        source: "TMZ.com",
        image:
          "https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg",
        category: "general",
        language: "en",
        country: "us",
        published_at: "2020-08-05T05:47:24+00:00",
      },
      {
        author: "TMZ Staff",
        title: "Rafael Nadal Pulls Out Of U.S. Open Over COVID-19 Concerns",
        description:
          'Rafael Nadal is officially OUT of the U.S. Open ... the tennis legend said Tuesday it\'s just too damn unsafe for him to travel to America during the COVID-19 pandemic. "The situation is very complicated worldwide," Nadal wrote in a statement. "The…',
        url:
          "https://www.tmz.com/2020/08/04/rafael-nadal-us-open-tennis-covid-19-concerns/",
        source: "TMZ.com",
        image:
          "https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg",
        category: "general",
        language: "en",
        country: "us",
        published_at: "2020-08-05T05:47:24+00:00",
      },
      {
        author: "TMZ Staff",
        title: "Rafael Nadal Pulls Out Of U.S. Open Over COVID-19 Concerns",
        description:
          'Rafael Nadal is officially OUT of the U.S. Open ... the tennis legend said Tuesday it\'s just too damn unsafe for him to travel to America during the COVID-19 pandemic. "The situation is very complicated worldwide," Nadal wrote in a statement. "The…',
        url:
          "https://www.tmz.com/2020/08/04/rafael-nadal-us-open-tennis-covid-19-concerns/",
        source: "TMZ.com",
        image:
          "https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg",
        category: "general",
        language: "en",
        country: "us",
        published_at: "2020-08-05T05:47:24+00:00",
      },
    ];

    return (
      <div>
        <h5 className="slider-header">{this.props.type}</h5>
        <ReactSlider {...settings}>
          {items.map((item, index) => (
            <SliderCard key={index} item={item} />
          ))}
        </ReactSlider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.news.articles,
  };
};

export default connect(mapStateToProps, { getArticles })(Slider);
