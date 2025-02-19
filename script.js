let botao = document.getElementById('verificar')

botao.addEventListener ('click', analisar)

function analisar() {
    let n = String(document.getElementById('nome').value.trim())
    let m = document.getElementById('msg')
    let nomes_proibidos = ['matheus', 'polto', 'matheus polto', 'poltão', 'super polto', 'mega poltao', 'super matheus, poltchola', 'rei polto', 'rei matheus', 'super  matheus polto', 'polto brabo', 'matheus polto brabo', 'gomes', 'matheus gomes', 'matheus polto gomes', 'super matheus polto gommes', 'hiper polto', 'hiper matheus', 'hiper polchola', 'super poltchola', 'alexandre', 'alexandre mendes', 'xandão', 'xandinho', 'super moe', 'moezão', 'moezada', 'senhor moe', 'moezola', 'moe', 'pablo', 'pablo leandro', 'pb'] 
    m.style.marginBottom = '15px'
    m.style.marginTop = '15px'
    
    let imagem = document.getElementById('ft')
    m.innerHTML = ''
    imagem.src = ''
    imagem.style.width = '300px'
    

    if(n == ''){
        alert('Koé, Digita seu nome ai')
        return;
    }

    if (nomes_proibidos.includes(n.toLocaleLowerCase())) {
        alert('Olha quem está vindo ai.')
        m.innerHTML = `Olá, ${n}!!!<br> calma chocolate branco, eu não quero que você derreta`
        imagem.src = 'latrel.jpeg'
    } else {
        m.innerHTML = `${n}, não acredito que é você, me dá um autógrafo`
        imagem.src = 'gordo.jpg'
    }
    
}