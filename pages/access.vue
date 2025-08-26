<template>
    <div class="section infomation">
      <v-container fluid class="container">
        <!-- mobile navigation -->
        <mobile-tool></mobile-tool>
        <div class="section infomation">
      <base-title class="section_title" :title="map"></base-title>
          <div class="map">
            <v-layout align-center justify-center >
              <v-flex xs10 sm9 md9 lg12>
                <base-text :text="mapText1"></base-text>
                <base-text :text="mapText2"></base-text>
                <base-text :text="mapText3"></base-text>
                <p class="text">・地図はこちら、 <a href="https://maps.app.goo.gl/hamaCNmd1jroe4SB8" target="_blank"> Google Map</a></p>
                
              </v-flex>       
            </v-layout>      
            <!-- <v-layout v-resize="onResize" align-center justify-center>
              <v-flex xs12 sm12 md12 lg12>
                <base-map :map-width="windowSize.x" :map-height="windowSize.y"></base-map>
              </v-flex>
            </v-layout> -->
          </div> 
         <!-- <base-title class="section_title" :title="store"></base-title>
          <div class="infomation">
            <v-container grid-list-md>
              <v-layout align-start justify-start row wrap>
                <v-flex xs12 sm12 md12 lg7>
                  <base-info></base-info>
                </v-flex>                
              </v-layout>
            </v-container>
          </div> -->
        </div>
      </v-container>
    </div>
</template>
    
<script>
import BaseTitle from '~/components/BaseTitle.vue'
import BaseSubtitle from '~/components/BaseSubtitle.vue'
import BaseInfo from '~/components/BaseInfo.vue'
import BaseMap from '~/components/BaseMap.vue'
import BaseText from '~/components/BaseText.vue'
import BaseInstagram from '~/components/BaseInstagram.vue'
import MobileTool from '~/components/MobileTool.vue'

export default {
  layouts: 'default',
  components: {
    BaseTitle,
    BaseSubtitle,
    BaseText,
    BaseInfo,
    BaseMap,
    BaseInstagram,
    MobileTool
  },
  data () {
    return {
      infoTitle: 'INFOMATION',
      store: '店舗情報',
      windowSize: {
        x: 0,
        y: 0,
      },
      map: 'ACCESS',
      mapText1: '・最寄駅 ：京王線「笹塚」、丸ノ内線「中野富士見町」、中央線「中野駅」',
      mapText2: '・バス利用：京王バス「新山小学校前」下車',
      mapText3: '・徒歩：中野富士見町・笹塚駅からは約15分',
      store: 'STORE',
    }
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth * 0.7, y: window.innerHeight * 0.7}
    }
  },
  asyncData({ env }) {
    return { notice: env.notice }
    }
}
</script>

<style lang="scss" scoped>
a {
  color: #ec1810;
  text-decoration: none;
  opacity: 0.9;
}

.text {
    font-family: 'Sawarabi Gothic';
    font-size: 1.1rem;
    letter-spacing: 0;
}

a:hover {
  opacity: 0.5;
}

.container {
  padding-top: 0;
}
.map {
  margin-bottom: 64px;
}
</style>
