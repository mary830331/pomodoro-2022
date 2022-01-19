<template lang="pug">
// #app
//   b-navbar.bg-warning(toggleable='lg' type='dark' variant='dark')
//     b-container
//       b-navbar-brand(to='/') 番茄鐘
//       b-navbar-toggle(target='nav-collapse')
//       b-collapse#nav-collapse(is-nav)
//         b-navbar-nav
//           b-nav-item(to='/list') 事項
//           b-nav-item(to='/settings') 設定
//   keep-alive
//     router-view(v-if="$route.meta.keepAlive")
//   router-view(v-if="!$route.meta.keepAlive")
#app
  #top
    b-container.pt-5
      img(src='./assets/e103b6c4a567e98f65278a31c5c76c81e6fadb46.png')
      hr
  #contect
    #list
      b-container
        b-row
          b-col(cols="12" md="6").justify-content-center.d-flex.align-items-center
            img.pb-5(src='./assets/e4a3b1a01e60660385c4361a5a6e072cd0f361db.png')
            div.tomato.text-center
              h1 25 : 0
              h5 Round 1
              b-button.btn-lg.btn-dark Start
          b-col
            b-link.mr-3.h4.active(variant="dark" href='#/list' target='_self' aria-current='page') Check list
            b-link.link-dark.h4(variant="dark" href='#/settings' target='_self') Daily report
            fieldset.form-group
              legend.bv-no-focus-ring.col-form-label.pt-0#__BVID__13__BV_label_(tabindex='-1') what are going to do today
              div
                input.form-control(type='text')
                .invalid-feedback(tabindex='-1' role='alert' aria-live='assertive' aria-atomic='true') 請至少輸入兩個字
            b-button(pill variant="outline-dark") +
            hr
            h4 To-do
            table.table.b-table(role='table' aria-busy='false' aria-colcount='2')
              thead(role='rowgroup')
                tr(role='row')
                  th(role='columnheader' scope='col' aria-colindex='1' aria-label='Name')
                    div
                  th(role='columnheader' scope='col' aria-colindex='2' aria-label='Action')
                    div
              tbody(role='rowgroup')
            h4 Done
            table.table.b-table(role='table')
              thead
                tr
              tbody
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');
</style>
