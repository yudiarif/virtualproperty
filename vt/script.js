(function(){
    var script = {
 "desktopMipmappingEnabled": false,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_A99D320F_B94D_2A5D_41D8_2B3BE7A998AD], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93_playlist,this.mainPlayList]); this.playList_2E28018D_0FDB_4B8B_41AC_941C9DEE14A5.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_A99D720F_B94D_2A5D_41D1_02BED037B3EE].forEach(function(component) { component.set('visible', false); }) }",
 "shadow": false,
 "downloadEnabled": false,
 "id": "rootPlayer",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "children": [
  "this.MainViewer",
  "this.MapViewer",
  "this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93",
  "this.Container_A99EE20F_B94D_2A5D_41D6_EDC537187D89"
 ],
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 20,
 "borderSize": 0,
 "class": "Player",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "definitions": [{
 "easing": "linear",
 "class": "SlideInEffect",
 "id": "effect_A639ADD6_B9F2_D9CF_41CF_EAD4AE403A7B",
 "duration": 500,
 "from": "bottom"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_017C16EA_0F3B_498E_4199_06A9A1FEA3F2",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_2E28318D_0FDB_4B8B_41AC_1E279269D2F0"
},
{
 "buttonToggleHotspots": "this.IconButton_A99D020F_B94D_2A5D_41E2_8BFD4C75CC3F",
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "buttonToggleGyroscope": "this.IconButton_A99D320F_B94D_2A5D_41D8_2B3BE7A998AD",
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_A99D420E_B94D_2A5F_41DF_AC8E311ABF99",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true
},
{
 "easing": "quad_in",
 "class": "SlideOutEffect",
 "to": "left",
 "id": "effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E",
 "duration": 400
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2E3461CB_0FDB_4B8E_4193_A6FE5DF6BDAD",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -25.39,
  "pitch": 0
 }
},
{
 "easing": "linear",
 "class": "SlideOutEffect",
 "to": "bottom",
 "id": "effect_A6399DD6_B9F2_D9CF_41E4_66B28C3AF36B",
 "duration": 500
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_1FDB4009_0F27_488B_4155_DB2EF14DDE2C"
 ],
 "hfovMin": "150%",
 "label": "Kicen",
 "id": "panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 154.61,
   "yaw": -63.39,
   "panorama": "this.panorama_0165CB18_0F3B_5889_4174_76F99568AF7F",
   "distance": 1
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_017C16EA_0F3B_498E_4199_06A9A1FEA3F2",
   "x": 283.5,
   "angle": 118.76,
   "y": 328.5,
   "class": "PanoramaMapLocation"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_t.jpg"
},
{
 "movementMode": "constrained",
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.94,
  "pitch": 1.65
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2E3FE1EB_0FDB_4B8F_41A6_4E091CFA0F08",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 116.61,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "camera": "this.panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_camera",
   "media": "this.panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_camera",
   "media": "this.panorama_0165CB18_0F3B_5889_4174_76F99568AF7F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93_playlist, 1, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93_playlist"
},
{
 "easing": "quad_in",
 "class": "SlideOutEffect",
 "to": "left",
 "id": "effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6",
 "duration": 400
},
{
 "easing": "linear",
 "class": "SlideInEffect",
 "id": "effect_991E0CC1_B9F5_5FC4_41D4_315B0264F295",
 "duration": 500,
 "from": "top"
},
{
 "easing": "quad_in",
 "class": "SlideInEffect",
 "id": "effect_4CD06BFB_5705_AD47_41BD_DD626E481855",
 "duration": 400,
 "from": "left"
},
{
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_1D02046C_0F29_4889_418D_9A9036D557DF",
  "this.overlay_1C9E597F_0F2F_3887_4119_FCA9E5E3B010"
 ],
 "label": "Screenshot (15)",
 "id": "map_017C16EA_0F3B_498E_4199_06A9A1FEA3F2",
 "height": 556,
 "width": 678,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_017C16EA_0F3B_498E_4199_06A9A1FEA3F2.png",
    "class": "ImageResourceLevel",
    "width": 678,
    "height": 556
   },
   {
    "url": "media/map_017C16EA_0F3B_498E_4199_06A9A1FEA3F2_lq.png",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 282,
    "height": 232
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayRadiusScale": 0.19,
 "fieldOfViewOverlayInsideOpacity": 0.57,
 "class": "Map",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/map_017C16EA_0F3B_498E_4199_06A9A1FEA3F2_t.png",
 "fieldOfViewOverlayInsideColor": "#02ECA6",
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_1E7EF28B_0F29_C98E_41A0_394B653B117B"
 ],
 "hfovMin": "150%",
 "label": "Living Room",
 "id": "panorama_0165CB18_0F3B_5889_4174_76F99568AF7F",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -63.39,
   "yaw": 154.61,
   "panorama": "this.panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF",
   "distance": 1
  }
 ],
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_017C16EA_0F3B_498E_4199_06A9A1FEA3F2",
   "x": 502.5,
   "angle": 111.65,
   "y": 330.5,
   "class": "PanoramaMapLocation"
  }
 ],
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_t.jpg"
},
{
 "easing": "quad_in",
 "class": "SlideInEffect",
 "id": "effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368",
 "duration": 400,
 "from": "left"
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_2E2B519D_0FDB_4B8B_4194_44869621ACF7",
  "this.PanoramaPlayListItem_2E2B819D_0FDB_4B8B_41AC_244369E69F6D"
 ],
 "id": "mainPlayList"
},
{
 "easing": "linear",
 "class": "SlideOutEffect",
 "to": "top",
 "id": "effect_991E2CC3_B9F5_5FC5_41DC_0DF77C5749CD",
 "duration": 500
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_017C16EA_0F3B_498E_4199_06A9A1FEA3F2",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_2E28018D_0FDB_4B8B_41AC_941C9DEE14A5"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "toolTipPaddingRight": 6,
 "paddingBottom": 0,
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#7453FC",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "minHeight": 50,
 "borderSize": 0,
 "class": "ViewerArea",
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 100,
 "playbackBarProgressBackgroundColorDirection": "horizontal",
 "progressBarBackgroundColor": [
  "#2ECA6A"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "toolTipOpacity": 1,
 "transitionDuration": 500,
 "playbackBarHeight": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "shadow": false,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 0.96,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "paddingLeft": 0,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 0.93,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "transitionMode": "blending",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#7453FC"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "maxWidth": 300,
 "progressBorderSize": 0,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "paddingBottom": 0,
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "right": "1%",
 "width": 300,
 "playbackBarBorderColor": "#7453FC",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "minHeight": 1,
 "borderSize": 0,
 "class": "ViewerArea",
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingRight": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "height": 250,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "horizontal",
 "progressBarBackgroundColor": [
  "#2ECA6A"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "transitionDuration": 500,
 "playbackBarHeight": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "toolTipTextShadowColor": "#000000",
 "playbackBarBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "maxHeight": 250,
 "shadow": false,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 0.96,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "paddingLeft": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "top": "1%",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "transitionMode": "blending",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#7453FC"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "MapViewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "visible": false,
 "selectedItemLabelFontWeight": "bold",
 "id": "ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93",
 "itemLabelFontColor": "#FFFFFF",
 "paddingBottom": 10,
 "right": "1%",
 "width": 150,
 "itemThumbnailHeight": 75,
 "itemThumbnailWidth": 75,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 300,
 "borderSize": 0,
 "class": "ThumbnailList",
 "itemLabelGap": 10,
 "borderRadius": 5,
 "itemThumbnailShadowColor": "#000000",
 "paddingRight": 20,
 "itemPaddingBottom": 3,
 "minWidth": 150,
 "scrollBarColor": "#FFFFFF",
 "itemMode": "normal",
 "itemOpacity": 1,
 "height": 300,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "gap": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#02ECA6"
 ],
 "itemLabelFontFamily": "Arial",
 "paddingTop": 10,
 "scrollBarOpacity": 0.5,
 "itemBorderRadius": 0,
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailShadowOpacity": 0.8,
 "itemHorizontalAlign": "center",
 "layout": "vertical",
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "maxHeight": 300,
 "shadow": false,
 "itemThumbnailShadow": true,
 "itemThumbnailShadowSpread": 1,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 10,
 "backgroundOpacity": 0.2,
 "itemPaddingTop": 3,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBackgroundColorRatios": [],
 "paddingLeft": 20,
 "itemBackgroundColor": [],
 "bottom": "1%",
 "propagateClick": false,
 "itemThumbnailOpacity": 1,
 "horizontalAlign": "left",
 "itemPaddingRight": 3,
 "itemLabelTextDecoration": "none",
 "backgroundColorDirection": "vertical",
 "itemLabelFontWeight": "normal",
 "playList": "this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93_playlist",
 "itemThumbnailShadowBlurRadius": 4,
 "data": {
  "name": "ThumbnailList1355"
 },
 "itemVerticalAlign": "middle",
 "itemLabelFontSize": 14,
 "scrollBarMargin": 2,
 "itemThumbnailScaleMode": "fit_outside",
 "maxWidth": 150
},
{
 "shadow": false,
 "children": [
  "this.Container_A99CB207_B94D_2A4D_419A_4B4F42B23435",
  "this.Container_A99C020C_B94D_2A43_41E2_B8C12B8F0754"
 ],
 "id": "Container_A99EE20F_B94D_2A5D_41D6_EDC537187D89",
 "left": "0%",
 "width": 200,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "data": {
  "name": "--- LEFT PANEL 2"
 },
 "height": "100%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "layout": "absolute"
},
{
 "pressedIconURL": "skin/IconButton_A99D720F_B94D_2A5D_41D1_02BED037B3EE_pressed.png",
 "maxHeight": 60,
 "shadow": false,
 "id": "IconButton_A99D720F_B94D_2A5D_41D1_02BED037B3EE",
 "width": 60,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 60,
 "mode": "toggle",
 "minWidth": 1,
 "propagateClick": false,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A99D720F_B94D_2A5D_41D1_02BED037B3EE.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton Fullscreen"
 },
 "cursor": "hand",
 "maxWidth": 60,
 "transparencyActive": true
},
{
 "pressedIconURL": "skin/IconButton_A99D020F_B94D_2A5D_41E2_8BFD4C75CC3F_pressed.png",
 "maxHeight": 60,
 "shadow": false,
 "id": "IconButton_A99D020F_B94D_2A5D_41E2_8BFD4C75CC3F",
 "width": 60,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 60,
 "mode": "toggle",
 "minWidth": 1,
 "propagateClick": false,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A99D020F_B94D_2A5D_41E2_8BFD4C75CC3F.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton Hs visibility"
 },
 "cursor": "hand",
 "maxWidth": 60,
 "transparencyActive": true
},
{
 "pressedIconURL": "skin/IconButton_A99D320F_B94D_2A5D_41D8_2B3BE7A998AD_pressed.png",
 "maxHeight": 60,
 "shadow": false,
 "id": "IconButton_A99D320F_B94D_2A5D_41D8_2B3BE7A998AD",
 "width": 60,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 60,
 "mode": "toggle",
 "minWidth": 1,
 "propagateClick": false,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A99D320F_B94D_2A5D_41D8_2B3BE7A998AD.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "cursor": "hand",
 "maxWidth": 60,
 "transparencyActive": true
},
{
 "maxHeight": 60,
 "shadow": false,
 "id": "IconButton_A99D420E_B94D_2A5F_41DF_AC8E311ABF99",
 "width": 60,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 60,
 "mode": "push",
 "minWidth": 1,
 "propagateClick": false,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A99D420E_B94D_2A5F_41DF_AC8E311ABF99.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand",
 "maxWidth": 60,
 "transparencyActive": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0165CB18_0F3B_5889_4174_76F99568AF7F, this.camera_2E3461CB_0FDB_4B8E_4193_A6FE5DF6BDAD); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1D2DDE4D_0F2B_588A_419D_E657F8AA9911",
   "yaw": -63.39,
   "pitch": -30.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 23.05
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.39,
   "hfov": 23.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -30.71
  }
 ],
 "id": "overlay_1FDB4009_0F27_488B_4155_DB2EF14DDE2C",
 "data": {
  "label": "tengah"
 }
},
{
 "map": {
  "width": 35,
  "x": 266,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_017C16EA_0F3B_498E_4199_06A9A1FEA3F2_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 311,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 35,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 266,
  "y": 311,
  "width": 35,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_017C16EA_0F3B_498E_4199_06A9A1FEA3F2_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 35,
     "height": 35
    }
   ]
  },
  "height": 35
 },
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_1D02046C_0F29_4889_418D_9A9036D557DF",
 "data": {
  "label": "Image"
 }
},
{
 "map": {
  "width": 35,
  "x": 485,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_017C16EA_0F3B_498E_4199_06A9A1FEA3F2_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16
    }
   ]
  },
  "y": 313,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 35,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 485,
  "y": 313,
  "width": 35,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_017C16EA_0F3B_498E_4199_06A9A1FEA3F2_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 35,
     "height": 35
    }
   ]
  },
  "height": 35
 },
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_1C9E597F_0F2F_3887_4119_FCA9E5E3B010",
 "data": {
  "label": "Image"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF, this.camera_2E3FE1EB_0FDB_4B8F_41A6_4E091CFA0F08); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1D2CEE4D_0F2B_588A_4195_F8A8B9BCD0A3",
   "yaw": 154.61,
   "pitch": -24.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 23.92
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.61,
   "hfov": 23.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -24.13
  }
 ],
 "id": "overlay_1E7EF28B_0F29_C98E_41A0_394B653B117B",
 "data": {
  "label": "Arrow 08b"
 }
},
{
 "camera": "this.panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_camera",
 "media": "this.panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2E2B519D_0FDB_4B8B_4194_44869621ACF7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2E2B519D_0FDB_4B8B_4194_44869621ACF7"
},
{
 "camera": "this.panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_camera",
 "media": "this.panorama_0165CB18_0F3B_5889_4174_76F99568AF7F",
 "end": "this.trigger('tourEnded')",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2E2B819D_0FDB_4B8B_41AC_244369E69F6D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2E2B819D_0FDB_4B8B_41AC_244369E69F6D"
},
{
 "shadow": false,
 "children": [
  "this.Container_A99C420C_B94D_2A43_41DA_A0E0CE32E69E",
  "this.IconButton_A99C520C_B94D_2A43_41E7_0938547A306C"
 ],
 "id": "Container_A99CB207_B94D_2A4D_419A_4B4F42B23435",
 "left": "0%",
 "width": 66,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "height": "100%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "layout": "absolute"
},
{
 "shadow": false,
 "children": [
  "this.Container_A99C120C_B94D_2A43_41C5_B14D9386411A",
  "this.IconButton_A99ED20F_B94D_2A5D_41DC_D4F39B937EE0"
 ],
 "id": "Container_A99C020C_B94D_2A43_41E2_B8C12B8F0754",
 "left": "0%",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "class": "Container",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "height": "100%",
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "layout": "absolute"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_1D2DDE4D_0F2B_588A_419D_E657F8AA9911",
 "colCount": 5,
 "class": "AnimatedImageResource",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_01045245_0F3B_C8FB_41A4_9EFB387EB6AF_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 600,
   "height": 385
  }
 ],
 "rowCount": 7
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_1D2CEE4D_0F2B_588A_4195_F8A8B9BCD0A3",
 "colCount": 5,
 "class": "AnimatedImageResource",
 "frameCount": 32,
 "levels": [
  {
   "url": "media/panorama_0165CB18_0F3B_5889_4174_76F99568AF7F_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 600,
   "height": 385
  }
 ],
 "rowCount": 7
},
{
 "shadow": false,
 "id": "Container_A99C420C_B94D_2A43_41DA_A0E0CE32E69E",
 "left": "0%",
 "width": 36,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.5,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "backgroundColor": [
  "#02ECA6"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "gap": 10,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Container black"
 },
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "height": "100%"
},
{
 "pressedIconURL": "skin/IconButton_A99C520C_B94D_2A43_41E7_0938547A306C_pressed.png",
 "maxHeight": 50,
 "shadow": false,
 "id": "IconButton_A99C520C_B94D_2A43_41E7_0938547A306C",
 "left": 10,
 "width": 44,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_A99C520C_B94D_2A43_41E7_0938547A306C_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "bottom": "40%",
 "paddingLeft": 0,
 "mode": "push",
 "minWidth": 1,
 "top": "40%",
 "click": "this.setComponentVisibility(this.Container_A99C020C_B94D_2A43_41E2_B8C12B8F0754, true, 0, this.effect_4CD06BFB_5705_AD47_41BD_DD626E481855, 'showEffect', false); this.setComponentVisibility(this.Container_A99CB207_B94D_2A4D_419A_4B4F42B23435, false, 0, this.effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6, 'hideEffect', false)",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A99C520C_B94D_2A43_41E7_0938547A306C.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand",
 "maxWidth": 50,
 "transparencyActive": true
},
{
 "shadow": false,
 "data": {
  "name": "Container"
 },
 "id": "Container_A99C120C_B94D_2A43_41C5_B14D9386411A",
 "left": "0%",
 "width": 171,
 "paddingBottom": 40,
 "verticalAlign": "middle",
 "backgroundOpacity": 0.5,
 "children": [
  "this.Container_A99D920E_B94D_2A5F_41E5_6BBF7A14EB00"
 ],
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 40,
 "propagateClick": true,
 "backgroundColor": [
  "#02ECA6"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 40,
 "horizontalAlign": "center",
 "gap": 10,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "backgroundColorDirection": "vertical",
 "paddingTop": 40,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "height": "100%"
},
{
 "pressedIconURL": "skin/IconButton_A99ED20F_B94D_2A5D_41DC_D4F39B937EE0_pressed.png",
 "maxHeight": 50,
 "shadow": false,
 "id": "IconButton_A99ED20F_B94D_2A5D_41DC_D4F39B937EE0",
 "width": 44,
 "paddingBottom": 0,
 "right": 9,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_A99ED20F_B94D_2A5D_41DC_D4F39B937EE0_rollover.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "bottom": "40%",
 "paddingLeft": 0,
 "mode": "push",
 "minWidth": 1,
 "top": "40%",
 "click": "this.setComponentVisibility(this.Container_A99C020C_B94D_2A43_41E2_B8C12B8F0754, false, 0, this.effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E, 'hideEffect', false); this.setComponentVisibility(this.Container_A99CB207_B94D_2A4D_419A_4B4F42B23435, true, 0, this.effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368, 'showEffect', false)",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A99ED20F_B94D_2A5D_41DC_D4F39B937EE0.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand",
 "maxWidth": 50,
 "transparencyActive": true
},
{
 "shadow": false,
 "children": [
  "this.Container_A99DB20E_B94D_2A5F_41E3_3D7E73A0218B"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "id": "Container_A99D920E_B94D_2A5F_41E5_6BBF7A14EB00",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "class": "Container",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 533,
 "propagateClick": true,
 "horizontalAlign": "center",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "data": {
  "name": "-Container footer"
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.IconButton_A8A6FE7D_B95F_7AC2_41D5_1B9B0FB9B902",
  "this.IconButton_A99D420E_B94D_2A5F_41DF_AC8E311ABF99",
  "this.IconButton_A99D720F_B94D_2A5D_41D1_02BED037B3EE",
  "this.IconButton_A99D020F_B94D_2A5D_41E2_8BFD4C75CC3F",
  "this.IconButton_A99D320F_B94D_2A5D_41D8_2B3BE7A998AD",
  "this.IconButton_A7496980_B937_2643_41DF_3AED7DCF18CA"
 ],
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "id": "Container_A99DB20E_B94D_2A5F_41E3_3D7E73A0218B",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "class": "Container",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 533,
 "propagateClick": false,
 "horizontalAlign": "center",
 "gap": 16,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "data": {
  "name": "-Container settings"
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical"
},
{
 "maxHeight": 60,
 "shadow": false,
 "id": "IconButton_A8A6FE7D_B95F_7AC2_41D5_1B9B0FB9B902",
 "width": 60,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_A8A6FE7D_B95F_7AC2_41D5_1B9B0FB9B902_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 60,
 "mode": "push",
 "minWidth": 1,
 "propagateClick": false,
 "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, this.effect_991E0CC1_B9F5_5FC4_41D4_315B0264F295, 'showEffect', false) } else { this.setComponentVisibility(this.MapViewer, false, 0, this.effect_991E2CC3_B9F5_5FC5_41DC_0DF77C5749CD, 'hideEffect', false) }",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A8A6FE7D_B95F_7AC2_41D5_1B9B0FB9B902.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton Floorplan"
 },
 "cursor": "hand",
 "maxWidth": 60,
 "transparencyActive": true
},
{
 "maxHeight": 60,
 "shadow": false,
 "id": "IconButton_A7496980_B937_2643_41DF_3AED7DCF18CA",
 "width": 60,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_A7496980_B937_2643_41DF_3AED7DCF18CA_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 60,
 "mode": "push",
 "minWidth": 1,
 "propagateClick": false,
 "click": "if(!this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93.get('visible')){ this.setComponentVisibility(this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93, true, 0, this.effect_A639ADD6_B9F2_D9CF_41CF_EAD4AE403A7B, 'showEffect', false) } else { this.setComponentVisibility(this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93, false, 0, this.effect_A6399DD6_B9F2_D9CF_41E4_66B28C3AF36B, 'hideEffect', false) }",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A7496980_B937_2643_41DF_3AED7DCF18CA.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton Location"
 },
 "cursor": "hand",
 "maxWidth": 60,
 "transparencyActive": false
}],
 "propagateClick": false,
 "horizontalAlign": "left",
 "gap": 10,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "mouseWheelEnabled": true,
 "scripts": {
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "existsKey": function(key){  return key in window; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); }
 },
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "data": {
  "name": "Player435"
 },
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_A99D720F_B94D_2A5D_41D1_02BED037B3EE",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "height": "100%"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
