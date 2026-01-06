interface CallToActionContent {
    title: string
    content: string
}

interface CallToActionConfig {
    [articleSlug: string]: CallToActionContent
}

export const callToActionContent: CallToActionConfig = {
    caminhos: {
        title: "Chega de andar perdido!",
        content: `
        O mundo oferece dezenas de luzes falsas que te levam para a confusão e o desastre. Mas hoje, o Farol verdadeiro está brilhando para você! 
        
        Jesus não é uma opção, Ele é a única resposta! 
    
        Chega de naufragar nas mentiras deste mundo. A decisão é sua, e a hora é agora! Entregue o leme da sua vida a Cristo. Diga a Ele agora mesmo:

        "Senhor Jesus, eu estava perdido, mas hoje encontrei o Caminho. Perdoa meus pecados e guia-me para o porto seguro da salvação!"

        Ao fazer isso, você não estará mais à deriva. Você encontrou o caminho para Deus.
        `
    },
    deusExiste: {
        title: "Sua vida pode mudar hoje!",
        content: `
            Meu amigo, minha amiga, esses argumentos não são apenas para a mente, mas para o coração. 
            
            Se você sente um vazio, uma busca por propósito, saiba que isso é o Espírito Santo te chamando para perto. 
            
            Não é por acaso que você leu até aqui. Jesus está de braços abertos agora mesmo, te convidando para uma nova vida. 
            
            Ele quer perdoar seus pecados, te dar paz e te encher com a presença Dele. Onde você estiver, feche seus olhos e diga: 
            
            'Senhor Jesus, eu me arrependo dos meus pecados. Entra na minha vida, me lava com Teu sangue e escreve meu nome no Livro da Vida. 
            
            Eu te aceito como meu único e suficiente Salvador.' 
            
            Se você fez essa oração, sua vida nunca mais será a mesma! Você nasceu de novo!
        `
    },
    oMal: {
        title: "Escolha a vida, escolha Jesus!",
        content: `
            Essa mensagem que tocou seu coração é o Espírito Santo te chamando para perto. 
            
            A dor e o mal que você vê no mundo têm uma solução, e essa solução é uma pessoa: Jesus Cristo! 
            
            Ele sofreu na cruz para pagar o preço pelo seu pecado e te dar a vitória sobre toda a injustiça. 
            
            Chega de lutar sozinho! Hoje é o dia da sua libertação! 
            
            Abra a sua boca e declare: 'Senhor Jesus, eu me arrependo dos meus pecados e entrego minha vida a Ti. 
            
            Me lava com Teu sangue e me enche com Teu Espírito. Eu te recebo como meu único e suficiente Salvador!' 
            
            Se você fez essa oração, o céu está em festa!
            
            As coisas velhas passaram, e uma nova vida em Cristo começou para você agora!
        `
    },
    default: {
        title: "Transforme sua vida hoje!",
        content: `
            Jesus Cristo ama você e quer transformar sua vida. 
            Hoje é o dia de abrir o coração, deixar o passado para trás e receber o perdão, a esperança e a vida nova que só Ele pode dar. 
            Se você deseja aceitar Jesus como seu Salvador, faça essa decisão agora, Ele está de braços abertos para você.
            Ore assim: “Jesus, eu reconheço que preciso de Ti. Peço perdão pelos meus pecados e entrego minha vida em Tuas mãos. Creio que Tu és o Filho de Deus e meu Salvador. Entra no meu coração e guia meus passos a partir de hoje. Amém.”
        `
    }
}

export const getCallToActionContent = (articleSlug?: string): CallToActionContent => {
    if(!articleSlug) {
        return callToActionContent.default
    }

    return callToActionContent[articleSlug] || callToActionContent.default
}