<template lang="pug">
#settings
  b-container
    b-row
      b-col(cols="12")
      b-col(cols="12")
        b-table(:items="items" :fields="fields" @row-clicked='select' small)
          template(#cell(src)="data")
            audio(controls :src="require('@/assets/'+data.value)")
          template(#cell(select)="data")
            span(v-if="data.item.src === sound") V
</template>

<script>
export default {
  data () {
    return {
      items: [
        { name: '鬧鈴', src: 'alarm.mp3' },
        { name: 'yay', src: 'yay.mp3' }
      ],
      fields: [
        { key: 'name', label: '名稱' },
        { key: 'src', label: '挑一個叫得醒你的~ 叫不醒我也沒辦法QQ' },
        { key: 'select', label: '選我!選我!選我!' }
      ]
    }
  },
  methods: {
    select (item) {
      this.$store.commit('selectSound', item.src)
    }
  },
  computed: {
    sound () {
      return this.$store.state.sound
    }
  }
}
</script>
