<template>
  <v-container fluid>
    <div class="sidebar">
      <v-container grid-list-md>
        <v-layout column class="menu__list">
          <v-flex
            v-for="(item, index) in menu"
            v-bind:key="index"
            class="menu"
          >
            <nuxt-link :to="item.link" class="menu__item">{{item.title}}</nuxt-link>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center column>
          <v-flex>
          <a href="https://www.instagram.com/pankouboupukumuku/" class="instagram" target="_blank"><i class="fab fa-instagram"></i>  INSTAGRAM</a>
          <a href="https://www.youtube.com/channel/UC6CSnE6Bjqm-TFjg6YajVxQ" class="instagram" target="_blank"><i class="fab fa-youtube"></i>  YOUTUBE</a>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
	data () {
		return {
			menu: [
				{title: 'HOME', link: '/'},
				{title: 'MENU', link: 'menu'},
				{title: 'MUSIC', link: 'music'},
				// {title: 'NEWS', link: 'news'},
				{title: 'ACCESS', link: 'access'}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.menu {
  text-align: center;
  font-family: 'Francois One';
  font-size: 1.2rem;
  .menu__item {
    color: rgba(255, 69, 0, 1);
    text-decoration: none;
  }
  .menu__item:hover {
    opacity: .4;
  }
}
.instagram {
  display: block;
  color: rgba(255, 69, 0, 1);
  margin-top: 24px;
  font-family: 'Francois One';
  text-decoration: none;
  text-align: center;
  .fab {
    font-size: 1.2rem;
  }
}
.instagram:hover {
  opacity: .4;
}
</style>