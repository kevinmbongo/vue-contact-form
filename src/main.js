import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { extend } from 'vee-validate'

import {
  digits,
  email,
  excluded,
  length,
  max,
  max_value as maxValue,
  numeric,
  required,
} from 'vee-validate/dist/rules'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')

extend('required', {
  ...required,
  message: 'Ce champ est obligatoire',
})

extend('email', {
  ...email,
  message: 'Ce champ doit être un email valide',
})

extend('numeric', {
  ...numeric,
  message: 'Ce champ ne peut contenir que des caractères numériques',
})

extend('digits', {
  ...digits,
  message:
    'Ce champ doit être numérique et contenir exactement {length} chiffres',
})

extend('excluded', {
  ...excluded,
  message: 'Ce champ est obligatoire',
})

extend('length', {
  ...length,
  message: 'Ce champ est obligatoire length {_value_}',
})

extend('phone', {
  message: "Le numéro du téléphone n'est pas valide",
  validate: (value) => {
    const pattern = '^((\\+)33|0)[1-9](\\d{2}){4}$'
    const strongRegex = new RegExp(pattern)
    return strongRegex.test(value)
  },
})

extend('vin', {
  message: 'Veuillez entrer un VIN valide',
  validate: (value) => value.length === 17,
})

extend('max_value', {
  ...maxValue,
  message: 'Ce champ ne doit pas dépasser {max}',
})

extend('max', {
  ...max,
  message: 'Ce champ doit faire au maximum {length} caractères',
})
