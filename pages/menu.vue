<template>
  <v-container fluid class="container">
    <!-- mobile navigation -->
    <mobile-tool></mobile-tool>
    <div class="section subsection menu">
      <base-title class="section_title" :title="menuTitle"></base-title>
      <div class="menu__list">
        <v-container grid-list-xl>
          <v-layout align-start row wrap>
            <v-flex
              v-for="(item, index) in menu"
              :key="index"
              xs6 sm4 md3 lg3
            >
              <base-menu
                :bread-name="item.name"
                :bread-price="item.price"
                :bread-url="item.url"
              ></base-menu>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <!-- panph -->
      <div class="menu__color subsection">
      <base-title class="section_title" :title="colorMenu"></base-title>
      <base-text :text="menu__text1"></base-text>
      <base-text :text="menu__text2"></base-text>   
        <v-layout>
          <v-flex>
            <v-img src="img/menu-color.jpg" cover></v-img>
          </v-flex>
        </v-layout>
      </div>      
      <!---
      <div class="menu__allergy">
      <base-title class="section_title" :title="allergy"></base-title>
        <p class="menu__text">アレルギーに関する情報です。<br>ご不明な店がございましたら、お気軽にお電話下さい。(03-3380-8679)</p>
        <v-layout>
          <v-flex>
            <v-img src="img/menu-color.jpg" cover></v-img>
          </v-flex>
        </v-layout>
      </div>
      -->

      <!--
      <base-title class="section_title" :title="menuTitle"></base-title>
      <div class="menu__list">
        <v-container grid-list-xl>
          <v-layout align-start row wrap>
            <v-flex
              v-for="(item, index) in menuAllNoMilkEgg"
              :key="index"
              xs6 sm4 md3 lg3
            >
              <base-menu
                :bread-name="item.name"
                :bread-price="item.price"
                :bread-url="item.url"
              ></base-menu>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    -->

      
    </div>
  </v-container>
</template>

<script>
import BaseTitle from '~/components/BaseTitle.vue'
import BaseSubtitle from '~/components/BaseSubtitle.vue'
import BaseText from '~/components/BaseText.vue'
import BaseMenu from '~/components/BaseMenu.vue'
import MobileTool from '~/components/MobileTool.vue'

export default {
  components: {
    BaseTitle,
    BaseSubtitle,
    BaseText,
    BaseMenu,
    MobileTool
  },
  data () {
    return {
      menuTitle: 'POPULAR MENU',
      colorMenu: 'SRNDART MENU',
      allergy: 'Allergy',
      specialMenu: [
        { name : "酵母パン", price : "360", url: "img/bread/kouzi.jpg", text: '天然酵母で発酵。なんと麹菌も使っている！素朴で濃厚で独特な風味。'},
        { name : "わんちゃんぱん", price : "50", url: "img/bread/inu.jpg", text: '「犬にぱんを食べさせたい」という声から生まれたぱん。無塩です。'}
      ],
      menu__text1: '季節や時間帯によって、メニューは変動する可能性がございます。',
      menu__text2: 'アレルギーにつきましては、お電話か店頭にてお尋ねください。'
    }
  },
  computed: {
    menu() {
      return this.menuMain
    },
    menuAllNoMilkEgg() {
      return this.menuAllNoMilkEgg
    }
  },
  asyncData({ env }) {
    return {
      menuMain: env.menuMain,
      menuAllNoMilkEgg: env.menuAllNoMilkEgg
    }
  }
}
</script>

<style lang="scss" scoped>
.subsection {
  margin-bottom: 80px;
}
.container {
  padding-top: 0;
}
.menu__sub_title {
  margin-bottom: 16px;
}
.menu__text {
  font-family: 'Sawarabi Gothic';
  font-size: 1.1rem;
  letter-spacing: 0;
  margin-bottom: 0px;
}
</style>
