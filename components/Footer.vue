<template>
  <div class="my-9 text-center text-gray-500 text-sm">
      Copyright © {{year}} Made with 💛 by masdimya
  </div>
</template>

<script>
export default {
  data(){
    return{
      year: "-"
    }
  },
  created() {
    this.year = new Date().getFullYear()
  }
}
</script>