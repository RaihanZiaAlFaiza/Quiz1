<template>
  <!--banner image-->
  <section>
    <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
    <div class="content text-center">
      <p>Welcome to</p>
      <div class="paragraph">
      <p>My Galary</p>
        <div class="profile">
          <img src="../assets/figma.jpg" class="rounded-circle">
          <p class="figma">Saya merupakan salah satu pengurus aktif Figma squad TA.2022-2023 di UIN SUSKA RIAU. Figma squad itu sendiri merupakan salah satu labsquad dari jurusan Teknik Informatika UIN SUSKA RIAU yang membahas tentang topik UI/UX menggunakan platform figma. Figma sendiri adalah aplikasi desaign berbasis cloud dan alat prototyping untuk proyek digital.</p>
          <div class="acara">
            <img src="../assets/aso.jpg" class="rounded-circle">
            <p class="asoma"></p>
          </div>
        </div>
      </div>
    </div>
    </div>

  </section>

</template>

<script>
export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
.rounded-circle{
  height: 200px;
  width: 200px;
  margin-left: -800px;
}
.content{
  margin-top: -140px;
  margin-bottom: 10px;
  font-size: 50px;
  color: #bebebf;
}
.paragraph{
  margin-bottom: -125px;
  margin-top:5px;
  font-size: 35px;
}
.profile{
  font-size: 15px;

}
.figma{
  margin-top: -150px;
 padding-left: 500px;
  padding-right: 500px;


}
.acara{
  margin-left: 1600px;
}
.asoma{
  color: #181818;
}

.banner-image{
  background: linear-gradient(rgba(3, 29, 86, 0.96), rgba(60, 125, 190, 0.9), rgba(218, 224, 224, 0.96)), url(../assets/aso.jpg) center/cover no-repeat;
  background-size: cover;
}


</style>