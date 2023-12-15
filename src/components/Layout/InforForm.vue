<template>
    <div class="form-container bg-Formbackground backdrop-blur">
    <h1 class="mb-5 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white tracking-wider">Kunde information</h1>
    <form>
      <label for="fname">Fornavn:</label>
      <input type="text" id="fname" name="fname" required>
      
      <label for="lname">Efternavn:</label>
      <input type="text" id="lname" name="lname" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="phone">Telefonnummer:</label>
      <input type="tel" id="phone" name="phone" required>
      
      <label for="other">Andet:</label>
      <input type="text" id="other" name="other">
      
      <label for="comment">Kommentar:</label>
      <textarea id="comment" name="comment"></textarea>
      
     
      
      <div class="next-button">
        <button type="submit">Næste</button>
      </div>
    </form>
  </div>

</template>

<style>

     .form-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 50px;
      margin-top: 5vh;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      color: white;
      padding-bottom: 1vh;
    }
    
    .form-container input,
    .form-container textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: bl;
    }

    
    .form-container button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .form-container button:hover {
      background-color: #45a049;
    }
    
    .form-container .next-button {
      text-align: right;
    }
    
    .form-container .next-button button {
      background-color: #008CBA;
    }
    
    .form-container .next-button button:hover {
      background-color: #007a99;
    }
    
    .form-container .checkbox-container {
      display: flex;
      align-items: center;
    }
    
    .form-container .checkbox-container label {
      margin-right: 10px;
    }
    
    .form-container .checkbox-container input {
      margin-right: 5px;
    }
</style>