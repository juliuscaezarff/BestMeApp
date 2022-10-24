import chalk from "chalk"

const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
  process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if(answers.length < questions.length) {
    ask(answers.length)
  }else{
    console.log(answers)
    process.exit()
  }
})

process.on('exit', () => {
  console.log(chalk.bgGray.white(`  O que você aprendeu hoje foi: `))

  console.log(`${chalk.bgCyan.black(answers[0])}`)

  console.log(chalk.bgGray.white(`O que te aborreceu e você poderia melhorar foi:`))

  console.log(`${chalk.bgCyan.black (answers[1])}`)

  console.log(chalk.bgGray.white(` O que te deixou feliz hoje:`))

  console.log(`${chalk.bgCyan.black (answers[2])}`)

  console.log(chalk.bgGray.white(` Você ajudou:`))

  console.log(chalk.bgCyan.black(`${(answers[3])} pessoas hoje!!`))

  console.log(chalk.bgGray.white(' Bacana! Volte amanhã para novas reflexões'))
})