<!-- Please remove this file from your project -->
<template>
  <div
    id="cursive"
    class="
      relative
      items-top
      flex
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center
      sm:pt-0
    "
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <!-- <img src="Logo.jpg" alt="TODO App" id="logo"> -->
    <div class="center-div">
      <h1 id="h1-style"><span>TODO APP</span></h1>
      <div id="div-p">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. 
        </p>
      </div>
      <div id="div-a">
        <a href="/add">Add</a><br />
        <a href="/delete">Delete</a><br />
        <a href=""></a>
      </div>
    </div>
  </div>
</template>
<style scoped>
#logo{
  align-content: center;
  height:10%;
  width: 10%;
}

#cursive{
  font-family: cursive;
}

.center-div {
  border: 0.1px solid black;
  width: 40%;
  height: 280px;
  border-radius: 18px;
  box-shadow: 10px 10px 8px #797777;
}

#h1-style {
  margin: 8px 4px 5px 4px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px #4699c5;
}

#div-a {
  padding-left: 3%;
  padding-top: 3%;
  font-size: 19px;
}

#div-p {
  text-align: justify;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 3%;
}

#div-a a {
  color: #4699c5;
}

#div-a a:hover {
  color: #797777;
}
</style>
