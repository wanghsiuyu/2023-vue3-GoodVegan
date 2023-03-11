<template>
  <!-- banner start-->
  <section class="mb-5 banner" style="height: 380px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-9 col-md-7 col-lg-5">
          <h1 class="banner-plan fs-3 fs-lg-2">關於我們</h1>
        </div>
      </div>
    </div>
  </section>
  <!-- banner end-->
  <div class="container" style="height: 300vh">
    <!-- breadcrumb start-->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-5">
        <li class="breadcrumb-item"><RouterLink to="/" class="green">首頁</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">關於我們</li>
      </ol>
    </nav>
    <!-- breadcrumb end-->
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              class="img-fluid"
              style="height: 200px"
            />
          </div>
          <div class="col-lg-6">
            <p>
              好蔬房創立於2016年，從創立至今始終堅持有好的品質，才能擁有顧客對好蔬房長期的信任。根據研究指出，為了獲得最佳的營養健康，至少 80%
              的飲食應由植物組成，這就是為什麼我們只選擇最好的成分，所有這些成分都是 100% 植物性的。
            </p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4">
            <p>
              我們不使用高溫烹煮食物，而是採用裸食的方式料理食物，讓食物保有原有的必需營養素、高蛋白質、和高膳食纖維，使您一整天都精力充沛，而且不會讓您感到沉重有負擔。我們用最天然的台灣在地食材製作全植物料理，我們相信植物的力量，而且只相信植物對身體帶來的益處。這就是為什麼我們在料理時不添加任何香料、增味劑、色素或防腐劑。我們食物的組成很單純，您在我們的菜單上不會找到任何您不了解的成分，只會看到完整、乾淨、單純的成分。
            </p>
          </div>
          <div class="col-lg-5">
            <img
              src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              class="img-fluid"
              style="height: 200px"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <img
              src="https://images.unsplash.com/photo-1518994603110-1912b3272afd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80"
              alt=""
              class="img-fluid"
              style="height: 200px"
            />
          </div>
          <div class="col-lg-4">
            <p>
              我們遵守嚴格的可持續性標準，並要求我們的供應商遵守同樣的標準，我們只從對環境和社會負責的供應商採購材料。我們秉持這樣一種理想，我們所吃的東西不應以環境為代價，也不應以生產原料供應鏈上的工作人員為代價。可持續發展是我們堅守的核心精神，這意味著我們會持續不斷的推動永續餐桌的理念，並且會不斷探索我們可以改進的地方和實踐對環境友善的作法，讓我們在品嚐美味、健康食物的同時，也能為我們的地球盡一份環保的心力。
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
  .banner {
    @include banner('https://images.unsplash.com/photo-1586718520679-67716c8f1b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', bottom, cover);
  }
  .banner-plan {
    @include banner-plan();
  }
</style>
