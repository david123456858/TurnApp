'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const morgan_1 = __importDefault(require('morgan'))
const app = (0, express_1.default)()
const port = 3001
app.use(express_1.default.json())
app.use((0, morgan_1.default)('dev'))
app.disable('x-powered-by')
app.get('/', (res, req) => {
  res.json({ data: 'Señores volvi a tener sed' })
})
app.listen(port, () => {
  console.log(`Escuchando es este puerto señores http://localhost${port}`)
})
