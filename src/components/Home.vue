<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>

	<header class="bg-black">
		<section>
			<div class="container">
				<div class="row">
					<div class="l-box">
						<a href="#" class="float-l mt-30 a-logo"><img src="./images/logo.png" alt="" class="float-l ovf-h"></a>
					</div>
					<div class="r-box">
						<div class="float-l mr-20 pos-r badge-box"><i class="float-l c-grey font-s40 iconfont"> &#xe616; </i><em class="badge-dot radius-c"></em></div>
						<div type="button" class="float-l iconfont c-grey font-s40 c-green-h button">&#xe612;</div>
					</div>
				</div>
			</div>
		</section>
	</header>

	<main> <!--main Start -->
		<section class="section-2">
			<div class="container">
				<div class="row row-box">
					<div class="l-box plr-15 ptb-10 radius-20 ovf-h">
						<img src="./images/u-avatar.png" alt="" class="float-l radius-c us-avatar">
						<div class="r-div radius-20">
							<div class="float-l box pl-15">
								<img src="./images/e-0.png" alt="" class="float-l mt-15 pic-img">
								<label class="float-l font-s30 text-l pl-15 label c-white text-ellipsis"> 1,041.46 </label>
							</div>
							<button type="button" class="float-r c-white plr-15 text-l font-s30 radius-20 button bg-orange">
								<i class="float-l iconfont mr-05">&#xe610;</i>
								<span class="float-r font-s34">Add</span> 
							</button>
						</div>
					</div>

					<div class="r-box ptb-10">
						<a href="#" class="float-l plr-20 c-white radius-35 font-s30 bg-green line-h70 a-link"><i class="float-l font-s40 line-h70 iconfont mr-05"> &#xe634; </i> VIP </a>
					</div>
				</div>
			</div> 
		</section>

		<section class="section-3 pos-r">
			<div class="container">
				<div class="row">
					<div class="swiper swiper-pic-carousel pos-r ovf-h">
						<ul class="swiper-wrapper">
							<li class="swiper-slide"><a href="#" class="float-l w-100 ovf-h a-link"><img src="./images/s-1.png" alt="" class="float-l w-100"></a></li>
							<li class="swiper-slide"><a href="#" class="float-l w-100 ovf-h a-link"><img src="./images/s-1.png" alt="" class="float-l w-100"></a></li>
							<li class="swiper-slide"><a href="#" class="float-l w-100 ovf-h a-link"><img src="./images/s-1.png" alt="" class="float-l w-100"></a></li>
						</ul>
						<div class="float-l w-100 navigation-pagination-control">
							<div class="float-l swiper-pagination my-pagination skin-change"></div>
						</div>
					</div>
					<time class="float-l font-s20 line-h45 time-box time"></time>
				</div>
			</div> 
		</section>

		<section class="section-4 bg-grey">
			<div class="container">
				<div class="row mt-15 swiper-slide-tab swiperTab ovf-h swiper-no-swiping"><!-- swiper-slide-tab swiper-no-swiping:禁止滑动 -->
					<div class="row tab-head"><!-- tab-head -->
						<ul class="row">
							<li class="col-3 item-head active"> 
								<div class="c-box c-grey">
									<i class="float-l w-100 mt-05 iconfont line-h60 font-s40"> &#xeca1; </i>
									<label class="float-l w-100 font-s20 line-h30 font-w4"> Collect </label>
								</div>
							</li> 
							<li class="col-3 item-head"> 
								<div class="c-box c-grey">
									<i class="float-l w-100 mt-05 iconfont line-h60 font-s40"> &#xe863; </i>
									<label class="float-l w-100 font-s20 line-h30 font-w4"> Slots </label>
								</div>
							</li> 
							<li class="col-3 item-head"> 
								<div class="c-box c-grey">
									<i class="float-l w-100 mt-05 iconfont line-h60 font-s40"> &#xe65f; </i>
									<label class="float-l w-100 font-s20 line-h30 font-w4"> Rocket </label>
								</div>
							</li> 
							<li class="col-3 item-head"> 
								<div class="c-box c-grey">
									<i class="float-l w-100 mt-05 iconfont line-h60 font-s40"> &#xe66b; </i>
									<label class="float-l w-100 font-s20 line-h30 font-w4"> Turntable </label>
								</div>
							</li> 
						</ul>
					</div>
					<div class="swiper-container tab-content"><!-- tab-content -->
						<div class="swiper-wrapper"> 
							<div class="swiper-slide slide-tab"><!-- Collect -->
								<ul class="row ptb-30">
									<li class="col mt-30">
										<div class="div-box">
											<div class="c-box plr-20 ptb-20 radius-20 bg-grey-1">
												<div class="l-box">
													<img src="./images/a-1.png" alt="" class="float-l pic-img" />
													<div class="l-div plr-30">
														<h2 class="float-l w-100 text-l font-s30 font-w4 c-white line-h40 h2 ovf-h"> 4 Fantastic Fish in Egypt </h2>
														<label class="float-l w-100 ptb-20 text-l font-w5 font-s48 text-ellipsis line-h40 label-text"> 32.4325253 </label>
														<span class="float-l w-100 text-l font-s18 c-grey line-h40 text-ellipsis">@Randy Boranders </span>
													</div>
												</div>
												<div class="r-box">
													<time class="float-l w-100 font-s18 line-h30 c-grey-1">11:52</time>
													<a href="#" class="float-l w-100 mt-20 font-s30 line-h50 c-white radius-25 bg-green a-link"> Play </a>
												</div>
											</div>
										</div>
									</li>
									<li class="col mt-30">
										<div class="div-box">
											<div class="c-box plr-20 ptb-20 radius-20 bg-grey-1">
												<div class="l-box">
													<img src="./images/a-2.png" alt="" class="float-l pic-img" />
													<div class="l-div plr-30">
														<h2 class="float-l w-100 text-l font-s30 font-w4 c-white line-h40 h2 ovf-h"> penguin panic </h2>
														<label class="float-l w-100 ptb-20 text-l font-w5 font-s48 text-ellipsis line-h40 label-text"> 536.638 </label>
														<span class="float-l w-100 text-l font-s18 c-grey line-h40 text-ellipsis"> @Randy Boranders </span>
													</div>
												</div>
												<div class="r-box">
													<time class="float-l w-100 font-s18 line-h30 c-grey-1">11:52</time>
													<a href="#" class="float-l w-100 mt-20 font-s30 line-h50 c-white radius-25 bg-green a-link"> Play </a>
												</div>
											</div>
										</div>
									</li>
									<li class="col mt-30">
										<div class="div-box">
											<div class="c-box plr-20 ptb-20 radius-20 bg-grey-1">
												<div class="l-box">
													<img src="./images/a-3.png" alt="" class="float-l pic-img" />
													<div class="l-div plr-30">
														<h2 class="float-l w-100 text-l font-s30 font-w4 c-white line-h40 h2 ovf-h"> Book of  rest </h2>
														<label class="float-l w-100 ptb-20 text-l font-w5 font-s48 text-ellipsis line-h40 label-text"> 12.43575782 </label>
														<span class="float-l w-100 text-l font-s18 c-grey line-h40 text-ellipsis"> @Randy Boranders </span>
													</div>
												</div>
												<div class="r-box">
													<time class="float-l w-100 font-s18 line-h30 c-grey-1">11:52</time>
													<a href="#" class="float-l w-100 mt-20 font-s30 line-h50 c-white radius-25 bg-green a-link"> Play </a>
												</div>
											</div>
										</div>
									</li>
									<li class="col mt-30">
										<div class="div-box">
											<div class="c-box plr-20 ptb-20 radius-20 bg-grey-1">
												<div class="l-box">
													<img src="./images/a-4.png" alt="" class="float-l pic-img" />
													<div class="l-div plr-30">
														<h2 class="float-l w-100 text-l font-s30 font-w4 c-white line-h40 h2 ovf-h"> ANIMAL  QUEST </h2>
														<label class="float-l w-100 ptb-20 text-l font-w5 font-s48 text-ellipsis line-h40 label-text"> 5.45782 </label>
														<span class="float-l w-100 text-l font-s18 c-grey line-h40 text-ellipsis"> @Randy Boranders </span>
													</div>
												</div>
												<div class="r-box">
													<time class="float-l w-100 font-s18 line-h30 c-grey-1">11:52</time>
													<a href="#" class="float-l w-100 mt-20 font-s30 line-h50 c-white radius-25 bg-green a-link"> Play </a>
												</div>
											</div>
										</div>
									</li>
									<li class="col mt-30">
										<div class="div-box">
											<div class="c-box plr-20 ptb-20 radius-20 bg-grey-1">
												<div class="l-box">
													<img src="./images/a-5.png" alt="" class="float-l pic-img" />
													<div class="l-div plr-30">
														<h2 class="float-l w-100 text-l font-s30 font-w4 c-white line-h40 h2 ovf-h"> AZTEC MAGIC  MEGAM WAYS </h2>
														<label class="float-l w-100 ptb-20 text-l font-w5 font-s48 text-ellipsis line-h40 label-text"> 5.45782 </label>
														<span class="float-l w-100 text-l font-s18 c-grey line-h40 text-ellipsis"> @Randy Boranders </span>
													</div>
												</div>
												<div class="r-box">
													<time class="float-l w-100 font-s18 line-h30 c-grey-1">11:52</time>
													<a href="#" class="float-l w-100 mt-20 font-s30 line-h50 c-white radius-25 bg-green a-link"> Play </a>
												</div>
											</div>
										</div>
									</li> 
								</ul>
							</div> 
							<div class="swiper-slide slide-tab"><!-- Slots -->
								<ul class="row ptb-30">
									<li class="col mt-30">
										<div class="div-box">
											<div class="c-box plr-20 ptb-20 radius-20 bg-grey-1">
												<div class="l-box">
													<img src="./images/a-1.png" alt="" class="float-l pic-img" />
													<div class="l-div plr-30">
														<h2 class="float-l w-100 text-l font-s30 font-w4 c-white line-h40 h2 ovf-h"> 4 Fantastic Fish in Egypt </h2>
														<label class="float-l w-100 ptb-20 text-l font-w5 font-s48 text-ellipsis line-h40 label-text"> 32.4325253 </label>
														<span class="float-l w-100 text-l font-s18 c-grey line-h40 text-ellipsis">@Randy Boranders </span>
													</div>
												</div>
												<div class="r-box">
													<time class="float-l w-100 font-s18 line-h30 c-grey-1">11:52</time>
													<a href="#" class="float-l w-100 mt-20 font-s30 line-h50 c-white radius-25 bg-green a-link"> Play </a>
												</div>
											</div>
										</div>
									</li>
									<li class="col mt-30">
										<div class="div-box">
											<div class="c-box plr-20 ptb-20 radius-20 bg-grey-1">
												<div class="l-box">
													<img src="./images/a-2.png" alt="" class="float-l pic-img" />
													<div class="l-div plr-30">
														<h2 class="float-l w-100 text-l font-s30 font-w4 c-white line-h40 h2 ovf-h"> penguin panic </h2>
														<label class="float-l w-100 ptb-20 text-l font-w5 font-s48 text-ellipsis line-h40 label-text"> 536.638 </label>
														<span class="float-l w-100 text-l font-s18 c-grey line-h40 text-ellipsis"> @Randy Boranders </span>
													</div>
												</div>
												<div class="r-box">
													<time class="float-l w-100 font-s18 line-h30 c-grey-1">11:52</time>
													<a href="#" class="float-l w-100 mt-20 font-s30 line-h50 c-white radius-25 bg-green a-link"> Play </a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div> 
							<div class="swiper-slide slide-tab"><!-- Rocket -->
								<ul class="row ptb-30">
									<li class="col mt-30">
										<div class="div-box">
											<div class="c-box plr-20 ptb-20 radius-20 bg-grey-1">
												<div class="l-box">
													<img src="./images/a-1.png" alt="" class="float-l pic-img" />
													<div class="l-div plr-30">
														<h2 class="float-l w-100 text-l font-s30 font-w4 c-white line-h40 h2 ovf-h"> 4 Fantastic Fish in Egypt </h2>
														<label class="float-l w-100 ptb-20 text-l font-w5 font-s48 text-ellipsis line-h40 label-text"> 32.4325253 </label>
														<span class="float-l w-100 text-l font-s18 c-grey line-h40 text-ellipsis">@Randy Boranders </span>
													</div>
												</div>
												<div class="r-box">
													<time class="float-l w-100 font-s18 line-h30 c-grey-1">11:52</time>
													<a href="#" class="float-l w-100 mt-20 font-s30 line-h50 c-white radius-25 bg-green a-link"> Play </a>
												</div>
											</div>
										</div>
									</li>
									<li class="col mt-30">
										<div class="div-box">
											<div class="c-box plr-20 ptb-20 radius-20 bg-grey-1">
												<div class="l-box">
													<img src="./images/a-2.png" alt="" class="float-l pic-img" />
													<div class="l-div plr-30">
														<h2 class="float-l w-100 text-l font-s30 font-w4 c-white line-h40 h2 ovf-h"> penguin panic </h2>
														<label class="float-l w-100 ptb-20 text-l font-w5 font-s48 text-ellipsis line-h40 label-text"> 536.638 </label>
														<span class="float-l w-100 text-l font-s18 c-grey line-h40 text-ellipsis"> @Randy Boranders </span>
													</div>
												</div>
												<div class="r-box">
													<time class="float-l w-100 font-s18 line-h30 c-grey-1">11:52</time>
													<a href="#" class="float-l w-100 mt-20 font-s30 line-h50 c-white radius-25 bg-green a-link"> Play </a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div> 
							<div class="swiper-slide slide-tab"><!-- Turntable -->
								<ul class="row ptb-30">
									<li class="col mt-30">
										<div class="div-box">
											<div class="c-box plr-20 ptb-20 radius-20 bg-grey-1">
												<div class="l-box">
													<img src="./images/a-1.png" alt="" class="float-l pic-img" />
													<div class="l-div plr-30">
														<h2 class="float-l w-100 text-l font-s30 font-w4 c-white line-h40 h2 ovf-h"> 4 Fantastic Fish in Egypt </h2>
														<label class="float-l w-100 ptb-20 text-l font-w5 font-s48 text-ellipsis line-h40 label-text"> 32.4325253 </label>
														<span class="float-l w-100 text-l font-s18 c-grey line-h40 text-ellipsis">@Randy Boranders </span>
													</div>
												</div>
												<div class="r-box">
													<time class="float-l w-100 font-s18 line-h30 c-grey-1">11:52</time>
													<a href="#" class="float-l w-100 mt-20 font-s30 line-h50 c-white radius-25 bg-green a-link"> Play </a>
												</div>
											</div>
										</div>
									</li>
									<li class="col mt-30">
										<div class="div-box">
											<div class="c-box plr-20 ptb-20 radius-20 bg-grey-1">
												<div class="l-box">
													<img src="./images/a-2.png" alt="" class="float-l pic-img" />
													<div class="l-div plr-30">
														<h2 class="float-l w-100 text-l font-s30 font-w4 c-white line-h40 h2 ovf-h"> penguin panic </h2>
														<label class="float-l w-100 ptb-20 text-l font-w5 font-s48 text-ellipsis line-h40 label-text"> 536.638 </label>
														<span class="float-l w-100 text-l font-s18 c-grey line-h40 text-ellipsis"> @Randy Boranders </span>
													</div>
												</div>
												<div class="r-box">
													<time class="float-l w-100 font-s18 line-h30 c-grey-1">11:52</time>
													<a href="#" class="float-l w-100 mt-20 font-s30 line-h50 c-white radius-25 bg-green a-link"> Play </a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div> 
						</div>
					</div>
				</div>
				</div>
		</section>
	</main> <!--main End -->

	<footer>
		<section>
			<div class="container">			
				<ul class="row row-ul">
					<li class="col-5-1">
						<div class="div-box">
							<a href="#" class="float-l w-100 c-grey c-green-h a-link active">
								<i class="float-l w-100 mt-05 iconfont line-h60 font-s40"> &#xe62d; </i>
								<label class="float-l w-100 font-s20 line-h30 font-w4"> Bank </label>
							</a>
						</div>
					</li>
					<li class="col-5-1">
						<div class="div-box">
							<a href="#" class="float-l w-100 c-grey c-green-h a-link">
								<i class="float-l w-100 mt-05 iconfont line-h60 font-s40"> &#xe69e; </i>
								<label class="float-l w-100 font-s20 line-h30 font-w4"> Game </label>
							</a>
						</div>
					</li>
					<li class="col-5-1">
						<div class="div-box">
							<a href="#" class="float-l w-100 c-grey c-green-h a-link">
								<i class="float-l w-100 mt-05 iconfont line-h60 font-s40"> &#xe611; </i>
								<label class="float-l w-100 font-s20 line-h30 font-w4"> Jackpot </label>
							</a>
						</div>
					</li>
					<li class="col-5-1">
						<div class="div-box">
							<a href="#" class="float-l w-100 c-grey c-green-h a-link">
								<i class="float-l w-100 mt-05 iconfont line-h60 font-s40"> &#xe608; </i>
								<label class="float-l w-100 font-s20 line-h30 font-w4">  Make Money </label>
							</a>
						</div>
					</li>
					<li class="col-5-1">
						<div class="div-box">
							<a href="#" class="float-l w-100 c-grey c-green-h a-link">
								<i class="float-l w-100 mt-05 iconfont line-h60 font-s40"> &#xe6cc; </i>
								<label class="float-l w-100 font-s20 line-h30 font-w4"> Bonus </label>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</footer>


</template>

<style scoped>
.time {
  background-image: url('./images/bg-time.png');
}
</style>
<style scoped>
@import './css/ds-sub.css';
@import './css/DsGrid.css';
</style>
