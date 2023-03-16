<template>
  <swiper
    :modules="modules"
    :loop="true"
    :speed="800"
    :breakpoints="swiperOptions.breakpoints"
    :pagination="{ el: '.swiper-pagination', clickable: true }"
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
  >
    <swiper-slide>
      <div class="bg-white p-6 rounded-3 mb-3 mb-md-7 mb-lg-10">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar01.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Jenny Lin</p>
            <span v-for="i in 4" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
            <span><img src="@/assets/image/star-gray.svg" alt="star-gray" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">真的是很認真料理食物的店家，用食材變化出不同口味的菜色，像在自己家裡那樣安心品嚐每一口。</p>
      </div>
      <div class="bg-white p-6 rounded-3 mb-0">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar04.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Chris Wu</p>
            <span v-for="i in 5" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" class="img-fluid" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">因為我對於奶麩嚴重過敏，外食是很大的挑戰，對於店內的精挑細選的食物印象深刻，吃的很開心，以後會常來光顧。</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-white p-6 rounded-3 mb-3 mb-md-7 mb-lg-10">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar02.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Vincent Cheng</p>
            <span v-for="i in 5" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">餐點各種蔬果滿滿，重點美味也滿分。本來工作一天很疲累一吃下去整個能量充滿，疲勞立刻消除，真正有能量的食物，一吃身體就知道。</p>
      </div>
      <div class="bg-white p-6 mb-0">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar05.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Wandy Liang</p>
            <span v-for="i in 4" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
            <span><img src="@/assets/image/star-gray.svg" alt="star-gray" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">第一次吃到無麩質的餐廳，原本以為會吃不飽但每一樣的食材和醬汁都非常喜歡！可以感受到滿滿的用心，還有店員用心的介紹，下次再帶家人來享用，非常感謝主理人的精心經營。</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-white p-6 rounded-3 mb-3 mb-md-7 mb-lg-10">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar03.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Christina Gao</p>
            <span v-for="i in 5" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">店內有銷售環境友善的減塑週邊商品。是一間溫馨、有特色，餐點美味服務親切的聚餐好地點。</p>
      </div>
      <div class="bg-white p-6 rounded-3 mb-0">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar06.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Joseph Ren</p>
            <span v-for="i in 4" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">每一樣餐點都非常美味，排毒可可盆的醬有香蕉味非常可愛討喜，米氏壽司捲出乎意料之外的好吃！餐點還沒上齊就忍不住來給好評了</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-white p-6 rounded-3 mb-3 mb-md-7 mb-lg-10">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar07.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Marjorie</p>
            <span v-for="i in 4" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
            <span><img src="@/assets/image/star-gray.svg" alt="star-gray" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">喜歡這家店的服務品質與用餐環境，但覺得可能都是現做，等待時間略久，份量很足夠！</p>
      </div>
      <div class="bg-white p-6 rounded-3 mb-0">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar08.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Jackie Wu</p>
            <span v-for="i in 5" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">果昔碗的用料豐富口感很有層次；地瓜條和調味甜菜根醬絕配讓人眼前一亮。</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-white p-6 rounded-3 mb-3 mb-md-7 mb-lg-10">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar09.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Billy</p>
            <span v-for="i in 4" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
            <span><img src="@/assets/image/star-gray.svg" alt="star-gray" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">食材新鮮，環境清潔度很高，環境設備對兒童很友善，下次想帶小孩一起來。</p>
      </div>
      <div class="bg-white p-6 rounded-3 mb-0">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar10.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Sofi Chiu</p>
            <span v-for="i in 5" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">純植物飲食不用擔心有蛋或奶的成分，食物種類新鮮豐富、調味也搭配的恰到好處，只恨自己胃太小塞不下那麼多食物～真的值得一訪再訪。</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-white p-6 rounded-3 mb-3 mb-md-7 mb-lg-10">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar11.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Susan Lee</p>
            <span v-for="i in 5" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">大推~這大概是我近期最喜歡的餐廳，全素無奶蛋的餐廳。用的食材全部都是無毒對身體好的食材。</p>
      </div>
      <div class="bg-white p-6 rounded-3 mb-0">
        <div class="d-flex gap-3 mb-4">
          <img src="@/assets/image/avatar12.png" alt="avatar" width="56" height="56" class="rounded-circle object-fit-cover" />
          <div>
            <p class="mb-2">Stanley Lin</p>
            <span v-for="i in 4" :key="i + 123"><img src="@/assets/image/star-yellow.svg" alt="star-yellow" width="24" height="24" /></span>
          </div>
        </div>
        <p class="mb-0 line-clamp">口味特別，令人耳目一新。店內有銷售環境友善的減塑週邊商品。是一間溫馨、有特色，餐點美味服務親切的聚餐好地點。</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination position-static mt-5 mt-lg-10"></div>
  </swiper>
</template>
<style lang="scss">
  .line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /*調整行數*/
    overflow: hidden;
  }
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    text-align: center;
    opacity: 1;
    background: #d9d9d9;
    margin: 0 8px !important;
    @include mobile() {
      width: 12px;
      height: 12px;
    }
  }
  .swiper-pagination-bullet-active {
    background: #4f8147;
  }
</style>
<script>
  //   import { RouterLink } from 'vue-router';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Pagination } from 'swiper';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';

  export default {
    data() {
      return {
        modules: [Pagination, Autoplay],
        swiperOptions: {
          breakpoints: {
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            576: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
          },
        },
      };
    },
    components: {
      Swiper,
      SwiperSlide,
    },
  };
</script>
