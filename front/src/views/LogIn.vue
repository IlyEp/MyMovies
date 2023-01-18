<template>
  <div class="main">

      <form @submit.prevent="submitform" class="form">
        <p class="title"> LOGIN</p>
        <label class="label" for="email">Email</label>
        <input type="email" name="email" class="input" placeholder="Email">
        <label class="label" for="password">Password</label>
        <input type="password" name="password" class="input" placeholder="Password">



        <button class="submitbutton">Submit</button>
      </form>
    </div>
  </template>

<script>

</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #dfb235;


}
.form{
  width: 600px;
  height: 700px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 10px solid #dfb235;
  border-radius: 10px;
}
.label{
  font-size: 25px;
  font-family: Bahnschrift;
}

.input {
  background-color: whitesmoke;
  width: 400px;
  height: 30px;
  border: 0px solid white;
  border-left: 5px solid #dfb235;
  padding: 5px;
  margin-top: 25px;
  margin-bottom: 25px;


}
.submitbutton{
  background-color: #dfb235;
  width: 170px;
  height: 50px;
  border: 0px solid white;
  padding: 5px;
  margin-top: 40px;
  border-radius: 10px;
  font-family: Bahnschrift;
  font-size: 110%;
}
.title{
  margin-bottom: 100px;
  font-family: Bahnschrift;
  font-weight: bold;
  font-size: 300%;
}
</style>