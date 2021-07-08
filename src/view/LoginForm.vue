<template>
  <div class="container py-5">
    <div class="card login mx-auto shadow-sm">
      <div class="card-body">
        <h1 class="login-title">Welcome</h1>
        <h3 v-if="!this.$store.state.auth.isAuthenticated" class="bg-danger border py-3 mb-4 text-light rounded-3 alert-incorrect">Incorrect account!!!</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <input 
            type="email"
            id="email"
            class="form-control" 
            placeholder="Email"
            v-model.trim="$v.email.$model"
            :class="{ 'is-invalid': $v.email.$error, 'is-valid': !$v.email.$invalid}">
            <div class="valid-feedback">Your email is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.email.required">Email is required.</span>
              <span v-if="!$v.email.isUnique">This email is already registered.</span>
            </div>
          </div>
          
          
          <div style="margin-bottom: 3em"></div>

          <div class="form-group">
            <input 
            type="password" 
            class="form-control" 
            placeholder="Password"
            id="password"
            v-model.trim="$v.password.$model"
            :class="{ 'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid}">
            <div class="valid-feedback">Your password is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.password.required">Password is required.</span>
              <span v-if="!$v.password.minLength">{{ $v.password.$params.minLength.min  }} characters minimun.</span>
            </div>
          </div>
          
          <div style="margin-bottom: 3.2em"></div>
          <button type="submit" class="btn btn-primary">Login</button>
          <div style="margin-bottom: 2.33em"></div>
          <div class="d-flex flex-row">
            <button class="btn btn-secondary">Facebook</button>
            <div style="margin-right: 2.8em"></div>
            <button class="btn btn-danger">Google</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  validations: {
    email: {
      required,
      email,
      isUnique (value) {
        if (value === '') return true

        var email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return new Promise((resolve)=>{
          setTimeout(() => {
            resolve(email_regex.test(value))
          }, 350 + Math.random() * 300)
        })
      }
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  methods: {
    submitForm() {
      // Handler login
      var accountLogin = {
        email: this.email,
        password: this.password
      }
      // console.log(accountLogin)
      this.$store.dispatch("login", accountLogin)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common.scss';

.card {
  border-radius: 8px !important;
}

.login {
  width: $wLoginForm;
  background-color: $bgCard;
  padding: 38px 85px;
  .login-title {
    font-size: 3.175em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0px;
    margin-bottom: 25px !important;
  }
}

.btn {
  padding: 25px 10px !important;
  font-size: 1.267em;
  font-weight: 600 !important;
  letter-spacing: 1px;
  border: none;
}

.btn-primary {
  width: 100%;
  background-color: $btnPrimary;
  color: $clTextWhite;
}

.btn-secondary {
  width: calc((100% - 1.8em)/2);
  background-color: $btnSecondary;
  color: $clTextWhite;
}

.btn-danger {
  width: calc((100% - 1.8em)/2);
  background-color: $btnDanger;
  color: $clTextWhite;
}

input {
    border: 2px solid $borderInput;
    border-radius: 8px !important;
    padding: 25px;
    background-color: $bgCard;
    font-size: 1.725em;
    font-weight: 400;
    letter-spacing: 0.02em;
}
::placeholder {
    color: $clTextDark !important;
}
.valid-feedback, .invalid-feedback {
  position: relative !important;
  text-align: left;
  top: 3px;
  right: -5px;
  font-size: 1.33em;
}
.alert-incorrect {
  transition: 0.5s;
}

</style>
