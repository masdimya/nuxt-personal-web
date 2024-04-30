<template>
  <div class="lg:mx-[10rem] px-10 pt-10 ">
    <main class="min-h-[calc(100vh-3rem)]">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Welcome To My (simple) Website | Dimas Ikbalul Aulia\'s Website',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})
</script>