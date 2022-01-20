<template lang="pug">
#list
  b-container
    b-row
      b-col(cols="12")
        b-form-group(label="新增事項" label-for="newinput" invalid-feedback="字數太少")
          b-form-input#newinput(v-model="newinput" :state="newinputstate" @keydown.enter="additem")
        b-button(pill variant="outline-secondary" @click="additem") +
      b-col.my-3(cols="12")
        h5 To-do
        b-table(:items="items" :fields="fields" small show-empty hover borderless)
          template(#empty)
            p.text-center 沒有項目
          template(#cell(name)="data")
            b-form-input(
              v-if="data.item.edit"
              v-model="data.item.model"
              :state="data.item.state"
              @keydown.enter="submitedit(data.index)"
              @keydown.esc="canceledit(data.index)"
            )
            span(v-else) {{ data.value }}
          template(#cell(action)="data")
            span(v-if="data.item.edit")
              b-btn.mx-1(pill size="sm" variant="outline-secondary")
                b-icon(icon="check" @click="submitedit(data.index)")
              b-btn.mx-1(pill size="sm" variant="outline-secondary")
                b-icon(icon="arrow-counterclockwise" @click="canceledit(data.index)")
            span(v-else)
              b-btn.mx-1(pill size="sm" variant="outline-secondary")
                b-icon(icon="pencil" @click="edititem(data.index)")
              b-btn.mx-1(pill size="sm" variant="outline-secondary")
                b-icon(icon="trash" @click="delitem(data.index)")
      b-col(cols="12")
        h5 Done
      b-col(cols="12")
        b-table-simple(small hover borderless)
          tbody
            tr(v-for="(item, idx) in finished")
              td {{ item }}
              td
                b-btn(pill size="sm" variant="outline-secondary" @click="delfinish(idx)") 一
            tr(v-if="finished.length === 0")
              td.text-center(colspan="2") 沒有項目
</template>
<script>
export default {
  data () {
    return {
      newinput: '',
      fields: [
        { key: 'name', label: '' },
        { key: 'action', label: '' }
      ]
    }
  },
  computed: {
    newinputstate () {
      return this.newinput.length > 2 ? true : this.newinput.length === 0 ? null : false
    },
    items () {
      return this.$store.state.items.map(item => {
        item.state = item.model.length > 2
        return item
      })
    },
    finished () {
      return this.$store.state.finished
    }
  },
  methods: {
    additem () {
      if (this.newinput.length > 2) {
        this.$store.commit('additem', this.newinput)
        this.newinput = ''
      }
    },
    edititem (index) {
      this.$store.commit('edititem', index)
    },
    delitem (index) {
      this.$store.commit('delitem', index)
    },
    submitedit (index) {
      if (this.items[index].state) {
        this.$store.commit('submitedit', index)
      }
    },
    canceledit (index) {
      this.$store.commit('canceledit', index)
    },
    delfinish (index) {
      this.$store.commit('delfinish', index)
    }
  }
}
</script>
