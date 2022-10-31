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
            <CardStats :item="item" />
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
import CardStats from '@/components/UI/CardStats'

import items from '@/seeders/items'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  components: {
    CardStats,
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
