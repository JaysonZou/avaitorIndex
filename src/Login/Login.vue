<template>
  <div class="content">
    <div class="wrapper" v-if="!isReg">
      <div class="loginForm">

        <div style="color: white; text-align: center; font-size: .3rem; margin-bottom: 50px; font-weight: bold">登录</div>
        <div style="position: relative;">
          <input class="lbtn bg-grey" type="text" placeholder="用户名">
          <span style="position: absolute; left: 30px; top: 15px" class="userIcon"></span>
        </div>
        <div style="position: relative;">
          <input class="lbtn bg-grey" type="text" placeholder="密码">
          <span style="position: absolute; left: 30px; top: 15px" class="passIcon"></span>
        </div>
        <div class="lbtn"
          style="color: white; text-align: center; background-color: #597ef7;font-weight: bold;font-size: .3rem;">登录
        </div>
        <div style="color: white; text-align: center; margin-bottom: 10px;">先去逛逛</div>

      </div>
      <div class="reg" @click="goReg">
        <span class="regIcon"></span>
        <span>注</span>
        <span>册</span>
        <span>新</span>
        <span>用</span>
        <span>户</span>
      </div>
    </div>

    <div class="wrapper" v-if="isReg">
      <div class="reg log" @click="goLogin">
        <span class="regIcon"></span>
        <span>返</span>
        <span>回</span>
        <span>登</span>
        <span>录</span>
      </div>

      <div class="loginForm regForm">

        <div style="color: white; text-align: center; font-size: .3rem; margin-bottom: 0px; font-weight: bold">注册</div>
        <div style="position: relative;">
          <input class="lbtn bg-grey" type="text" placeholder="用户名">
          <span style="position: absolute; left: 30px; top: 15px" class="userIcon"></span>
        </div>
        <div style="position: relative;">
          <input class="lbtn bg-grey" type="text" placeholder="登陆密码">
          <span style="position: absolute; left: 30px; top: 15px" class="passIcon"></span>
        </div>
        <div style="position: relative;">
          <input class="lbtn bg-grey" type="text" placeholder="真实姓名">
          <span style="position: absolute; left: 30px; top: 15px" class="passIcon"></span>
        </div>
        <div style="position: relative;">
          <input class="lbtn bg-grey" type="text" placeholder="支付密码">
          <span style="position: absolute; left: 30px; top: 15px" class="passIcon"></span>
        </div>
        <div class="lbtn"
          style="color: white; text-align: center; background-color: #597ef7;font-weight: bold;font-size: .3rem;">注册
        </div>

      </div>
    </div>
  </div>

</template>
<script setup>
import { ref } from 'vue';
const isReg = ref(false);
const goReg = () => isReg.value = true;
const goLogin = () => isReg.value = false;
</script>
<style scoped>
.content {
  height: 100vh;
  background-image: url("https://senbackkg.valve33.com/main-consumer-mobile/assets-oss/commons/images/entry_v2/entry-bg-common.41cb103e1e52669ac5ff120bcfd671c1.jpg?x-oss-process=image/resize,p_100/quality,Q_70/format,webp");
  background-size: cover;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reg {
  background-color: rgba(0, 0, 0, .3);
  color: white;
  font-size: .3rem;
  height: 95%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
}

.loginForm {
  font-size: 14px;
  border-radius: .2rem 0 0 .2rem;
  background-color: hsla(0, 0%, 84.7%, .4);

  padding-top: .4rem;
  padding-bottom: .4rem;
}

.lbtn {
  height: 0.8rem;
  border-radius: 50px;
  width: 240px;
  border: none;
  display: block;
  margin: 10px 20px;
  padding: 3px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .2rem;
  outline: none;
}

.lbtn::placeholder {
  color: grey;
  position: relative;
  left: 25px;
  font-size: .25rem;
}

.bg-grey {
  background-color: rgba(0, 0, 0, .3);
  color: white;
}

.regIcon {
  width: .48rem;
  height: .48rem;
  margin: 0 auto .2rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMAS/sBdfQqtSbt8Wz32MKfl1wtC7qhPgTIvXtEMiAc6NSmnIHizMWxiFBH3XJpVjmRYhLgPcxQAAACFklEQVRIx8XT2ZaiMBAG4CIBEVoWFUTFfV9a7e7//d9tYJQsGHQu5pz+boBokapUQb+AT8ZRsvCdYBStb5zeOa3mUMxX1suYwRCl4u1plAQOStucmrRdFIbjnliwdwyA2yYjywdYOtUXZzEDfIsMbAa4PcO+e4B9Pq/HALPFUzadZeLhwoD46f3KxrwbMgDBV5V77gF2LX8Gv1elvcOdzKTlgVlanr5cmHiQutV5d7DJSHLlllNPa1y/StmbqP0C3Op+CcCwBdd6MQQT5+lDExvnB0ir+x/oXFPAChD95QyaffVDP7bFf+YYyugzNKtqvQvMqnMExjIghUr26wNoPW7HgDJCF2iOhoAIDgnchWZtCEgQEDUVHZb1nizLioGP4lLmssBI64nmUCztoPjbqpSkLhT36sJagIOIpGxTz4j6+T2lS3Ep6wiQkOKgj5Kh6BEWasANEuuT8Vg9NSDrqBmZAtblrWIP4YPIMBq32gc7EK3YFBnJ4ftUhm9Hqm/cddpkFoFNtSqce8CWGlhAqi08PutFUwDfgqll/zzOye+TNBuQlAOuEr+SgyTtHTUiEQfF299DCEm3Ku4KbURbDlhOLdsNHNQ4gWu3aeLUzuwIeAkauZuqicIYb3w9N+OlJSfF+z3WnJ4dHTToXMmoN4JROKEmpy2eLCx6gR9TDwpveeX0Bh+sl+G50zmHy0Oe0T/j9J/8AZ4jmCbxmRrcAAAAAElFTkSuQmCC);
  background-size: contain;
}

.userIcon {
  width: .38rem;
  height: .38rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAhFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8g2+bRAAAAK3RSTlMA+rgOC+hqEQPUQB3ZW/PDvyaPOb2hT+w6mH/hskcyFNzLr6hUrH53VoFi/LTxpwAAAbpJREFUOMu1VNtygjAQ7QbCTUBALSAgXlq1Pf//f7V0k0W07XQ67kt2kpO973l6tPjJKovTNM5Wif8D7HlJsELL529gizlAyotyx8kjTxEwX9yBBQWgPUcuHE8DRTDFOQq0dq/v3DVBORNcCH3HT6URXiEDhXBmDeW5NT0LocbeC2iDixQBpCKD1ChG+YIqNl0DaZalQB2wd4LENMeatRplElzwSYmar9aY2zpDc1Adyhm7LNFxyBqm8kt41vSL+f1iDXlYcn+JHNZQSuAaPpeO6EtLoPhtAyVAhY3VkuFcwbPAVoCtBXpYDWcGU7Qeeuy6N6VFNpwxcvO4Q2fUDjuj5oiHM4Xt2BmNz3k1ONtBQCpAllc00eCtwevTCCiuWdw9sD0ctsCef7NrSUbGZZCYO8TJSHnYYE2guG23BCo4WimPFNzfoTw5w49TibCXgl+3sA+hXJvBHjtfWng1FDUOwWjq92hlKMZjtkHzeQhyi07GbDS4Bw7FyjsUD66RCrS4TODbdNXj8LImhGqyXLfi97JcN+sqIuv6OwEsmAAmlHKcUsqRKeWPJCW5G9pzXUN71b+I9JaaHywfEzMq6yPbjsIAAAAASUVORK5CYII=);
  background-size: contain;
}

.passIcon {
  width: .38rem;
  height: .38rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMA+jgMfgPoEL64as2zSqLz2tRcJh06xI5PQGTPdPCcZ1lDLxwFiJR5wnQAAAFtSURBVDjLtVRZdoMwDKwMcWy3YQ1JyL517n/E9gEDMY3DR1/mByEPSBpL+ng35kVisjTNTFLMX9A2RtBDzCZAUytArKvLKCprZwVYqSe02RrQLnrIwmlgPfuTnIXEke+LYoGdj3g59JM4lUbuMWcW+ZJ2dTpVjLjMYR+jr6HJUzkA5IpMjfVDBAgPzpIVZVlkcuaZoOqJK8SddTuYqKnDHG6dK8aq1xma9R7TZRcyPbJ2DSpv4PiNtrSspuVgOmlEegHlm9Z+18sp0kpUwH4QTNaDRdE8E7jXRIekS7FuHXe1QLIYoO6tv+6SzFC2uewwwq7NvUTWPFO071tslYdfR/sHpB4xxmzUeYhJZOggkaFZTJDIYihPmEh5KHiYSMF5hWEir5BNESY6GK/NQkS22dC4e4wnDns2rjcKV9GfHrRcm1FQ4+G6JF8ekos3XP64Et64Ti8ANSyA6ZUyuaSiYUlNr73qH4s0sJrfiR8WBiVJ1NIgJQAAAABJRU5ErkJggg==);
  background-size: contain;
}

.log {
  background-color: hsla(0, 0%, 84.7%, .4);
  border-radius: .2rem 0 0 .2rem;
  height: 110%;
}

.regForm {
  background-color: rgba(0, 0, 0, .3);
  border-radius: 0 .2rem .2rem 0;
  ;
}
</style>