<template lang="pug">
#app
  #top
    b-container.pt-5
      b-link(to='/')
        img(src='./assets/e103b6c4a567e98f65278a31c5c76c81e6fadb46.png')
      hr
  #contect
    b-container
      b-row
        b-col(cols="12" md="6").justify-content-center.d-flex.align-items-center
          img.bg-tomato.pb-5(src='./assets/e4a3b1a01e60660385c4361a5a6e072cd0f361db.png')
          div.tomato.text-center
            h1 {{ timeText }}
            h6.my-3 {{ currentText }}
            b-btn.mx-1(pill variant="dark" v-if="status !== 1" @click="start") Start
            b-btn.mx-1(pill size="sm" variant="outline-secondary" v-else @click="pause")
              b-icon(icon="pause-fill")
            b-btn.mx-1(pill size="sm" variant="outline-secondary" v-if="current.length > 0" @click="finish(true)")
              b-icon(icon="skip-end-fill")
        b-col
          b-link(variant="secondary" to='/').mr-3.h4 Check list
          b-link(variant="secondary" to='/settings').h4 Setting
  keep-alive
    router-view(v-if="$route.meta.keepAlive")
  router-view(v-if="!$route.meta.keepAlive")
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');
</style>
<script>
export default {
  data () {
    return {
      // 0 = 停止
      // 1 = 倒數中
      // 2 = 暫停
      status: 0,
      timer: 0
    }
  },
  computed: {
    current () {
      return this.$store.state.current
    },
    items () {
      return this.$store.state.items
    },
    currentText () {
      return this.current.length > 0 ? this.current : this.items.length > 0 ? '點擊開始' : '沒有事項'
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      const m = Math.floor(this.timeleft / 60).toString().padStart(2, '0')
      const s = Math.floor(this.timeleft % 60).toString().padStart(2, '0')
      return `${m} : ${s}`
    }
  },
  methods: {
    start () {
      if (this.status === 0 && this.items.length > 0) {
        this.$store.commit('start')
      }
      if (this.current.length) {
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finish(false)
          }
        }, 1000)
      }
    },
    pause () {
      this.status = 2
      clearInterval(this.timer)
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')

      if (!skip) {
        const audio = new Audio()
        audio.src = require('@/assets/' + this.$store.state.sound)
        audio.play()
      }

      if (this.items.length > 0) {
        this.start()
      }
    }
  }
}
</script>
