<template>
  <main>
    <div class="mb-12">
      <a class="flex " href="/">
      <img src="/images/arleft.svg" alt="" srcset="">
      <div class="ml-2 font-bold text-xl ">
        Back
      </div>
       </a>
    </div>
    <div class="contentdoc">
      <ContentDoc />
    </div>
  </main>
</template>
<style lang="postcss" >
  .contentdoc h1{
    @apply font-bold mb-7

  }

  .contentdoc ul {
    @apply pl-5 pt-2 mb-2;
  }

  .contentdoc li {
    @apply mb-2;
  }

  .contentdoc {
    @apply leading-7
  }
</style>
