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
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>A form</h1>

<form action="/form_action" method="POST">
  <span>
    <label for="firstname">First Name:</label>
    <input id="firstname" name="firstname" />
  </span>
  <span>
    <label for="othername">Other Name:</label>
    <input id="othername" name="othername" />
  </span>
  <span>
    <label for="age">Age:</label>
    <input id="firstname" type="number" name="age" />
  </span>
  <span>
    <button type="sumbit">Submit</button>
  </span>
</form>
