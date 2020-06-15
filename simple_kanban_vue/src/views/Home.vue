<template>
  <div>
    <HomeAppBar />
    <HomeCarousel />
  </div>
</template>

<script>
import HomeAppBar from '../components/HomeAppbar'
import HomeCarousel from '../components/HomeCarousel'

export default {
  name: 'Home',
  components: {
    HomeAppBar,
    HomeCarousel
  }
}
</script>
