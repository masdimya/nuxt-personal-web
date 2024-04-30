<template>
  <div >
    <div>
      <h1 class="text-2xl font-semibold ">Dimas Ikbalul Aulia</h1>      
      <div class=" text-sm mt-4  font-semibold">
        <span>
          <a href="https://maps.app.goo.gl/hafU6VBEdUqpPZGFA" target="_blank" class="text-red-700">
            📍 Bangkalan, Indonesia 🇮🇩
          </a>
          |  
        </span>
         Human | Web Developer | A New Husband 💍
      </div>
      <div class="flex mt-7">
        <div class="text-sm ">
          I am a web developer for 5 years experience. Proficient in building scalable web applications and adept at
  problem-solving within agile environments. Specializing in technologies like Node.js, Vue.js, Laravel, Redis,
  and PostgreSQL.
        </div>
      </div>
    </div>

    <div class="mt-12">
      <h2 class="text-xl font-semibold ">Contacts</h2>
      <ul class="text-sm mt-5">
        <li class="flex mb-3" >
          <div class="mr-2">💌</div> 
          <a class="underline font-semibold" mailto="dimas6597@gmail.com">dimas6597@gmail.com</a>
        </li>
        <li class="flex mb-3" >
          <div class="mr-2">📖</div> 
          <a class="underline font-semibold" href="https://www.linkedin.com/in/dimasikbal/">Linkedin</a>
        </li>
        <li class="flex mb-3" >
          <div class="mr-2">😽</div> 
          <a class="underline font-semibold" href="https://github.com/masdimya">Github</a>
        </li>
        
      </ul>
    </div>

    <div class="mt-12">
      <h2 class="text-xl font-semibold ">Skills</h2>
      <ul class="text-sm mt-5">
        <li class="flex mb-3" v-for="(item,index) in keySkills" :key="index" >
          <div class="mr-2">🔧</div> 
          <div>{{item}}</div>
        </li>
      </ul>
    </div>

    <div class="mt-12">
      <h2 class="text-xl font-semibold ">Education</h2>
      <ul class="text-sm mt-5">
        <li class="flex mb-3" v-for="(item,index) in education" :key="index">
        <div class="mr-10">{{item.year}}</div> 
          <div>{{item.name}}</div>
        </li>
      </ul>
    </div>

    <div class="mt-12">
      <h2 class="text-xl font-semibold ">Works Experience</h2>
      <ul class="text-sm mt-5">
        <li class="flex mb-3" v-for="(item,index) in workExp" :key="index">
        <div class="mr-10">{{item.period}}</div> 
          <div>{{item.role}} at {{item.company}}</div>
        </li>
      </ul>
    </div>

    <div class="mt-12">
      <h2 class="text-xl font-semibold ">Last Project</h2>
      <ul class="text-sm mt-5">
        <li class="flex mb-3" v-for="(item,index) in projectExp" :key="index">
        <div class="mr-10">{{item.year}}</div>
          <a  class="underline font-semibold" :href="`/projects/${item.slug}`">{{item.title}}</a> 
        </li>
      </ul>
    </div>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      keySkills: [
        "Node.Js", "Express.Js", "Vue.Js" , "PHP", "Laravel", "PostgreSQL", "Redis", "Go"
      ],
      workExp: [
        {
          period: 'Apr 2022 - Dec 2023',
          company: 'PT Elnusa Tbk',
          role: 'Full Stack Web Developer'
        },
        {
          period: 'Jul 2020 - Nov 2020',
          company: 'Gentasoft',
          role: 'Full Stack Web Developer'
        },
        {
          period: 'Oct 2019 - Dec 2019',
          company: 'PT Sinergi Informatika Semen Indonesia (SISI)',
          role: 'Full Stack Web Developer'
        },
        {
          period: 'Jan 2018 - Feb 2018',
          company: 'PT Pertamina (Persero) MOR V Surabaya',
          role: 'Web Developer Intern'
        },
      ],
      projectExp: [
        {
          slug : 'zeo-education-website',
          title: 'Zeo Education Website',
          year: '2024' 
        },
        {
          slug : 'bangkalan-smartcity',
          title: 'Bangkalan Smart City',
          year: '2023' 
        },
        {
          slug : 'smansaka-web',
          title: 'SMAN 1 Kamal Official Website',
          year: '2023' 
        },
        {
          slug : 'assalam-islamic-school',
          title: 'Assalam Islamic School Management App',
          year: '2022' 
        },
        {
          slug : 'pos-hardware-store',
          title: 'Hardware Store Point of Sales (Pos)',
          year: '2020' 
        },
        {
          slug : 'gesture-recognition',
          title: 'Indonesian Gesture Recognition Web Application',
          year: '2020' 
        },
        {
          slug : 'mad-covid',
          title: 'Mad Covid Whatsapp Bot',
          year: '2020' 
        },
        {
          slug : 'arrabiyyan',
          title: 'Arrabiyyan - Learning Arabic With Augmented Reality',
          year: '2018' 
        },
      ],
      education: [
        {
          name: "NodeJs Superbootcamp By Sanbercode",
          year: "2021"
        },
        {
          name: "Bachelor Computer Science in Universitas Trunojoyo Madura ( GPA : 3.56 / 4.00 )",
          year: "2019"
        }
      ],
      year: "-"
    }
  },
  mounted() {
    this.year = new Date().getFullYear()
  }
}
</script>