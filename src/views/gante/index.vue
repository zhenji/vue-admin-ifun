<template>
  <div class="app-container">
    <div v-for='item in list'> 
    <p>{{item.id}} - {{item.title}}</p>
    </div>
  </div>
</template>

<script>

import { getList } from '@/api/table'

export default {

  data() {
    return {
      listLoading: true,
      list: null
    }
  },

  watch: {
    
  },

  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  },

  mounted() {
    console.log(111111)
    this.fetchData()
  }
}
</script>

