import { useState } from 'react';
import { toast } from 'react-hot-toast';
import type { Contador } from '../types/Contador';

const useContador = () => {
    const [contador, setContador] = useState<Contador>({
        valor: 0,
    });

    const VALOR_MINIMO = 0;
    const VALOR_MAXIMO = 100;

    const handleIncremento = () => {
       if (contador.valor >= VALOR_MAXIMO) {
        toast.error(`No puedes superar ${VALOR_MAXIMO}`);
        return;
       } 

       setContador((prev) => ({ valor: prev.valor + 1}));
       toast.success('Contador incrementado');
    };

    const handleDisminuir = () => {
        if (contador.valor <= VALOR_MINIMO){
            toast.error(`No puedes bajar de ${VALOR_MINIMO}`);
            return;
        }

        setContador((prev) => ({valor: prev.valor -1}));
        toast.success('Contador disminuyendo');
    };

    const handleReiniciar = () => {
        setContador({ valor: 0});
        toast('Contador reiniciado');
    };

    return {
        contador,
        handleIncremento,
        handleDisminuir,
        handleReiniciar,
        VALOR_MINIMO,
        VALOR_MAXIMO
    };
};

export default useContador;