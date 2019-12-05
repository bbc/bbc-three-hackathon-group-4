import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Modal from './modal';
import 'bootstrap/dist/css/bootstrap.min.css'

am4core.useTheme(am4themes_animated);

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = { showMoadel: false }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click')
    this.setState({ showMoadel: true });
  }

  componentDidMount() {
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    chart.titles.create().text = 'United Kingdom';
    chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/ukHigh.json";
    chart.geodataSource.events.on("parseended", function (ev) {
      let data = [];
      for (var i = 0; i < ev.target.data.features.length; i++) {
        data.push({
          id: ev.target.data.features[i].id,
          value: Math.round(Math.random() * 10000)
        })
      }
      polygonSeries.data = data;
    })

    chart.projection = new am4maps.projections.Mercator();

    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
      min: chart.colors.getIndex(1).brighten(1),
      max: chart.colors.getIndex(1).brighten(-0.3)
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series tooltip
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    const cb = (ev) => {
      // zoom to an object
      ev.target.series.chart.zoomToMapObject(ev.target);

      // get object info
      console.log(ev.target.dataItem.dataContext.name);

      this.handleClick();
    }

    polygonTemplate.events.on("hit", cb);

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    console.log(this.state.showMoadel);
    const Display = this.state.showMoadel ? <Modal/> : null;
    return (
      <div>
        <div id="chartdiv" style={{ width: "100%", height: "800px" }}></div>
        {Display}
      </div>
    );
  }
}

export default Map;