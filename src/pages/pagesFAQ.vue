<template>
  <section class="FAQ">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-12">
          <div class="FAQ__top">
            <h2 class="heading">
              Most asked questions by our beloved customers
            </h2>
            <img src="../assets/img/FAQ.png" alt="" class="FAQ__img" />
            <div class="demo-collapse">
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="What is FoodEats?" name="1">
                  <div>
                    FoodEats is a technology company that provides logistics
                    services to both vendors and consumers.
                  </div>
                </el-collapse-item>
                <el-collapse-item
                  title="What location do we provide service"
                  name="2"
                >
                  <div>
                    Operation feedback: enable the users to clearly perceive
                    their operations by style updates and interactive effects;
                  </div>
                  <div>
                    Visual feedback: reflect current state by updating or
                    rearranging elements of the page.
                  </div>
                </el-collapse-item>
                <el-collapse-item title="What is the delivery fee?" name="3">
                  <div>
                    Simplify the process: keep operating process simple and
                    intuitive;
                  </div>
                  <div>
                    Definite and clear: enunciate your intentions clearly so
                    that the users can quickly understand and make decisions;
                  </div>
                  <div>
                    Easy to identify: the interface should be straightforward,
                    which helps the users to identify and frees them from
                    memorizing and recalling.
                  </div>
                </el-collapse-item>
                <el-collapse-item title="How I can become a rider?" name="4">
                  <div>
                    Decision making: giving advices about operations is
                    acceptable, but do not make decisions for the users;
                  </div>
                  <div>
                    Controlled consequences: users should be granted the freedom
                    to operate, including canceling, aborting or terminating
                    current operation.
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1",
    };
  },
};
</script>

<style>
.FAQ__top {
  margin-top: 55px;
  margin-bottom: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.FAQ__top img {
  width: 235px;
  height: 264px;
  display: block;
  margin-bottom: 75px;
}
</style>
