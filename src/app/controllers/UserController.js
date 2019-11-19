import Mail from '../lib/Mail'; 

export default {

async store(req, res) {
    const {name, email, password} = req.body
    
    const user = {
      name,
      email,
      password
    }
    await Mail.sendMail({
      from: 'Redis - filas <israel@redis.com.br>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de Usuario',
      html: `Olá, ${name}, bem-vindo ao teste de filas no Node`
    })
  return res.status(200).json(user); 
}

}