<template>
  <div class="md-body">
    <h1>Cards</h1>
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide class="card__wrapper" v-for="item in items" :key="item.id">
        <Card
          :name="item.lvl"
          :title="item.title"
          :imgUrl="item.img"
          :link="`/${item.alias}`"
        >
          <template v-slot:body>
            {{ item.descr }}
          </template>
          <template v-slot:footer>
            <div class="card-stats">
              <div
                v-for="(stat, index) in item.info"
                :key="index"
                class="one-third"
              >
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat">{{ stat.title }}</div>
              </div>
            </div>
          </template>
        </Card>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>
<script>
import Card from '@/components/UI/Card'
import items from '@/seeders/items'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  components: {
    Card,
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 1,
        wrapAround: true,
        snapAlign: 'center'
      },
      breakpoints: {
        500: {
          itemsToShow: 3
        }
      }
    }
  }
}
</script>
<style scoped>
.md-body ol li:before {
  display: none;
}
</style>
