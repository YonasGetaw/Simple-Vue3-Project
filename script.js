const vmn = Vue.createApp({
  data() {
    return {
      firstName: 'Yonas Getaw',
      middleName: '',
      lastName: 'Getaw',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com">Google</a>',
      age: 20,
      mode: 2,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    increment() {
      this.age++;
    },
    updateName(msg, event) {
      event.preventDefault();
      console.log(msg);
      this.lastName = event.target.value; // ✅ Fix here
    },
    updatedMiddleName(event) {
      this.middleName = event.target.value;
    }
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 4000);
    }
  }
}).mount('#app');
