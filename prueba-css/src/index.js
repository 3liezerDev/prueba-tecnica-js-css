
var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `

  <header class="layout__header">
    <img src="./src/assets/logo.svg" alt="Logo Ancert" class="layout__logo" />
    <h1 class="layout__title">Unique Element Challenge</h1>
  </header>
  

  <main class="layout__main">

    <section class="info"> 
      <h2 class="info__title">Target</h2>
      <p class="info__description">Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</p>

      <h2 class="info__title">Considerations</h2>
      <ul class="info__list">
        <li class="info__item">Values are duplicated only twice.</li>
        <li class="info__item">There is only one non duplicate value.</li>
        <li class="info__item">The non duplicate value can be placed anywhere on the array.</li>
        <li class="info__item">The result must be an integer.</li>
      </ul>
    </section>

    <section class="results"> 
      <h2 class="results__title">Test Data</h2>
      <div class="results__value">${arrayTest}</div>
        
      <h2 class="results__title">Expected result</h2>
      <div class="results__value">4</div>

      <h2 class="results__title">Your Result</h2>
      <div class="results__value">4</div>
    </section>
  </main>
`;
