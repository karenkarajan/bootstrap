angular.module('ui.bootstrap.demo').controller('VectorMapDemoCtrl', function ($scope) {
  var marker_data;
  marker_data = [{
    latLng: [40.71, -74],
    name: 'New York',
    data: {region: 'Americas', metros: 'New York', ports: '1', virtualCircuits: '10', cloudServices: '2'}
  }, {
    latLng: [39.9, 116.4],
    name: 'Beijing',
    data: {region: 'Americas', metros: 'Beijing', ports: '1', virtualCircuits: '10', cloudServices: '7'}
  }, {
    latLng: [31.23, 121.47],
    name: 'Shanghai',
    data: {metros: 'Shanghai', ports: '1', virtualCircuits: '10', cloudServices: '16'}
  }, {
    latLng: [-33.86, 151.2],
    name: 'Sydney', data: {metros: 'Sydney', ports: '1', virtualCircuits: '12', cloudServices: '8'}
  }, {
    latLng: [-37.81, 144.96],
    name: 'Melboune',
    data: {metros: 'Melbourne', ports: '1', virtualCircuits: '10', cloudServices: '11'}
  }, {
    latLng: [37.33, -121.89],
    name: 'San Jose', data: {metros: 'San Jose', ports: '1', virtualCircuits: '2', cloudServices: '6'}
  }];

  $scope.worldMap = {
    map: 'world_mill_en',
    markers: marker_data,
    normalizeFunction: 'polynomial',
    backgroundColor: null,
    zoomOnScroll: !1,
    heigth:500,
    width:1000,
    regionStyle: {initial: {fill: '#EEEFF3'}, hover: {fill: '#0071A4'}},
    markerStyle: {
      initial: {
        'fill': '#BF616A',
        'stroke': 'rgba(191,97,106,.8)',
        'fill-opacity': 1,
        'stroke-width': 9,
        'stroke-opacity': '.5'
      }, hover: {stroke: 'black', 'stroke-width': 2}
    }
  };

});
