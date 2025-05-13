// app/solicitar/formulario/page.tsx

import { Suspense } from 'react';
import SolicitarForm from '../solicitar-form';

export default function FormularioPage() {
    return (
        <main>
            <h1>Solicitação de Cadastro</h1>
            <Suspense fallback={<div>Carregando formulário...</div>}>
                <SolicitarForm />
            </Suspense>
        </main>
    );
}
