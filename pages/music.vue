<template>
  <v-container fluid class="container">
    <!-- mobile navigation -->
    <mobile-tool></mobile-tool>
    <!-- artist-->
    <div class="section artist">
      <base-title class="section_title" :title="articsTitle"></base-title>
      <v-container grid-list-xl>
        <v-layout align-start justify-end reverse row wrap>
          <v-flex xs12 sm12 md6 lg6>
            <base-text :text="artistText1"></base-text>
            <base-text :text="artistText2"></base-text>
            <base-text :text="artistText3"></base-text>
            <base-text :text="artistText4"></base-text>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6>
            <v-img src="img/band.jpg" aspect-ratio="1.5"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <!-- cd -->
    <div class="section cd">
      <base-title class="section_title" :title="cdTitle"></base-title>
      <base-text :text="cdText"></base-text>
      <v-container grid-list-xl>
        <v-layout align-start row wrap>
          <v-flex
            v-for="(item, index) in cd"
            :key="index"
            xs6 sm6 md5 lg5
          >
            <base-cd
              :cd-url="item.url"
            ></base-cd>
            <base-music
              :file="item.music"
            ></base-music>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import BaseTitle from '~/components/BaseTitle.vue'
import BaseText from '~/components/BaseText.vue'
import BaseSubtitle from '~/components/BaseSubtitle.vue'
import BaseCd from '~/components/BaseCd.vue'
import BaseMusic from '~/components/BaseMusic.vue'
import MobileTool from '~/components/MobileTool.vue'

export default {
  components: {
    BaseTitle,
    BaseText,
    BaseSubtitle,
    BaseCd,
    BaseMusic,
    MobileTool
  },
  data () {
    return {
      articsTitle: 'PUKUMUKU ZOO',
      cdTitle: 'CD',
      artist: 'PUKUMUKU ZOO',
      artistText1: 'PUKUMUKU ZOO（プクムクズ）は南台を拠点に活動しています。',
      artistText2: 'あなたの街のパン祭りに出没するかも？！',
      artistText3: 'Youtubeもぜ覗いてみてください。',
      cdText: '' 
    }
  },
  computed: {
    cd() {
      return this.cds;
    }
  },
  asyncData({ env }) {
    return { cds: env.cds }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 0;
}
.section {
  margin-bottom: 32px;
}
.artist {
  .music__text {
    font-family: 'Sawarabi Gothic';
    font-size: 1.1rem;
    letter-spacing: 0;
    .font_red {
      color: rgba(255, 69, 0, 1);
      font-weight: bold;
      font-size: 1.3rem;
    }
  }
.link {
  font-family: 'Sawarabi Gothic';
  color: rgba(255, 69, 0, 1);
  text-decoration: none;
  font-weight: bold;
}
.link:hover {
  opacity: 0.5;
}
}
</style>
