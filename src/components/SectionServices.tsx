import { Container } from "./Container"

export function SectionServices(){
    return(
        <section>
            <Container>
                <div className="flex-1 max-w-[594px]">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9">serviços exclusivos</span>
                    <h1 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finançassem sair de casa</h1>
                    <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no confortoo da sua casa.</p>
                </div>
            </Container>
        </section>
    )
}