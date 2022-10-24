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
  console.log(chalk.bgBlue.black(`  O que você aprendeu hoje foi: `))

  console.log(`${chalk.bgGray.black (answers[0])}`)

  console.log(chalk.bgBlue.black(`O que te aborreceu e você poderia melhorar foi: ${chalk.bgGray.black (answers[1])}`))

  console.log(chalk.bgBlue.black(` O que te deixou feliz hoje: ${chalk.bgGray.black (answers[2])}`))

  console.log(chalk.bgBlue.black(` Você ajudou ${chalk.bgGray.black (answers[3])} pessoas hoje!!`))
})

/*
  Bacana julius!
  Volte amanhã para novas reflexões
*/