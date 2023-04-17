<template>
  <!--banner image-->
<section>
  <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
    <div  class="images">
      <div class="profile">
      <img src="../assets/profile2.png" class="rounded-circle"
           height="200px" width="200px">
      </div>
      <div class="content text-center">
          <h1>RAIHAN ZIA AL-FAIZA</h1>
        <h5>NIM : 12150114054</h5>
        <div class ="paragraph">
        <p>Saya adalah seorang Mahsiswa</p>
        <p>Universitas Islam Negri Sultan Syarif Kasim Riau.</p>
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
.text-center{
  margin-top: 30px;
  color: #181818;

}
.images {
  margin-top: -250px;
}
.banner-image{
  background: linear-gradient(rgba(3, 29, 86, 0.96), rgba(60, 125, 190, 0.9), rgba(218, 224, 224, 0.96)), url(../assets/aso.jpg) center/cover no-repeat;
  background-size: cover;
}

.profile {
  padding-top: 50px;

}
.paragraph{
  color: #ffffff;
  margin-top: 20px;
  align-content: center;
}


</style>