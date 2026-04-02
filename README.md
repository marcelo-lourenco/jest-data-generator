# Jest Data Generator with Gerador-BR

Example of using [Jest](https://jestjs.io/) with the [Gerador-BR](https://box4.dev/gerador-br/) data generator to test Brazilian mock data generation.

## Prerequisites

* [Node.js](https://nodejs.org/) (includes npm)
* [Jest](https://jestjs.io/): `npm i -D jest`

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Run all tests:
```bash
npm test
```

### Run tests in watch mode:
```bash
npm run test:watch
```

### Run tests with coverage:
```bash
npm run test:coverage
```

## Main Dependencies

* [jest](https://www.npmjs.com/package/jest): Delightful JavaScript Testing Framework.
* [gerador-br](https://www.npmjs.com/package/gerador-br): Library to generate Brazilian mock data.

## Test Structure

The tests are organized in the `tests/` directory with individual test files for each data type:

- `tests/apelido.test.js` - Nickname generation
- `tests/cpf.test.js` - CPF generation
- `tests/cnpj.test.js` - CNPJ generation
- `tests/endereco.test.js` - Address generation
- `tests/nome.test.js` - Name generation
- And many more...

## Documentation

[gerador-br](https://box4.dev/gerador-br/)
