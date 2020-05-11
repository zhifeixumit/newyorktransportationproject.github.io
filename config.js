var config = {
    style: 'mapbox://styles/yanchaomcp/cka0oauak0x0j1imy0ctnzann',
    accessToken: 'pk.eyJ1IjoieWFuY2hhb21jcCIsImEiOiJjazlxMDRqbzYwZWE1M3NydGF1NmQ4NzVsIn0.5QSCMwT1WAipIpX0Oo83Hg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'How Well Does New York Bike Sharing System Serve New Yorkers?',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'Author: Ziyu Ran, Yanchao Li, Zhifei Xu',
    footer: 'Source: source citations, etc.',
    chapters: [
      {
          title: 'Intro',
          description: 'Citi Bikes are proliferating. It not only tends to arrive at their Manhattan destinations faster than cabs but also represents a greener lifestyle. Besides, with the current condition of the coronavirus crisis, although being a private company, Citi Bike has gained an even more important weight in public transportation services. Since then, we would like to see, how well does Citi Bike serve New Yorkers, especially those who most in need of such an option? This website aims to uses spatial analysis to visualize and examine how well Citi Bike is doing now and give the direction of improvement.',
          location: {
              center: [-73.97341, 40.69114],
              zoom:10.86,
              pitch: 0,
              bearing: 0
          },
      },



        {
            id: 'first identifier',
            title: 'Mapping Out Bike Stations',
            description: 'To figure out who has access to Citi Bike, and who doesn’t, we started with mapping out current Citi Bike stations. Most of the Citi Bike stations are located in Manhattan, with some coverages in Brooklyn and Queens. This February, Citi Bike eventually released its draft map for the plan of expansion in Bronx，seven years after they launched in New York City. Once executed, it will give more transportation options for part of the community there. But in general, although Citi Bike is improving its coverage in the city slowly, there is still a large part of NYC that’s underserved.',
            location: {
                center: [-73.97341, 40.69114],
                zoom:10.86,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [

                {
                    layer: 'bike_station',
                    opacity:1
                }
            ],
            onChapterExit: [
              {
                  layer: 'bike_station',
                  opacity: 1
              },
              {
                  layer: 'bike_station',
                  opacity: 0.5
              }
            ]
        },




        {
            id: 'second identifier',
            title: 'Who are Citi Bike Serving',
            // image: './path/to/image/source.png',
            description: 'By overlaying the Citi Bike stations and New Yorker\'s Income map, we can see that the people Citi Bike is currently serving are the wealthiest and the most privileged ones, while most of the neighborhoods that experience extreme poverty lie outside Citi Bikes service area. This found out is not surprising, two years ago a report from McGill University, founded by New York Communities for Change (NYCC), has found out that New Yorkers living inside Citi Bikes service area have a median household income of $90,400, compared to an average of $54,700 for those excluded. Things haven\'t changed much yet since the report published.',
            location: {
                  center: [-73.97341, 40.69114],
                  zoom:10.86,
                  pitch: 0,
                  bearing: 0
              },
            onChapterEnter: [
                {
                    layer: 'income',
                    opacity: 1
                }
            ],
            onChapterExit: [

              {
                  layer: 'income',
                  opacity: 0
                }
              ]
          },



          {
              id: 'third identifier',
              title: 'Where are Low-Income Neighborhoods?',
              // image: './path/to/image/source.png',
              description: 'Next, identify the neighborhoods that belong to the low transport accessibility ones. We plan to overlap three public transport layers(in dots) and their service buffers(in areas).',
              location: {
                    center: [-73.97341, 40.69114],
                    zoom:10.86,
                    pitch: 0,
                    bearing: 0
                },
              onChapterEnter: [
                  // {
                  //     layer: 'bus_buffer',
                  //     opacity: 0
                  // },
                  {
                      layer: 'low_income',
                      opacity: 1
                  }
              ],
              onChapterExit: [
                // {
                //     layer: 'bus_buffer',
                //     opacity: 1
                // },
                {
                    layer: 'low_income',
                    opacity: 0
                  }
                ]
            },




        {
            id: 'other-identifier',
            title: 'Mapping Out Subway Access',
            // image: './path/to/image/source.png',
            description: 'As we know, the low-income community relies more on public transportation services, and they are the ones who can benefit most from having access to shared bikes if they are not living next to a public transportation stops. By mapping out the area along with subway stations, we can see that the Citi Bike network mainly serves a privileged population that already has strong transit options. Future expansions of bike-sharing in NYC, either through the existing Citi Bike system or through the introduction of new competitors, should expand the effective size of the population who can access the subway in neighborhoods of high social need.',
            location: {
                  center: [-73.97341, 40.69114],
                  zoom:10.86,
                  pitch: 0,
                  bearing: 0
              },
            onChapterEnter: [
            //     {
            //         layer: 'subway_buffer',
            //         opacity: 0
            //     },
                {
                    layer: 'subway_buffer',
                    opacity: 1
                }
            ],
            onChapterExit: [
              // {
              //     layer: 'subway_buffer',
              //     opacity: 1
              // },
              {
                  layer: 'subway_buffer',
                  opacity: 0
                }
              ]
          },






              {
                      id: 'fifth-id',
                      title: 'Mapping Out Bus Access',
                      // image: './path/to/image/source.png',
                      description: 'The same applies to access to bus services. Bus network has far more reach than the subway network. Thus, the result is the same. Bus services is not as reliable as subway services in some area of NYC, partially because of their number of runs. Bike-sharing can be a powerful way to improve the mobility options of socially disadvantaged communities who struggle to afford car ownership and don’t have reliable bus and subway access. Unfortunately, our analysis finds that the Citi Bike system in New York fails to live up to this promise. ',
                      location: {
                          center: [-73.97341, 40.69114],
                          zoom:10.86,
                          pitch: 0,
                          bearing: 0
                      },
                      onChapterEnter: [
                          {
                              layer: 'bus_buffer',
                              opacity: 0
                          },
                          {
                              layer: 'bus_buffer',
                              opacity: 1
                          }
                      ],
                      onChapterExit: [
                        {
                            layer: 'bus_buffer',
                            opacity: 1
                        },
                        {
                            layer: 'bus_buffer',
                            opacity: 0
                          }
                        ]
                    },


                    {
                            id: 'sixth-id',
                            title: 'Target Area for Improvement',
                            // image: './path/to/image/source.png',
                            description: 'We recommend that Citibike should add more docks in areas with high social vulnerability, and targeting areas with limited access to transit. The highlighted area, where New Yorkers living in transportation dessert, should be the area that Citi Bike most focused on in the next phase.',
                            location: {
                                center: [-73.97341, 40.69114],
                                zoom:10.86,
                                pitch: 0,
                                bearing: 0
                            },
                            onChapterEnter: [
                                // {
                                //     layer: 'subway_buffer',
                                //     opacity: 0
                                // },
                                {
                                    layer: 'area_update',
                                    opacity: 1
                                }
                            ],
                            onChapterExit: [
                              // {
                              //     layer: 'subway_buffer',
                              //     opacity: 1
                              // },
                              {
                                  layer: 'area_update',
                                  opacity: 0
                                }
                              ]
                          },



                          {
                                  id: 'seventh-id',
                                  title: 'Reference',

                                  description: '“Bridging the Boroughs - How Well Does New York’s Bike Sharing System Serve New Yorkers?” by David Wachsmuth, Robin Basalaev-Binder, Natalie Pace and Lou Seltz',
                                  location: {
                                      center: [-73.97341, 40.69114],
                                      zoom:10.86,
                                      pitch: 0,
                                      bearing: 0
                                  },
                                  onChapterEnter: [
                                      // {
                                      //     layer: 'subway_buffer',
                                      //     opacity: 0
                                      // },
                                      {
                                          layer: 'area_update',
                                          opacity: 1
                                      }
                                  ],
                                  onChapterExit: [
                                    // {
                                    //     layer: 'subway_buffer',
                                    //     opacity: 1
                                    // },
                                    {
                                        layer: 'area_update',
                                        opacity: 0
                                      }
                                    ]
                                },
            ]


};