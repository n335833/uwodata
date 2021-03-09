var sheetUrl =
  "https://spreadsheets.google.com/feeds/list/103jMpae8cO-caBf1n1hYWMaVC6wWZ6J_OT_QbhWyywA/1/public/values?alt=json";

var sheetUrl2 =
  "https://spreadsheets.google.com/feeds/list/103jMpae8cO-caBf1n1hYWMaVC6wWZ6J_OT_QbhWyywA/2/public/values?alt=json";


new Vue({
  el: "#app",
  data: {
    entries: null,
    entries2: null
  },
  components: {
    ship: {
      props: ["entry"],
      template: `
<div class="element" id="element"><div :class="entry.gsx$rank.$t">
      <div>{{entry.gsx$cname.$t}}</div>
       <img :src="'https://raw.githubusercontent.com/n335833/uwodata/main/ship/'+entry.gsx$pic.$t+'.png'"  class="img"/>
      <div class="col1">
      <div>冒險{{entry.gsx$adv.$t}}</div>
      <div>交易{{entry.gsx$mer.$t}}</div>
      <div>戰鬥{{entry.gsx$bat.$t}}</div>
      <div>尺寸{{entry.gsx$size.$t}}</div></div>
       <div class="col2">
      <div>耐久{{entry.gsx$hp.$t}}</div>
      <div>水手{{entry.gsx$minsailor.$t}}/{{entry.gsx$maxsailor.$t}}</div>
      <div>貨艙{{entry.gsx$cargo.$t}}</div>  
       <div>炮門{{entry.gsx$cannon.$t}}</div>    
       </div>  <div class="col3">
         <div>縱帆{{entry.gsx$lateen.$t}}</div>
      <div>橫帆{{entry.gsx$square.$t}}</div>     
      <div>抗波{{entry.gsx$waveresistance.$t}}</div>
      <div>裝甲{{entry.gsx$armor.$t}}</div>
      <div>划槳{{entry.gsx$paddle.$t}}</div></div>
      </div>`
    },
    sailor: {
      props: ["entry"],
      template: `
<div class="element" id="element"><div :class="entry.gsx$rank.$t">
      <div>{{entry.gsx$cname.$t}}</div>
      <img :src="'https://raw.githubusercontent.com/n335833/uwodata/main/images/'+entry.gsx$pic.$t+'.png'"  class="img2"/>
       <div class="col4">
      <div>魅　力{{entry.gsx$ml.$t}}</div>
      <div>謀略術{{entry.gsx$mrs.$t}}</div>  
       <div>觀察力{{entry.gsx$gcl.$t}}</div>    
       </div>  <div class="col5">
         <div>武　力{{entry.gsx$wl.$t}}</div>
      <div>統率力{{entry.gsx$tsl.$t}}</div>     
      <div>說服力{{entry.gsx$sfl.$t}}</div>
   <div>合　計{{entry.gsx$total.$t}}</div></div>
      </div>`
    }
  },
  watch: {
   // currentPage: "fetchData"
  },
  created: function () {
    this.fetchData();
    this.fetchData2();
    this.music();
  },
  mounted: function () {
    this.fetchData();
      this.fetchData2();
  },
  methods: {
    init: function () {},
    fetchData: function () {
      var xhr = new XMLHttpRequest();
      var self = this;
      xhr.open("GET", sheetUrl);
      xhr.onload = function () {
        self.entries = JSON.parse(xhr.responseText);
        self.entries = self.entries.feed.entry;
       // console.log(self.entry);
      };
      xhr.send();
    },
      fetchData2: function () {
      var xhr2 = new XMLHttpRequest();
        var self2 = this;
      xhr2.open("GET", sheetUrl2);
      xhr2.onload = function () {
        self2.entries2 = JSON.parse(xhr2.responseText);
        self2.entries2 = self2.entries2.feed.entry;
       // console.log(this.entry);
      };
      xhr2.send();
      
    },
    music: function () {
      var Music;

      // Create audio object
      Music = new Audio();
      //     Music.src = 'https://lab.hengpatrick.fr/codevember-assets/subaqueous.mp3';

      //   "https://raw.githubusercontent.com/n335833/uwodata/main/music/V_SEA.OGG";
      Music.controls = false;
      Music.crossOrigin = "anonymous";
      Music.loop = true;
      Music.autoplay = true;
      Music.play();
    }
    //functions
  }
});
