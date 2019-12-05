import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Modal from './modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import './map.css'

am4core.useTheme(am4themes_animated);

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = { showMoadel: false, selectedRegion: null }
    this.handleClick = this.handleClick.bind(this);
    this.hideModal = this.hideModal.bind(this)
  }

  handleClick(selectedRegion) {
    this.setState({ showMoadel: true, selectedRegion: selectedRegion });
  }

  hideModal () {
    this.setState({ showMoadel: false });
  }

  componentDidMount() {
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    var regions = {};

    regions["South East England"] = 11;
    regions["South West England"] = 3;
    regions["Greater London"] = 17;
    regions["East of England"] = 6;
    regions["East Midlands"] = 3;
    regions["West Midlands"] = 13;
    regions["Wales"] = 5;
    regions["North West England"] = 10;
    regions["North East England"] = 5;
    regions["Yorkshire and the Humber"] = 8;
    regions["Scotland"] = 7;
    regions["Northern Ireland"] = 3;
    regions["Ireland"] = 0;

    chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/ukHigh.json";
    chart.geodataSource.events.on("parseended", function (ev) {
      let data = [];
      for (var i = 0; i < ev.target.data.features.length; i++) {

        data.push({
          id: ev.target.data.features[i].id,
          value: regions[ev.target.data.features[i].properties.name]
        })
      }
      polygonSeries.data = data;
    })

    chart.projection = new am4maps.projections.Mercator();

    // Pink-ish
    chart.colors.list = [
      am4core.color("#845EC2"),
      am4core.color("#D65DB1"),
      am4core.color("#FF6F91"),
      am4core.color("#FF9671"),
      am4core.color("#FFC75F"),
      am4core.color("#F9F871")
    ];

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
    polygonTemplate.tooltipText = "{name}: {value}%";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    const cb = (ev) => {
      this.handleClick(ev.target.dataItem.dataContext.name);
    }

    polygonTemplate.events.on("hit", cb);

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);

    // Set up heat legend
    let heatLegend = chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "right";
    heatLegend.width = am4core.percent(25);
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 40000000;
    heatLegend.valign = "bottom";

    // Set up custom heat map legend labels using axis ranges
    var minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    minRange.label.text = "Least Viewed";
    var maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    maxRange.label.text = "Most Viewed";

    // Blank out internal heat legend value axis labels
    heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
      return "";
    });

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div>
        <div id="chartdiv"></div>
        <Modal selectedRegion={this.state.selectedRegion} show={this.state.showMoadel} hide={this.hideModal} />
      </div>
    );
  }
}

export default Map;