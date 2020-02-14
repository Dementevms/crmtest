<template>
  <div class="select">
    <select>
      <option v-for="item in items" :key="item.id" @click="click(item)">{{ item.title }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  methods: {
    click(item){
      this.$emit('change', item)
    }
  }
}
</script>