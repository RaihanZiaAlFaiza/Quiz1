<template>

  <section id = "sec-2" class = "py-5">
    <div class = "container my-4">
      <div class = "row gx-lg-5">
        <div class = "col-lg-6 mb-5">
          <img src = "../assets/profile.png" class = "img-fluid">
        </div>
        <div class = "col-lg-6">
          <h3>About me</h3>
          <p class = "text-muted fw-light lh-lg my-4"> Hello Gais </p>
          <p class = "text-muted fw-light lh-lg my-5"> My name is Raihan Zia Al-Faiza, I was born on April 16, 2003 in the city of Tebing Tinggi, now I live in the Pangkalan Kerinci. and my profession is a student at the Sultan Syarif Kasim Riau State Islamic University. </p>


          <button type = "button" class = "btn btn-blue mt-2">Read more</button>
        </div>
      </div>
    </div>
  </section>

  <section id = "sec-6" class = "py-5">
    <div class = "container my-4">
      <div class = "row mb-5">
        <div class = "col-12 text-center text-white">
          <h3 class = "mb-4">MY Social Media</h3>
          <p class = "lh-lg fw-light pt-2 w-75 mx-auto"> Berikut merupakan beberapa akun sosial media yang saya punya yaitu Instagram, Telegram, dan TikTok.</p>
        </div>
      </div>
      <div class = "row text-uppercase text-center text-white">
        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://instagram.com/raihanziaalfza_?igshid=YmMyMTA2M2Y=" target="_blank">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
          <h6>Instagram</h6>
        </div>

        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://t.me/reyycmail" target="_blank">
              <i class="bi bi-telegram"></i>
            </a>
          </div>
          <h6>Telegram</h6>
        </div>

        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://www.tiktok.com/@reyy_1604?_t=8bOzGXuoqWY&_r=1" target="_blank">
              <i class="bi bi-tiktok"></i>
            </a>
          </div>
          <h6>Tiktok</h6>
        </div>
        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://wa.me/qr/EU43NOHVVCSPL1" target="_blank">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
          <h6>Whatsapp</h6>
        </div>
      </div>
    </div>
  </section>



</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
:root{
  --blue: #4B65E8F4;
  --blue-dark: #444BCCF4;
  --light-grey: #f1f4f6;
}

*{
  font-family: 'Roboto', sans-serif;
}

/* misc stylings */
ul li{
  list-style-type: none;
}
.container{
  max-width: 1200px;
}
.display-1{
  letter-spacing: 1px;
}
.bg-blue{
  background-color: var(--blue)!important;
}
.bg-grey{
  background-color: var(--light-grey);
}
.text-blue{
  color: var(--blue);
}
.btn{
  border: 2px solid rgb(255, 255, 255);
  border-radius: 1.5rem;
  padding: 0.6rem 0;
  width: 160px;
}
.btn-blue{
  background-color: var(--blue);
  color: #fff;
  padding: 0.55rem 0;
  width: 140px;
}
.btn-blue:hover{
  color: var(--blue);
  background: #fff;
  border-color: var(--blue);
}
.lh-lg{
  line-height: 1.7!important;
}
.circle-icon{
  width:55px;
  height: 55px;
  border-radius: 50%;
  background-color: var(--blue);
}

#sec-2{
  margin-top: 50px;
}
#sec-6{
  background: linear-gradient(rgba(3, 29, 86, 0.96), rgba(60, 125, 190, 0.9), rgba(218, 224, 224, 0.96)), url(../assets/kelas.jpg) center/cover no-repeat;
}
#sec-6 .circle-icon{
  width: 95px;
  height: 95px;
}

/* section 7 */
#sec-7 .card{
  border: none;
}

/* section 8 */
#sec-8 .carousel-item img{
  width: 180px!important;
}

/* section 9 */
.pricing-item{
  border-radius: 0.3rem;
  overflow: hidden;
  max-width: 340px;
}
.pricing-title{
  background-color: var(--blue-dark);
}
.pricing-price, .pricing-item ul li{
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0.9rem 0;
}
.pricing-item .btn:hover{
  background: transparent!important;
  color: #fff;
}

</style>
