
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
        <li class="info__item">Values are <strong>duplicated only twice.</strong></li>
        <li class="info__item">There is <strong>only one non duplicate value.</strong></li>
        <li class="info__item">The non duplicate value can be placed <strong>anywhere on the array.</strong></li>
        <li class="info__item">The result must be an <strong>integer.</strong></li>
      </ul>
    </section>

    <section class="results"> 

      <article class="results__block results__block--test">
        <header>
          <h2 class="results__title">Test data</h2>
        </header>
        <p class="results__value">1, 2, 3, 3, 2, 1, 4</p>
      </article>


      <section class="results__block results__block--compare">
        <article class="results__column results__column--expected">
          <header>
            <h3 class="results__title">Expected result</h3>
          </header>
          <p class="results__value">4</p>
        </article>

        <article class="results__column results__column--your">
          <header>
            <h3 class="results__title">Your result</h3>
          </header>
          <p class="results__value">4</p>
        </article>
      </section>
    </section>
  </main>
`;
