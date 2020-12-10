import generateApi from './components/generateApi.vue';
import transactions from './components/transactions.vue';
import SignUp from './components/SignUp.vue';
import home from './components/home.vue';
import payment from './components/payment.vue';
import withdrow from './components/withdrow.vue';
import landingPage from './components/landingPage.vue';

export default [
    { path: '/', component: landingPage },
    { path: '/SignUp', component: SignUp },
    { path: '/home', component: home },
    { path: '/withdrow', component: withdrow },
    { path: '/payment', component: payment },
    { path: '/generateapi', component: generateApi },
    { path: '/transactions', component: transactions },
    { path: '/landingPage', component: landingPage },
]