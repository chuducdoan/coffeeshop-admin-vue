import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import './assets/tailwind.css';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDatepicker from './components/UI/BaseDatepicker.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import BaseCheckbox from './components/UI/BaseCheckbox.vue';
import BaseSelect from './components/UI/BaseSelect.vue';
import BaseTable from './components/UI/BaseTable.vue';
import BaseUpload from './components/UI/BaseUpload.vue';
import router from './router.js';
import store from './store/index.js';
import BaseCard from './components/UI/BaseCard.vue';
import BaseInput from './components/UI/BaseInput.vue';
import BasePagination from './components/UI/BasePagination.vue';
import BaseSnipper from './components/UI/BaseSnipper.vue';
import BaseTextarea from './components/UI/BaseTextarea.vue';

const app = createApp(App);

app.component('BaseButton', BaseButton);
app.component('BaseTable', BaseTable);
app.component('BaseCheckbox', BaseCheckbox);
app.component('BaseDatepicker', BaseDatepicker);
app.component('BaseSelect', BaseSelect);
app.component('BaseUpload', BaseUpload);
app.component('BaseDialog', BaseDialog);
app.component('BaseCard', BaseCard);
app.component('BaseInput', BaseInput);
app.component('BasePagination', BasePagination);
app.component('BaseSnipper', BaseSnipper);
app.component('BaseTextarea', BaseTextarea);

app.use(router);
app.use(VCalendar, {
  componentPrefix: 'vc',
});
app.use(store);
app.mount('#app');
