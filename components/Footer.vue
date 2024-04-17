<template>
  <div class="my-12 text-center text-gray-500 text-sm">
      Copyright © {{year}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      year: "-"
    }
  },
  mounted() {
    this.year = new Date().getFullYear()
  }
}
</script>