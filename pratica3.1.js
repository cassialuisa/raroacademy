//exercicio 1: set time out 
const desafio1asRosasNaoFalam = () => {
    const geraIntervaloAleatório: number = () => Math.floor(Math.random() * 3 * 1000);

    // métodos de versos. Estes métodos deverão ser modificados.

    const queixoMeAsRosas = (callback) => {
        setTimeout(() => {
            console.log('Queixo-me às rosas');
            callback()
        }, geraIntervaloAleatório());
    };

    const masQueBobagem = (callback) => {
        setTimeout(() => {
            console.log('Mas que bobagem');
            callback()
        }, geraIntervaloAleatório());
    };

    const asRosasNaoFalam = (callback) => {
        setTimeout(() => {
            console.log('As rosas não falam');
            callback()
        }, geraIntervaloAleatório());
    };

    const simplesmenteAsRosasExalam = (callback) => {
        setTimeout(() => {
            console.log('Simplesmente as rosas exalam');
            callback()
        }, geraIntervaloAleatório());
    };

    const oPerfumeQueRoubamDeTi = (callback) => {
        setTimeout(() => {
            console.log('O perfume que roubam de ti, ai');
            callback()
        }, geraIntervaloAleatório());
    };

    // Tentativa de cantar a música. Este bloco precisa ser modificado.
    queixoMeAsRosas(
        () => {
            masQueBobagem(() => {
                asRosasNaoFalam(() => {
                    simplesmenteAsRosasExalam(() => {
                        oPerfumeQueRoubamDeTi(() => {})
                    })
                }
                })
        })
}
    )




}

desafio1asRosasNaoFalam();
//=========================================================================================

//exercicio 2. relógio e despertador

const despertador = (intervalo:Number) => {
    setInterval(() => {
        console.log('vou tocar a cada 1 segundo')
    }, 1000);
}

const relogio = () => {
    const now = new Date();
    setInterval(() => {
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);
  };
  
