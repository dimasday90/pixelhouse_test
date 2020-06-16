<template>
  <div>
    <AppBar />
    <HomeCarousel />
  </div>
</template>

<script>
import AppBar from '../components/Appbar'
import HomeCarousel from '../components/HomeCarousel'

export default {
  name: 'Home',
  components: {
    AppBar,
    HomeCarousel
  }
}
</script>
