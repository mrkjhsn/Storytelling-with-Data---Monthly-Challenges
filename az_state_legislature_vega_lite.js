const az_state_legislature = {
    "config": {
      "view": {"continuousWidth": 800, "continuousHeight": 800, "stroke": null}
    },
     "width": 800,  // Set the width of the visualization
    "height": 800,  // Set the height of the visualization
    "vconcat": [
      {
        "data": {"name": "data-a27ef201834c15f1512d534ef20fdf75"},
        "mark": {"type": "area"},
        "encoding": {
          "color": {
            "condition": {
              "param": "param_26",
              "value": "DarkOrange",
              "empty": false
            },
            "value": "SteelBlue"
          },
          "column": {
            "field": "YEAR",
            "header": {"labelFontSize": 15, "labelPadding": -10},
            "spacing": 0,
            "title": "",
            "type": "quantitative"
          },
          "tooltip": {"field": "TOTAL", "format": ",.0f", "type": "quantitative"},
          "x": {
            "axis": null,
            "field": "TOTAL",
            "stack": "center",
            "type": "quantitative"
          },
          "y": {
            "axis": {
              "domain": false,
              "grid": false,
              "labelFont": "Arial",
              "labelFontSize": 15,
              "offset": 15,
              "ticks": false,
              "title": ""
            },
            "field": "STATUS",
            "sort": "ascending",
            "type": "nominal"
          }
        },
        "height": 150,
        "name": "view_8",
        "title": {
          "text": "Arizona State Legislature",
          "anchor": "middle",
          "color": "black",
          "dx": 60,
          "dy": -20,
          "fontSize": 20,
          "subtitle": "A look at legislation trends within each legislative session in the last 15 years",
          "subtitlePadding": 6
        },
        "width": 75
      },
      {
        "data": {"name": "data-065ebfc79e9e9287ce0d6b9c5a36fc9d"},
        "mark": {"type": "area"},
        "encoding": {
          "color": {
            "condition": {
              "param": "param_25",
              "value": "DarkOrange",
              "empty": false
            },
            "value": "SteelBlue"
          },
          "column": {
            "field": "YEAR",
            "header": {"labelFontSize": 15, "labelPadding": -10},
            "spacing": 0,
            "title": "",
            "type": "quantitative"
          },
          "tooltip": {"field": "TOTAL", "format": ",.0f", "type": "quantitative"},
          "x": {
            "axis": null,
            "field": "TOTAL",
            "stack": "center",
            "type": "quantitative"
          },
          "y": {
            "axis": {
              "domain": false,
              "grid": false,
              "labels": false,
              "ticks": false,
              "title": ""
            },
            "field": "STATUS",
            "sort": "ascending",
            "type": "nominal"
          }
        },
        "height": 150,
        "name": "view_9",
        "width": 75
      },
      {
        "data": {"name": "data-710a31f7ce1ccd35fa1a9755af7b41a4"},
        "mark": {"type": "area"},
        "encoding": {
          "color": {
            "condition": {
              "param": "param_24",
              "value": "DarkOrange",
              "empty": false
            },
            "value": "SteelBlue"
          },
          "column": {
            "field": "YEAR",
            "header": {"labelFontSize": 15, "labelPadding": -10},
            "spacing": 0,
            "title": "",
            "type": "quantitative"
          },
          "tooltip": {"field": "TOTAL", "format": ",.0f", "type": "quantitative"},
          "x": {
            "axis": null,
            "field": "TOTAL",
            "stack": "center",
            "type": "quantitative"
          },
          "y": {
            "axis": {
              "domain": false,
              "grid": false,
              "labels": false,
              "ticks": false,
              "title": ""
            },
            "field": "STATUS",
            "sort": "ascending",
            "type": "nominal"
          }
        },
        "height": 150,
        "name": "view_10",
        "width": 75
      }
    ],
    "params": [
      {
        "name": "param_26",
        "select": {"type": "point", "on": "mouseover"},
        "views": ["view_8"]
      },
      {
        "name": "param_25",
        "select": {"type": "point", "on": "mouseover"},
        "views": ["view_9"]
      },
      {
        "name": "param_24",
        "select": {"type": "point", "on": "mouseover"},
        "views": ["view_10"]
      }
    ],
    "spacing": -200,
    "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
    "datasets": {
      "data-a27ef201834c15f1512d534ef20fdf75": [
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 665,
          "SENATE": 493,
          "TOTAL": 1158,
          "YEAR": 2013
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 171,
          "SENATE": 111,
          "TOTAL": 282,
          "YEAR": 2013
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 155,
          "SENATE": 101,
          "TOTAL": 256,
          "YEAR": 2013
        },
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 862,
          "SENATE": 533,
          "TOTAL": 1395,
          "YEAR": 2012
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 235,
          "SENATE": 154,
          "TOTAL": 389,
          "YEAR": 2012
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 219,
          "SENATE": 144,
          "TOTAL": 363,
          "YEAR": 2012
        },
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 726,
          "SENATE": 624,
          "TOTAL": 1350,
          "YEAR": 2011
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 173,
          "SENATE": 213,
          "TOTAL": 386,
          "YEAR": 2011
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 161,
          "SENATE": 196,
          "TOTAL": 357,
          "YEAR": 2011
        },
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 788,
          "SENATE": 445,
          "TOTAL": 1233,
          "YEAR": 2010
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 225,
          "SENATE": 127,
          "TOTAL": 352,
          "YEAR": 2010
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 214,
          "SENATE": 124,
          "TOTAL": 338,
          "YEAR": 2010
        },
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 653,
          "SENATE": 480,
          "TOTAL": 1133,
          "YEAR": 2009
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 108,
          "SENATE": 105,
          "TOTAL": 213,
          "YEAR": 2009
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 97,
          "SENATE": 94,
          "TOTAL": 190,
          "YEAR": 2009
        }
      ],
      "data-065ebfc79e9e9287ce0d6b9c5a36fc9d": [
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 667,
          "SENATE": 539,
          "TOTAL": 1206,
          "YEAR": 2018
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 212,
          "SENATE": 158,
          "TOTAL": 370,
          "YEAR": 2018
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 191,
          "SENATE": 156,
          "TOTAL": 347,
          "YEAR": 2018
        },
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 547,
          "SENATE": 532,
          "TOTAL": 1079,
          "YEAR": 2017
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 176,
          "SENATE": 179,
          "TOTAL": 353,
          "YEAR": 2017
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 170,
          "SENATE": 174,
          "TOTAL": 344,
          "YEAR": 2017
        },
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 708,
          "SENATE": 539,
          "TOTAL": 1247,
          "YEAR": 2016
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 217,
          "SENATE": 171,
          "TOTAL": 388,
          "YEAR": 2016
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 213,
          "SENATE": 161,
          "TOTAL": 374,
          "YEAR": 2016
        },
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 683,
          "SENATE": 480,
          "TOTAL": 1163,
          "YEAR": 2015
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 200,
          "SENATE": 144,
          "TOTAL": 344,
          "YEAR": 2015
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 187,
          "SENATE": 137,
          "TOTAL": 324,
          "YEAR": 2015
        },
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 711,
          "SENATE": 494,
          "TOTAL": 1205,
          "YEAR": 2014
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 194,
          "SENATE": 111,
          "TOTAL": 305,
          "YEAR": 2014
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 176,
          "SENATE": 104,
          "TOTAL": 280,
          "YEAR": 2014
        }
      ],
      "data-710a31f7ce1ccd35fa1a9755af7b41a4": [
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 826,
          "SENATE": 736,
          "TOTAL": 1562,
          "YEAR": 2023
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 157,
          "SENATE": 191,
          "TOTAL": 348,
          "YEAR": 2023
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 102,
          "SENATE": 103,
          "TOTAL": 205,
          "YEAR": 2023
        },
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 873,
          "SENATE": 740,
          "TOTAL": 1613,
          "YEAR": 2022
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 220,
          "SENATE": 172,
          "TOTAL": 392,
          "YEAR": 2022
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 218,
          "SENATE": 170,
          "TOTAL": 388,
          "YEAR": 2022
        },
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 923,
          "SENATE": 851,
          "TOTAL": 1774,
          "YEAR": 2021
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 239,
          "SENATE": 236,
          "TOTAL": 475,
          "YEAR": 2021
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 229,
          "SENATE": 218,
          "TOTAL": 447,
          "YEAR": 2021
        },
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 913,
          "SENATE": 694,
          "TOTAL": 1607,
          "YEAR": 2020
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 21,
          "SENATE": 69,
          "TOTAL": 90,
          "YEAR": 2020
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 21,
          "SENATE": 69,
          "TOTAL": 90,
          "YEAR": 2020
        },
        {
          "STATUS": "Bills Introduced ",
          "HOUSE": 760,
          "SENATE": 558,
          "TOTAL": 1318,
          "YEAR": 2019
        },
        {
          "STATUS": "Sent to Governor",
          "HOUSE": 171,
          "SENATE": 160,
          "TOTAL": 331,
          "YEAR": 2019
        },
        {
          "STATUS": "Signed Into Law",
          "HOUSE": 165,
          "SENATE": 156,
          "TOTAL": 321,
          "YEAR": 2019
        }
      ]
    }
  }
