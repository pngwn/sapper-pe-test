<script context="module">
  export async function preload(page, session) {
    return { ...session.form };
  }
</script>

<script>
  export let firstname, othername, age;
</script>

<style>
  h1 {
    text-transform: uppercase;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 50px auto;
  }

  form > span {
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    grid-gap: 20px;
    align-items: center;
    text-align: right;
  }

  form > span {
    margin: 10px;
  }

  input,
  button {
    font-size: 20px;
    padding: 6px 10px;
    grid-column: 2;
    margin: 0;
  }

  label {
    font-weight: bold;
  }

  .error {
    color: red;
    width: 200px;
    text-align: left;
  }

  .errorinput {
    border: 1px solid red;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>A form</h1>

<form action="/form_action" method="POST">
  <span>
    <label for="firstname">First Name:</label>
    <input
      class:errorinput={firstname.invalid}
      id="firstname"
      name="firstname"
      value={firstname.value} />
    {#if firstname.invalid}
      <div class="error">{firstname.invalid}</div>
    {/if}
  </span>
  <span>
    <label for="othername">Other Name:</label>
    <input
      class:errorinput={othername.invalid}
      id="othername"
      name="othername"
      value={othername.value} />
    {#if othername.invalid}
      <div class="error">{othername.invalid}</div>
    {/if}
  </span>
  <span>
    <label for="age">Age:</label>
    <input
      class:errorinput={age.invalid}
      id="firstname"
      type="number"
      name="age"
      value={age.value} />
    {#if age.invalid}
      <div class="error">{age.invalid}</div>
    {/if}
  </span>
  <span>
    <button type="sumbit">Submit</button>
  </span>
</form>
