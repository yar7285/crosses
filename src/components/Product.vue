<template>
 <v-container>
   <div class="single-page">
     <section>
       <div class="container">
         <div class="row">
           <div class="single-contetnt col-xs-12 col-sm-18 col-sm-offset-2 col-lg-16 col-lg-offset-4">
             <div class="row single-itm-tabs-row">
               <div class="col-xs-12 col-sm-6">
                 <div class="single-itm-tabs">
                   <div class="nav-tabs-wrapper">
                     <ul class="nav nav-tabs" role="tablist">
                       <li class="active" role="presentation"><a href="#studioSliderPhotosTab" aria-controls="studioSliderPhotosTab" role="tab" data-toggle="tab">PROMO фото</a></li>
                     </ul>
                   </div>
                   <div class="tab-content">
                     <div class="tab-pane active" id="studioSliderPhotosTab" role="tabpanel">
                       <div class="itm-carousels-wrapper">
                         <div class="bee3D--parent" id="sliderStudioPhotos">
                           <section class="bee3D--slide"><img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" alt="NIKE AIR HUARACHE Live Photo"></section>
                           <section class="bee3D--slide"><img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" alt="NIKE AIR HUARACHE Live Photo"></section>
                           <section class="bee3D--slide"><img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" alt="NIKE AIR HUARACHE Live Photo"></section>
                           <section class="bee3D--slide"><img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" alt="NIKE AIR HUARACHE Live Photo"></section>
                           <section class="bee3D--slide"><img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" alt="NIKE AIR HUARACHE Live Photo"></section>
                           <div class="bee3D-nav-btns"><span class="bee3D--nav bee3D--nav__prev"></span><span class="bee3D--nav bee3D--nav__next"></span></div>
                         </div>
                       </div>
                       <!--<div class="download-link"><a href="javascript:void(0);">Скачать PROMO фото</a></div>-->
                     </div>
                   </div>
                 </div>
               </div>
               <div class="col-xs-12 col-sm-6 single-itm-description-col">
                 <div class="single-itm-description">
                   <div class="single-itm-head">
                     <h1 class="h1 single-itm-title">Nike AIR HUARACHE</h1>
                     <div class="single-itm-price visible-xs">1200<span class="currency">&nbsp;&#8372;</span></div>
                   </div>
                   <div class="single-itm-characteristics">
                     <div class="single-itm-characteristic flex-row"><span class="single-itm-characteristic-title">Оригинальное названи:&emsp;</span><span class="single-itm-characteristic-val">Найк Бабочка Малина</span></div>
                     <div class="single-itm-characteristic flex-row"><span class="single-itm-characteristic-title">Артикул:&emsp;</span><span class="single-itm-characteristic-val">22341567</span></div>
                     <div class="single-itm-price hidden-xs">1200<span class="currency">&nbsp;&#8372;</span></div>
                     <div class="single-itm-characteristic itms-in-row">
                       <div class="single-itm-characteristic-title">Цвет:</div>
                       <div class="single-itm-colors-wrapper">
                         <!-- класс active у цвета товара, который на текущей странице--><a class="single-itm-color active" href="javascript:void(0);" style="background-image: url(img/itm-photos/blue.jpg);"></a><a class="single-itm-color" href="javascript:void(0);" style="background-image: url(img/itm-photos/pink.jpeg);"></a><a class="single-itm-color" href="javascript:void(0);" style="background-image: url(img/itm-photos/blue.jpg);"></a>
                       </div>
                     </div>
                     <div class="single-itm-characteristic itms-in-col">
                       <div class="single-itm-characteristic-title">Размер:</div>
                       <!-- TODO: решить траблу с цветом цифр-->
                       <div class="select-wrapper">
                         <select class="selectpicker" title="Выберите размер">
                           <option>36</option>
                           <option>37</option>
                           <option>38 - нет в наличии</option>
                           <option>39</option>
                           <option>40</option>
                           <option>41</option>
                         </select>
                       </div>
                     </div>
                     <div class="action-btns-wrapp">
                       <div class="btns-row">
                         <button class="add-to-cart btn btn-green btn-lg" type="button" data-toggle="modal" data-target="#chooseSizeModal">Купить</button>
                         <!--<button class="favourite-btn" type="button" data-toggle="modal"><img src="img/icns/favourite.svg"></button>-->
                       </div>
                       <div class="btns-row">
                         <!--<button class="reserve-btn" type="button" data-toggle="modal" data-target="#addToReserveModal">Зарезервировать на 15 минут</button>-->
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="single-itm-tabs single-itm-descr-tabs">
                   <div class="nav-tabs-wrapper">
                     <ul class="nav nav-tabs" role="tablist">
                       <li class="active" role="presentation"><a href="#fullDescrTab" aria-controls="fullDescrTab" role="tab" data-toggle="tab">Описание</a></li>
                       <li role="presentation"><a href="#fullCompTab" aria-controls="fullCompTab" role="tab" data-toggle="tab">Состав</a></li>
                     </ul>
                   </div>
                   <div class="tab-content">
                     <div class="tab-pane active" id="fullDescrTab" role="tabpanel">
                       <p>Впервые представленные как кроссовки для бега нового поколения, кроссовки Nike Air Max Huarache являлись находкой для не профессиональных бегунов. В первую очередь благодаря революционной технологии амортизации, которая отныне стала видимой в блоке подошвы. Эта технология уникальна и нигде больше не используется. Согласно её инструкции специалисты компании Nike создают особый баллон. По инструкции он должен быть создан из полиуретанового пластика, затем его накачивают инертным газом. Затем вставляют в подошву.</p><br>
                      </div>
                     <div class="tab-pane" id="fullCompTab" role="tabpanel">
                       <p>Впервые представленные как кроссовки для бега нового поколения, кроссовки Nike Air Max Huarache являлись находкой для не профессиональных бегунов. В первую очередь благодаря революционной технологии амортизации, которая отныне стала видимой в блоке подошвы. Эта технология уникальна и нигде больше не используется. Согласно её инструкции специалисты компании Nike создают особый баллон. По инструкции он должен быть создан из полиуретанового пластика, затем его накачивают инертным газом. Затем вставляют в подошву.</p><br>
                       <p>Сегодняшняя версия Nike Air Max Huarache остается верной своим корням, оставаясь эталоном комфорта, в то время как в настоящее время доступна в невероятном количестве цветов, комбинациях материалов, которые делают его гораздо более интересной покупкой, чем большинство современных линеек обуви.</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     <section>
       <v-layout
         column
         wrap
         class="my-5"
         align-center
       >
         <v-flex xs12 sm4 class="my-3">
           <div class="text-xs-center">
             <h2 class="headline">ВОЗМОЖНО ВАМ ПОНРАВИТСЯ</h2>
           </div>
         </v-flex>
         <v-flex xs12>
           <v-container grid-list-xl>
             <v-layout row wrap align-center>
               <v-flex xs12 sm6 md4 v-for="product in products" :key="product.id">
                 <v-card>
                   <v-card-media
                     :src="product.imageSrc"
                     height="200px"
                   ></v-card-media>
                   <v-card-title primary-title class="text-xs-center">
                     <div>
                       <h3 class="headline mb-0 text-xs-center">{{product.title}}</h3>
                       <div class="text-xs-center">Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                         Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                         Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.</div>
                     </div>
                   </v-card-title>
                   <v-card-actions center>
                     <v-btn flat color="orange" :to="'/product/' + product.id">Open</v-btn>
                     <v-btn raised color="orange" :to="'/order/' + product.id">Buy</v-btn>
                   </v-card-actions>
                 </v-card>
               </v-flex>
             </v-layout>
           </v-container>
         </v-flex>
       </v-layout>
     </section>
   </div>
 </v-container>

</template>

<script>
    export default {
      name: 'Product',
      data () {
        return {
          products: [
           {title: 'nike', description: 'sssss', promo: false, imageSrc: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg', id: 1112},
           {title: 'nike1', description: 'sssss1', promo: false, imageSrc: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg', id: 1112},
           {title: 'nike2', description: 'sssss2', promo: false, imageSrc: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg', id: 1112}
          ]
        }
      }
    }
</script>

<style scoped>
</style>
