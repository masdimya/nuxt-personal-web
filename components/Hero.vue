<template>
  <div class="container px-20 pt-20">
    <div class="flex gap-x-20">
      <BlurFade in-view :delay="250">
          <img src="/images/profile.jpg" class="w-64 h-auto rounded-xl " />
        </BlurFade>
      <div class="flex flex-col space-y-2 pr-32">
        <BlurFade in-view :delay="250">
          <span
            class="text-[45px] font-bold tracking-tighter dark:text-white leading-1"
          >
            Hey, I'm Dimas 👋
          </span>
        </BlurFade>
        <BlurFade in-view :delay="350 * 2">
          <span class="font-[500] text-[20px] dark:text-white tracking-tighter">
            With over 5 years in software development, I’m here to share my
            journey and work with you.
          </span>
        </BlurFade>

        <BlurFade in-view :delay="350 * 3">
          <span class="font-[500] text-[20px] dark:text-white tracking-tighter">
            Let me know if you'd like to refine any of these. Let’s connect ✨
          </span>
        </BlurFade>
      </div>
    </div>
  </div>
</template>