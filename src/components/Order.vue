<template>
  <v-container>
    <div class="order-page">
      <section>
        <div class="container">
          <div class="row">
            <form class="order-main-form order-content col-xs-20 col-sm-18 col-sm-offset-2 col-lg-16 col-lg-offset-4" id="orderForm">
              <div class="row head-row">
                <div class="col-xs-20">
                  <h1 class="heading-decorated"><span class="text-trasformed">Оплата и доставка</span></h1>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-20 col-md-17">
                  <div class="order-form-fields">
                    <dl>
                      <dt>Товар будет получать:</dt>
                      <dd>
                        <div class="order-variation-btns">
                          <div class="radio-wrapp">
                            <div class="radio">
                              <input name="personWhoReceives" id="radio1" type="radio" checked data-value="dropshippersReceivingRequisites">
                              <label class="radio-label" for="radio1">Я</label>
                            </div>
                          </div>
                          <div class="inputs-wrapp hidden-field open" id="dropshippersReceivingRequisites">
                            <div class="input-wrapp">
                              <input class="input" id="customersName" type="text" value="" placeholder="Ф.И.О.">
                            </div>
                            <div class="input-wrapp">
                              <input class="input" id="customersTel" type="tel" value="" placeholder="Телефон">
                            </div>
                          </div>
                        </div>
                        <!--<div class="order-variation-btns">-->
                          <!--<div class="radio-wrapp">-->
                            <!--<div class="radio">-->
                              <!--<input name="personWhoReceives" id="radio2" type="radio" data-value="customersReceivingRequisites">-->
                              <!--<label class="radio-label" for="radio2">Мой покупатель</label>-->
                            <!--</div>-->
                          <!--</div>-->
                          <!--<div class="inputs-wrapp hidden-field" id="customersReceivingRequisites">-->
                            <!--<div class="input-wrapp">-->
                              <!--<input class="input" id="customersName" type="text" value="" placeholder="Ф.И.О.">-->
                            <!--</div>-->
                            <!--<div class="input-wrapp">-->
                              <!--<input class="input" id="customersTel" type="tel" value="" placeholder="Телефон">-->
                            <!--</div>-->
                          <!--</div>-->
                        <!--</div>-->
                      </dd>
                    </dl>
                    <!--<dl>-->
                      <!--<dt>Товар будет оплачивать:</dt>-->
                      <!--<dd>-->
                        <!--<div class="order-variation-btns">-->
                          <!--<div class="radio-wrapp">-->
                            <!--<div class="radio">-->
                              <!--<input name="personWhoPays" id="dropshippePaysVariant" type="radio" checked data-value="dropshippersPaymentRequisites">-->
                              <!--<label class="radio-label" for="dropshippePaysVariant">Я</label>-->
                            <!--</div>-->
                          <!--</div>-->
                          <!--<div class="inputs-wrapp hidden-field open" id="dropshippersPaymentRequisites">-->
                            <!--<div class="input-wrapp">-->
                              <!--<input class="input input-readonly" type="text" value="Иванова Наталья">-->
                            <!--</div>-->
                            <!--<div class="input-wrapp">-->
                              <!--<input class="input input-readonly" type="tel" value="+38 099 23 44 789">-->
                            <!--</div>-->
                          <!--</div>-->
                        <!--</div>-->
                        <!--<div class="order-variation-btns">-->
                          <!--<div class="radio-wrapp">-->
                            <!--<div class="radio">-->
                              <!--<input name="personWhoPays" id="customerPaysVariant" type="radio" data-value="customersPaymentRequisites">-->
                              <!--<label class="radio-label" for="customerPaysVariant">Мой покупатель</label>-->
                            <!--</div>-->
                          <!--</div>-->
                          <!--<div class="inputs-wrapp hidden-field" id="customersPaymentRequisites">-->
                            <!--<div class="input-wrapp">-->
                              <!--<input class="input" type="text" value="" placeholder="Ф.И.О.">-->
                            <!--</div>-->
                            <!--<div class="input-wrapp">-->
                              <!--<input class="input" type="tel" value="" placeholder="Телефон">-->
                            <!--</div>-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</dd>-->
                    <!--</dl>-->
                    <dl>
                      <dt>Способ оплаты:</dt>
                      <dd>
                        <div class="order-variation-btns">
                          <div class="radio-wrapp">
                            <div class="radio">
                              <input name="paymentMethod" id="radio5" type="radio">
                              <label class="radio-label" for="radio5">Наличными при получении / наложенный платеж</label>
                            </div>
                          </div>
                        </div>
                        <div class="order-variation-btns">
                          <div class="radio-wrapp">
                            <div class="radio">
                              <input name="paymentMethod" id="radio6" type="radio" data-value="bankPaymentRequisites">
                              <label class="radio-label" for="radio6">Предоплата на карту</label>
                            </div>
                          </div>
                          <div class="hidden-field" id="bankPaymentRequisites"><span class="payment-variant">(ПриватБанк 1234 5678 1234 3456 Иванов Андрей Иванович)</span></div>
                        </div>
                      </dd>
                    </dl>
                    <dl>
                      <dt>Способ доставки:</dt>
                      <dd>
                        <div class="order-variation-btns">
                          <div class="radio-wrapp">
                            <div class="radio">
                              <input name="deliveryMethod" id="radio7" type="radio">
                              <label class="radio-label" for="radio7">Самовывоз (г. Киев, ул. Десятинная, 12)</label>
                            </div>
                          </div>
                        </div>
                        <div class="order-variation-btns">
                          <div class="radio-wrapp">
                            <div class="radio">
                              <input name="deliveryMethod" id="radio8" type="radio" data-value="novaPoshtaRequisites">
                              <label class="radio-label" for="radio8">Новая Почта (стоимость согласно тарифов Новой Почты)</label>
                            </div>
                          </div>
                          <div class="inputs-wrapp hidden-field" id="novaPoshtaRequisites">
                            <div class="select-wrapper input-wrapp">
                              <select class="selectpicker" title="Выберите город" data-size="5">
                                <option>Киев</option>
                                <option>Черкассы</option>
                                <option>Запорожье</option>
                                <option>Киев</option>
                                <option>Черкассы</option>
                                <option>Запорожье</option>
                              </select>
                            </div>
                            <div class="select-wrapper input-wrapp">
                              <select class="selectpicker" title="Выберите отделение" data-size="5">
                                <option>210</option>
                                <option>55</option>
                                <option>210</option>
                                <option>55</option>
                                <option>210</option>
                                <option>55</option>
                                <option>210</option>
                                <option>55</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="order-variation-btns">
                          <div class="radio-wrapp">
                            <div class="radio">
                              <input name="deliveryMethod" id="radio9" type="radio" data-value="novaPoshtaAddressRequisites">
                              <label class="radio-label" for="radio9">Адресная доставка Новой Почтой (стоимость согласно тарифов Новой Почты)</label>
                            </div>
                          </div>
                          <div class="inputs-wrapp hidden-field" id="novaPoshtaAddressRequisites">
                            <div class="select-wrapper input-wrapp">
                              <select class="selectpicker" title="Выберите город">
                                <option>Киев</option>
                                <option>Черкассы</option>
                                <option>Запорожье</option>
                              </select>
                            </div>
                            <div class="input-wrapp">
                              <input class="input" type="text" value="" placeholder="Ф.И.О.">
                            </div>
                            <div class="input-wrapp">
                              <input class="input" type="tel" value="" placeholder="Телефон">
                            </div>
                            <div class="input-wrapp">
                              <input class="input" type="text" value="" placeholder="Адрес">
                            </div>
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-20 col-md-17">
                  <div class="order-itms" id="orderItmsBlock">
                    <div class="order-itm"><a class="order-itm-main" href="javascript:void(0);">
                      <div class="itm-img"><img src="img/itms/ked-itm.png" alt="Adidas Stan Smith White Metallic салатовые"></div>
                      <div class="itm-descr">
                        <div class="itm-title">Adidas Stan Smith White Metallic салатовые</div>
                        <div class="itm-size"><span class="itm-prop-title">Размер:&emsp;</span><span class="itm-prop-val">38</span></div>
                        <div class="itm-price"><span class="itm-prop-title">Цена:&emsp;</span><span class="itm-prop-val"><span class="price">1000</span><span class="currency">&nbsp;грн.</span></span></div>
                        <div class="itm-quantity-block">
                          <div class="itm-prop-title">Кол-во:&emsp;</div>
                          <div class="itm-prop-val">
                            <!-- min = 1, max = кол-во пар на складе (из базы)-->
                            <input class="order-quantity input-number" type="text" name="quant[1]" value="1" min="1" max="10">
                            <div class="increment-btns">
                              <button class="btn-number btn-number-plus" type="button" data-type="plus" data-field="quant[1]"></button>
                              <button class="btn-number btn-number-minus" type="button" data-type="minus" data-field="quant[1]"></button>
                            </div>
                          </div>
                        </div>
                      </div></a>
                      <div class="order-itm-bargain hidden-field">
                        <div class="labeled-input">
                          <input type="number" value="1100">
                          <label>Моя цена:</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-20 col-md-17">
                  <div class="order-form-fields order-comment-field">
                    <dl>
                      <dt>Комментарий:</dt>
                      <dd>
                        <div class="textarea-wrapp">
                          <textarea></textarea>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-20 col-md-7">
                  <div class="order-final-count">
                    <div class="dropshippers-order-value" id="dropshipperPaysTotal">
                      <dl>
                        <dt>Общая стоимость:</dt>
                        <dd><span id="dropshipperTotalSum"></span><span>&nbsp;грн.</span></dd>
                      </dl>
                      <!--<dl class="bonus-payment">-->
                        <!--<dt>-->
                          <!--<div class="checkbox">-->
                            <!--<input id="bonusPayment" name="bonusPayment" type="checkbox">-->
                            <!--<label class="check-label" for="bonusPayment">Оплатить бонусами</label>-->
                          <!--</div>-->
                        <!--</dt>-->
                        <!--<dd><span id="bonuses">500</span><span>&nbsp;грн.</span></dd>-->
                      <!--</dl>-->
                      <dl>
                        <dt>ИТОГО К ОПЛАТЕ:</dt>
                        <dd><span id="dropshipperTotalPay"></span><span>&nbsp;грн.</span></dd>
                      </dl>
                    </div>
                    <div class="dropshippers-order-value hidden-field" id="customerPaysTotal">
                      <!--<dl>-->
                        <!--<dt>Общая стоимость:</dt>-->
                        <!--<dd><span id="customerTotalSum"></span><span>&nbsp;грн.</span></dd>-->
                      <!--</dl>-->
                      <!--<dl>-->
                        <!--<dt>Покупатель платит:</dt>-->
                        <!--<dd><span id="customerPaysSum"></span><span>&nbsp;грн.</span></dd>-->
                      <!--</dl>-->
                      <!--<dl>-->
                        <!--<dt>Мой доход:</dt>-->
                        <!--<dd><span id="myProfit"></span><span>&nbsp;грн.</span></dd>-->
                      <!--</dl>-->
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-20 col-md-7">
                  <div class="submit-btn-wrapp">
                    <input class="btn btn-green btn-lg" type="submit" value="Оформить заказ">
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </v-container>
</template>

<script>
    export default {
      name: 'Order'
    }
</script>

<style scoped>

</style>
