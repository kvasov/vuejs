<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" />
      <h1 style="color: #fff" class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>
      <br />
      <CardStats :item="item" />
      <br />
      <router-link to="/" class="btn btnPrimary">back</router-link>
    </div>
  </div>
</template>
<script>
import CardStats from '@/components/UI/CardStats'
import items from '@/seeders/items'

export default {
  components: {
    CardStats
  },
  data() {
    return {
      item: null
    }
  },
  created() {
    const alias = this.$route.params.itemAlias
    const item = items.find(el => el.alias === alias)
    console.log(item)
    if (item) this.item = item
    else this.$router.push('/404')
  }
}
</script>
<style lang="scss">
.wrapper-person {
  text-align: center;
}
</style>
